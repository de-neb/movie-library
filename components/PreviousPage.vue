<template>
  <div>
    <button
      class="btn btn-warning d-flex justify-content-center"
      :class="{ disabled: currentPage === 1 }"
      @click="previousPage"
    >
      <span class="material-icons"> navigate_before </span>
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