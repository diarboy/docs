import comp from "/home/diarboy/docs/docs/.vuepress/.temp/pages/projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/projects/\",\"title\":\"Projects\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Projects\"},\"headers\":[{\"level\":2,\"title\":\"📌 GH Page\",\"slug\":\"📌-gh-page\",\"link\":\"#📌-gh-page\",\"children\":[]},{\"level\":2,\"title\":\"📌 Vercel App\",\"slug\":\"📌-vercel-app\",\"link\":\"#📌-vercel-app\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"projects/README.md\"}")
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
