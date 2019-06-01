<template>
  <section class="hero has-text-centered is-white">
    <div class="hero-body has-text-white">
      <div class="container animated fadeIn">
        <div class="columns">
          <div class="column bg">
            <p class="title slow">Board of Directors</p>
            <div class="columns is-multiline">
              <div class="column is-one-third" v-for="director in directors">
                <div class="image">
                  <img :src=director.fimg_url>
                </div>
                <br><br>
                <p class="title is-size-5" v-html="director.title.rendered"></p>
                <p class="subtitle" v-html="director.content.rendered"></p>
              </div>
            </div>
            <p class="title slow">Our Staff</p>
            <hr>
            <div class="columns is-multiline">
              <div  class="column is-one-third " v-for="instructor in instructors">
                <span class="staff">
                <div class="image ">
                  <img :src=instructor.fimg_url>
                </div>
                <br>
                <p class="title is-size-5" v-html="instructor.title.rendered"></p>
                <p class="subtitle" v-html="instructor.content.rendered"></p>
                </span>
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
  name: "Staff",

    data() {
      return {
        instructors: {},
        directors: {}
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
        Promise.all([
          axios.get('http://localhost/index.php/wp-json/wp/v2/posts?categories=8'),
          axios.get('http://localhost/index.php/wp-json/wp/v2/posts?categories=7')
        ]).then(([instructor, director]) => {
          // console.log(instructor.data)
          this.instructors = instructor.data
          this.directors = director.data
        })
        .catch((err) => {
          console.log(err)
        })

        }
        }
};
</script>
<style scoped>
img {
  max-width: 200px;
  max-height: 200px;
  margin: 0 auto !important; 
}

</style>
