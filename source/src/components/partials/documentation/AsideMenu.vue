<template>
  <aside class="sidebar menu is-hidden-touch">
    <p class="menu-label has-text-weight-bold">Installation</p>
    <ul class="menu-list">
      <li>
        <router-link class="navbar-item" :to="{ path: '/documentation/start' }"><span class="menu-text">Start</span>
        </router-link>
      </li>
      <li>
        <router-link class="navbar-item" :to="{ path: '/documentation/usage' }"><span class="menu-text">Usage</span>
        </router-link>
      </li>
    </ul>
    <p class="menu-label has-text-weight-bold">Customization</p>
    <ul class="menu-list">
      <li>
        <router-link class="navbar-item" :to="{ path: '/documentation/parameters' }"><span
          class="menu-text">Parameters</span></router-link>
        <ul class="menu-list">
          <li>
            <router-link class="navbar-item" :to="{
            path: '/documentation/parameters#user'
            }"><span class="menu-text">User</span></router-link>
          </li>
          <li>
            <router-link class="navbar-item" :to="{
            path: '/documentation/parameters#host'
            }"><span class="menu-text">Host</span></router-link>
          </li>
          <li>
            <router-link class="navbar-item" :to="{
            path: '/documentation/parameters#path'
            }"><span class="menu-text">Path</span></router-link>
          </li>
          <li>
            <router-link class="navbar-item" :to="{
            path: '/documentation/parameters#style'
            }"><span class="menu-text">Style</span></router-link>
          </li>
          <li>
            <router-link class="navbar-item" :to="{
            path: '/documentation/parameters#theme'
            }"><span class="menu-text">Theme</span></router-link>
          </li>
          <li>
            <router-link class="navbar-item" :to="{
            path: '/documentation/parameters#responsive'
            }"><span class="menu-text">Responsive</span></router-link>
          </li>
          <li>
            <router-link class="navbar-item" :to="{
            path: '/documentation/parameters#commands'
            }"><span class="menu-text">Commands</span></router-link>
          </li>
          <li>
            <router-link class="navbar-item" :to="{
            path: '/documentation/parameters#typed'
            }"><span class="menu-text">Typed</span></router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'AsideMenu',
  mounted () {
    if (this.$route.hash) {
      this.scrollTo(this.$route.hash)
    }
  },
  methods: {
    scrollTo: function (hashtag) {
      setTimeout(() => {
        location.href = hashtag
      })
    }
  }
}
</script>
