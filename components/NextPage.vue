<template>
  <div>
    <button
      class="btn btn-warning d-flex justify-content-center"
      @click="nextPage"
    >
      <span class="material-icons"> navigate_next </span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["discover-prop", "current-page"],
  data() {
    return {
      baseApiUrl: "https://api.themoviedb.org/3/movie",
      apiKey: process.env.API_KEY,
      apiUrl: "",
      pageNum: null,
    };
  },
  methods: {
    nextPage() {
      this.pageNum = this.currentPage + 1;
      this.apiUrl = `${this.baseApiUrl}/${this.discoverProp}?api_key=${this.apiKey}&page=${this.pageNum}`;
      this.$emit("next-page", this.apiUrl, this.pageNum);

      console.log("pageNum", this.pageNum);
      console.log("url", this.apiUrl);
    },
  },
};
</script>

<style>
</style>