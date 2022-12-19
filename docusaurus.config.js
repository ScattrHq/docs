// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scattr',

  tagline: 'Post your article on multiple platforms in 1-click 🚀',
  url: 'https://docs.scattr.io/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'Scattrhq', // Usually your GitHub org/user name.
  projectName: 'Scattr Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'docusaurus-tailwindcss',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Scattr',

        logo: {
          alt: 'Scattr-Logo',
          src: 'img/scattr.svg',
        },

        items: [
          {to: 'https://blog.scattr.io', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/scattrhq',
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
                label: 'Onboarding',
                to: '/docs/category/getting-started',
              }, {
                label: 'Integrations',
                to: '/docs/get-started/Integrations/dev',
              },
            ],
          },{
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ScattrHq',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ScattrHq',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://blog.scattr.io',
              },

            ],
          }, {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: 'https://public.scattr.io/Legal-information/Scattr__Privacy_Policy.pdf',
              },
              {
                label: 'Terms of Service',
                to: 'https://public.scattr.io/Legal-information/Scattr__Terms_of_Services.pdf',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Scattr.io`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
};

module.exports = config;
