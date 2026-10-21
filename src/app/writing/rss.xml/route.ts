import { getAllPosts } from 'utils/writing';

export const dynamic = 'force-static';

const BASE_URL =
	process.env.BASE_URL || 'https://connectwithakshay.netlify.app';

function escapeXml(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export async function GET() {
	const posts = getAllPosts();

	const items = posts
		.map((post) => {
			const url = `${BASE_URL}/writing/${post.slug}`;

			return `		<item>
			<title>${escapeXml(post.title)}</title>
			<link>${url}</link>
			<guid isPermaLink="true">${url}</guid>
			<description>${escapeXml(post.description)}</description>
			<pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
		</item>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Akshay Kumar — Writing</title>
		<link>${BASE_URL}/writing</link>
		<description>Notes on architecture decisions, scaling, and the trade-offs behind the systems I build.</description>
		<language>en-us</language>
		<atom:link href="${BASE_URL}/writing/rss.xml" rel="self" type="application/rss+xml" />
${items}
	</channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
