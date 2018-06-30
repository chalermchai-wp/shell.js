<template>
  <header class="navbar header has-shadow is-primary is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <router-link id="logo" class="navbar-item" :to="{ name: 'home' }">shell.js</router-link>
        <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navMenu">
        <div class="navbar-end">
          <router-link class="navbar-item" :to="{ name: 'documentation' }">Documentation</router-link>
          <router-link class="navbar-item" :to="{ name: 'examples' }">Examples</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target
          var $target = document.getElementById(target)
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  })
  export default {
    name: 'Header'
  }
</script>

<style lang="scss">
  #logo {
    color: transparent;
    background-color: white;
    -webkit-mask: url(/static/logo.svg) no-repeat 50% 50%;
    mask: url(/static/logo.svg) no-repeat 50% 50%;
  }

  .navbar {
    background: transparent;
    padding: 0;
  }

  .navbar-brand, .navbar-tabs {
    padding: 0;
  }
</style>
