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
          <li class="nav-item dropdown">
            <NuxtLink
              class="nav-link dropdown-toggle text-dark"
              to="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Discover
            </NuxtLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NuxtLink
                  v-for="discoverNav in discoverNavLinks"
                  :key="discoverNav.linkName"
                  class="dropdown-item"
                  :to="'/' + discoverNav.link"
                >
                  {{ discoverNav.linkName }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <NuxtLink
              class="nav-link dropdown-toggle text-dark"
              to="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </NuxtLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NuxtLink
                  v-for="genre in genresNavLinks"
                  :key="genre.id"
                  class="dropdown-item"
                  to="/genres"
                >
                  {{ genre.name }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-dark" type="submit">
            <span class="material-icons fs-3"> search </span>
          </button>
        </form>
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
        { linkName: "Top Rated", link: "top-rated" },
        { linkName: "Upcoming", link: "upcoming" },
      ],
      genresNavLinks: "",
      navLinks: ["Discover", "Genres"],
      apiKey: "2f606ab1225d921304a26a2c089d5062",
      options: {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    };
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

<style>
body {
  font-family: "Roboto", sans-serif;
}

.brand-font {
  font-family: "Bebas Neue", cursive;
  font-size: 2rem;
}

input[type="search"]:focus {
  border-color: rgb(255, 219, 59);
  box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset,
    0 0 8px rgba(133, 114, 7, 0.6);
  outline: 0 none;
}
</style>