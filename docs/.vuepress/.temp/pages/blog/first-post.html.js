import comp from "/home/diarboy/docs/docs/.vuepress/.temp/pages/blog/first-post.html.vue"
const data = JSON.parse("{\"path\":\"/blog/first-post.html\",\"title\":\"Membuat Animasi Halus di Vue.js\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Membuat Animasi Halus di Vue.js\"},\"headers\":[{\"level\":2,\"title\":\"📌 Contoh Animasi Fading\",\"slug\":\"📌-contoh-animasi-fading\",\"link\":\"#📌-contoh-animasi-fading\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blog/first-post.md\"}")
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
