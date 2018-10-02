<template>
  <section id="documentation">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container"><p class="title">Documentation</p>
          <p class="subtitle">Let's deep into the instructions to use <strong>shell.js</strong></p></div>
      </div>
    </div>

    <main class="main">
      <div class="sidebar-bg"></div>
      <section class="section">
        <div class="container is-fullhd template-horizontal">
          <AsideMenu />
          <router-view></router-view>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
  import AsideMenu from '@/components/partials/documentation/AsideMenu'
  export default {
    name: 'documentation',
    components: {AsideMenu}
  }
</script>

<style scoped lang="scss">
  .main {
    position: relative;
    .section {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  .sidebar-bg {
    position: absolute;
    bottom: 0;
    right: 50%;
    left: 0;
    top: 0;
    background: #F5F5F5;

    @media screen and (max-width: 1087px) {
      display: none;
    }
  }

  .sidebar {
    min-width: 16rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-right: .5rem;
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
    overflow: auto;
    max-height: calc(100vh - 2rem);
  }

  .template-horizontal {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex: 1;
    flex: 1;

    .default-container {
      padding-left: 3rem;
      padding-top: 3rem;
      padding-bottom: 3rem;
      overflow: hidden;
      width: 100%;
      background: #FFFFFF;
    }
  }
</style>
