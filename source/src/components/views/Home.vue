<template>
  <section class="home">
    <div class="home__hero hero is-fullheight is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">shell.js</h1>
          <h2 class="subtitle is-3">A <strong>JavaScript</strong> library to create HTML <strong>terminals</strong> in web pages. </h2>
          <div id="shell"></div>

          <pre v-highlightjs class="home-hero">
<code class="bash"><span class="is-unselectable">$ </span>yarn add shell.js</code>
          </pre>

          <div class="buttons">
            <a class="github-button" href="https://github.com/davidecaruso/shell.js" data-icon="octicon-star"
               data-size="large" data-show-count="true" aria-label="Star davidecaruso/shell.js on GitHub">Star</a>
            <a class="github-button" href="https://github.com/davidecaruso/shell.js/fork"
               data-icon="octicon-repo-forked" data-size="large" data-show-count="true"
               aria-label="Fork davidecaruso/shell.js on GitHub">Fork</a>
          </div>
        </div>
      </div>
    </div>
    <div class="home__level level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Size</p>
          <p class="title">&lt; 41 KB</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Module format</p>
          <p class="title">UMD</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">License</p>
          <p class="title">MIT</p>
        </div>
      </div>
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
  created () {
    let script = document.createElement('script')
    script.setAttribute('src', 'https://buttons.github.io/buttons.js')
    document.head.appendChild(script)
  },
  mounted () {
    return new Shell('#shell', {
      user: 'guest',
      host: 'davidecaruso.github.io',
      style: 'osx',
      responsive: true,
      typed: Typed,
      commands: [
        'hello bro',
        'wait, first I wanna be root',
        'sudo -i',
        'this is what you can do with <b>shell.js</b>',
        'check out the documentation ;)',
        'exit'
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "../../style/config";

  #shell {
    margin: 0 auto 1rem;
    height: 40vh;
    width: 100%;
    max-width: 45vw;

    @include mobile {
      max-width: 80vw;
    }
  }

  .home__hero {
    .title {
      color: transparent;
      background-color: white;
      -webkit-mask: url(../../assets/logo.svg) no-repeat 50% 50%;
      mask: url(../../assets/logo.svg) no-repeat 50% 50%;
      font-size: 6rem;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      max-width: 200px;
      margin: 2rem auto;
    }
  }
  .home__level {
    padding: 3em 0;
  }

  pre {
    padding: 20px;
    display: inline-flex;
    font-size: 1.1em;
    color: lighten($primary, 50%);
    background: darken($primary, 50%);
  }
</style>
