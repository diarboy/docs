import comp from "/home/diarboy/docs/docs/.vuepress/.temp/pages/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/\",\"title\":\"Introduction\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"How It Works\",\"slug\":\"how-it-works\",\"link\":\"#how-it-works\",\"children\":[]},{\"level\":2,\"title\":\"Why Not ...?\",\"slug\":\"why-not\",\"link\":\"#why-not\",\"children\":[{\"level\":3,\"title\":\"Nuxt\",\"slug\":\"nuxt\",\"link\":\"#nuxt\",\"children\":[]},{\"level\":3,\"title\":\"VitePress\",\"slug\":\"vitepress\",\"link\":\"#vitepress\",\"children\":[]},{\"level\":3,\"title\":\"Docsify / Docute\",\"slug\":\"docsify-docute\",\"link\":\"#docsify-docute\",\"children\":[]},{\"level\":3,\"title\":\"Hexo\",\"slug\":\"hexo\",\"link\":\"#hexo\",\"children\":[]},{\"level\":3,\"title\":\"GitBook\",\"slug\":\"gitbook\",\"link\":\"#gitbook\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"blog/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
