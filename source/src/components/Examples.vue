<template>
  <b-container id="examples">
    <b-row><b-col><h3>Default</h3></b-col></b-row>
    <b-row><b-col><h4>Dark</h4></b-col></b-row>
    <b-row>
      <b-col>
        Result
        <div id="default"></div>
      </b-col>
      <b-col>
        Source
        <pre class="hljs"><code class="js">new Shell('#shell', {
  user: 'guest',
  commands: ['sudo rm -rf /*']
})</code></pre>
      </b-col>
    </b-row>
    <b-row><b-col><h4>Light</h4></b-col></b-row>
    <b-row>
      <b-col>
        Result
        <div id="default-light"></div>
      </b-col>
      <b-col>
        Source
        <pre class="hljs"><code class="js">new Shell('#shell', {
  user: 'guest',
  theme: 'light',
  commands: ['sudo rm -rf /*']
})</code></pre>
      </b-col>
    </b-row>
    <b-row><b-col><h3>Mac OS X</h3></b-col></b-row>
    <b-row><b-col><h4>Dark</h4></b-col></b-row>
    <b-row>
      <b-col>
        Result
        <div id="osx"></div>
      </b-col>
      <b-col>
        Source
        <pre class="hljs"><code class="js">new Shell('#shell', {
  user: 'guest',
  host: 'MacBook-Pro',
  style: 'osx',
  commands: ['sudo rm -rf /*']
})</code></pre>
      </b-col>
    </b-row>
    <b-row><b-col><h4>Light</h4></b-col></b-row>
    <b-row>
      <b-col>
        Result
        <div id="osx-light"></div>
      </b-col>
      <b-col>
        Source
        <pre class="hljs"><code class="js">new Shell('#shell', {
  user: 'guest',
  host: 'MacBook-Pro',
  style: 'osx',
  theme: 'light',
  commands: ['sudo rm -rf /*']
})</code></pre>
      </b-col>
    </b-row>
    <b-row><b-col><h3>Ubuntu</h3></b-col></b-row>
    <b-row><b-col><h4>Dark</h4></b-col></b-row>
    <b-row>
      <b-col>
        Result
        <div id="ubuntu"></div>
      </b-col>
      <b-col>
        Source
        <pre class="hljs"><code class="js">new Shell('#shell', {
  user: 'guest',
  host: 'localhost',
  style: 'ubuntu',
  commands: ['sudo rm -rf /*']
})</code></pre>
      </b-col>
    </b-row>
    <b-row><b-col><h4>Light</h4></b-col></b-row>
    <b-row>
      <b-col>
        Result
        <div id="ubuntu-light"></div>
      </b-col>
      <b-col>
        Source
        <pre class="hljs"><code class="js">new Shell('#shell', {
  user: 'guest',
  host: 'localhost',
  style: 'ubuntu',
  theme: 'light',
  commands: ['sudo rm -rf /*']
})</code></pre>
      </b-col>
    </b-row>
    <b-row><b-col><h3>Windows</h3></b-col></b-row>
    <b-row>
      <b-col>
        Result
        <div id="windows"></div>
      </b-col>
      <b-col>
        Source
        <pre class="hljs"><code class="js">new Shell('#shell', {
  style: 'windows',
  commands: ['sudo rm -rf /*']
})</code></pre>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Typed from 'typed.js'
  import Shell from 'shell.js'
  import hljs from 'highlight.js'
  import 'highlight.js/styles/agate.css'

  export default {
    name: 'examples',
    data () {
      return {}
    },
    mounted () {
      hljs.initHighlighting()
      let shells = [
        new Shell('#default', {
          user: 'guest',
          commands: ['sudo rm -rf /*']
        }),
        new Shell('#default-light', {
          user: 'guest',
          theme: 'light',
          commands: ['sudo rm -rf /*']
        }),
        new Shell('#osx', {
          user: 'guest',
          host: 'MacBook-Pro',
          style: 'osx',
          commands: ['sudo rm -rf /*']
        }),
        new Shell('#osx-light', {
          user: 'guest',
          host: 'MacBook-Pro',
          style: 'osx',
          theme: 'light',
          commands: ['sudo rm -rf /*']
        }),
        new Shell('#ubuntu', {
          user: 'guest',
          host: 'localhost',
          style: 'ubuntu',
          commands: ['sudo rm -rf /*']
        }),
        new Shell('#ubuntu-light', {
          user: 'guest',
          host: 'localhost',
          style: 'ubuntu',
          theme: 'light',
          commands: ['sudo rm -rf /*']
        }),
        new Shell('#windows', {
          style: 'windows',
          commands: ['sudo rm -rf /*']
        })
      ]
      shells || Typed
    }
  }
</script>

<style scoped>
  .shell {
    width: 100%;
    margin: auto;
  }
</style>