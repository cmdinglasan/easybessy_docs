module.exports = {
	base: '/1.x/',
  	title: 'EasyBessy',
  	description: 'EasyBessy POS-CRM Documentation',
 	head: [
	    ['link', { rel: "icon", type: "image/png", href: "/favicon.ico"}],
  	],
	themeConfig: {
		lastUpdated: 'Last Update',
		repo: 'cmdinglasan/easybessy_vue',
        repoLabel: 'Contribute to EasyBessy',
        docsRepo: 'cmdinglasan/easybessy_docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',
		logo: '/assets/img/easybessy_pos-logo_full_dark.png',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Livewire Version', link: 'https://github.com/cmdinglasan/easybessy', target: '_blank' },
			{ text: 'Vue.js Version', link: 'https://github.com/cmdinglasan/easybessy_vue', target: '_blank' },
		],
		sidebar: {
			'/introduction/': [
				'',
				'wiki',
			],
		},
	},
	plugins: [
		[
		  '@vuepress/pwa',
		  {
		    serviceWorker: true,
		    updatePopup: true
		  }
		]
	],
	postcss: {
	    plugins: [
	      require("tailwindcss")("./tailwind.config.js"),
	      require("autoprefixer"),
	    ],
	},
};