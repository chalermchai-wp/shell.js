<template>
  <div id="app">
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import TheHeader from '@/components/Header'
  import TheFooter from '@/components/Footer'

  export default {
    name: 'app',
    components: {
      TheHeader,
      TheFooter
    }
  }
</script>

<style lang="scss">
  @import "style/config";
  html, body {
    min-height: 100%;
  }
  #app {
    position: relative;
  }
</style>
