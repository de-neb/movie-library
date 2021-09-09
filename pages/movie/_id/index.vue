<template>
  <div class="container-fluid px-0">
    <!-- Trailer modal -->

    <div
      class="modal fade"
      id="trailerModal"
      tabindex="-1"
      aria-labelledby="trailerModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-body bg-dark p-2">
            <div class="ratio ratio-16x9">
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
        </div>
      </div>
    </div>

    <!-- Trailer modal end   -->

    <div
      class="
        d-flex
        align-items-start
        justify-content-center
        mt-sm-5 mt-2
        position-relative
        parallax
        py-5
        mx-0
      "
      :style="styleBG"
    >
      <div
        class="
          container-md
          position-relative
          d-flex
          justify-content-center
          align-items-md-end
          box-margin
          flex-md-row flex-column
          align-items-sm-center
          pt-md-3 pt-1
        "
      >
        <div class="poster-container d-flex justify-content-center">
          <img
            :src="'https://image.tmdb.org/t/p/w200' + movieDetails.poster"
            :alt="movieDetails.title + '-poster'"
            class="rounded-3 shadow-lg"
          />
        </div>
        <div class="container d-inline mb-5 ms-2">
          <h1 class="text-light fw-bolder fs-1">
            {{ movieDetails.title }}
          </h1>
          <div
            class="row d-flex justify-content-md-start justify-content-center"
          >
            <div class="col-10 order-1">
              <span class="text-center text-light"
                >{{ movieDetails.runtime }} min | {{ movieDetails.releaseDate }}
              </span>
              <div class="genre mt-1">
                <span
                  class="text-center badge rounded-pill bg-dark text-light me-2"
                  v-for="genre in movieDetails.genres"
                  :key="genre.id"
                >
                  {{ genre.name }}
                </span>
              </div>
            </div>
            <div class="col-12 order-2 mt-1">
              <Rating :rating="movieDetails.voteAvg" />
            </div>
          </div>
          <div
            class="
              row
              mt-1
              mb-3
              d-flex
              gap-3
              justify-content-md-start justify-content-center
            "
          >
            <div class="col-3 col-xl-1 col-lg-1 col-md-2 p-0">
              <button
                type="button"
                class="btn btn-outline-light g-center rounded-pill"
                data-bs-toggle="modal"
                data-bs-target="#trailerModal"
              >
                <span class="material-icons"> play_arrow </span>Trailer
              </button>
            </div>
            <div class="col-3 col-xl-2 col-lg-2 col-md-3 p-0">
              <a
                :href="movieDetails.website"
                target="_blank"
                class="btn btn-outline-light g-center rounded-pill"
                ><span class="material-icons"> open_in_new </span> Website</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-md">
      <div class="row">
        <h2>Overview</h2>
        <p>
          {{ movieDetails.overview }}
        </p>
      </div>
      <div class="row my-3">
        <hr />
        <Carousel :movie-id="movieId" />
      </div>
      <hr />
      <div class="row my-3">
        <Credits :movie-id="movieId" />
      </div>
      <hr />
      <div class="row mt-3 mb-5">
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
          backdrop: data.backdrop_path,
          poster: data.poster_path,
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
    console.log(this.$route);
  },
  computed: {
    styleBG() {
      return {
        "background-image":
          "linear-gradient(0deg, rgba(253,185,60,1) 14%, rgba(0,0,0,1) 100%)," +
          "url(" +
          `https://image.tmdb.org/t/p/original${this.movieDetails.backdrop}` +
          ")",
      };
    },
  },
};
</script>

<style scoped>
.video-size {
  width: 800px;
}
.circle-badge {
  height: 55px;
  width: 55px !important;
  border-radius: 50px;
  display: inline-grid;
  place-items: center;
  border: 3px solid #fdb93c;
  box-shadow: 0 0 0 4px #212529;
}
</style>