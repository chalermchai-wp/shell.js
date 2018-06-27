<template>
  <section id="home">
    <div class="hero is-fullheight is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Shell.js</h1>
          <h2 class="subtitle">A <strong>JavaScript</strong> library to create HTML <strong>terminals</strong> in web pages. </h2>
          <pre class="home-hero">
<code><span class="is-unselectable">$ </span>yarn add shell.js</code>
        </pre>
        </div>
      </div>
    </div>
    <div class="hero">
      <div id="shell"></div>
    </div>
  </section>
</template>

<script>
  import Typed from 'typed.js'
  import Shell from 'shell.js'

  export default {
    name: 'home',
    data () {
      return {}
    },
    mounted () {
      return new Shell('#shell', {
        user: 'guest',
        host: 'shell.js',
        path: '~',
        style: 'ubuntu',
        theme: 'dark',
        responsive: false,
        typed: Typed,
        commands: [
          'sudo -i',
          'Hello bro',
          'This is an example of what you can do with Shell.js',
          'Look at the examples page to see other styles',
          'Or check out the doc for details',
          'Stay tuned'
        ]
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/config";

  #shell {
    margin: auto;
    width: 100%;
    height: 40vh;
  }

  pre {
    padding: 20px;
    display: inline-flex;
    font-size: 1.1em;
    color: lighten($primary, 50%);
    background: darken($primary, 50%);
  }
</style>
