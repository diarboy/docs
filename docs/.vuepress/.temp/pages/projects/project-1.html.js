import comp from "/home/diarboy/docs/docs/.vuepress/.temp/pages/projects/project-1.html.vue"
const data = JSON.parse("{\"path\":\"/projects/project-1.html\",\"title\":\"Project 1\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Project 1\"},\"headers\":[{\"level\":2,\"title\":\"GH Page\",\"slug\":\"gh-page\",\"link\":\"#gh-page\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"projects/project-1.md\"}")
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
