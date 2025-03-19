export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/diarboy/docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/diarboy/docs/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About Me"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/home/diarboy/docs/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"Introduction"} }],
  ["/blog/first-post.html", { loader: () => import(/* webpackChunkName: "blog_first-post.html" */"/home/diarboy/docs/docs/.vuepress/.temp/pages/blog/first-post.html.js"), meta: {"title":"Page"} }],
  ["/blog/second-post.html", { loader: () => import(/* webpackChunkName: "blog_second-post.html" */"/home/diarboy/docs/docs/.vuepress/.temp/pages/blog/second-post.html.js"), meta: {"title":"Meningkatkan Performa VuePress dengan Lazy Loading"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/home/diarboy/docs/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Getting Started"} }],
  ["/projects/", { loader: () => import(/* webpackChunkName: "projects_index.html" */"/home/diarboy/docs/docs/.vuepress/.temp/pages/projects/index.html.js"), meta: {"title":"Projects"} }],
  ["/projects/project-1.html", { loader: () => import(/* webpackChunkName: "projects_project-1.html" */"/home/diarboy/docs/docs/.vuepress/.temp/pages/projects/project-1.html.js"), meta: {"title":"Sistem Manajemen Tugas"} }],
  ["/projects/project-2.html", { loader: () => import(/* webpackChunkName: "projects_project-2.html" */"/home/diarboy/docs/docs/.vuepress/.temp/pages/projects/project-2.html.js"), meta: {"title":"Website Portofolio Interaktif"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/diarboy/docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
