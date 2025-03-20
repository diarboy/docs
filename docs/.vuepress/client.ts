import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // ...
  },
  setup() {
    const updateFavicon = () => {
      const isDarkMode = document.documentElement.classList.contains('dark')
      const faviconUrl = isDarkMode ? '/favicon-dark.svg' : '/favicon-light.svg'
      
      console.log('Dark Mode:', isDarkMode, '| Favicon:', faviconUrl)

      let favicon = document.querySelector("link[rel='icon']")
      if (!favicon) {
        favicon = document.createElement('link')
        favicon.setAttribute('rel', 'icon')
        document.head.appendChild(favicon)
      }
      favicon.setAttribute('href', faviconUrl)
    }

    updateFavicon() // Jalankan saat pertama kali halaman dimuat

    const observer = new MutationObserver(() => {
      console.log('Dark mode class changed!')
      updateFavicon()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
  },
  rootComponents: [
    // ...
  ],
});
