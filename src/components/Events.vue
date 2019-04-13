<template>
  <section>
    <div class="columns">
      <div class="column is-one-third hero is-fullheight is-paddingless is-marginless">
        <div class="hero-body hero-body">
          <div class="container has-text-centered">
            <p class="title has-text-white">Upcoming events:</p>
            <p class="subtitle slow has-text-white">Events coming soon!</p>
            <div class="columns">
              <span class="column"></span>
              <a class="button is-primary is-inverted is-outlined">TICKETS AVAILABLE SOON</a>
              <span class="column"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="column wall-1"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Events"
};
</script>
<style scoped>
.hero-body {
  /* Both are required for the image to appear */
  /* background-image: url("/wp-content/themes/sds-wordpress/src/assets/ALL NEW-2108.jpg") !important ; */
  /* background-position: center center; */
  /* background-repeat:  no-repeat; */
  /* background-attachment: fixed; */
  background-color: #e12428;
  /* color: black */
}

.wall-1 {
  background-image: url("/wp-content/themes/sds-wordpress/src/assets/wall.jpg");
  background-size: cover;
}
</style>
