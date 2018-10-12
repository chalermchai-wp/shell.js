<template>
  <div class="documentation__section documentation__section--start">
    <h1 class="title is-spaced">Start</h1>
    <h2 class="subtitle">How to install <strong>shell.js</strong></h2>
    <hr>
    <h3 class="title">Install</h3>
    <div class="media">
      <div class="media-left">
        <h4 class="subtitle">1.</h4>
      </div>
      <div class="media-content">
        <h4 class="subtitle">Use <b>Yarn</b> <em>(recommended)</em>:</h4>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                You need <a href="https://yarnpkg.com/en/" target="_blank">yarn</a> to be installed.
              </div>
            </div>
          </section>
        </article>
        <pre v-highlightjs><code class="bash">yarn add shell.js</code></pre>
      </div>
    </div>
    <div class="media">
      <div class="media-left">
        <h4 class="subtitle">2.</h4>
      </div>
      <div class="media-content">
        <h4 class="subtitle">Use <b>NPM</b>:</h4>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                You need <a href="https://www.npmjs.com/get-npm" target="_blank">npm</a> installed.
              </div>
            </div>
          </section>
        </article>
        <pre v-highlightjs><code class="bash">npm install shell.js</code></pre>
      </div>
    </div>
    <div class="media">
      <div class="media-left">
        <h4 class="subtitle">3.</h4>
      </div>
      <div class="media-content">
        <h4 class="subtitle">Use <b>CDN</b>:</h4>
        <p>
          <a href="https://cdn.jsdelivr.net/npm/shell.js/lib/shell.min.js"
             target="_blank">Download</a>
        </p>
      </div>
    </div>
    <hr>
    <h3 class="title">Use</h3>
    <div class="media">
      <div class="media-left"><h4 class="subtitle">1.</h4></div>
      <div class="media-content">
        <h4 class="subtitle">Module:</h4>
        <pre v-highlightjs><code class="javascript">import Shell from 'shell.js'</code></pre>
      </div>
    </div>
    <hr>
    <div class="media">
      <div class="media-left"><h4 class="subtitle">2.</h4></div>
      <div class="media-content"><h4 class="subtitle">External script:</h4>
        <pre v-highlightjs><code class="html xml">&lt;script src="path/to/shell.js/lib/shell.min.js"&gt;&lt;/script&gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentationStart'
}
</script>
