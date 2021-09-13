<template>
  <div>
    <div class="stars-wrapper">
      <span class="visually-hidden">{{ rating }}</span>
      <span class="stars" :id="movieId + '-rating'">★★★★★</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rating", "movieId"],
  beforeUpdate() {
    const stars = document.querySelector("span.stars");
    const ratingPercent = `${(this.rating / 10) * 100}%`;

    stars.style.background = `linear-gradient(90deg,#fdb93c ${ratingPercent},#fff ${ratingPercent})`;
  },
  mounted() {
    if (this.movieId) {
      const stars = document.getElementById(this.movieId + "-rating");
      const ratingPercent = `${(this.rating / 10) * 100}%`;
      stars.style.background = `linear-gradient(90deg,#fdb93c ${ratingPercent},#fff ${ratingPercent})`;
    }
  },
};
</script>
