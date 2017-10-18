<template>
  <div id="app">
    
    <a href="https://github.com/davidecaruso/shell.js" class="ribbon" target="_blank"><img alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
           src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" /></a>
    
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand to="/">Shell.js</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item to="/documentation">Documentation</b-nav-item>
          <b-nav-item to="/examples">Examples</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
    
    <router-view></router-view>
  
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  html, body {
    min-height: 100%;
  }
  #app {
    position: relative;
    .col {
      margin-top: 2em;
    }
    .ribbon {
      position: absolute;
      top: 0;
      right: 0;
      border: 0;
      z-index: 1030;
      
      @media screen and (max-width: 767px) {
        width: 30vw;
        top: 56px;
      }
      
      img {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
