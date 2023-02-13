const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '曙光',
  tagline: '还原数据理想国，多端统一的自动化埋点和全链路的数据追踪能力的解决方案',
  url: 'https://eventtracing.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  organizationName: 'Netease Music',
  projectName: 'dawn',

  trailingSlash: false,

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/eventtracing/eventtracing.github.io/blob/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/eventtracing/eventtracing.github.io/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '首页',
        logo: {
          alt: 'Dawn Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {
            to: '/blog', 
            label: '发布', 
            position: 'left'
          },
          {
            href: 'https://github.com/eventtracing/dawn',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '文档',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/dawn',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '发布',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/eventtracing/dawn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Netease Music, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
