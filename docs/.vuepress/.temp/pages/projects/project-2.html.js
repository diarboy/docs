import comp from "/home/diarboy/docs/docs/.vuepress/.temp/pages/projects/project-2.html.vue"
const data = JSON.parse("{\"path\":\"/projects/project-2.html\",\"title\":\"Website Portofolio Interaktif\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Website Portofolio Interaktif\"},\"headers\":[{\"level\":2,\"title\":\"✨ Fitur:\",\"slug\":\"✨-fitur\",\"link\":\"#✨-fitur\",\"children\":[]},{\"level\":2,\"title\":\"🔗 Link Demo:\",\"slug\":\"🔗-link-demo\",\"link\":\"#🔗-link-demo\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"projects/project-2.md\"}")
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
