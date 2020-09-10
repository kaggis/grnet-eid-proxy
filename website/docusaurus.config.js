module.exports = {
  title: 'GRNET eid Proxy Documentation',
  tagline: '',
  url: 'https://grnet.github.io',
  baseUrl: '/grnet-eid-proxy/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon0.ico',
  organizationName: 'GRNET', // Usually your GitHub org/user name.
  projectName: 'grnet-eid-proxy', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GRNET eid Proxy',
      logo: {
//        alt: 'grnet-eid-proxy Logo',
        alt: '',
        src: 'img/logo0.svg',
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
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Explore Documentation',
              to: 'docs/',
            },
//            {
//              label: 'Second Doc',
//              to: 'docs/doc2/',
//            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/grnet/grnet-eid-proxy',
            },
//            {
//              label: 'Discord',
//              href: 'https://discordapp.com/invite/docusaurus',
//            },
//            {
//              label: 'Twitter',
//              href: 'https://twitter.com/docusaurus',
//            },
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
      copyright: `Copyright © ${new Date().getFullYear()} GRNET`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
