<template>
  <div class="container mt-5">
    <div class="row d-flex align-items-start">
      <div class="col-8">
        <div class="row d-flex justify-content-between">
          <div class="col-10">
            <h1>{{ movieDetails.title }}</h1>
            <span class="text-center text-muted"
              >{{ movieDetails.runtime }} min |
              {{ movieDetails.releaseDate }}</span
            >
          </div>
          <div class="col-2">
            <h2 class="d-flex justify-content-center align-items-baseline">
              <span class="material-icons text-warning fs-1 m-0 align-self-end">
                star
              </span>
              {{ movieDetails.voteAvg }}<span class="fs-6 text-muted">/10</span>
            </h2>
            <span class="d-block text-muted text-end"
              >{{ movieDetails.voteCount }} votes</span
            >
          </div>
        </div>
        <div class="ratio ratio-16x9 mt-3">
          <h3></h3>
          <iframe
            width="560"
            height="315"
            :src="'https://www.youtube.com/embed/' + youtubeKey"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="col-4">
        <h2>Overview</h2>
        <p>
          {{ movieDetails.overview }}
        </p>

        <div class="d-flex align-items-center mb-3">
          <h5 class="d-inline me-2 mb-0">Genres</h5>
          <span
            class="badge rounded-pill bg-secondary me-2"
            v-for="genre in movieDetails.genres"
            :key="genre.id"
          >
            {{ genre.name }}
          </span>
        </div>

        <a
          :href="movieDetails.website"
          target="_blank"
          class="
            btn btn-warning
            d-flex
            align-items-center
            justify-content-center
            rounded-3
          "
          ><span class="material-icons"> open_in_new </span> Website</a
        >
      </div>
    </div>
    <hr />
    <div class="row my-3">
      <div class="col-6 d-flex justify-content-end">
        <Carousel :movie-id="movieId" />
      </div>
    </div>
    <hr />
    <div class="row my-3">
      <div class="col-12">
        <Credits :movie-id="movieId" />
      </div>
    </div>
    <hr />
    <div class="row mt-3 mb-5">
      <div class="col-12">
        <Recommendations :movie-id="movieId" :title="'Recommendations'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseURL: "https://api.themoviedb.org/3/movie",
      apiKey: process.env.API_KEY,
      youtubeKey: null,
      movieDetails: {},
      movieId: this.$route.params.id,
    };
  },
  methods: {
    async fetchTrailer() {
      try {
        const url = `${this.baseURL}/${this.movieId}/videos?api_key=${this.apiKey}&language=en-US`;
        const response = await fetch(url);
        const data = await response.json();
        this.youtubeKey = data.results[0].key;
      } catch (error) {
        console.log("an error occured while fetching trailer ", error);
      }
    },
    async fetchmovieDetails() {
      try {
        const url = `${this.baseURL}/${this.movieId}?api_key=${this.apiKey}&language=en-US`;
        const response = await fetch(url);
        const data = await response.json();
        this.movieDetails = {
          genres: data.genres,
          voteAvg: data.vote_average,
          voteCount: data.vote_count,
          id: data.id,
          runtime: data.runtime,
          imdb: data.imdb_id,
          title: data.title,
          overview: data.overview,
          website: data.homepage,
          releaseDate: new Date(data.release_date)
            .toDateString()
            .split(" ")
            .slice(1)
            .join(" "),
        };
      } catch (error) {
        console.log("an error occured while fetching movie details ", error);
      }
    },
  },
  mounted() {
    this.fetchTrailer();
    this.fetchmovieDetails();
  },
};
</script>

<style>
.video-size {
  width: 800px;
}
</style>