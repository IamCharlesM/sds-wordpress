<template>
  <section class="hero has-text-centered is-white">
    <div class="hero-body has-text-white">
      <div class="container animated fadeIn">
        <div class="columns">
          <div class="column bg">
            <p class="title slow">The Legacy</p>
            <br>
            <div class="columns">
              <div class="column">
                <router-link to="/legacy/past">
                  <a class="button is-danger is-inverted has-text-black">Past</a>
                </router-link>
              </div>

              <div class="column">
                <router-link to="/legacy/present">
                  <a class="button is-danger is-inverted has-text-black">Present</a>
                </router-link>
              </div>
            </div>
            <hr>
            <div class="columns">
              <div class="column">
                <div class="image is-128x128 is-centered">
                  <img
                    class="is-rounded"
                    src="/wp-content/themes/sds-wordpress/src/assets/levy.jpg"
                  >
                </div>
                <br>
                <p class="title is-size-5" v-html="posts.title.rendered"> </p>
                <p class="subtitle" v-html="posts.content.rendered">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: "Present",

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
        axios.get('http://localhost/index.php/wp-json/wp/v2/posts?id=38')
          .then((resp) => {
            this.posts = resp.data[0]
            // console.log(resp)
          })
          .catch((err) => {
            // console.log(err)
          })
      }

      
    }
};
</script>
<style scoped>


.image {
  margin: 0 auto;
}
</style>
