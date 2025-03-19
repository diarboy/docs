import comp from "/home/diarboy/docs/docs/.vuepress/.temp/pages/projects/project-2.html.vue"
const data = JSON.parse("{\"path\":\"/projects/project-2.html\",\"title\":\"Project 2\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Project 2\"},\"headers\":[{\"level\":2,\"title\":\"🌐 Vercel App\",\"slug\":\"🌐-vercel-app\",\"link\":\"#🌐-vercel-app\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"projects/project-2.md\"}")
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
