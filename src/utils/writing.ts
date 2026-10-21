import fs from 'fs';
import path from 'path';

const WRITING_DIR = path.join(process.cwd(), 'src/content/writing');
const WORDS_PER_MINUTE = 200;

export interface WritingPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	updated?: string;
	tags: string[];
	draft: boolean;
	canonical?: string;
	content: string;
	wordCount: number;
	readTime: string;
}

type FrontmatterValue = string | boolean;
type Frontmatter = Record<string, FrontmatterValue>;

function parseFrontmatter(raw: string): {
	data: Frontmatter;
	content: string;
} {
	if (!raw.startsWith('---')) return { data: {}, content: raw };

	const closingIndex = raw.indexOf('\n---', 3);
	if (closingIndex === -1) return { data: {}, content: raw };

	const headerBlock = raw.slice(3, closingIndex).trim();
	const content = raw.slice(closingIndex + 4).replace(/^\s+/, '');
	const data: Frontmatter = {};

	for (const line of headerBlock.split('\n')) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#')) continue;

		const separator = trimmed.indexOf(':');
		if (separator === -1) continue;

		const key = trimmed.slice(0, separator).trim();
		let value = trimmed.slice(separator + 1).trim();

		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}

		if (value === 'true') data[key] = true;
		else if (value === 'false') data[key] = false;
		else data[key] = value;
	}

	return { data, content };
}

function computeStats(content: string) {
	const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
	const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));

	return { wordCount, readTime: `${minutes} min read` };
}

function readPost(fileName: string): WritingPost | null {
	const filePath = path.join(WRITING_DIR, fileName);
	const raw = fs.readFileSync(filePath, 'utf8');
	const { data, content } = parseFrontmatter(raw);

	if (!data.title || !data.date) return null;

	const { wordCount, readTime } = computeStats(content);

	return {
		slug: String(data.slug || fileName.replace(/\.mdx?$/, '')),
		title: String(data.title),
		description: data.description ? String(data.description) : '',
		date: String(data.date),
		updated: data.updated ? String(data.updated) : undefined,
		tags: data.tags
			? String(data.tags)
					.split(',')
					.map((tag) => tag.trim())
					.filter(Boolean)
			: [],
		draft: data.draft === true,
		canonical: data.canonical ? String(data.canonical) : undefined,
		content,
		wordCount,
		readTime,
	};
}

export function getAllPosts(includeDrafts = false): WritingPost[] {
	if (!fs.existsSync(WRITING_DIR)) return [];

	return fs
		.readdirSync(WRITING_DIR)
		.filter((fileName) => /\.mdx?$/.test(fileName))
		.map((fileName) => readPost(fileName))
		.filter((post): post is WritingPost => post !== null)
		.filter((post) => includeDrafts || !post.draft)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): WritingPost | undefined {
	return getAllPosts().find((post) => post.slug === slug);
}

export function formatPostDate(date: string): string {
	const parsed = new Date(`${date}T00:00:00Z`);
	if (Number.isNaN(parsed.getTime())) return date;

	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC',
	}).format(parsed);
}
