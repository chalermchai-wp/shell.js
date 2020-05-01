<template>
  <div class="documentation__section documentation__section--parameters">
    <h1 class="title is-spaced">Customization</h1>
    <h2 class="subtitle">How to customize <strong>shell.js</strong>.</h2>
    <hr>
    <h3 id="user" class="title">User</h3>
    <h4 class="subtitle">The logged user of the terminal.</h4>
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
                Value type must be <em>string</em>.
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
    <h4 class="subtitle">The host of the terminal.</h4>
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
                Value type must be <em>string</em>.
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
    <h4 class="subtitle">The working directory of the terminal.</h4>
    <div class="media">
      <div class="media-content">
        <article class="message is-info">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Default value is <strong>"~"</strong> OR <strong>"C:\Windows\system32\"</strong>.
              </div>
            </div>
          </section>
        </article>
        <article class="message is-warning">
          <section class="message-body">
            <div class="media">
              <div class="media-content">
                Value type must be <em>string</em>.
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
    <h4 class="subtitle">Choose the operating system style of the terminal.</h4>
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
                Value type must be <em>string</em> and must be one of <strong>"default"</strong>, <strong>"osx"</strong>, <strong>"ubuntu"</strong>, <strong>"windows"</strong>.
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
    <h4 class="subtitle">Choose between the dark and the light side.</h4>
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
                Value type must be <em>string</em> and must be one of <strong>"light"</strong>, <strong>"dark"</strong>.
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
                Value type must be <em>boolean</em>.
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
    <h4 class="subtitle">List of terminal commands.</h4>
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
                Value type must be <em>array</em>.
              </div>
            </div>
          </section>
        </article>
        <pre v-highlightjs><code class="javascript">// Example:
new Shell("#awesome-shell", {
  commands: [
    "simple string command",
    {"input": "input command", "output": "simple output"},
    {"input": "input command", "output": ["first output line", "second output line"]},
  ]
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
                Value must be <em>Typed</em> callable OR <em>null</em>.
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
  name: 'DocumentationParameters'
}
</script>
