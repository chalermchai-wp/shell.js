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
import Shell from '../../../node_modules/shell.js/lib/shell'

export default {
  name: 'examples',
  mounted () {
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

<style lang="scss" scoped>
  @import "../../style/config";

  .content {
    padding: 2rem 0 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: stretch;

    .shell {
      margin: 1em;
    }
  }
</style>
