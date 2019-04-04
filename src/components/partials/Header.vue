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
                <router-link class="navbar-item" to="/gallery">Gallery</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
