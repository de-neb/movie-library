<template>
  <div class="container-fluid mt-3 class mb-4">
    <div
      class="
        container
        text-center
        d-flex
        justify-content-center
        align-items-center
        flex-column
      "
    >
      <div
        class="spinner-grow text-warning"
        :class="{ 'd-none': hide }"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>

      <div
        class="row d-flex justify-content-start align-items-stretch w-100"
        :class="{ 'd-none': !hide }"
      >
        <h1 class="fs-3 mb-5 fw-bold text-start prop-title prop-title mt-5">
          RESULTS FOR "{{ $route.query.value }}"
        </h1>
        <div class="col-3 p-3" v-for="movie in searchedResults" :key="movie.id">
          <div class="position-relative">
            <a :href="'/movie/' + movie.id">
              <img
                :src="'https://image.tmdb.org/t/p/w400' + movie.poster"
                :alt="movie.title + ' poster'"
                class="img-fluid rounded-3"
                v-if="movie.poster"
              />
              <img
                src="~/assets/images/no poster.png"
                :alt="movie.title + ' poster'"
                class="img-fluid rounded-3"
                v-else
              />
              <div class="overview-container line-clamp">
                <h5 class="text-center">Overview</h5>
                {{ movie.overview }}
              </div>
            </a>
          </div>

          <h5 class="mt-2">{{ movie.title }}</h5>
          <h6 class="mt-2 fw-bold badge bg-warning text-dark rounded-pill">
            {{ movie.rating }} ★
          </h6>
        </div>
      </div>
    </div>

    <!-- button for page  navigation-->

    <nav class="d-flex justify-content-center align-items-center py-5">
      <Pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @next-page="getPage"
        @previous-page="getPage"
        @jump-to-page="getPage"
      />
    </nav>
  </div>
</template>

<script>
export default {
  watchQuery: true,

  data() {
    return {
      hide: true,
      searchedResults: [],
      apiKey: process.env.API_KEY,
      searchedResults: [],
      currentPage: 1,
      totalPages: null,
    };
  },
  methods: {
    async searchMovie(url) {
      this.hide = false;
      try {
        const response = await fetch(url);
        const data = await response.json();
        data.results.forEach((movie) => {
          this.searchedResults.push({
            title: movie.title,
            poster: movie.poster_path,
            id: movie.id,
            overview: movie.overview,
            rating: movie.vote_average,
          });
        });
        this.totalPages = data.total_pages;
      } catch (error) {
        console.log("an error occured while fetching results", error);
      }
      this.hide = true;
    },
    getPage(page) {
      this.currentPage = parseInt(page);
      this.searchedResults = [];
      this.searchMovie(this.apiURL);
      this.$el.scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {
    this.searchMovie(this.apiURL);
  },
  computed: {
    apiURL() {
      return `https://api.themoviedb.org/3/search/movie?language=en-US&include_adult=false&page=${this.currentPage.toString()}&api_key=${
        this.apiKey
      }&query=${this.$route.query.value}`;
    },
  },
  //if there's a change in route, fetch new data based on search value
  beforeRouteUpdate(to, from, next) {
    this.searchedResults = [];
    const url = `https://api.themoviedb.org/3/search/movie?language=en-US&include_adult=false&page=${this.currentPage.toString()}&api_key=${
      this.apiKey
    }&query=${to.query.value}`;
    this.searchMovie(url);
    console.log("query", to.query.value);
    next();
  },
};
</script>

<style>
</style>