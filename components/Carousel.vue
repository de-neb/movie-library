<template>
  <div>
    <h2>Images</h2>
    <div
      id="carouselExampleIndicators"
      class="carousel slide mb-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          v-for="(path, index) in backdropPaths"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0"
          :aria-label="'Slide' + (1 + 1)"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: index === 0 }"
          v-for="(path, index) in backdropPaths"
          :key="path"
        >
          <img :src="imgURL + path" class="d-block w-100" alt="backdrop" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie-id"],
  data() {
    return {
      apiKey: process.env.API_KEY,
      baseURL: "https://api.themoviedb.org/3/movie",
      imgURL: "https://image.tmdb.org/t/p/w1280",
      backdropPaths: [],
    };
  },
  methods: {
    async fetchMovieImages() {
      try {
        const url = ` ${this.baseURL}/${this.movieId}/images?api_key=${this.apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        data.backdrops.forEach((obj) => {
          this.backdropPaths.push(obj.file_path);
        });
        console.log("backdrops", this.backdropPaths);
      } catch (error) {
        console.log("error while fetching images", error);
      }
    },
  },
  mounted() {
    this.fetchMovieImages();
  },
};
</script>

<style>
</style>