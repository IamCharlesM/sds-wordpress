<template>
  <section class="hero has-text-centered is-white">
    <div class="hero-body has-text-white">
      <div class="container animated fadeIn">
        <div class="columns">
          <div class="column bg">
            <p class="title" v-html="posts.title.rendered"></p>
            <br>
            <p class="subtitle" v-html="posts.content.rendered">
              
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "Registration",

data() {
      return {
        posts: {}
      }
    },

    created() {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      fetchData() {
        // The API is not SEO friendly so we use the route params(:slug) to make it so
        // axios.get('http://localhost/index.php/wp-json/wp/v2/posts?slug=' + this.$options.name + '/')
        axios.get('http://localhost/index.php/wp-json/wp/v2/posts?categories=10')
          .then((resp) => {
            this.posts = resp.data[0]
            // console.log(this.posts)
          })
          .catch((err) => {
            // console.log(err)
          })
      }
    }
};
</script>
<style scoped>
.hero-body {
  /* Both are required for the image to appear */
  /* background-image: url("/wp-content/themes/sds-wordpress/src/assets/ALL NEW-2108.jpg") !important ; */
  /* background-position: center center; */
  /* background-repeat:  no-repeat; */
  /* background-attachment: fixed; */
  /* background-size:  cover; */
  /* color: black */
}

</style>
