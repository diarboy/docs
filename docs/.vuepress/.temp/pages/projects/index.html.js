import comp from "/home/diarboy/docs/docs/.vuepress/.temp/pages/projects/index.html.vue"
const data = JSON.parse("{\"path\":\"/projects/\",\"title\":\"Projects\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Projects\"},\"headers\":[{\"level\":2,\"title\":\"📌 Sistem Manajemen Tugas\",\"slug\":\"📌-sistem-manajemen-tugas\",\"link\":\"#📌-sistem-manajemen-tugas\",\"children\":[]},{\"level\":2,\"title\":\"📌 Website Portofolio Interaktif\",\"slug\":\"📌-website-portofolio-interaktif\",\"link\":\"#📌-website-portofolio-interaktif\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"projects/README.md\"}")
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
