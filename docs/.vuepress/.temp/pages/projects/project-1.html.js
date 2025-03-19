import comp from "/home/diarboy/docs/docs/.vuepress/.temp/pages/projects/project-1.html.vue"
const data = JSON.parse("{\"path\":\"/projects/project-1.html\",\"title\":\"Sistem Manajemen Tugas\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Sistem Manajemen Tugas\"},\"headers\":[{\"level\":2,\"title\":\"✨ Fitur:\",\"slug\":\"✨-fitur\",\"link\":\"#✨-fitur\",\"children\":[]},{\"level\":2,\"title\":\"🔗 Link Demo:\",\"slug\":\"🔗-link-demo\",\"link\":\"#🔗-link-demo\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"projects/project-1.md\"}")
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
