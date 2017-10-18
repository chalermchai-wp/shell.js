<template>
  <b-container id="home">
    <b-row class="text-center">
      <b-col>
        <h1>Shell.js</h1>
        <h2>Let's create HTML terminals with pure JavaScript and CSS</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div id="shell"></div>
      </b-col>
    </b-row>
    <b-row class="text-center well">
      <b-col>
        <b-btn size="lg" variant="primary" to="/documentation">Get started</b-btn>
        <b-btn size="lg" variant="success" href="https://github.com/davidecaruso/shell.js">GitHub</b-btn>
      </b-col>
    </b-row>
  </b-container>
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
      shell || Typed
      let shell = new Shell('#shell', {
        user: 'guest',
        host: 'shell.js',
        path: '~',
        style: 'ubuntu',
        theme: 'dark',
        responsive: false,
        typed: true,
        commands: ['sudo -i', 'Hello bro', 'This is an example of what you can do with Shell.js', 'Look at the examples page to see other styles', 'Or check out the doc for details', 'Stay tuned']
      })
    }
  }
</script>

<style scoped>
  #shell {
    margin: auto;
    width: 100%;
    height: 40vh;
  }
</style>
