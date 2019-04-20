<template>
  <section class="hero is-fullheight-with-navbar has-text-centered is-white">
    <div class="container has-text-white hero-head">
      <p class="title has-text-white">Please excuse the dust!</p>
      <p class="subtitle has-text-white">Content coming soon!</p>
    </div>
    <div class="hero-body has-text-white"></div>
  </section>
</template>

<script>
export default {
  name: "Holder"
};
</script>
<style scoped>
.hero {
  /* both are required for the image to appear */
  background-image: url("/wp-content/themes/sds-wordpress/src/assets/coming-soon.jpg") !important ;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /* color: black */
}

.image {
  margin: 0 auto;
}
</style>
