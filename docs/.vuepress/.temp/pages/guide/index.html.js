import comp from "/home/diarboy/docs/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"Getting Started\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Installation\",\"slug\":\"installation\",\"link\":\"#installation\",\"children\":[{\"level\":3,\"title\":\"Prerequisites\",\"slug\":\"prerequisites\",\"link\":\"#prerequisites\",\"children\":[]},{\"level\":3,\"title\":\"Project Setup\",\"slug\":\"project-setup\",\"link\":\"#project-setup\",\"children\":[]}]},{\"level\":2,\"title\":\"Directory Structure\",\"slug\":\"directory-structure\",\"link\":\"#directory-structure\",\"children\":[]},{\"level\":2,\"title\":\"Work with VuePress\",\"slug\":\"work-with-vuepress\",\"link\":\"#work-with-vuepress\",\"children\":[{\"level\":3,\"title\":\"Start Dev Server\",\"slug\":\"start-dev-server\",\"link\":\"#start-dev-server\",\"children\":[]},{\"level\":3,\"title\":\"Build Your Site\",\"slug\":\"build-your-site\",\"link\":\"#build-your-site\",\"children\":[]}]},{\"level\":2,\"title\":\"Learn More about VuePress\",\"slug\":\"learn-more-about-vuepress\",\"link\":\"#learn-more-about-vuepress\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/README.md\"}")
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
