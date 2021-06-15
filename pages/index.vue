<template>
  <div>root</div>
</template>

<script>
export default {
  mounted() {
    console.log("env", process.env.API_KEY);
  },
};
</script>

<style>
</style>