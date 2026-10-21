/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://connectwithakshay.netlify.app/",
	changefreq: 'daily',
	exclude: ['/api/*', '/writing/rss.xml'],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
			{
				userAgent: '*',
				disallow: ['/api'],
			},
		],
	},
};
