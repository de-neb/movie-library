<template>
  <div class="container-fluid mt-3 class mb-4">
    <h1 class="fs-3 m-auto fw-bold">Trending</h1>
    <div class="container text-center">
      <div class="row">
        <div
          class="col-3 p-3 position-relative"
          v-for="movie in movieRow1"
          :key="movie.id"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w400' + movie.poster"
            :alt="movie.title + ' poster'"
            class="img-fluid rounded-3"
          />
          <h5 class="mt-2">{{ movie.title }}</h5>
          <div class="overview-container">
            <h5 class="text-center">Overview</h5>
            {{ movie.overview }}
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-3 p-3 position-relative"
          v-for="movie in movieRow2"
          :key="movie.id"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w400' + movie.poster"
            :alt="movie.title + ' poster'"
            class="img-fluid rounded-3"
          />
          <h5 class="mt-2">{{ movie.title }}</h5>
          <div class="overview-container">
            <h5 class="text-center">Overview</h5>
            {{ movie.overview }}
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-3 p-3 position-relative"
          v-for="movie in movieRow3"
          :key="movie.id"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w400' + movie.poster"
            :alt="movie.title + ' poster'"
            class="img-fluid rounded-3"
          />
          <h5 class="mt-2">{{ movie.title }}</h5>
          <div class="overview-container">
            <h5 class="text-center">Overview</h5>
            {{ movie.overview }}
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-3 p-3 position-relative"
          v-for="movie in movieRow4"
          :key="movie.id"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w400' + movie.poster"
            :alt="movie.title + ' poster'"
            class="img-fluid rounded-3"
          />
          <h5 class="mt-2">{{ movie.title }}</h5>
          <div class="overview-container">
            <h5 class="text-center">Overview</h5>
            {{ movie.overview }}
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-3 p-3 position-relative"
          v-for="movie in movieRow5"
          :key="movie.id"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w400' + movie.poster"
            :alt="movie.title + ' poster'"
            class="img-fluid rounded-3"
          />
          <h5 class="mt-2">{{ movie.title }}</h5>
          <div class="overview-container">
            <h5 class="text-center">Overview</h5>
            {{ movie.overview }}
          </div>
        </div>
      </div>
    </div>

    <!-- button for next page -->
    <NextPage
      @next-page="getNextPage"
      class="mt-3 d-flex justify-content-center"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      popularMovies: [],
      rowClasses: ["d-flex", "justify-content-around", "align-items-stretch"],
      popularUrl:
        "https://api.themoviedb.org/3/movie/popular?api_key=2f606ab1225d921304a26a2c089d5062",
    };
  },
  methods: {
    getNextPage(url) {
      this.popularUrl = url;
      this.popularMovies = [];
      this.fetchData();
      console.log(this.popularUrl);
    },
    async fetchData() {
      try {
        let response = await fetch(this.popularUrl);
        let data = await response.json();
        //get poster path
        data.results.forEach((movie) => {
          this.popularMovies.push({
            title: movie.title,
            poster: movie.poster_path,
            id: movie.id,
            overview: movie.overview,
          });
        });
        console.log(this.popularMovies);
      } catch (error) {
        console.log("an error occured while fetching data", error);
      }
    },
  },
  mounted() {
    //fetch popular movies

    this.fetchData();

    //add classes in row divs
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
      row.classList.add(...this.rowClasses);
    });
  },
  computed: {
    movieRow1() {
      return this.popularMovies.filter((movie, index) => {
        return index % 5 === 0;
      });
    },
    movieRow2() {
      return this.popularMovies.filter((movie, index) => {
        return index % 5 === 1;
      });
    },
    movieRow3() {
      return this.popularMovies.filter((movie, index) => {
        return index % 5 === 2;
      });
    },
    movieRow4() {
      return this.popularMovies.filter((movie, index) => {
        return index % 5 === 3;
      });
    },
    movieRow5() {
      return this.popularMovies.filter((movie, index) => {
        return index % 5 === 4;
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

/* .col-3:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: ease 0.3s;
} */

.overview-container {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #393e46a2;
  color: #fff;
  border-radius: 0.3rem;
  height: 92%;
  padding: 10px;
  overflow: hidden;
  width: 0;
  opacity: 0;
  text-align: initial;
  cursor: pointer;
  transition: width cubic-bezier(0.2, 0.69, 0.04, 0.78) 0.1s 0.2s,
    opacity cubic-bezier(0.2, 0.69, 0.04, 0.78) 0.2s 0.3s;
}

.col-3:hover .overview-container {
  width: 91%;
  opacity: 1;
  transition: width cubic-bezier(0.2, 0.69, 0.04, 0.78) 0.3s,
    opacity cubic-bezier(0.2, 0.69, 0.04, 0.78) 0.2s 0.2s;
}
</style>