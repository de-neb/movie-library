<template>
  <div
    class="
      container-lg
      d-flex
      justify-content-start
      align-items-center
      flex-column
    "
  >
    <div class="row">
      <div class="col-12 mt-5 px-3 pt-5 text-center">
        <div
          class="badge-cont d-inline-block me-2 mb-2"
          v-for="genre in genres"
          :key="genre.id + '-' + genre.name"
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
    <div class="row mt-4 align-self-start">
      <div class="dropdown ps-3">
        <a
          class="
            btn btn-secondary
            dropdown-toggle
            rounded-circle
            d-inline-flex
            justify-content-center
            align-items-center
            filter-size
            bg-warning
            border-warning
          "
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="material-icons text-dark"> sort </span>
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a
              class="dropdown-item text-capitalize"
              v-for="(sort, index) in sortValues"
              :key="sort"
              :selected="index == 0"
              @click="sortMovies"
              :data-sort="sort"
              >{{ sort.slice(0, -5).replace("_", " ") }}</a
            >
          </li>
        </ul>
        <span class="sort-text text-capitalize">{{
          sortValueCopy.slice(0, -5).replace("_", " ")
        }}</span>
      </div>
    </div>

    <!-- sort -->

    <div
      class="spinner-grow text-warning m-5"
      :class="{ 'd-none': hide }"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <div
      class="
        row
        d-flex
        justify-content-md-start justify-content-center
        align-items-stretch
        w-100
        text-center
      "
      :class="{ 'd-none': !hide }"
      v-if="movieList.length"
    >
      <div
        class="col-10 col-md-3 col-sm-4 p-3"
        v-for="movie in movieList"
        :key="movie.id + '-' + movie.title"
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
            <div class="overview-container line-clamp">
              <div class="overview-text">
                <h5 class="text-center">Overview</h5>
                <hr class="text-warning" />
                {{ movie.overview }}
              </div>
            </div>
          </nuxt-link>
        </div>
        <h5 class="mt-2 fw-bold">{{ movie.title }}</h5>
        <Rating :rating="movie.rating" :movieId="movie.id" />
      </div>
    </div>
    <div
      class="row d-flex text-center align-items-center mt-2 w-100 h-100"
      v-else
      :class="{ 'd-none': !hide }"
    >
      <h2 class="text-secondary fw-bold fs-1">NO RESULTS FOUND</h2>
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
  watchQuery: true,
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
      sortValues: ["popularity.desc", "release_date.desc", "vote_average.desc"],
      sortValueCopy: "popularity.desc",
      nameList: [],
    };
  },
  methods: {
    async fetchGenreList() {
      this.genres = [];
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
      //displays selected genre in router link
      this.$router.push({
        path: "/genres",
        hash: `#${this.nameList.toString()}`,
      });

      this.fetchMovieByGenres(url);
    },
    getSelectedGenre(event) {
      this.genres.forEach((genre) => {
        if (genre.isChecked && !this.genreSelected.includes(genre.id)) {
          this.genreSelected.push(genre.id);
          this.nameList.push(genre.name.toLowerCase());
        } else if (!genre.isChecked && this.genreSelected.includes(genre.id)) {
          const index = this.genreSelected.indexOf(genre.id);
          this.genreSelected.splice(index, 1);
          this.nameList.splice(index, 1);
        }
      });

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
        "data-sort"
      )}&include_adult=false&page=1&with_genres=${this.genreSelected.toString()}`;
      this.fetchMovieByGenres(url);

      this.sortValueCopy = event.target.getAttribute("data-sort");
    },
  },
  mounted() {
    this.fetchGenreList();
    this.fetchMovieByGenres(
      `${this.baseURL}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`
    );
  },
  beforeRouteUpdate(to, from, next) {
    const url = `${this.baseURL}/discover/movie?api_key=${
      this.apiKey
    }&language=en-US&sort_by=popularity.desc&include_adult=false&page=${
      this.currentPage
    }&with_genres=${to.hash.replace("#", "")}`;
    // this.fetchMovieByGenres(url);

    next();
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
.h-100 {
  min-height: 400px;
}

.select-underline {
  border: none;
  padding: 10px;
  background: none;
  outline: none;
}

.select-wrapper {
  border-bottom: 3px solid #f79d39;
  padding: 0;
  display: flex;
  align-items: center;
}
</style>