<template>
  <div>
    <button
      class="btn btn-warning d-flex justify-content-center"
      @click="nextPage"
    >
      Page {{ page }}
      <span class="material-icons"> arrow_forward_ios </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 2,
      apiUrl: "",
    };
  },
  methods: {
    nextPage() {
      this.apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=2f606ab1225d921304a26a2c089d5062&page=${this.page}`;
      this.page++;
      this.$emit("next-page", this.apiUrl);
    },
  },
};
</script>

<style>
</style>