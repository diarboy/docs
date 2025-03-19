import comp from "/home/diarboy/docs/docs/.vuepress/.temp/pages/blog/second-post.html.vue"
const data = JSON.parse("{\"path\":\"/blog/second-post.html\",\"title\":\"Meningkatkan Performa VuePress dengan Lazy Loading\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Meningkatkan Performa VuePress dengan Lazy Loading\"},\"headers\":[{\"level\":2,\"title\":\"📌 Contoh Lazy Loading di VuePress\",\"slug\":\"📌-contoh-lazy-loading-di-vuepress\",\"link\":\"#📌-contoh-lazy-loading-di-vuepress\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blog/second-post.md\"}")
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
