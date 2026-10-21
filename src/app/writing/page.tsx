import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from 'components/footer';
import { formatPostDate, getAllPosts } from 'utils/writing';

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

	return (
		<>
			<section className='home-section bg-dark-gray'>
				<div className='max-section-width flex flex-col gap-8'>
					<nav
						aria-label='Breadcrumb'
						className='text-xs md:text-sm text-gray-400 flex items-center gap-1.5'
					>
						<Link href='/' className='hover:text-white transition'>
							Home
						</Link>
						<span aria-hidden='true'>/</span>
						<span className='text-gray-200'>Writing</span>
					</nav>

					<header className='flex flex-col gap-2'>
						<h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
							Writing
						</h1>
						<p className='text-sm md:text-base text-gray-400 font-light max-w-3xl leading-relaxed'>
							Long-form notes on architecture decisions, scaling, and the
							trade-offs behind the systems I build. No tutorials for the sake of
							tutorials — just what I learned shipping.
						</p>
					</header>

					{posts.length === 0 ? (
						<div className='bg-zinc-900 border border-white/5 rounded-md p-6 md:p-8'>
							<p className='text-sm md:text-base text-gray-300 font-light'>
								The first post is in progress. In the meantime, the case studies
								cover the same systems in depth.
							</p>
							<Link
								href='/case-studies'
								className='inline-flex mt-4 text-sm bg-white uppercase hover:bg-blue-900 hover:text-white border-1 transition text-black px-3 py-1 rounded-sm'
							>
								Read the case studies
							</Link>
						</div>
					) : (
						<ul className='flex flex-col gap-3'>
							{posts.map((post) => (
								<li key={post.slug}>
									<Link
										href={`/writing/${post.slug}`}
										className='group block bg-zinc-900 border border-white/5 hover:border-blue-500/60 transition rounded-md p-4 md:p-5'
									>
										<div className='flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] md:text-xs text-gray-500'>
											<time dateTime={post.date}>
												{formatPostDate(post.date)}
											</time>
											<span aria-hidden='true'>·</span>
											<span>{post.readTime}</span>
											{post.tags.length > 0 && (
												<>
													<span aria-hidden='true'>·</span>
													<span className='text-blue-400/80'>
														{post.tags.join(' · ')}
													</span>
												</>
											)}
										</div>
										<h2 className='text-lg md:text-xl font-semibold mt-2 leading-snug group-hover:text-blue-400 transition'>
											{post.title}
										</h2>
										{post.description && (
											<p className='text-sm font-light text-gray-400 leading-relaxed mt-2'>
												{post.description}
											</p>
										)}
										<span className='inline-flex items-center gap-1.5 mt-3 text-xs uppercase tracking-wide text-blue-400 group-hover:translate-x-0.5 transition-transform'>
											Read post
											<span aria-hidden='true'>→</span>
										</span>
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</section>
			<Footer />
		</>
	);
}
