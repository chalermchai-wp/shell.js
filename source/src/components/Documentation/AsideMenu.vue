<template>
  <aside class="sidebar menu is-hidden-touch">
    <p class="menu-label has-text-weight-bold">Installation</p>
    <ul class="menu-list">
      <li>
        <router-link class="navbar-item" :to="{ name: 'documentation/start' }"><span class="menu-text">Start</span></router-link>
      </li>
      <li>
        <router-link class="navbar-item" :to="{ name: 'documentation/customization' }"><span class="menu-text">Customization</span></router-link>
      </li>
      <li>
        <router-link class="navbar-item" :to="{ name: 'documentation/constructor-options' }"><span class="menu-text">Constructor options</span></router-link>
      </li>
    </ul>
    <p class="menu-label has-text-weight-bold">
      Layout
    </p>
    <ul class="menu-list" style="margin-bottom: 2.5rem;">
      <li>
        <router-link class="navbar-item" :to="{ name: 'documentation/layout' }"><span class="menu-text">Layout &amp; elements</span></router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'AsideMenu'
  }
</script>

<style scoped>

</style>
