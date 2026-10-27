import * as React from 'react';
import { cn } from 'lib/utils';

const badgeVariants = {
	default: 'border-white/10 bg-white/[0.04] text-gray-300',
	blue: 'border-blue-500/25 bg-blue-500/10 text-blue-300',
	outline: 'border-white/15 bg-transparent text-gray-400',
} as const;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?: keyof typeof badgeVariants;
}

export function Badge({
	className,
	variant = 'default',
	...props
}: BadgeProps) {
	return (
		<span
			className={cn(
				'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide transition-colors',
				badgeVariants[variant],
				className,
			)}
			{...props}
		/>
	);
}
