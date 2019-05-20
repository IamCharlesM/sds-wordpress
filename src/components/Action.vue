<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns has-text-white">
          <div :id=post.title.rendered class="column has-text-centered" v-for="post in posts">
            <router-link :to=post.slug>
              <span class="container">
                <p class="title has-text-white">{{post.title.rendered}}</p>
                <span>
                  <p class="action-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam corporis velit quod, quaerat laboriosam repellat beatae sunt natus in necessitatibus, commodi nemo excepturi corrupti? Dolor laboriosam incidunt alias obcaecati explicabo.</p>
                </span>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
  export default {
    name: "Action",

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
        axios.get('http://localhost/index.php/wp-json/wp/v2/posts?categories=3')
          .then((resp) => {
            this.posts = resp.data
            // console.log(resp)
          })
          .catch((err) => {
            // console.log(err)
          })
      }

      
    }
  }
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

   #Registration {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url("/wp-content/themes/sds-wordpress/src/assets/col-image-1e.jpg");
    background-size: cover;
  }

  #Events {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url("/wp-content/themes/sds-wordpress/src/assets/col-image-2e.jpg");
    background-size: cover;
  }

  #Schedule {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url("/wp-content/themes/sds-wordpress/src/assets/col-image-4e.jpg");
    background-size: cover;
  }

  #Staff {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url("/wp-content/themes/sds-wordpress/src/assets/col-image-3e.jpg");
    background-size: cover;
  } 

  .action-text {
    visibility: hidden;
  }
</style>