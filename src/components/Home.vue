<template>
  <div>
    <section>
      <div class="hero is-dark has-text-centered is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container animated fadeIn">
            <div class="columns">
              <div class="column">
                <p class="title slow">{{posts.title.rendered}}
                </p>
                <hr>
                <p>{{posts.content.rendered}}
                </p>
              </div>
              <div class="column"></div>
            </div>
          </div>
        </div>
      </div>
      <Splitter/>
      <Action/>
    </section>
    <!-- <recent-posts-widget limit="5">Recent Posts</recent-posts-widget>
    <pages-widget limit="5">Pages</pages-widget>-->
  </div>
</template>

<script>
import axios from 'axios'
import RecentPostsWidget from "./widgets/RecentPosts.vue";
import PagesWidget from "./widgets/Pages.vue";
import Splitter from "./Splitter.vue";
import Action from "./Action.vue";
import Staff from "./Staff.vue";

export default {
  components: {
    RecentPostsWidget,
    PagesWidget,
    Action,
    Splitter,
    Staff
  },

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
        axios.get('http://localhost/index.php/wp-json/wp/v2/posts?slug=home')
          .then((resp) => {
            this.posts = resp.data[0]
            console.log(resp)
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
  background-image: url("/wp-content/themes/sds-wordpress/src/assets/wall-1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.fadeIn {
  animation-duration: 2s;
}

.column {
  margin-right: 10% !important;
}
</style>
