<template>
  <div class="default-container">
    <h1 class="title is-spaced">Customization</h1>
    <h2 class="subtitle">Customize <strong>shell.js</strong> as you desire using its parameters.</h2>
    <hr>
    <h3 id="user" class="title">User</h3>
    <h4 class="subtitle">The logged user of the shell session.</h4>
    <div class="media">
      <div class="media-content">
        <article class="message is-info">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Default value is <strong>"user"</strong>.
              </div>
            </div>
          </section>
        </article>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Value should be of type <em>string</em>.
              </div>
            </div>
          </section>
        </article>
        <pre v-highlightjs><code class="javascript">// Example:
new Shell("#awesome-shell", {
  user: 'guest'
});</code></pre>
      </div>
    </div>
    <hr>
    <h3 id="host" class="title">Host</h3>
    <h4 class="subtitle">The host of the shell session.</h4>
    <div class="media">
      <div class="media-content">
        <article class="message is-info">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Default value is <strong>"host"</strong>.
              </div>
            </div>
          </section>
        </article>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Value should be of type <em>string</em>.
              </div>
            </div>
          </section>
        </article>
        <pre v-highlightjs><code class="javascript">// Example:
new Shell("#awesome-shell", {
  host: "example.com"
});</code></pre>
      </div>
    </div>
    <hr>
    <h3 id="path" class="title">Path</h3>
    <h4 class="subtitle">The working directory of the shell session.</h4>
    <div class="media">
      <div class="media-content">
        <article class="message is-info">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Default value is <strong>"~"</strong> OR <strong>"C:\Windows\system32\"</strong> (for Windows <a href="#style">
                style</a>).
              </div>
            </div>
          </section>
        </article>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Value should be of type <em>string</em>.
              </div>
            </div>
          </section>
        </article>
        <pre v-highlightjs><code class="javascript">// Example:
new Shell("#awesome-shell", {
  path: "/var/www"
});</code></pre>
      </div>
    </div>
    <hr>
    <h3 id="style" class="title">Style</h3>
    <h4 class="subtitle">Choose the style of the shell by one of the most popular OSs.</h4>
    <div class="media">
      <div class="media-content">
        <article class="message is-info">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Default value is <strong>"default"</strong>.
              </div>
            </div>
          </section>
        </article>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Value should be of type <em>string</em> and must be one of <strong>"default"</strong>, <strong>"osx"</strong>, <strong>"ubuntu"</strong>, <strong>"windows"</strong>.
              </div>
            </div>
          </section>
        </article>
        <pre v-highlightjs><code class="javascript">// Example:
new Shell("#awesome-shell", {
  style: "ubuntu"
});</code></pre>
      </div>
    </div>
    <hr>
    <h3 id="theme" class="title">Theme</h3>
    <h4 class="subtitle">Go to the dark or the light side.</h4>
    <div class="media">
      <div class="media-content">
        <article class="message is-info">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Default value is <strong>"dark"</strong>.
              </div>
            </div>
          </section>
        </article>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Value should be of type <em>string</em> and must be one of <strong>"light"</strong>, <strong>"dark"</strong>.
              </div>
            </div>
          </section>
        </article>
        <pre v-highlightjs><code class="javascript">// Example:
new Shell("#awesome-shell", {
  theme: "light"
});</code></pre>
      </div>
    </div>
    <hr>
    <h3 id="responsive" class="title">Responsive</h3>
    <h4 class="subtitle">Adapt size to the needs.</h4>
    <div class="media">
      <div class="media-content">
        <article class="message is-info">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Default value is <strong>true</strong>.
              </div>
            </div>
          </section>
        </article>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Value must be of type <em>boolean</em>.
              </div>
            </div>
          </section>
        </article>
        <pre v-highlightjs><code class="javascript">// Example:
new Shell("#awesome-shell", {
  responsive: false
});</code></pre>
      </div>
    </div>
    <hr>
    <h3 id="commands" class="title">Commands</h3>
    <h4 class="subtitle">List of shell commands.</h4>
    <div class="media">
      <div class="media-content">
        <article class="message is-info">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Default value is <strong>[]</strong>.
              </div>
            </div>
          </section>
        </article>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Value must be of type <em>array</em>.
              </div>
            </div>
          </section>
        </article>
        <pre v-highlightjs><code class="javascript">// Example:
new Shell("#awesome-shell", {
  commands: ["this is the first commands", "and this is the second"]
});</code></pre>
      </div>
    </div>
    <hr>
    <h3 id="typed" class="title">Typed</h3>
    <h4 class="subtitle">Use the <a href="https://github.com/mattboldt/typed.js/" target="_blank">Typed.js</a> integration to make your shell alive.</h4>
    <div class="media">
      <div class="media-content">
        <article class="message is-info">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Default value is <strong>null</strong>.
              </div>
            </div>
          </section>
        </article>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Value must be an instance of <em>Typed</em>.
              </div>
            </div>
          </section>
        </article>
        <pre v-highlightjs><code class="javascript">// Example:
import * as Typed from "typed.js";
new Shell("#awesome-shell", {
    typed: Typed
});</code></pre>
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
