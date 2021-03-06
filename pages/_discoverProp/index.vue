<template>
  <div class="container-fluid mt-3 class mb-4">
    <div
      class="
        container-lg
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
        class="row d-flex justify-content-around align-items-stretch w-100"
        :class="{ 'd-none': !hide }"
      >
        <h1 class="fs-3 pt-5 mb-5 fw-bold text-start prop-title">
          {{ $route.params.discoverProp.toUpperCase().replace("_", " ") }}
        </h1>
        <div
          class="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-5 p-3"
          v-for="movie in discoverMovieCollection"
          :key="movie.id"
          id="movieColumn"
        >
          <div class="position-relative">
            <nuxt-link :to="{ name: 'movie-id', params: { id: movie.id } }">
              <img
                :src="'https://image.tmdb.org/t/p/w400' + movie.poster"
                :alt="movie.title + ' poster'"
                class="img-fluid rounded-3 poster-img"
                v-if="movie.poster"
              />
              <img
                src="~/assets/images/no poster.png"
                :alt="movie.title + ' poster'"
                class="img-fluid rounded-3 poster-img"
                v-else
              />
              <div class="overview-container line-clamp shadow-lg">
                <div class="overview-text">
                  <h5 class="text-center">Overview</h5>
                  <hr class="text-warning" />
                  {{ movie.overview }}
                </div>
              </div>
            </nuxt-link>
          </div>

          <h5 class="mt-2">{{ movie.title }}</h5>

          <Rating :rating="movie.rating" :movieId="movie.id" />
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
  validate({ params }) {
    //checks if route exists from the list
    const list = ["popular", "top_rated", "upcoming"];
    return list.includes(params.discoverProp);
  },
  data() {
    return {
      props: ["popular", "top_rated", "upcoming"],
      discoverMovieCollection: [],
      baseURL: `https://api.themoviedb.org/3/movie`,
      currentPage: 1,
      totalPages: null,
      apiKey: process.env.API_KEY,
      hide: true,
    };
  },
  methods: {
    getPage(page) {
      this.currentPage = parseInt(page);
      this.discoverMovieCollection = [];
      this.fetchData(this.apiURL);
      this.$el.scrollIntoView({ behavior: "smooth" });
    },
    async fetchData(url) {
      this.hide = false;
      try {
        let response = await fetch(url);
        let data = await response.json();
        //get poster path
        data.results.forEach((movie) => {
          this.discoverMovieCollection.push({
            title: movie.title,
            poster: movie.poster_path,
            id: movie.id,
            overview: movie.overview,
            rating: movie.vote_average,
          });
        });
        this.totalPages = data.total_pages;
      } catch (error) {
        console.log("an error occured while fetching data", error);
        console.log(url);
      }
      this.hide = true;
    },
  },

  mounted() {
    //fetch popular movies
    this.props.forEach((prop) => {
      if (this.$route.params.discoverProp === prop) {
        this.fetchData(
          this.baseURL + `/${prop}?api_key=${process.env.API_KEY}`
        );
      }
    });
  },
  computed: {
    apiURL() {
      return `${this.baseURL}/${this.$route.params.discoverProp}?api_key=${
        this.apiKey
      }&page=${this.currentPage.toString()}`;
    },
  },
};
</script>

<style scoped>
.row {
  margin-top: 50px !important;
}

h5 {
  font-weight: bold;
}

.container {
  min-height: 100vh !important;
}
</style>