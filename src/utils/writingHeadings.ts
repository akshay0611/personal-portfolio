import GithubSlugger from 'github-slugger';

export interface WritingHeading {
	id: string;
	text: string;
	level: 2 | 3;
}

function stripInlineMarkdown(value: string): string {
	return value
		.replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/<[^>]+>/g, '')
		.replace(/(\*\*|__|[*_~`])/g, '')
		.trim();
}

export function extractHeadings(markdown: string): WritingHeading[] {
	const slugger = new GithubSlugger();
	const headings: WritingHeading[] = [];
	const withoutCode = markdown.replace(/```[\s\S]*?```/g, '');

	for (const line of withoutCode.split('\n')) {
		const match = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
		if (!match) continue;

		const level = match[1].length;
		const text = stripInlineMarkdown(match[2].replace(/\s+#+\s*$/, ''));
		const id = slugger.slug(text);

		if (text && (level === 2 || level === 3)) {
			headings.push({ id, text, level });
		}
	}

	return headings;
}
