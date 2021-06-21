<template>
  <div>
    <h2>Credits</h2>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Cast
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <table class="table table-hover">
              <tbody>
                <tr v-for="person in cast" :key="person.id">
                  <td>
                    <img
                      :src="imgURL + person.profile_path"
                      :alt="person + '+profile'"
                      class="img-thumbnail thumbnail"
                      v-if="person.profile_path"
                    />
                    <img
                      src="~/assets/images/profile.png"
                      :alt="person + '+profile'"
                      class="img-thumbnail thumbnail"
                      v-else
                    />
                  </td>
                  <td class="align-middle ps-1">{{ person.name }}</td>
                  <td class="align-middle">{{ person.character }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Crew
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <table class="table table-hover">
              <tbody>
                <tr
                  v-for="person in crew"
                  :key="person.id + '-' + person.name + '-' + person.job"
                >
                  <td>
                    <img
                      :src="imgURL + person.profile_path"
                      :alt="person + '+profile'"
                      class="img-thumbnail thumbnail"
                      v-if="person.profile_path"
                    />
                    <img
                      src="~/assets/images/profile.png"
                      :alt="person + '+profile'"
                      class="img-thumbnail thumbnail"
                      v-else
                    />
                  </td>
                  <td class="align-middle ps-1">{{ person.name }}</td>
                  <td class="align-middle">{{ person.job }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie-id"],
  data() {
    return {
      imgURL: "https://image.tmdb.org/t/p/w200",
      baseURL: "https://api.themoviedb.org/3/movie",
      apiKey: process.env.API_KEY,
      cast: "",
      crew: "",
    };
  },
  methods: {
    async fetchCredits() {
      try {
        const url = `${this.baseURL}/${this.movieId}/credits?api_key=${this.apiKey}&language=en-US`;
        const response = await fetch(url);
        const data = await response.json();
        this.cast = [...data.cast];
        this.crew = [...data.crew];
      } catch (error) {
        console.log("error while fetching credits ", error);
      }
    },
  },
  mounted() {
    this.fetchCredits();
  },
};
</script>

<style>
.thumbnail {
  width: 50px;
}
tr td:first-child {
  width: 50px !important;
  text-align: center;
}

tr td {
  padding: 0 !important;
  margin-top: auto !important;
}
</style>