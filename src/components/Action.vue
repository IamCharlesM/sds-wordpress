<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns has-text-white">
          <div class="column col-1 has-text-centered">
            <router-link to="/coming-soon">
              <p class="title has-text-white is-size-3">Registration</p>

              <span
                class="action-text"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati illum ducimus est rem, eligendi porro architecto! Incidunt vero, optio quas ipsum molestias quae iusto quos dicta voluptatibus nulla, iure dolorum.</span>
            </router-link>
          </div>
          <div class="column col-2 has-text-centered">
            <router-link to="/coming-soon">
              <p class="title has-text-white">Schedule</p>

              <span
                class="action-text"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat culpa quod, corporis atque accusantium deleniti ipsam, excepturi eius aperiam voluptatum quibusdam rem eveniet repellat sunt assumenda perspiciatis vel amet?</span>
            </router-link>
          </div>

          <div class="column col-3 has-text-centered">
            <router-link to="/coming-soon">
              <p class="title has-text-white">Events</p>

              <span
                class="action-text"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum id perspiciatis dolorem sunt optio est suscipit cum beatae. Earum ipsum aperiam nihil et consequuntur est dicta blanditiis assumenda omnis perferendis.</span>
            </router-link>
          </div>

          <div class="column col-4 has-text-centered">
            <router-link to="/coming-soon">
              <p class="title has-text-white">Staff</p>
              <span>
                <p
                  class="action-text"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro ea eaque mollitia. Quos et, sequi ea voluptatem ipsa tempore suscipit dolor impedit molestias cumque, numquam odit aliquam dolorum accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Action"
};
</script>
<style scoped>
.hero-body {
  /* background-image: url("/wp-content/themes/sds-wordpress/src/assets/action-wall.jpg") !important; */
  /* background-position: center center; */
  /* background-repeat: no-repeat; */
  /* background-attachment: fixed; */
  /* background-size: cover; */
  background-color: #e12428;
}

.slide {
  height: 100vh;

  background-position: center;
  background-size: cover;
}

.column {
  margin: 0.25rem;
}

.box {
  background-color: transparent;
  box-shadow: none;
}

.col-1 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/wp-content/themes/sds-wordpress/src/assets/col-image-1e.jpg");
  background-size: cover;
}

.col-2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/wp-content/themes/sds-wordpress/src/assets/col-image-2e.jpg");
  background-size: cover;
}

.col-3 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/wp-content/themes/sds-wordpress/src/assets/col-image-4e.jpg");
  background-size: cover;
}

.col-4 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("/wp-content/themes/sds-wordpress/src/assets/col-image-3e.jpg");
  background-size: cover;
}

.action-text {
  visibility: hidden;
}
</style>
