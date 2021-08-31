<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
    <div class="container-fluid d-flex">
      <!-- website name -->
      <NuxtLink
        class="
          order-1
          navbar-brand
          text-warning
          brand-font
          d-flex
          align-items-center
        "
        to="/"
        id="logoName"
      >
        <span class="material-icons icon-size fs-1"> movie </span>
        Movie Library</NuxtLink
      >
      <!-- website name -->

      <!-- hidden logo -->
      <span class="material-icons icon-size show-logo text-warning">
        movie
      </span>
      <!-- hidden logo -->

      <!-- search bar -->
      <div class="d-flex w-25 form-control rounded-pill order-5">
        <span class="material-icons text-warning"> search </span>
        <input
          type="text"
          id="search"
          ref="search"
          placeholder="Search a movie "
          aria-describedby="basic-addon1"
          @keyup.enter="searchMovie"
          v-model="searchedVal"
          autocomplete="off"
        />
      </div>
      <!-- search bar -->

      <!-- burger icon -->
      <button
        class="order-3 navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        id="burgerIcon"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- burger icon -->

      <!-- nav links -->
      <div
        class="order-2 collapse navbar-collapse"
        id="navbarSupportedContent"
        ref="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 pt-2">
          <li
            class="nav-item"
            v-for="discoverNav in discoverNavLinks"
            :key="discoverNav.linkName"
            @click="closeCollapsedNav"
          >
            <NuxtLink
              class="nav-link link-hover"
              :class="checkActive(discoverNav.link)"
              :to="'/' + discoverNav.link"
            >
              {{ discoverNav.linkName }}
            </NuxtLink>
          </li>

          <li class="nav-item" @click="closeCollapsedNav">
            <NuxtLink
              class="nav-link link-hover"
              :class="{
                active: $route.name == 'genres',
              }"
              to="/genres"
            >
              Browse by Genre
            </NuxtLink>
          </li>
        </ul>
      </div>
      <!-- nav-links -->
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
      this.searchedVal = "";
    },
    checkActive(currentRoute) {
      return {
        active: currentRoute == this.$route.params.discoverProp ? true : false,
      };
    },
    closeCollapsedNav() {
      setTimeout(
        () => this.$refs.navbarSupportedContent.classList.remove("show"),
        300
      );
    },
  },
  async mounted() {
    // get movie genres
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`;
    let response = await fetch(url, this.options);
    let data = await response.json();
    this.genresNavLinks = data.genres;
  },
};
</script>

<style scoped>
.active {
  font-weight: bold !important;
  color: #ffff !important;
}
</style>