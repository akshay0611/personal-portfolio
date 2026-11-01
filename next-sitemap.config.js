/** @type {import('next-sitemap').IConfig} */
const fs = require('fs');
const path = require('path');

const CONTENT_ROOT = path.join(__dirname, 'src');

// Last meaningful content-change dates for pages without structured dates.
// Maintained by hand — update when the page's content actually changes.
const STATIC_LASTMOD = {
	'/': '2026-10-27',
	'/case-studies': '2026-10-27',
	'/story': '2026-10-27',
	'/writing': '2026-10-21',
	'/success': '2026-10-27',
};

// Parse frontmatter "date:" / "updated:" from writing markdown files.
const writingDates = {};
fs.readdirSync(path.join(CONTENT_ROOT, 'content/writing')).forEach((f) => {
	if (!f.endsWith('.md')) return;
	const raw = fs.readFileSync(path.join(CONTENT_ROOT, 'content/writing', f), 'utf8');
	const date = raw.match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})/m);
	const updated = raw.match(/^updated:\s*["']?(\d{4}-\d{2}-\d{2})/m);
	const slug = f.replace(/\.md$/, '');
	if (date) writingDates[slug] = { date: date[1], updated: updated && updated[1] };
});

// Parse publishedDate / modifiedDate from src/data/caseStudies.ts.
const caseRaw = fs.readFileSync(path.join(CONTENT_ROOT, 'data/caseStudies.ts'), 'utf8');
const caseDates = {};
const entryRe = /slug:\s*'([^']+)'/g;
const entries = [];
let m;
while ((m = entryRe.exec(caseRaw)) !== null) {
	entries.push({ slug: m[1], start: m.index + m[0].length });
}
entries.forEach((entry, i) => {
	const sliceStart = entry.start;
	const sliceEnd = i + 1 < entries.length ? entries[i + 1].start : caseRaw.length;
	const slice = caseRaw.slice(sliceStart, sliceEnd);
	const pub = slice.match(/publishedDate:\s*'(\d{4}-\d{2}-\d{2})'/);
	const mod = slice.match(/modifiedDate:\s*'(\d{4}-\d{2}-\d{2})'/);
	caseDates[entry.slug] = {
		published: pub && pub[1],
		modified: mod && mod[1],
	};
});

const getLastmod = (pathName) => {
	if (pathName.startsWith('/case-studies/')) {
		const slug = pathName.replace('/case-studies/', '');
		const d = caseDates[slug] || {};
		return d.modified || d.published;
	}
	if (pathName.startsWith('/writing/') && !pathName.endsWith('/rss.xml')) {
		const slug = pathName.replace('/writing/', '');
		const d = writingDates[slug];
		return d && (d.updated || d.date);
	}
	return STATIC_LASTMOD[pathName];
};

module.exports = {
	siteUrl: 'https://connectwithakshay.netlify.app',
	exclude: ['/api/*', '/writing/rss.xml'],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/api'],
			},
		],
	},
	transform: async (config, pathName) => {
		const lastmod = getLastmod(pathName);
		return {
			loc: pathName,
			lastmod: lastmod ? new Date(`${lastmod}T00:00:00Z`).toISOString() : undefined,
			// changefreq / priority intentionally omitted (Google ignores both)
			priority: pathName === '/' ? 1.0 : pathName === '/case-studies' || pathName === '/writing' ? 0.9 : undefined,
		};
	},
};
