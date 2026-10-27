'use client';

import { useEffect, useState } from 'react';
import { cn } from 'lib/utils';
import type { WritingHeading } from 'utils/writingHeadings';

interface TableOfContentsProps {
	headings: WritingHeading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
	const [activeId, setActiveId] = useState(headings[0]?.id ?? '');

	useEffect(() => {
		if (headings.length === 0) return;

		const elements = headings
			.map((heading) => document.getElementById(heading.id))
			.filter((element): element is HTMLElement => element !== null);

		if (elements.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort(
						(a, b) =>
							a.boundingClientRect.top - b.boundingClientRect.top,
					);

				if (visible[0]) setActiveId(visible[0].target.id);
			},
			{ rootMargin: '-96px 0px -68% 0px', threshold: [0, 1] },
		);

		elements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, [headings]);

	if (headings.length === 0) return null;

	const links = (
		<ul className='flex flex-col gap-0.5 border-l border-white/10'>
			{headings.map((heading) => (
				<li key={heading.id}>
					<a
						href={`#${heading.id}`}
						className={cn(
							'-ml-px block border-l py-1.5 text-[13px] leading-snug transition-colors',
							heading.level === 3 ? 'pl-6' : 'pl-3',
							activeId === heading.id
								? 'border-blue-500 text-blue-300'
								: 'border-transparent text-gray-500 hover:text-gray-200',
						)}
					>
						{heading.text}
					</a>
				</li>
			))}
		</ul>
	);

	return (
		<aside className='order-first h-fit lg:order-none lg:sticky lg:top-24'>
			<details className='group mb-8 rounded-xl border border-white/10 bg-zinc-950/60 lg:hidden'>
				<summary className='flex cursor-pointer list-none items-center justify-between px-4 py-3 text-2xs uppercase tracking-[0.2em] text-gray-400 [&::-webkit-details-marker]:hidden'>
					On this page
					<span
						aria-hidden='true'
						className='text-gray-600 transition-transform group-open:rotate-180'
					>
						↓
					</span>
				</summary>
				<div className='px-4 pb-4'>{links}</div>
			</details>
			<nav aria-label='Table of contents' className='hidden lg:block'>
				<p className='mb-3 text-2xs uppercase tracking-[0.2em] text-gray-500'>
					On this page
				</p>
				{links}
			</nav>
		</aside>
	);
}
