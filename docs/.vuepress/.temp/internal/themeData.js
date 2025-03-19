export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"About\",\"link\":\"/about.html\"},{\"text\":\"More\",\"children\":[{\"text\":\"Blog\",\"link\":\"/blog/\"},{\"text\":\"Projects\",\"link\":\"/projects/\"}]}],\"sidebar\":{\"/blog/\":[{\"text\":\"Blog Posts\",\"collapsible\":true,\"children\":[\"/blog/README.md\",\"/blog/first-post.md\",\"/blog/second-post.md\"]}],\"/projects/\":[{\"text\":\"My Projects\",\"collapsible\":true,\"children\":[\"/projects/README.md\",\"/projects/project-1.md\",\"/projects/project-2.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
