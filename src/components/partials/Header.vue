<template>
  <header class="site-header">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item"></a>
          <span
            class="navbar-burger burger"
            data-target="navbarMenuHeroA"
            aria-label="menu"
            aria-expanded="false"
            @click="isOpen = !isOpen"
            v-bind:class="{'is-active': isOpen}"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
          <div class="navbar-end">
            <router-link class="navbar-item" to="/">Home</router-link>
            <router-link class="navbar-item" to="/registration">Registration</router-link>
            <router-link class="navbar-item" to="/schedule">Schedule</router-link>

            <div class="navbar-item has-dropdown is-hoverable is-boxed">
              <a class="navbar-link">More</a>

              <div class="navbar-dropdown is-boxed">
                <router-link class="navbar-item" to="/legacy/past">Legacy</router-link>
                <router-link class="navbar-item" to="/staff">Staff</router-link>
                <router-link class="navbar-item" to="/contact">Contact Us</router-link>
                <router-link class="navbar-item" to="/events">Events</router-link>
                <router-link class="navbar-item" to="/coming-soon">Gallery</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
</script>


<style scoped>
.navbar-dropdown {
  /* background-color: hsl(0, 0%, 21%) */
  background-color: #e12428 !important;
}
.navbar-dropdown a:hover {
  color: #e12428 !important;
}
.navbar-dropdown a {
  color: white !important;
}
.navbar {
  background-color: #e12428 !important;
}
a {
  color: white !important;
}
a:hover {
  color: #e12428 !important;
}
a:active {
  color: #e12428;
}
.navbar-link:not(.is-arrowless)::after {
  border-color: white;
}
.is-active {
  background-color: #e12428 !important;
}
</style>
