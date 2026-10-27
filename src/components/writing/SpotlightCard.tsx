'use client';

import * as React from 'react';
import { useCallback, useRef } from 'react';
import { cn } from 'lib/utils';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
	spotlightColor?: string;
}

export default function SpotlightCard({
	className,
	children,
	spotlightColor = 'rgba(59, 130, 246, 0.14)',
	...props
}: SpotlightCardProps) {
	const ref = useRef<HTMLDivElement>(null);

	const handleMouseMove = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			const element = ref.current;
			if (!element) return;

			const rect = element.getBoundingClientRect();
			element.style.setProperty(
				'--spotlight-x',
				`${event.clientX - rect.left}px`,
			);
			element.style.setProperty(
				'--spotlight-y',
				`${event.clientY - rect.top}px`,
			);
		},
		[],
	);

	return (
		<div
			ref={ref}
			onMouseMove={handleMouseMove}
			className={cn('group/spotlight relative overflow-hidden', className)}
			{...props}
		>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100'
				style={{
					background: `radial-gradient(380px circle at var(--spotlight-x, 50%) var(--spotlight-y, 0%), ${spotlightColor}, transparent 65%)`,
				}}
			/>
			{children}
		</div>
	);
}
