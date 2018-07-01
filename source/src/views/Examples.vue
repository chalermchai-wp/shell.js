<template>
  <section id="examples">
    <div class="container">
      <section class="section">
        <div class="container">
          <h1 class="title">Default</h1>
          <h2 class="subtitle"></h2>

          <div class="content">
            <div id="default"></div>
            <div id="default-light"></div>
          </div>
        </div>
      </section>
      <hr />
      <section class="section">
        <div class="container">
          <h1 class="title">OSx</h1>
          <h2 class="subtitle"></h2>

          <div class="content">
            <div id="osx"></div>
            <div id="osx-light"></div>
          </div>
        </div>
      </section>
      <hr />
      <section class="section">
        <div class="container">
          <h1 class="title">Ubuntu</h1>
          <h2 class="subtitle"></h2>

          <div class="content">
            <div id="ubuntu"></div>
            <div id="ubuntu-light"></div>
          </div>
        </div>
      </section>
      <hr />
      <section class="section">
        <div class="container">
          <h1 class="title">Windows</h1>
          <h2 class="subtitle"></h2>

          <div class="content">
            <div id="windows"></div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  import Shell from 'shell.js'

  export default {
    name: 'examples',
    mounted () {
      return [
        new Shell('#default', {
          responsive: false,
          user: 'guest',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        }),
        new Shell('#default-light', {
          responsive: false,
          user: 'guest',
          theme: 'light',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        }),
        new Shell('#osx', {
          responsive: false,
          user: 'guest',
          host: 'MacBook-Pro',
          style: 'osx',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        }),
        new Shell('#osx-light', {
          responsive: false,
          user: 'guest',
          host: 'MacBook-Pro',
          style: 'osx',
          theme: 'light',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        }),
        new Shell('#ubuntu', {
          responsive: false,
          user: 'guest',
          host: 'localhost',
          style: 'ubuntu',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        }),
        new Shell('#ubuntu-light', {
          responsive: false,
          user: 'guest',
          host: 'localhost',
          style: 'ubuntu',
          theme: 'light',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        }),
        new Shell('#windows', {
          responsive: false,
          style: 'windows',
          commands: ['sudo -i', 'rm -rf /', 'exit']
        })
      ]
    }
  }
</script>

<style scoped>
  .content {
    padding: 2rem 0 0;
    display: flex;
    justify-content: space-between;
  }
  .shell {
    width: 45%;
    display: flex;
  }
</style>
