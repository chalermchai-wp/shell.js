<template>
  <section id="documentation">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container"><p class="title">Documentation</p>
          <p class="subtitle">Let's deep into the instructions to use <strong>shell.js</strong></p></div>
      </div>
    </div>

    <main class="main">
      <section class="section">
        <div class="container is-fullhd template-horizontal">
          <AsideMenu/>
          <Content />
        </div>
      </section>
    </main>
  </section>
  <!--<b-container id="documentation">-->
  <!--<b-row>-->
  <!--<b-col>-->
  <!--<h1>Get started</h1>-->
  <!--</b-col>-->
  <!--</b-row>-->
  <!--<b-row>-->
  <!--<b-col>-->
  <!--<h3>Install</h3>-->
  <!--<p>You can get the latest version of Shell.js with the commonest package managers <strong>Yarn</strong>, <strong>NPM</strong> and <strong>Bower</strong>:</p>-->
  <!--<pre class="hljs"><code class="bash">yarn add shell.js-->
  <!--# or with NPM-->
  <!--npm install shell.js &#45;&#45;save-->
  <!--# or with Bower-->
  <!--bower install shell.js &#45;&#45;save</code></pre>-->
  <!--</b-col>-->
  <!--</b-row>-->
  <!--<b-row>-->
  <!--<b-col>-->
  <!--<h3>Import</h3>-->
  <!--<p>Then if you are using module bundlers such as Webpack you have to import the library:</p>-->
  <!--<pre class="hljs"><code class="js">import Shell from 'shell.js'</code></pre>-->
  <!--<p>Or simply include the library through a script tag:</p>-->
  <!--<pre class="hljs"><code class="html">&lt;script src="path/to/shell.js/lib/shell.min.js"&gt;&lt;/script&gt;</code></pre>-->
  <!--</b-col>-->
  <!--</b-row>-->
  <!--<b-row>-->
  <!--<b-col>-->
  <!--<h3>Use</h3>-->
  <!--<p>Finally create your HTML element and initialize Shell.js:</p>-->
  <!--<pre class="hljs"><code class="html">&lt;div id="awesome-shell"&gt;&lt;/div&gt;-->
  <!--&lt;script&gt;-->
  <!--document.addEventListener('DOMContentLoaded', function() {-->
  <!--let shell = new Shell('#awesome-shell', {-->
  <!--user: 'foobar',-->
  <!--host: 'MacMini',-->
  <!--path: '~',-->
  <!--style: 'osx',-->
  <!--theme: 'dark',-->
  <!--responsive: false,-->
  <!--commands: ['First command', 'Second command', '...']-->
  <!--});-->
  <!--});-->
  <!--&lt;/script&gt;</code></pre>-->
  <!--<p>-->
  <!--If you want to use the <a href="http://www.mattboldt.com/demos/typed-js/" target="_blank" rel="nofollow">Typed.js</a>-->
  <!--integration the code will be like the following:-->
  <!--</p>-->
  <!--<pre class="hljs"><code class="html">&lt;div id="awesome-shell"&gt;&lt;/div&gt;-->
  <!--&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.6/typed.min.js"&gt;&lt;/script&gt;-->
  <!--&lt;script&gt;-->
  <!--document.addEventListener('DOMContentLoaded', function() {-->
  <!--let shell = new Shell('#awesome-shell', {-->
  <!--typed: Typed-->
  <!--// ...-->
  <!--});-->
  <!--});-->
  <!--&lt;/script&gt;</code></pre>-->
  <!--</b-col>-->
  <!--</b-row>-->
  <!--<b-row>-->
  <!--<b-col>-->
  <!--<h3>Options</h3>-->
  <!--<p>Here the list of options to customize your shell:</p>-->
  <!--<b-table striped hover :items="items"></b-table>-->
  <!--</b-col>-->
  <!--</b-row>-->
  <!--</b-container>-->
</template>

<script>
  import AsideMenu from '@/components/Documentation/AsideMenu'
  import Content from '@/components/Documentation/Content'
  import hljs from 'highlight.js'
  import 'highlight.js/styles/agate.css'

  export default {
    name: 'documentation',
    components: {Content, AsideMenu},
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

<style scoped lang="scss">
  .sidebar {
    min-width: 16rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-right: .5rem;
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
    overflow: auto;
    max-height: calc(100vh - 2rem);
  }

  .template-horizontal {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex: 1;
    flex: 1;

    .default-container {
      padding-left: 3rem;
      padding-top: 3rem;
      padding-bottom: 3rem;
      overflow: hidden;
      width: 100%;
      background: #FFFFFF;
    }
  }
</style>
