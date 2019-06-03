<template>
  <section>
    <div class="columns">
      <div class="column is-one-third hero is-fullheight is-paddingless is-marginless">
        <div class="hero-body hero-body">
          <div class="container has-text-centered">
            <p class="title has-text-white">Upcoming events:</p>
            <div class="columns">
              <div class="column">
                <span v-for="post in posts">
                  <span class="has-text-white" v-html="post.title.rendered"></span>
                  <div class="image is-square">
                  <img :src=post.fimg_url>
                </div>
                <br>
            <span v-html="post.content.rendered"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column wall-1"></div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "Events",

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
        axios.get('http://localhost/index.php/wp-json/wp/v2/posts?categories=9')
          .then((resp) => {
            this.posts = resp.data
            // console.log(resp)
          })
          .catch((err) => {
            console.log(err)
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
  background-color: #e12428;
  /* color: black */
}

.wall-1 {
  background-image: url("/wp-content/themes/sds-wordpress/src/assets/wall.jpg");
  background-size: cover;
}
</style>
