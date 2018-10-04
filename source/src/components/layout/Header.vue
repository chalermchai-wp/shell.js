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

            <router-link class="navbar-item is-hidden-touch" :to="{ name: 'documentation' }">Documentation</router-link>
            <div class="navbar-item has-dropdown is-hoverable is-hidden-desktop">
              <router-link class="navbar-item" :to="{ name: 'documentation' }">Documentation</router-link>
              <div class="navbar-dropdown is-boxed">
                <div class="navbar-item is-subitem">Installation</div>
                <router-link class="navbar-item" :to="{ path: '/documentation/start' }">
                  <span class="navbar-item-text">Start</span>
                </router-link>
                <router-link class="navbar-item" :to="{ path: '/documentation/usage' }">
                  <span class="navbar-item-text">Usage</span>
                </router-link>
                <div class="navbar-item is-subitem">Customization</div>
                <router-link class="navbar-item" :to="{ path: '/documentation/parameters' }">
                  <span class="navbar-item-text">Parameters</span>
                </router-link>
                <router-link class="navbar-item" style="margin-left: 1rem;" :to="{
            path: '/documentation/parameters#user'
            }"><span class="navbar-item-text">User</span></router-link>
                <router-link class="navbar-item" style="margin-left: 1rem;" :to="{
          path: '/documentation/parameters#host'
          }"><span class="navbar-item-text">Host</span></router-link>
                <router-link class="navbar-item" style="margin-left: 1rem;" :to="{
          path: '/documentation/parameters#path'
          }"><span class="navbar-item-text">Path</span></router-link>
                <router-link class="navbar-item" style="margin-left: 1rem;" :to="{
          path: '/documentation/parameters#style'
          }"><span class="navbar-item-text">Style</span></router-link>
                <router-link class="navbar-item" style="margin-left: 1rem;" :to="{
          path: '/documentation/parameters#theme'
          }"><span class="navbar-item-text">Theme</span></router-link>
                <router-link class="navbar-item" style="margin-left: 1rem;" :to="{
          path: '/documentation/parameters#responsive'
          }"><span class="navbar-item-text">Responsive</span></router-link>
                <router-link class="navbar-item" style="margin-left: 1rem;" :to="{
          path: '/documentation/parameters#commands'
          }"><span class="navbar-item-text">Commands</span></router-link>
                <router-link class="navbar-item" style="margin-left: 1rem;" :to="{
          path: '/documentation/parameters#typed'
          }"><span class="navbar-item-text">Typed</span></router-link>
              </div>
            </div>
            <router-link class="navbar-item" :to="{ name: 'examples' }">Examples</router-link>
            <a title="View on GitHub" class="navbar-item" href="https://github.com/davidecaruso/shell.js" target="_blank"><b-icon
              icon="github-circle"
              size="is-big">
            </b-icon></a>
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
            // Toggle on navbarBurger
            $navbarBurgers.forEach(function ($el) {
              if ($el.classList.contains('is-active')) {
                $el.classList.remove('is-active')
              }
            })
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
  @import "../../style/config";

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

    .navbar-dropdown .is-subitem {
      text-transform: uppercase;
      color: lighten($grey-dark, 40%);
    }

    > .container {
      padding: 0;

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

    a {
      .icon {
        height: 100%;
      }
    }

    @media (max-width: 1024px) {
      &.is-primary {
        a.navbar-burger {
          span {
            background-color: white;
          }
        }
      }
    }
  }
</style>
