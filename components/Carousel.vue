<template>
  <div>
    <div
      class="modal fade"
      id="photosModal"
      ref="modal"
      tabindex="-1"
      aria-labelledby="photosModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-body bg-dark p-1">
            <div
              id="carouselPhotos"
              class="carousel slide"
              data-bs-interval="false"
              ref="carousel"
            >
              <div class="carousel-indicators">
                <button
                  v-for="(path, index) in backdropPaths"
                  :key="index"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  :data-bs-slide-to="index"
                  :aria-current="index === 0"
                  class="indicator"
                  :aria-label="'Slide' + (1 + 1)"
                  :id="'button-' + index"
                ></button>
              </div>
              <div class="carousel-inner">
                <div
                  class="carousel-item"
                  v-for="(path, index) in backdropPaths"
                  :key="path"
                  :id="'slide-' + index"
                >
                  <img
                    :src="imgOriginal + path"
                    class="d-block w-100"
                    alt="backdrop"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselPhotos"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselPhotos"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2>Photos</h2>

    <div class="pic-main-container">
      <div class="pic-collection-wrapper">
        <div class="pic-collection container-md" ref="pic-collection">
          <button class="scroll-np top-0 start-0" @click="scrollLeft">
            <span class="material-icons fs-2 text-light"> arrow_back_ios </span>
          </button>
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#photosModal"
            v-for="(path, index) in backdropPaths"
            :key="path"
          >
            <img
              :src="imgThumbnail + path"
              class="rounded-3 shadow pe-3"
              alt="backdrop"
              @click="getSelectedPic(index)"
            />
          </a>
          <h2 class="mx-auto text-secondary" v-if="!backdropPaths.length">
            No Photos found.
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
</template>

<script>
export default {
  props: ["movie-id"],
  data() {
    return {
      apiKey: process.env.API_KEY,
      baseURL: "https://api.themoviedb.org/3/movie",
      imgThumbnail: "https://image.tmdb.org/t/p/w300",
      imgOriginal: "https://image.tmdb.org/t/p/w1280",
      backdropPaths: [],
    };
  },
  methods: {
    async fetchMovieImages() {
      try {
        const url = ` ${this.baseURL}/${this.movieId}/images?api_key=${this.apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        data.backdrops.forEach((obj) => {
          this.backdropPaths.push(obj.file_path);
        });
      } catch (error) {
        console.log("error while fetching images", error);
      }
    },
    getSelectedPic(index) {
      const modal = this.$refs.modal;
      const activeSl = document.getElementById(`slide-${index}`);
      const activeBtn = document.getElementById(`button-${index}`);
      const btnList = document.querySelectorAll(".indicator");
      const itemList = document.querySelectorAll(".carousel-item");

      //set the selected pic as the active item in the carousel
      activeSl.classList.add("active");
      activeBtn.classList.add("active");

      //remove the active class from the previous active when closing the modal
      modal.addEventListener("hide.bs.modal", function (ev) {
        btnList.forEach((btn) => btn.classList.remove("active"));
        itemList.forEach((item) => item.classList.remove("active"));
      });
    },
    scrollRight() {
      const picCollection = this.$refs["pic-collection"];
      picCollection.scrollLeft += 1000;
      console.log("scrolling!");
    },
    scrollLeft() {
      const picCollection = this.$refs["pic-collection"];
      picCollection.scrollLeft -= 1000;
    },
  },
  mounted() {
    this.fetchMovieImages();
  },
};
</script>

<style>
</style>