import _ from "lodash";
import Vue from "vue";
import Router from "vue-router";

// Components
import Home from "../components/Home.vue";
import Post from "../components/Post/Post.vue";
import Page from "../components/Page/Page.vue";
import Staff from "../components/Staff.vue";
import News from "../components/News.vue";
import Contact from "../components/Contact.vue";
import Registration from "../components/Registration.vue";
import Schedule from "../components/Schedule.vue";
import Events from "../components/Events.vue";
import Gallery from "../components/Gallery.vue";
import Past from "../components/Past.vue";
import Present from "../components/Present.vue";
import Almuni from "../components/Alumni.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      // Assuming you're using the default permalink structure for posts
      path: "/:year/:month/:day/:postSlug",
      name: "Post",
      component: Post
    },
    {
      // Updating this to allow for components to load
      path: "/src/components/:pageSlug",
      name: "Page",
      component: Page
    },
    {
      path: "/staff",
      name: "Staff",
      component: Staff
    },
    {
      path: "/news",
      name: "News",
      component: News
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/registration",
      name: "Registration",
      component: Registration
    },
    {
      path: "/schedule",
      name: "Schedule",
      component: Schedule
    },
    {
      path: "/events",
      name: "Events",
      component: Events
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: Gallery
    },
    {
      path: "/legacy/past",
      name: "Past",
      component: Past
    },
    {
      path: "/legacy/present",
      name: "Pressent",
      component: Present
    },
    {
      path: "/almuni",
      name: "Almuni",
      component: Almuni
    }
  ],
  mode: "history",
  base: "",

  // Prevents window from scrolling back to top
  // when navigating between components/views
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.afterEach((to, from) => {
  // Add a body class specific to the route we're viewing
  let body = document.querySelector("body");
  let bodyClasses = body.className.split(" ");

  if (bodyClasses.length > 0) {
    const newBodyClasses = bodyClasses.filter(theClass =>
      theClass.startsWith("vue--page--")
    );
  }

  const slug = _.isEmpty(to.params.postSlug)
    ? to.params.pageSlug
    : to.params.postSlug;
  body.classList.add("vue--page--" + slug);
});

export default router;
