import comp from "/home/diarboy/docs/docs/.vuepress/.temp/pages/blog/first-post.html.vue"
const data = JSON.parse("{\"path\":\"/blog/first-post.html\",\"title\":\"Page\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Routing\",\"slug\":\"routing\",\"link\":\"#routing\",\"children\":[]},{\"level\":2,\"title\":\"Frontmatter\",\"slug\":\"frontmatter\",\"link\":\"#frontmatter\",\"children\":[]},{\"level\":2,\"title\":\"Content\",\"slug\":\"content\",\"link\":\"#content\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blog/first-post.md\"}")
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
