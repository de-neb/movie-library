<template>
  <div
    class="
      container
      d-flex
      justify-content-center
      align-items-center
      flex-column
    "
  >
    <div class="row">
      <div class="col-12 mt-5 px-5 pt-5 text-center">
        <div
          class="badge-cont d-inline-block me-2 mb-2"
          v-for="genre in genres"
          :key="genre.id"
        >
          <input
            type="checkbox"
            class="checkbox"
            @change="getSelectedGenre"
            :value="genre.name"
            v-model="genre.isChecked"
          />
          <span class="btn badge rounded-pill bg-pill text-light px-3 py-2">{{
            genre.name
          }}</span>
        </div>
      </div>
    </div>
    <!-- Sort -->
    <div class="row mt-4">
      <div class="col-12">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-warning dropdown-toggle d-flex align-items-center"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="material-icons"> sort </span>Sort By
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click="sortMovies"
                data-value="popularity.desc"
                >Popularity</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click="sortMovies"
                data-value="release_date.desc"
                >Release Date</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click="sortMovies"
                data-value="vote_average.desc"
                >Rating</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="spinner-grow text-warning m-5"
      :class="{ 'd-none': hide }"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="row text-center mt-2 w-100" :class="{ 'd-none': !hide }">
      <div class="col-3 p-3" v-for="movie in movieList" :key="movie.id">
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
  data() {
    return {
      apiKey: process.env.API_KEY,
      genres: [],
      baseURL: "https://api.themoviedb.org/3",
      genreSelected: [],
      disable: true,
      movieList: [],
      totalPages: null,
      currentPage: 1,
      hide: true,
    };
  },
  methods: {
    async fetchGenreList() {
      const url = `${this.baseURL}/genre/movie/list?api_key=${this.apiKey}&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      this.genres = data.genres;
      this.genres.forEach((genre) => {
        genre.isChecked = false;
      });
    },
    async fetchMovieByGenres(url) {
      this.hide = false;
      this.movieList = [];
      try {
        const response = await fetch(url);
        const data = await response.json();
        data.results.forEach((result) => {
          this.movieList.push({
            title: result.title,
            overview: result.overview,
            poster: result.poster_path,
            rating: result.vote_average,
            id: result.id,
          });
        });
        this.totalPages = data.total_pages;
      } catch (error) {
        console.log("an error occured while fetching results", error);
      }
      this.hide = true;
    },
    getMovieList() {
      const url = `${this.baseURL}/discover/movie?api_key=${
        this.apiKey
      }&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${this.genreSelected.toString()}`;
      this.fetchMovieByGenres(url);
    },
    getSelectedGenre(event) {
      this.genres.forEach((genre) => {
        if (genre.isChecked && !this.genreSelected.includes(genre.id)) {
          this.genreSelected.push(genre.id);
        } else if (!genre.isChecked && this.genreSelected.includes(genre.id)) {
          const index = this.genreSelected.indexOf(genre.id);
          this.genreSelected.splice(index, 1);
        }
      });
      // if (this.genreSelected.length) {
      //   this.disable = false;
      // } else {
      //   this.disable = true;
      // }
      this.getMovieList();
    },
    getPage(page) {
      this.currentPage = parseInt(page);
      const url = `${this.baseURL}/discover/movie?api_key=${
        this.apiKey
      }&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${this.genreSelected.toString()}`;
      this.fetchMovieByGenres(url);
      this.$el.scrollIntoView({ behavior: "smooth" });
    },
    sortMovies(event) {
      const url = `${this.baseURL}/discover/movie?api_key=${
        this.apiKey
      }&language=en-US&sort_by=${event.target.getAttribute(
        "data-value"
      )}&include_adult=false&page=1&with_genres=${this.genreSelected.toString()}`;
      this.fetchMovieByGenres(url);
    },
  },
  mounted() {
    this.fetchGenreList();
    this.fetchMovieByGenres(
      `${this.baseURL}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`
    );
  },
};
</script>

<style scoped>
.badge {
  font-size: 1rem !important;
}
.badge:hover {
  color: #393e46 !important;
}

.badge-cont {
  position: relative;
}
.checkbox {
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  cursor: pointer;
}
.checkbox:hover ~ .badge {
  background-color: #393e46da;
}
.checkbox:checked ~ .badge {
  background-color: #42b16c;
}
</style>