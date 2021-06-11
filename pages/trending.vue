<template>
  <div class="container-fluid mt-3">
    <h1 class="fs-3 m-auto fw-bold">Trending</h1>
    <div class="container">
      <div class="row">
        <div class="col-3" v-for="movie in movieRow1" :key="movie.id">
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster"
            :alt="movie.title + ' poster'"
            class="img-fluid"
          />
          <h5>{{ movie.title }}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-3" v-for="movie in movieRow2" :key="movie.id">
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster"
            :alt="movie.title + ' poster'"
            class="img-fluid"
          />
          <h5>{{ movie.title }}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-3" v-for="movie in movieRow3" :key="movie.id">
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster"
            :alt="movie.title + ' poster'"
            class="img-fluid"
          />
          <h5>{{ movie.title }}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-3" v-for="movie in movieRow4" :key="movie.id">
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster"
            :alt="movie.title + ' poster'"
            class="img-fluid"
          />
          <h5>{{ movie.title }}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-3" v-for="movie in movieRow5" :key="movie.id">
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster"
            :alt="movie.title + ' poster'"
            class="img-fluid"
          />
          <h5>{{ movie.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popularMovies: [],
    };
  },
  async mounted() {
    const popularUrl =
      "https://api.themoviedb.org/3/movie/popular?api_key=2f606ab1225d921304a26a2c089d5062";
    try {
      const response = await fetch(popularUrl);
      const data = await response.json();
      //get poster path

      data.results.forEach((movie) => {
        this.popularMovies.push({
          title: movie.title,
          poster: movie.poster_path,
          id: movie.id,
        });
      });
      console.log(this.popularMovies);
    } catch (error) {
      console.log("an error occured while fetching data", error);
    }
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

<style>
</style>