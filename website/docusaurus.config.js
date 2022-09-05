// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GRNET eid Proxy Documentation',
  tagline: '',
  url: 'https://grnet.github.io',
  baseUrl: '/grnet-eid-proxy/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GRNET', // Usually your GitHub org/user name.
  projectName: 'grnet-eid-proxy', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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
        title: 'GRNET eid Proxy',
      logo: {
        alt: '',
        src: 'img/logo-art.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/grnet/grnet-eid-proxy',
          label: 'GitHub',
          position: 'right',
        },
      ]
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'GRNET',
          src: 'img/grnet-logo.png',
          href: 'http://www.grnet.gr/',
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Explore Documentation',
                to: 'docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/grnet/grnet-eid-proxy',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/grnet/grnet-eid-proxy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="http://www.grnet.gr/"> GRNET </a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    themes: [
      [
        "@easyops-cn/docusaurus-search-local",
        {
          hashed: true,
          language: ["en", "zh"],
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
          indexBlog: false,
        },
      ],
    ],
};

module.exports = config;
