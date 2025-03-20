import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  title: 'Whatever DOCS',
  description: 'Whatever ITS A DOCS',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap' }],
  ],  

  bundler: viteBundler({}),

  theme: defaultTheme({
    logo: '/favicon-light.svg',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      {
        text: 'More',
        children: [
          { text: 'Blog', link: '/blog/' },
          { text: 'Projects', link: '/projects/' }
        ],
      },
    ],
    sidebar: {
      '/blog/': [
        {
          text: 'Blog Posts',
          collapsible: true,
          children: [
            '/blog/README.md',
            '/blog/first-post.md',
            '/blog/second-post.md',
          ],
        },
      ],
      '/projects/': [
        {
          text: 'My Projects',
          collapsible: true,
          children: [
            '/projects/README.md',
            '/projects/project-1.md',
            '/projects/project-2.md',
          ],
        },
      ],
    },
  }),
});
