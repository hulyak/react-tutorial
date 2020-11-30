module.exports = {
	title: 'Getting Started with React Hooks: useState and useEffect ',
	tagline: 'written by Hulya Karakaya',
	url: 'https://hulyak.github.io',
	baseUrl: '/react-tutorial/',
	onBrokenLinks: 'throw',
	favicon: 'img/favicon.ico',
	organizationName: 'hulyak', // Usually your GitHub org/user name.
	projectName: 'react-tutorial', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'React Hooks Tutorial',
			logo: {
				alt: 'Hooks',
				src: 'img/logo.svg'
			},
			items: [
				{
					to: 'docs/',
					activeBasePath: 'tutorial',
					label: 'Tutorial',
					position: 'left'
				},
				{
					href: 'https://react-tut-beginner.netlify.app/',
					label: 'Demo App',
					position: 'left'
				},
				{
					href: 'https://github.com/hulyak/react-tutorial',
					label: 'GitHub',
					position: 'right',
				},
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Resources',
					items: [
						{
							label: 'Tutorial',
							to: 'docs/'
						},
						{
							label: 'Demo Github',
							to: 'https://github.com/hulyak/react-tutorial-beginner'
						}
					]
				},
				{
					title: 'About Me',
					items: [
						{
							label: 'Twitter',
							to: 'https://twitter.com/hulyakarakayaa'
						},
						{
							label: 'GitHub',
							href: 'https://github.com/hulyak'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} React Tutorial, Inc. Built with Docusaurus.`
		}
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/hulyak/react-tutorial'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	]
};
