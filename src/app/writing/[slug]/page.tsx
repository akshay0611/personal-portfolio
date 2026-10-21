import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Footer from 'components/footer';
import WritingBody from 'components/writing/WritingBody';
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
			<article className='home-section bg-dark-gray'>
				<div className='max-section-width flex flex-col gap-8'>
					<nav
						aria-label='Breadcrumb'
						className='text-xs md:text-sm text-gray-400 flex items-center gap-1.5 flex-wrap'
					>
						<Link href='/' className='hover:text-white transition'>
							Home
						</Link>
						<span aria-hidden='true'>/</span>
						<Link href='/writing' className='hover:text-white transition'>
							Writing
						</Link>
						<span aria-hidden='true'>/</span>
						<span className='text-gray-200'>{post.title}</span>
					</nav>

					<header className='flex flex-col gap-3'>
						<h1 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
							{post.title}
						</h1>
						<div className='flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] md:text-xs text-gray-500 uppercase tracking-wide'>
							<time dateTime={post.date}>{formatPostDate(post.date)}</time>
							<span aria-hidden='true'>·</span>
							<span>{post.readTime}</span>
							{post.tags.length > 0 && (
								<>
									<span aria-hidden='true'>·</span>
									<span className='normal-case text-blue-400/80'>
										{post.tags.join(' · ')}
									</span>
								</>
							)}
						</div>
						{post.description && (
							<p className='text-sm md:text-base text-gray-400 font-light leading-relaxed'>
								{post.description}
							</p>
						)}
						{post.canonical && post.canonical !== url && (
							<p className='text-xs text-gray-500'>
								Originally published at{' '}
								<a
									href={post.canonical}
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-400 hover:text-blue-300 underline underline-offset-2'
								>
									the original source
								</a>
								.
							</p>
						)}
					</header>

					<WritingBody content={post.content} />

					<footer className='border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4'>
						<p className='text-sm text-gray-400 font-light'>
							Building something similar? Let&apos;s talk.
						</p>
						<div className='flex flex-wrap gap-2'>
							<Link
								href='/writing'
								className='text-sm bg-transparent uppercase hover:bg-blue-900 hover:text-white border-1 border-white/30 transition text-white px-3 py-1 rounded-sm flex-center'
							>
								All writing
							</Link>
							<Link
								href='/case-studies'
								className='text-sm bg-white uppercase hover:bg-blue-900 hover:text-white border-1 transition text-black px-3 py-1 rounded-sm flex-center'
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
