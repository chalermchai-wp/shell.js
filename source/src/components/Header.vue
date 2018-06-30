<template>
  <header class="header">
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation"
         v-bind:class="{ 'is-primary is-transparent': isHomepage }">
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
    </nav>
  </header>
</template>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          // Get the target from the "data-target" attribute
          let target = $el.dataset.target
          let $target = document.getElementById(target)
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }

    // Get all "navbar-item" elements
    let $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0)
    // Check if there are any navbar items
    if ($navbarItems.length > 0) {
      // Add a click event on each of them
      $navbarItems.forEach(function ($el) {
        $el.addEventListener('click', function () {
          let target = $el.offsetParent.querySelectorAll('.navbar-menu')
          if (target.length > 0) {
            let $target = document.getElementById(target[0].id)
            // Toggle the class on both the "navbar-item" and the "navbar-menu"
            // $el.classList.toggle('is-active')
            $target.classList.remove('is-active')
          }
        })
      })
    }
  })

  export default {
    name: 'Header',
    data () {
      return {
        isHomepage: false
      }
    },
    watch: {
      '$route' () {
        this.isHomepage = this.$route.path === '/'
      }
    }
  }
</script>

<style lang="scss">
  @import "../style/config";

  #logo {
    margin: 0 .75rem;
    color: transparent;
    background-color: $primary;
    -webkit-mask: url(/static/logo.svg) no-repeat 50% 50%;
    mask: url(/static/logo.svg) no-repeat 50% 50%;

    &:hover {
      background-color: $primary !important;
    }

    .navbar.is-primary & {
      background-color: white;

      &:hover {
        background-color: white !important;
      }
    }
  }

  .navbar {
    background: transparent;
    padding: 0;

    > .container {
      width: 100%;
      padding: 0;
      max-width: none;

      .navbar-menu {
        margin: 0;
        a.navbar-item:hover,
        a.navbar-item.is-active,
        .navbar-link:hover,
        .navbar-link.is-active {
          text-decoration: none;
        }
      }

      .navbar-brand {
        padding: 0;
        margin: 0;
      }
    }

    &.is-primary {
      .navbar-burger {
        span {
          background-color: white;
        }
      }
    }

  }
</style>
