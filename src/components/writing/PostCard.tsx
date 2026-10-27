import Link from 'next/link';
import { FiArrowUpRight, FiClock } from 'react-icons/fi';
import { Badge } from 'components/ui/badge';
import SpotlightCard from 'components/writing/SpotlightCard';
import { formatPostDate } from 'utils/writing';
import type { WritingPost } from 'utils/writing';

interface PostCardProps {
	post: WritingPost;
	featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
	return (
		<SpotlightCard
			className={
				featured
					? 'h-full rounded-2xl border border-white/10 bg-zinc-950/70 transition-colors hover:border-blue-500/30'
					: 'h-full rounded-xl border border-white/10 bg-zinc-950/60 transition-colors hover:border-blue-500/30'
			}
		>
			<Link
				href={`/writing/${post.slug}`}
				className='group relative flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#101010] md:p-8'
			>
				<div className='flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider text-gray-500'>
					{featured && (
						<>
							<span className='font-medium text-blue-400'>Latest</span>
							<span aria-hidden='true' className='h-3 w-px bg-white/10' />
						</>
					)}
					<time dateTime={post.date}>{formatPostDate(post.date)}</time>
					<span aria-hidden='true' className='h-3 w-px bg-white/10' />
					<span className='inline-flex items-center gap-1 normal-case tracking-normal'>
						<FiClock className='h-3 w-3' aria-hidden='true' />
						{post.readTime}
					</span>
				</div>

				<h2
					className={
						featured
							? 'mt-4 text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-blue-300 md:text-3xl lg:text-4xl'
							: 'mt-3 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-blue-300 md:text-xl'
					}
				>
					{post.title}
				</h2>

				{post.description && (
					<p
						className={
							featured
								? 'mt-4 max-w-2xl text-sm font-light leading-relaxed text-gray-400 md:text-base'
								: 'mt-3 line-clamp-3 text-sm font-light leading-relaxed text-gray-400'
						}
					>
						{post.description}
					</p>
				)}

				<div className='mt-auto flex items-end justify-between gap-4 pt-6'>
					<div className='flex flex-wrap gap-2'>
						{post.tags.slice(0, featured ? 4 : 3).map((tag) => (
							<Badge key={tag} variant='outline'>
								{tag}
							</Badge>
						))}
					</div>
					<span className='inline-flex shrink-0 items-center gap-1 text-xs font-medium text-blue-400 transition-transform group-hover:translate-x-0.5'>
						Read
						<FiArrowUpRight className='h-3.5 w-3.5' aria-hidden='true' />
					</span>
				</div>
			</Link>
		</SpotlightCard>
	);
}
