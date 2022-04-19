const path = require('path')

module.exports = {
  title: 'The TIE Design System',
  description: 'Just playing around.',
  themeConfig: {
    repo: 'https://github.com/wuruoyun/vue-component-lib-starter',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: 'What is My Lib?', link: '/' },
          { text: 'Getting Started', link: '/guide/' },
        ],
      }, {
        text: 'Components',
        children: [
          { text: 'Navigation', link: '/components/navigation' },
          { text: 'Menu Dropdown', link: '/components/menu-dropdown' }
        ],
      }
    ],
  },
  vite: {
    resolve: {
      alias: {
        'my-lib': path.resolve(__dirname, '../../src'),
      },
      dedupe: ['vue'], // avoid error when using dependencies that also use Vue
    }
  }
}
