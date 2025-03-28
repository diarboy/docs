<template><div><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h1>
<p>VuePress is a markdown-centered static site generator. You can write your content (documentations, blogs, etc.) in <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noopener noreferrer">Markdown</a>, then VuePress will help you to generate a static site to host them.</p>
<p>The purpose of creating VuePress was to support the documentation of Vue.js and its sub-projects, but now it has been helping a large amount of users to build their documentation, blogs, and other static sites.</p>
<h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works"><span>How It Works</span></a></h2>
<p>A VuePress site is in fact a single-page application (SPA) powered by <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue</a> and <a href="https://router.vuejs.org" target="_blank" rel="noopener noreferrer">Vue Router</a>.</p>
<p>Routes are generated according to the relative path of your markdown files. Each Markdown file is compiled into HTML with <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a> and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.</p>
<p>During development, we start a normal dev-server, and serve the VuePress site as a normal SPA. If you’ve used Vue before, you will notice the familiar development experience when you are writing and developing with VuePress.</p>
<p>During build, we create a server-rendered version of the VuePress site and render the corresponding HTML by virtually visiting each route. This approach is inspired by <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt</a>'s <code v-pre>nuxt generate</code> command and other projects like <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>.</p>
<h2 id="why-not" tabindex="-1"><a class="header-anchor" href="#why-not"><span>Why Not ...?</span></a></h2>
<h3 id="nuxt" tabindex="-1"><a class="header-anchor" href="#nuxt"><span>Nuxt</span></a></h3>
<p>Nuxt is an outstanding Vue SSR framework, and it is capable of doing what VuePress does. But Nuxt is designed for building applications, while VuePress is more lightweight and focused on content-centric static sites.</p>
<h3 id="vitepress" tabindex="-1"><a class="header-anchor" href="#vitepress"><span>VitePress</span></a></h3>
<p>VitePress is the little brother of VuePress. It's also created and maintained by our Vue.js team. It's even more lightweight and faster than VuePress. However, as a tradeoff, it's more opinionated and less configurable. For example, it does not support plugins. But VitePress is powerful enough to make your content online if you don't need advanced customizations.</p>
<p>It might not be an appropriate comparison, but you can take VuePress and VitePress as Laravel and Lumen.</p>
<h3 id="docsify-docute" tabindex="-1"><a class="header-anchor" href="#docsify-docute"><span>Docsify / Docute</span></a></h3>
<p>Both are great projects and also Vue-powered. Except they are both fully runtime-driven and therefore not SEO-friendly. If you don’t care for SEO and don’t want to mess with installing dependencies, these are still great choices.</p>
<h3 id="hexo" tabindex="-1"><a class="header-anchor" href="#hexo"><span>Hexo</span></a></h3>
<p>Hexo has been serving the Vue 2.x docs well. The biggest problem is that its theming system is static and string-based - we want to take advantage of Vue for both the layout and the interactivity. Also, Hexo’s Markdown rendering isn’t the most flexible to configure.</p>
<h3 id="gitbook" tabindex="-1"><a class="header-anchor" href="#gitbook"><span>GitBook</span></a></h3>
<p>We’ve been using GitBook for most of our sub project docs. The primary problem with GitBook is that its development reload performance is intolerable with a large amount of files. The default theme also has a pretty limiting navigation structure, and the theming system is, again, not Vue based. The team behind GitBook is also more focused on turning it into a commercial product rather than an open-source tool.</p>
</div></template>


