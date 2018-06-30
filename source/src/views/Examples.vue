<template>
  <!--<b-container id="examples">-->
    <!--<b-row><b-col><h3>Default</h3></b-col></b-row>-->
    <!--<b-row>-->
      <!--<b-col>-->
        <!--<div id="default"></div>-->
      <!--</b-col>-->
      <!--<b-col>-->
        <!--<div id="default-light"></div>-->
      <!--</b-col>-->
    <!--</b-row>-->
    <!--<b-row><b-col><h3>Mac OS X</h3></b-col></b-row>-->
    <!--<b-row>-->
      <!--<b-col>-->
        <!--<div id="osx"></div>-->
      <!--</b-col>-->
      <!--<b-col>-->
        <!--<div id="osx-light"></div>-->
      <!--</b-col>-->
    <!--</b-row>-->
    <!--<b-row><b-col><h3>Ubuntu</h3></b-col></b-row>-->
    <!--<b-row>-->
      <!--<b-col>-->
        <!--<div id="ubuntu"></div>-->
      <!--</b-col>-->
      <!--<b-col>-->
        <!--<div id="ubuntu-light"></div>-->
      <!--</b-col>-->
    <!--</b-row>-->
    <!--<b-row><b-col><h3>Windows</h3></b-col></b-row>-->
    <!--<b-row>-->
      <!--<b-col>-->
        <!--<div id="windows"></div>-->
      <!--</b-col>-->
      <!--<b-col></b-col>-->
    <!--</b-row>-->
    <!--<b-row><b-col></b-col></b-row>-->
  <!--</b-container>-->
</template>

<script>
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
      return [
        new Shell('#default', {
          user: 'guest',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        }),
        new Shell('#default-light', {
          user: 'guest',
          theme: 'light',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        }),
        new Shell('#osx', {
          user: 'guest',
          host: 'MacBook-Pro',
          style: 'osx',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        }),
        new Shell('#osx-light', {
          user: 'guest',
          host: 'MacBook-Pro',
          style: 'osx',
          theme: 'light',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        }),
        new Shell('#ubuntu', {
          user: 'guest',
          host: 'localhost',
          style: 'ubuntu',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        }),
        new Shell('#ubuntu-light', {
          user: 'guest',
          host: 'localhost',
          style: 'ubuntu',
          theme: 'light',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        }),
        new Shell('#windows', {
          style: 'windows',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        })
      ]
    }
  }
</script>

<style scoped>
  .shell {
    width: 100%;
    margin: auto;
  }
</style>
