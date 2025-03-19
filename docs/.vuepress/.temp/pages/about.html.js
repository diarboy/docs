import comp from "/home/diarboy/docs/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"About Me\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"About Me\"},\"headers\":[{\"level\":2,\"title\":\"🌟 What You'll Find Here\",\"slug\":\"🌟-what-you-ll-find-here\",\"link\":\"#🌟-what-you-ll-find-here\",\"children\":[]},{\"level\":2,\"title\":\"🎭 A Bit More About Me\",\"slug\":\"🎭-a-bit-more-about-me\",\"link\":\"#🎭-a-bit-more-about-me\",\"children\":[]},{\"level\":2,\"title\":\"📬 Let's Connect!\",\"slug\":\"📬-let-s-connect\",\"link\":\"#📬-let-s-connect\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"about.md\"}")
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
