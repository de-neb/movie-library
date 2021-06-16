<template>
  <div class="container-fluid mt-3 class mb-4">
    <div class="container text-center">
      <h1 class="fs-3 mt-5 fw-bold text-start prop-title">
        {{ $route.params.discoverProp.toUpperCase().replace("_", " ") }}
      </h1>
      <div class="row">
        <div class="col-3 p-3" v-for="movie in movieRow1" :key="movie.id">
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
            {{ movie.rating }} ★
          </h6>
        </div>
      </div>
      <div class="row">
        <div
          class="col-3 p-3 position-relative"
          v-for="movie in movieRow2"
          :key="movie.id"
        >
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
            {{ movie.rating }} ★
          </h6>
        </div>
      </div>
      <div class="row">
        <div
          class="col-3 p-3 position-relative"
          v-for="movie in movieRow3"
          :key="movie.id"
        >
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
            {{ movie.rating }} ★
          </h6>
        </div>
      </div>
      <div class="row">
        <div
          class="col-3 p-3 position-relative"
          v-for="movie in movieRow4"
          :key="movie.id"
        >
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
            {{ movie.rating }} ★
          </h6>
        </div>
      </div>
      <div class="row">
        <div
          class="col-3 p-3 position-relative"
          v-for="movie in movieRow5"
          :key="movie.id"
        >
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
            {{ movie.rating }} ★
          </h6>
        </div>
      </div>
    </div>

    <!-- button for page  navigation-->
    <div
      class="container d-flex justify-content-around align-items-center py-5"
    >
      <PreviousPage
        @previous-page="getPreviousPage"
        :discover-prop="$route.params.discoverProp"
        :current-page="currentPage"
        v-if="currentPage > 1"
      />
      <NextPage
        @next-page="getNextPage"
        :discover-prop="$route.params.discoverProp"
        :current-page="currentPage"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: ["popular", "top_rated", "upcoming"],
      discoverMovieCollection: [],
      rowClasses: ["d-flex", "justify-content-around", "align-items-stretch"],
      baseURL: `https://api.themoviedb.org/3/movie/`,
      currentPage: 1,
    };
  },
  methods: {
    getNextPage(...args) {
      const [url, page] = args;
      this.currentPage = page;
      this.discoverMovieCollection = [];
      this.fetchData(url);
    },
    getPreviousPage(...args) {
      const [url, page] = args;
      this.currentPage = page;
      this.discoverMovieCollection = [];
      this.fetchData(url);
    },
    async fetchData(url) {
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
      } catch (error) {
        console.log("an error occured while fetching data", error);
      }
    },
  },
  mounted() {
    //fetch popular movies
    this.props.forEach((prop) => {
      if (this.$route.params.discoverProp === prop) {
        this.fetchData(this.baseURL + `${prop}?api_key=${process.env.API_KEY}`);
      }
    });

    //add classes in row divs
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
      row.classList.add(...this.rowClasses);
    });
  },
  computed: {
    movieRow1() {
      return this.discoverMovieCollection.filter((movie, index) => {
        return index < 4;
      });
    },
    movieRow2() {
      return this.discoverMovieCollection.filter((movie, index) => {
        return index >= 4 && index < 8;
      });
    },
    movieRow3() {
      return this.discoverMovieCollection.filter((movie, index) => {
        return index >= 8 && index < 12;
      });
    },
    movieRow4() {
      return this.discoverMovieCollection.filter((movie, index) => {
        return index >= 12 && index < 16;
      });
    },
    movieRow5() {
      return this.discoverMovieCollection.filter((movie, index) => {
        return index >= 16 && index < 20;
      });
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

.prop-title {
  font-family: "Barlow", sans-serif;
  font-size: 2rem !important;
}

.overview-container {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #393e46a2;
  color: #fff;
  border-radius: 0.3rem;
  height: 100%;
  padding: 10px;
  overflow: hidden;
  width: 0;
  opacity: 0;
  text-align: initial;
  cursor: pointer;
  transition: all ease 0.3s;
}

.col-3:hover .overview-container {
  width: calc(100%);
  opacity: 1;
  transition: all ease 0.3s;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 18;
  -webkit-box-orient: vertical;
}
</style>