<template><div><h1 id="page" tabindex="-1"><a class="header-anchor" href="#page"><span>Page</span></a></h1>
<p>VuePress is markdown-centered. Each markdown file inside your project is a standalone page.</p>
<h2 id="routing" tabindex="-1"><a class="header-anchor" href="#routing"><span>Routing</span></a></h2>
<p>By default, the route path of a page is determined by the relative path of your markdown file.</p>
<p>Assuming this is the directory structure of your markdown files:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">└─ docs</span>
<span class="line">   ├─ guide</span>
<span class="line">   │  ├─ getting-started.md</span>
<span class="line">   │  └─ README.md</span>
<span class="line">   ├─ contributing.md</span>
<span class="line">   └─ README.md</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Take the <code v-pre>docs</code> directory as your <RouteLink to="/reference/cli.html">sourceDir</RouteLink>, e.g. you are running <code v-pre>vuepress dev docs</code> command. Then the route paths of your markdown files would be:</p>
<table>
<thead>
<tr>
<th>Relative Path</th>
<th>Route Path</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/README.md</code></td>
<td><code v-pre>/</code></td>
</tr>
<tr>
<td><code v-pre>/index.md</code></td>
<td><code v-pre>/</code></td>
</tr>
<tr>
<td><code v-pre>/contributing.md</code></td>
<td><code v-pre>/contributing.html</code></td>
</tr>
<tr>
<td><code v-pre>/guide/README.md</code></td>
<td><code v-pre>/guide/</code></td>
</tr>
<tr>
<td><code v-pre>/guide/getting-started.md</code></td>
<td><code v-pre>/guide/getting-started.html</code></td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>By default, both <code v-pre>README.md</code> and <code v-pre>index.md</code> would be converted to <code v-pre>index.html</code> and generate a slash-ending route path. However, it might cause conflicts if you want to keep both of the two files.</p>
<p>In such case, you can set the <RouteLink to="/reference/config.html#pagepatterns">pagePatterns</RouteLink> to avoid one of them being processed by VuePress, e.g. use <code v-pre>['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']</code> to exclude all <code v-pre>README.md</code> files.</p>
<p>Also, some symbols like <code v-pre>:</code> and <code v-pre>+</code> may have special meanings for vue-router, so you should avoid using them, see <a href="https://router.vuejs.org/guide/essentials/route-matching-syntax.html" target="_blank" rel="noopener noreferrer">vue-router docs</a> for more details.</p>
</div>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<p>A markdown file could contain a <a href="https://yaml.org/" target="_blank" rel="noopener noreferrer">YAML</a> frontmatter. The frontmatter must be at the top of the Markdown file and must be wrapped with a couple of triple-dashed lines. Here is a basic example:</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US</span>
<span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> Title of this page</span>
<span class="line"><span class="token key atrule">description</span><span class="token punctuation">:</span> Description of this page</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You must have noticed that those fields are similar with the <RouteLink to="/blog/configuration.html#site-config">Site Config</RouteLink> in the <RouteLink to="/blog/configuration.html#config-file">Config File</RouteLink>. You can override <code v-pre>lang</code>, <code v-pre>title</code>, <code v-pre>description</code>, etc., of current page via frontmatter. So you can take frontmatter as page scope config.</p>
<p>Also, VuePress has built-in support for some frontmatter fields, and your theme may have its own special frontmatter, too.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Check out the <RouteLink to="/reference/frontmatter.html">Frontmatter Reference</RouteLink> for a full list of VuePress built-in frontmatter.</p>
<p>Check out the <a href="https://ecosystem.vuejs.press/themes/default/frontmatter.html" target="_blank" rel="noopener noreferrer">Default Theme &gt; Frontmatter Reference</a> for the frontmatter of default theme.</p>
</div>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content"><span>Content</span></a></h2>
<p>The main content of your page is written in Markdown. VuePress will firstly transform your Markdown to HTML code, then treat the HTML code as <code v-pre>&lt;template&gt;</code> of Vue SFC.</p>
<p>With the power of <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a> and Vue template syntax, the basic Markdown can be extended a lot. Next, check out the <RouteLink to="/blog/markdown.html">Markdown</RouteLink> guide for all the extensions of Markdown in VuePress.</p>
</div></template>


