<template>
  <div>
    <button
      class="btn btn-warning d-flex justify-content-center"
      @click="previousPage"
    >
      <span class="material-icons"> arrow_back_ios </span>
      Page {{ currentPage - 1 }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["discover-prop", "current-page"],
  data() {
    return {
      pageNum: null,
      baseApiUrl: "https://api.themoviedb.org/3/movie",
      apiKey: process.env.API_KEY,
      apiUrl: "",
    };
  },
  methods: {
    previousPage() {
      this.pageNum = this.currentPage - 1;
      this.apiUrl = `${this.baseApiUrl}/${this.discoverProp}?api_key=${this.apiKey}&page=${this.pageNum}`;

      this.$emit("previous-page", this.apiUrl, this.pageNum);

      console.log("pageNum", this.pageNum);
      console.log("url", this.apiUrl);
    },
  },
};
</script>

<style>
</style>