/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://connectwithakshay.netlify.app/",
	changefreq: 'daily',
	exclude: ['/api/*'],
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
