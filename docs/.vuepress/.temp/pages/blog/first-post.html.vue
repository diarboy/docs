<template><div><h1 id="🎨-membuat-animasi-halus-di-vue-js" tabindex="-1"><a class="header-anchor" href="#🎨-membuat-animasi-halus-di-vue-js"><span>🎨 Membuat Animasi Halus di Vue.js</span></a></h1>
<p>Animasi dalam sebuah aplikasi sangat penting untuk meningkatkan pengalaman pengguna. Pada artikel ini, kita akan membahas bagaimana menggunakan <strong>Vue Transition</strong> untuk animasi yang halus.</p>
<h2 id="📌-contoh-animasi-fading" tabindex="-1"><a class="header-anchor" href="#📌-contoh-animasi-fading"><span>📌 Contoh Animasi Fading</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Halo, saya muncul dengan efek fade!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.fade-enter-active, .fade-leave-active</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.5s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.fade-enter, .fade-leave-to</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


