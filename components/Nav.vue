<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
    <div class="container-fluid">
      <NuxtLink
        class="navbar-brand text-dark brand-font d-flex align-items-center"
        to="/"
      >
        <span class="material-icons icon-size fs-1"> movie </span>
        Movie Library</NuxtLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            class="nav-item"
            v-for="discoverNav in discoverNavLinks"
            :key="discoverNav.linkName"
          >
            <NuxtLink class="nav-link" :to="'/' + discoverNav.link">
              {{ discoverNav.linkName }}
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink class="nav-link" to="/genres"> Browse by Genre </NuxtLink>
          </li>
        </ul>
        <div class="d-flex w-25 rounded-pill form-control">
          <span class="material-icons"> search </span>
          <input
            type="text"
            id="search"
            ref="search"
            placeholder="Search a movie "
            aria-describedby="basic-addon1"
            @keyup.enter="searchMovie"
            v-model="searchedVal"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      discoverNavLinks: [
        { linkName: "Popular", link: "popular" },
        { linkName: "Top Rated", link: "top_rated" },
        { linkName: "Upcoming", link: "upcoming" },
      ],
      genresNavLinks: "",
      navLinks: ["Discover", "Genres"],
      apiKey: process.env.API_KEY,
      options: {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      searchedVal: null,
    };
  },
  methods: {
    searchMovie(e) {
      e.preventDefault();

      this.$router.push({
        path: "/search",
        query: { value: this.searchedVal },
      });
      this.$refs.search.value = "";
    },
  },
  async mounted() {
    // get movie genres
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`;
    let response = await fetch(url, this.options);
    let data = await response.json();
    this.genresNavLinks = data.genres;
  },
  // watch: {
  //   searchedVal(newVal) {
  //     this.$store.commit("setSearchedVal", newVal);
  //     console.log(this.searchedVal);
  //   },
  // },
};
</script>

<style>
</style>