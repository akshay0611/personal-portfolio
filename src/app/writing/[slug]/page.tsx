import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Footer from 'components/footer';
import { Badge } from 'components/ui/badge';
import AuthorCard from 'components/writing/AuthorCard';
import CopyLinkButton from 'components/writing/CopyLinkButton';
import ReadingProgress from 'components/writing/ReadingProgress';
import TableOfContents from 'components/writing/TableOfContents';
import WritingBackdrop from 'components/writing/WritingBackdrop';
import WritingBody from 'components/writing/WritingBody';
import { extractHeadings } from 'utils/writingHeadings';
import { formatPostDate, getAllPosts, getPostBySlug } from 'utils/writing';

const BASE_URL =
	process.env.BASE_URL || 'https://connectwithakshay.netlify.app';

interface WritingPostPageProps {
	params: { slug: string };
}

export function generateStaticParams() {
	return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: WritingPostPageProps): Metadata {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return { title: 'Post Not Found' };
	}

	const url = `${BASE_URL}/writing/${post.slug}`;

	return {
		title: post.title,
		description: post.description,
		keywords: post.tags,
		alternates: {
			canonical: post.canonical || url,
		},
		openGraph: {
			type: 'article',
			title: post.title,
			description: post.description,
			url,
			publishedTime: post.date,
			modifiedTime: post.updated || post.date,
			authors: ['Akshay Kumar'],
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.description,
		},
	};
}

export default function WritingPostPage({ params }: WritingPostPageProps) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		notFound();
	}

	const posts = getAllPosts();
	const index = posts.findIndex((item) => item.slug === post.slug);
	const newer = index > 0 ? posts[index - 1] : null;
	const older = index >= 0 && index < posts.length - 1 ? posts[index + 1] : null;
	const headings = extractHeadings(post.content);
	const url = `${BASE_URL}/writing/${post.slug}`;

	const articleSchema = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description,
		datePublished: post.date,
		dateModified: post.updated || post.date,
		url,
		mainEntityOfPage: { '@type': 'WebPage', '@id': url },
		author: {
			'@type': 'Person',
			name: 'Akshay Kumar',
			url: BASE_URL,
			jobTitle: 'Full Stack Developer',
		},
		publisher: {
			'@type': 'Person',
			name: 'Akshay Kumar',
			url: BASE_URL,
		},
		keywords: post.tags.join(', '),
		wordCount: post.wordCount,
		inLanguage: 'en',
		articleSection: 'Engineering',
	};

	const breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Writing',
				item: `${BASE_URL}/writing`,
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: post.title,
				item: url,
			},
		],
	};

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			<ReadingProgress />

			<article className='home-section relative overflow-hidden bg-dark-gray'>
				<WritingBackdrop className='h-[560px]' />

				<div className='max-section-width relative flex flex-col gap-8'>
					<nav
						aria-label='Breadcrumb'
						className='flex flex-wrap items-center gap-1.5 text-xs text-gray-400 md:text-sm'
					>
						<Link href='/' className='transition-colors hover:text-white'>
							Home
						</Link>
						<span aria-hidden='true'>/</span>
						<Link
							href='/writing'
							className='transition-colors hover:text-white'
						>
							Writing
						</Link>
						<span aria-hidden='true'>/</span>
						<span className='line-clamp-1 text-gray-200'>{post.title}</span>
					</nav>

					<header className='flex max-w-3xl flex-col gap-4'>
						{post.tags.length > 0 && (
							<div className='flex flex-wrap gap-2'>
								{post.tags.map((tag) => (
									<Badge key={tag} variant='blue'>
										{tag}
									</Badge>
								))}
							</div>
						)}

						<h1 className='text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl'>
							{post.title}
						</h1>

						{post.description && (
							<p className='text-base font-light leading-relaxed text-gray-400 md:text-lg'>
								{post.description}
							</p>
						)}

						<div className='mt-2 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5'>
							<Image
								src='/images/akshay1.png'
								alt='Akshay Kumar'
								width={40}
								height={40}
								className='h-10 w-10 rounded-full object-cover ring-1 ring-white/15'
							/>
							<div className='text-xs leading-relaxed'>
								<p className='font-medium text-gray-200'>Akshay Kumar</p>
								<p className='text-gray-500'>
									<time dateTime={post.date}>
										{formatPostDate(post.date)}
									</time>
									<span aria-hidden='true'> · </span>
									{post.readTime}
								</p>
							</div>
							<CopyLinkButton className='ml-auto' />
						</div>

						{post.canonical && post.canonical !== url && (
							<p className='text-xs text-gray-500'>
								Originally published at{' '}
								<a
									href={post.canonical}
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-400 underline decoration-blue-500/40 underline-offset-2 transition-colors hover:text-blue-300'
								>
									the original source
								</a>
								.
							</p>
						)}
					</header>

					<div className='mt-2 grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14'>
						<div className='min-w-0 max-w-3xl'>
							<WritingBody content={post.content} />
						</div>
						<TableOfContents headings={headings} />
					</div>

					<AuthorCard />

					{(newer || older) && (
						<nav
							aria-label='More posts'
							className='grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2'
						>
							{older && (
								<Link
									href={`/writing/${older.slug}`}
									className='group rounded-xl border border-white/10 bg-zinc-950/50 p-5 transition-colors hover:border-blue-500/40'
								>
									<span className='inline-flex items-center gap-1.5 text-2xs uppercase tracking-[0.2em] text-gray-500'>
										<FiArrowLeft className='h-3 w-3' aria-hidden='true' />
										Older
									</span>
									<p className='mt-2 text-sm font-medium leading-snug text-gray-200 transition-colors group-hover:text-blue-300'>
										{older.title}
									</p>
								</Link>
							)}
							{newer && (
								<Link
									href={`/writing/${newer.slug}`}
									className='group rounded-xl border border-white/10 bg-zinc-950/50 p-5 text-left transition-colors hover:border-blue-500/40 sm:text-right'
								>
									<span className='inline-flex items-center gap-1.5 text-2xs uppercase tracking-[0.2em] text-gray-500 sm:justify-end'>
										Newer
										<FiArrowRight className='h-3 w-3' aria-hidden='true' />
									</span>
									<p className='mt-2 text-sm font-medium leading-snug text-gray-200 transition-colors group-hover:text-blue-300'>
										{newer.title}
									</p>
								</Link>
							)}
						</nav>
					)}

					<footer className='flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6'>
						<p className='text-sm font-light text-gray-400'>
							Building something similar? Let&apos;s talk.
						</p>
						<div className='flex flex-wrap gap-2'>
							<Link
								href='/writing'
								className='inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-wide text-gray-200 transition-colors hover:border-white/40 hover:text-white'
							>
								All writing
							</Link>
							<Link
								href='/case-studies'
								className='inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-medium uppercase tracking-wide text-black transition-colors hover:bg-blue-600 hover:text-white'
							>
								Case studies
							</Link>
						</div>
					</footer>
				</div>
			</article>
			<Footer />
		</>
	);
}
