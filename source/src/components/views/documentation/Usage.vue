<template>
  <div class="documentation__section documentation__section--usage">
    <h1 class="title is-spaced">Usage</h1>
    <h2 class="subtitle">How to initialize a <strong>shell.js</strong> instance.</h2>
    <hr>
    <h3 class="title">Init</h3>
    <div class="media">
      <div class="media-left">
        <h4 class="subtitle">1.</h4>
      </div>
      <div class="media-content">
        <h4 class="subtitle">Create the HTML element:</h4>
        <pre v-highlightjs><code class="html">&lt;div id="awesome-shell"&gt;&lt;/div&gt;</code></pre>
      </div>
    </div>
    <div class="media">
      <div class="media-left">
        <h4 class="subtitle">2.</h4>
      </div>
      <div class="media-content">
        <h4 class="subtitle">Initialize <strong>shell.js</strong>:</h4>
        <pre v-highlightjs><code class="javascript">document.addEventListener('DOMContentLoaded', function() {
    let shell = new Shell('#awesome-shell');
});</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentationUsage'
}
</script>
