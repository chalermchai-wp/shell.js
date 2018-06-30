<template>
  <div class="default-container">
    <h1 class="title is-spaced">Start</h1>
    <h2 class="subtitle">How to install <strong>shell.js</strong></h2>
    <hr>
    <h3 class="title">Install</h3>
    <div class="media">
      <div class="media-left">
        <h3 class="subtitle">1</h3>
      </div>
      <div class="media-content">
        <h3 class="subtitle">Use <b>Yarn</b> <em>(recommended)</em>:</h3>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                You need <a href="https://yarnpkg.com/en/" target="_blank">yarn</a> to be installed.
              </div>
            </div>
          </section>
        </article>
        <pre class="hljs"><code class="bash">yarn add shell.js</code></pre>
      </div>
    </div>
    <div class="media">
      <div class="media-left">
        <h3 class="subtitle">2</h3>
      </div>
      <div class="media-content">
        <h3 class="subtitle">Use <b>NPM</b>:</h3>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                You need <a href="https://www.npmjs.com/get-npm" target="_blank">npm</a> installed.
              </div>
            </div>
          </section>
        </article>
        <pre class="hljs"><code class="bash">npm install shell.js</code></pre>
      </div>
    </div>
    <!--<div class="media">
      <div class="media-left"><h3 class="subtitle">3</h3></div>
      <div class="media-content"><h3 class="subtitle">Use unpkg <b>CDN</b> (or download):</h3>
        <div class="content">
          <p><a href="https://unpkg.com/shell.js" target="_blank">https://unpkg.com/shell.js</a></p>
          <p>CSS</p>
        </div>
      </div>
    </div>-->
    <hr>
    <h3 class="title">Usage</h3>
    <div class="media">
      <div class="media-left"><h3 class="subtitle">1</h3></div>
      <div class="media-content">
        <h3 class="subtitle">Module:</h3>
        <pre class="hljs"><code class="javascript">import Shell from 'shell.js'</code></pre>
      </div>
    </div>
    <hr>
    <div class="media">
      <div class="media-left"><h3 class="subtitle">2</h3></div>
      <div class="media-content"><h3 class="subtitle">External script:</h3>
        <pre class="hljs"><code class="html xml">&lt;script src="path/to/shell.js/lib/shell.min.js"&gt;&lt;/script&gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Content'
  }
</script>

<style scoped>

</style>
