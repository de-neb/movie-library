<template>
  <div>
    <h2>Recommendations</h2>
    <div class="row text-center">
      <div class="col-3 p-3" v-for="movie in recoList" :key="movie.id">
        <div class="position-relative">
          <a :href="'/' + $route.params.discoverProp + '/' + movie.id">
            <img
              :src="'https://image.tmdb.org/t/p/w400' + movie.poster"
              :alt="movie.title + ' poster'"
              class="img-fluid rounded-3"
            />
            <div class="overview-container line-clamp">
              <h5 class="text-center">Overview</h5>
              {{ movie.overview }}
            </div>
          </a>
        </div>
        <h5 class="mt-2">{{ movie.title }}</h5>
        <h6 class="mt-2 fw-bold badge bg-warning text-dark rounded-pill">
          {{ Math.round(parseFloat(movie.rating) * 10) / 10 }} ★
        </h6>
      </div>
    </div>

    <div class="row">
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
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  props: ["movie-id"],
  data() {
    return {
      apiKey: process.env.API_KEY,
      baseURL: "https://api.themoviedb.org/3/movie",
      recoList: [],
      currentPage: 1,
      totalPages: 0,
    };
  },
  methods: {
    getPage(page) {
      this.currentPage = parseInt(page);
      this.recoList = [];
      this.fetchRecommendations(this.apiURL);
    },
    async fetchRecommendations(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        data.results.forEach((result) => {
          this.recoList.push({
            title: result.title,
            overview: result.overview,
            poster: result.poster_path,
            rating: result.vote_average,
            id: result.id,
          });
        });
        this.totalPages = data.total_pages;
      } catch (error) {
        console.log("an error occured while fetching recommendations ", error);
      }
    },
  },
  mounted() {
    this.fetchRecommendations(this.apiURL);
  },
  computed: {
    apiURL() {
      return `${this.baseURL}/${this.movieId}/similar?api_key=${
        this.apiKey
      }&language=en-US&page=${this.currentPage.toString()}`;
    },
  },
};
</script>

<style>
</style>