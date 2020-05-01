<template>
  <section class="examples">
    <div class="examples__container">
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
        responsive: false,
        commands: ['sudo -i', 'rm -rf /', 'exit', {
          'input': 'ls -la',
          'output': [
            'total 41612',
            'drwxr-xr-x&nbsp;42 root root 4096 May 25 12:00 ./',
            'drwxr-xr-x&nbsp;&nbsp;3 root root 4096 May 25 12:00 ../',
            'drwxr-xr-x&nbsp;&nbsp;3 root root 4096 May 25 12:00 Desktop',
            'drwxr-xr-x&nbsp;&nbsp;3 root root 4096 May 25 12:00 Documents',
            'drwxr-xr-x&nbsp;&nbsp;3 root root 4096 May 25 12:00 Downloads',
            'drwxr-xr-x&nbsp;&nbsp;3 root root 4096 May 25 12:00 Music',
            'drwxr-xr-x&nbsp;&nbsp;3 root root 4096 May 25 12:00 Pictures',
            'drwxr-xr-x&nbsp;&nbsp;3 root root 4096 May 25 12:00 Videos'
          ]
        }]
      }),
      new Shell('#default-light', {
        user: 'guest',
        theme: 'light',
        responsive: false,
        commands: ['sudo -i', 'rm -rf /', 'exit']
      }),
      new Shell('#osx', {
        user: 'guest',
        host: 'MacBook-Pro',
        style: 'osx',
        responsive: false,
        commands: ['sudo -i', 'rm -rf /', 'exit']
      }),
      new Shell('#osx-light', {
        user: 'guest',
        host: 'MacBook-Pro',
        style: 'osx',
        theme: 'light',
        responsive: false,
        commands: ['sudo -i', 'rm -rf /', 'exit']
      }),
      new Shell('#ubuntu', {
        user: 'guest',
        host: 'localhost',
        style: 'ubuntu',
        responsive: false,
        commands: ['sudo -i', 'rm -rf /', 'exit']
      }),
      new Shell('#ubuntu-light', {
        user: 'guest',
        host: 'localhost',
        style: 'ubuntu',
        theme: 'light',
        responsive: false,
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

  .examples .examples__container {
    .container {
      width: 100%;
    }
    .content {
      padding: 2rem 0 0;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      align-content: stretch;
      align-items: stretch;

      .shell {
        width: 100%;
        max-width: 35vw;
        @include touch {
          max-width: initial;
          margin-bottom: 2em;
        }
      }
    }
  }
</style>
