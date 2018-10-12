<template>
  <section class="documentation">
    <div class="documentation__hero hero is-primary">
      <div class="hero-body">
        <div class="container"><p class="title">Documentation</p>
          <p class="subtitle">Let's deep into the instructions to use <strong>shell.js</strong></p></div>
      </div>
    </div>

    <main class="documentation__main">
      <div class="sidebar-bg"></div>
      <section class="section">
        <div class="container is-fullhd template-horizontal">
          <DocumentationSidebar />
          <router-view></router-view>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
import DocumentationSidebar from './Sidebar'
export default {
  name: 'Documentation',
  components: {DocumentationSidebar}
}
</script>

<style scoped lang="scss">
  @import "../../../style/config";

  .documentation__main {
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

    @include touch {
      display: none;
    }
  }

  .documentation__main .container {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex: 1;
    flex: 1;

    .documentation__section {
      padding-left: 3rem;
      padding-top: 3rem;
      padding-bottom: 3rem;
      overflow: hidden;
      width: 100%;
      background: #FFFFFF;

      @include touch {
        padding-left: 0;
      }
    }
  }
</style>
