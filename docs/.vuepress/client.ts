import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // ...
  },
  setup() {
    const updateNavbarLogo = () => {
      const isDarkMode = document.documentElement.classList.contains('dark')
      const logoUrl = isDarkMode ? '/logo-light.svg' : '/logo-dark.svg'
      
      console.log('Dark Mode:', isDarkMode, '| Logo:', logoUrl)

      const logoImg = document.querySelector('vp-site-logo')
      if (logoImg) {
        logoImg.setAttribute('src', logoUrl)
      }
    }

    updateNavbarLogo()

    const observer = new MutationObserver(() => {
      updateNavbarLogo()
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
