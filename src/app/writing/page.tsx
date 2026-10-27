import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from 'components/footer';
import { Badge } from 'components/ui/badge';
import { Card } from 'components/ui/card';
import PostCard from 'components/writing/PostCard';
import WritingBackdrop from 'components/writing/WritingBackdrop';
import { getAllPosts } from 'utils/writing';

const BASE_URL =
	process.env.BASE_URL || 'https://connectwithakshay.netlify.app';

export function generateMetadata(): Metadata {
	const posts = getAllPosts();

	return {
		title: 'Writing — Notes on Building Production Systems',
		description:
			'Long-form notes on architecture decisions, scaling, and the trade-offs behind the systems I build — written by Akshay Kumar, Full-Stack Developer.',
		keywords: [
			'Akshay Kumar writing',
			'full stack engineering blog',
			'production system architecture',
			'Next.js architecture notes',
			'supabase row level security',
			'open source journey',
		],
		alternates: {
			canonical: '/writing',
			types: {
				'application/rss+xml': `${BASE_URL}/writing/rss.xml`,
			},
		},
		robots: posts.length
			? { index: true, follow: true }
			: { index: false, follow: false },
		openGraph: {
			type: 'website',
			title: 'Writing — Notes on Building Production Systems',
			description:
				'Long-form notes on architecture decisions, scaling, and the trade-offs behind the systems I build.',
			url: `${BASE_URL}/writing`,
		},
	};
}

export default function WritingPage() {
	const posts = getAllPosts();
	const [featured, ...rest] = posts;

	const listSchema = posts.length
		? {
				'@context': 'https://schema.org',
				'@type': 'ItemList',
				itemListElement: posts.map((post, index) => ({
					'@type': 'ListItem',
					position: index + 1,
					url: `${BASE_URL}/writing/${post.slug}`,
					name: post.title,
				})),
			}
		: null;

	return (
		<>
			{listSchema && (
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
				/>
			)}
			<section className='home-section relative overflow-hidden bg-dark-gray'>
				<WritingBackdrop />

				<div className='max-section-width relative flex flex-col gap-12'>
					<nav
						aria-label='Breadcrumb'
						className='flex items-center gap-1.5 text-xs text-gray-400 md:text-sm'
					>
						<Link href='/' className='transition-colors hover:text-white'>
							Home
						</Link>
						<span aria-hidden='true'>/</span>
						<span className='text-gray-200'>Writing</span>
					</nav>

					<header className='flex max-w-3xl flex-col gap-5'>
						<div className='flex items-center gap-2 text-2xs uppercase tracking-[0.25em] text-blue-400'>
							<span className='h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]' />
							Writing
						</div>

						<h1 className='text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl'>
							Notes from the{' '}
							<span className='bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200 bg-clip-text text-transparent'>
								build
							</span>
						</h1>

						<p className='text-sm font-light leading-relaxed text-gray-400 md:text-base'>
							Long-form notes on architecture decisions, scaling, and the
							trade-offs behind the systems I build. No tutorials for the sake
							of tutorials — just what I learned shipping.
						</p>

						<div className='flex flex-wrap items-center gap-3 text-xs text-gray-500'>
							<span>
								{posts.length} {posts.length === 1 ? 'essay' : 'essays'}
							</span>
							{posts.length > 0 && (
								<span aria-hidden='true' className='h-3 w-px bg-white/10' />
							)}
							<a
								href='/writing/rss.xml'
								className='inline-flex items-center gap-1.5 transition-colors hover:text-white'
							>
								<Badge variant='outline' className='px-2 py-0'>
									RSS
								</Badge>
								Subscribe
							</a>
						</div>
					</header>

					{featured ? (
						<div className='flex flex-col gap-5'>
							<PostCard post={featured} featured />
							{rest.length > 0 && (
								<div className='grid gap-5 sm:grid-cols-2'>
									{rest.map((post) => (
										<PostCard key={post.slug} post={post} />
									))}
								</div>
							)}
						</div>
					) : (
						<Card className='p-8 md:p-10'>
							<p className='text-2xs uppercase tracking-[0.2em] text-blue-400'>
								In progress
							</p>
							<p className='mt-3 text-lg font-semibold text-white md:text-xl'>
								The first essay is being written.
							</p>
							<p className='mt-2 max-w-xl text-sm font-light leading-relaxed text-gray-400'>
								In the meantime, the case studies cover the same systems in
								depth — the architecture, the constraints, and the results.
							</p>
							<Link
								href='/case-studies'
								className='mt-6 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium uppercase tracking-wide text-black transition-colors hover:bg-blue-600 hover:text-white'
							>
								Read the case studies
								<span aria-hidden='true'>→</span>
							</Link>
						</Card>
					)}
				</div>
			</section>
			<Footer />
		</>
	);
}
