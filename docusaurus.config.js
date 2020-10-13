module.exports = {
  title: 'Build a Dads Joke app with React Hooks',
  tagline: 'written by Hulya Karakaya',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'hulyak', // Usually your GitHub org/user name.
  projectName: 'react-tutorial', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'React Hooks Tutorial',
      logo: {
        alt: 'Hooks',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'tutorial',
          label: 'Tutorial',
          position: 'left',
        },
        {
          href: 'https://github.com/hulyak',
          label: 'Sample Project',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Tutorial',
              to: 'docs/',
            },
            {
              label: 'Sample Project',
              to: 'https://github.com/hulyak',
            },
          ],
        },
        {
          title: 'About Me',
          items: [
            {
              label: 'Twitter',
              to: 'https://twitter.com/hulyakarakayaa',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hulyak',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Tutorial, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
