import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  title: 'Whatever DOcS',
  description: 'Whatever ITS A DOCS',

  bundler: viteBundler({}),

  theme: defaultTheme({
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
