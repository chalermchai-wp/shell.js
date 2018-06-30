<template>
  <b-container id="documentation">
    <b-row>
      <b-col>
        <h1>Get started</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>Install</h3>
        <p>You can get the latest version of Shell.js with the commonest package managers <strong>Yarn</strong>, <strong>NPM</strong> and <strong>Bower</strong>:</p>
        <pre class="hljs"><code class="bash">yarn add shell.js
# or with NPM
npm install shell.js --save
# or with Bower
bower install shell.js --save</code></pre>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>Import</h3>
        <p>Then if you are using module bundlers such as Webpack you have to import the library:</p>
        <pre class="hljs"><code class="js">import Shell from 'shell.js'</code></pre>
        <p>Or simply include the library through a script tag:</p>
        <pre class="hljs"><code class="html">&lt;script src="path/to/shell.js/lib/shell.min.js"&gt;&lt;/script&gt;</code></pre>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>Use</h3>
        <p>Finally create your HTML element and initialize Shell.js:</p>
        <pre class="hljs"><code class="html">&lt;div id="awesome-shell"&gt;&lt;/div&gt;
&lt;script&gt;
  document.addEventListener('DOMContentLoaded', function() {
    let shell = new Shell('#awesome-shell', {
        user: 'foobar',
        host: 'MacMini',
        path: '~',
        style: 'osx',
        theme: 'dark',
        responsive: false,
        commands: ['First command', 'Second command', '...']
    });
  });
&lt;/script&gt;</code></pre>
        <p>
          If you want to use the <a href="http://www.mattboldt.com/demos/typed-js/" target="_blank" rel="nofollow">Typed.js</a>
          integration the code will be like the following:
        </p>
        <pre class="hljs"><code class="html">&lt;div id="awesome-shell"&gt;&lt;/div&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.6/typed.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  document.addEventListener('DOMContentLoaded', function() {
    let shell = new Shell('#awesome-shell', {
        typed: Typed
        // ...
    });
  });
&lt;/script&gt;</code></pre>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>Options</h3>
        <p>Here the list of options to customize your shell:</p>
        <b-table striped hover :items="items"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import hljs from 'highlight.js'
  import 'highlight.js/styles/agate.css'
  export default {
    name: 'documentation',
    data () {
      return {
        items: [
          {
            Property: 'user',
            Description: 'Current user',
            'Value type': 'string',
            'Possible values': '*',
            Default: 'user'
          },
          {
            Property: 'host',
            Description: 'Host name',
            'Value type': 'string',
            'Possible values': '*',
            Default: 'host'
          },
          {
            Property: 'path',
            Description: 'Current directory',
            'Value type': 'string',
            'Possible values': '*',
            Default: '~'
          },
          {
            Property: 'style',
            Description: 'Operating system',
            'Value type': 'string',
            'Possible values': 'default | osx | ubuntu | windows',
            Default: 'default'
          },
          {
            Property: 'theme',
            Description: 'Dark or light theme',
            'Value type': 'string',
            'Possible values': 'dark | light',
            Default: 'dark'
          },
          {
            Property: 'typed',
            Description: 'Add Typed.js integration',
            'Value type': 'boolean | function',
            'Possible values': 'false | Typed instance',
            Default: 'false'
          },
          {
            Property: 'responsive',
            Description: 'Fluid shell',
            'Value type': 'boolean',
            'Possible values': 'true | false',
            Default: 'false'
          },
          {
            Property: 'commands',
            Description: 'List of commands to execute',
            'Value type': 'array',
            'Possible values': '*',
            Default: '[]'
          },
          {
            Property: 'root',
            Description: 'Admin user or normal user',
            'Value type': 'boolean',
            'Possible values': 'true | false',
            Default: 'false'
          }
        ]
      }
    },
    mounted () {
      this.highlight()
    },
    methods: {
      highlight: () => {
        hljs.initHighlighting()
      }
    }
  }
</script>
