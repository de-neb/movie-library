<template>
  <div>
    <div class="stars-wrapper vis">
      <span class="stars" ref="stars">★★★★★</span>
      <span class="visually-hidden">{{ rating }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rating"],
  beforeUpdate() {
    const stars = document.querySelector("span.stars");
    const ratingPercent = `${(this.rating / 10) * 100}%`;

    stars.style.background = `linear-gradient(90deg,#fdb93c ${ratingPercent},#fff ${ratingPercent})`;
  },
};
</script>
