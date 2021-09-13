<template>
  <div>
    <h2>Credits</h2>
    <!-- <div class="accordion" id="accordionExample">
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
    </div> -->

    <!-- testing -->

    <nav>
      <div class="nav nav-tabs text-dark" id="nav-tab" role="tablist">
        <button
          class="nav-link active tab-bg me-1"
          id="cast-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-cast"
          type="button"
          role="tab"
          aria-controls="nav-cast"
          aria-selected="true"
        >
          Cast
        </button>
        <button
          class="nav-link tab-bg"
          id="crew-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-crew"
          type="button"
          role="tab"
          aria-controls="nav-crew"
          aria-selected="false"
        >
          Crew
        </button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-cast"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="pic-main-container h-300">
          <div class="pic-collection-wrapper">
            <div class="pic-collection container-md" ref="cast-collection">
              <button class="scroll-np top-0 start-0" @click="scrollLeft">
                <span class="material-icons fs-2 text-light">
                  arrow_back_ios
                </span>
              </button>
              <div
                class="card card-width g-center me-3"
                v-for="person in cast"
                :key="person.id"
              >
                <img
                  :src="imgURL + person.profile_path"
                  class="card-img-top w-100"
                  :alt="person.name + '-thumbnail'"
                  v-if="person.profile_path"
                />
                <img
                  src="~/assets/images/profile.png"
                  :alt="person.name + '-thumbnail'"
                  class="img-fluid poster-img"
                  v-else
                />

                <div class="card-body p-0 text-center">
                  <h6 class="card-text mt-2 pt-1 mx-0 mb-0 fw-bold">
                    {{ person.name }}
                  </h6>
                  <span class="text-secondary">
                    {{ person.character }}
                  </span>
                </div>
              </div>
              <h2 class="mx-auto text-secondary" v-if="!cast.length">
                No Cast found.
              </h2>
              <button class="scroll-np top-0 end-0" @click="scrollRight">
                <span class="material-icons fs-2 text-light">
                  arrow_forward_ios
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-crew"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <div class="pic-main-container h-300">
          <div class="pic-collection-wrapper">
            <div class="pic-collection container-md" ref="crew-collection">
              <button class="scroll-np top-0 start-0" @click="scrollLeft">
                <span class="material-icons fs-2 text-light">
                  arrow_back_ios
                </span>
              </button>
              <div
                class="card card-width g-center me-3"
                v-for="person in crew"
                :key="person.id + '-' + person.job"
              >
                <img
                  :src="imgURL + person.profile_path"
                  class="card-img-top w-100"
                  :alt="person.name + '-thumbnail'"
                  v-if="person.profile_path"
                />
                <img
                  src="~/assets/images/profile.png"
                  :alt="person.name + '-thumbnail'"
                  class="img-fluid poster-img"
                  v-else
                />

                <div class="card-body p-0 text-center">
                  <h6 class="card-text mt-2 pt-1 mx-0 mb-0 fw-bold">
                    {{ person.name }}
                  </h6>
                  <span class="text-secondary">
                    {{ person.job }}
                  </span>
                </div>
              </div>
              <h2 class="mx-auto text-secondary" v-if="!crew.length">
                No Crew found.
              </h2>
              <button class="scroll-np top-0 end-0" @click="scrollRight">
                <span class="material-icons fs-2 text-light">
                  arrow_forward_ios
                </span>
              </button>
            </div>
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
    scrollRight() {
      const castCollection = this.$refs["cast-collection"];
      const crewCollection = this.$refs["crew-collection"];
      castCollection.scrollLeft += 1000;
      crewCollection.scrollLeft += 1000;
    },
    scrollLeft() {
      const castCollection = this.$refs["cast-collection"];
      const crewCollection = this.$refs["crew-collection"];
      castCollection.scrollLeft -= 1000;
      crewCollection.scrollLeft -= 1000;
    },
  },
  mounted() {
    this.fetchCredits();
  },
};
</script>

<style scoped>
</style>