<template>
  <div>
    <div class="row d-flex align-items-center text-center">
      <div class="col-2">
        <button
          class="btn btn-warning d-flex justify-content-center w-100 px-3"
          :class="{ disabled: currentPage === 1 }"
          @click="previousPage"
        >
          <span class="material-icons"> navigate_before </span>
        </button>
      </div>
      <div class="col-8">
        <h6 class="m-0">
          Page
          <input
            type="number"
            v-model.number="pageNum"
            ref="pageNum"
            id="page-num"
            @keyup.enter="jumpToPage"
          />{{ " of " + totalPages }}
        </h6>
      </div>
      <div class="col-2">
        <button
          class="btn btn-warning d-flex justify-content-center w-100 px-3"
          :class="{ disabled: currentPage === 500 }"
          @click="nextPage"
        >
          <span class="material-icons"> navigate_next </span>
        </button>
      </div>
    </div>

    <div class="row">
      <!-- Modal -->
      <div
        class="modal fade"
        id="pageNumErrorModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-warning bg-gradient">
              <h5 class="modal-title" id="error-header">
                Requested page doesn't exit
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Page number should only be from 1 to
              {{ totalPages }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["current-page", "total-pages"],
  data() {
    return {
      pageNum: 1,
      numList: [],
    };
  },
  methods: {
    nextPage() {
      this.pageNum = this.currentPage + 1;
      this.$emit("next-page", this.pageNum);
    },
    previousPage() {
      this.pageNum = this.currentPage - 1;
      this.$emit("previous-page", this.pageNum);
    },
    jumpToPage() {
      if (this.pageNum < 1 || this.pageNum > this.totalPages) {
        const errorModal = new bootstrap.Modal(
          document.getElementById("pageNumErrorModal"),
          {
            keyboard: false,
          }
        );
        errorModal.toggle();
        this.pageNum = this.numList[0];
      }
      this.$emit("jump-to-page", this.pageNum);
      this.numList = [];
    },
  },
  watch: {
    pageNum(newVal, oldVal) {
      this.numList.push(oldVal);
    },
  },
};
</script>

<style>
</style>