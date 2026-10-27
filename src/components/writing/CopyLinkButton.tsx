'use client';

import { useEffect, useState } from 'react';
import { FiCheck, FiLink } from 'react-icons/fi';
import { cn } from 'lib/utils';

interface CopyLinkButtonProps {
	className?: string;
}

export default function CopyLinkButton({ className }: CopyLinkButtonProps) {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (!copied) return;

		const timeout = setTimeout(() => setCopied(false), 2000);
		return () => clearTimeout(timeout);
	}, [copied]);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	};

	return (
		<button
			type='button'
			onClick={handleCopy}
			aria-label='Copy link to this post'
			className={cn(
				'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-blue-500/40 hover:text-white',
				className,
			)}
		>
			{copied ? (
				<FiCheck className='h-3.5 w-3.5 text-emerald-400' />
			) : (
				<FiLink className='h-3.5 w-3.5' />
			)}
			<span>{copied ? 'Copied' : 'Copy link'}</span>
		</button>
	);
}
