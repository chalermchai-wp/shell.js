<template>
  <div id="shell"></div>
</template>

<script>
import Typed from 'typed.js'
import Shell from 'shell.js'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    shell || Typed
    let shell = new Shell('#shell', {
      user: 'guest',
      host: 'davidecaruso.github.io',
      path: 'shell.js',
      theme: 'dark',
      responsive: false,
      typed: true,
      commands: ['sudo -i', 'Hello bro', 'This is an example of what you can do with Shell.js', 'Look at the examples page to see other styles', 'Or check out the doc for details', 'Stay tuned']
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #shell {
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50vw;
    height: 50vh;
  }
</style>
