'use client';

import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import MermaidDiagram from './MermaidDiagram';

interface WritingBodyProps {
	content: string;
}

export default function WritingBody({ content }: WritingBodyProps) {
	return (
		<ReactMarkdown
			className='writing-react-markdown'
			rehypePlugins={[rehypeRaw, rehypeSlug]}
			components={{
				pre: ({ children }) => {
					const child = Array.isArray(children) ? children[0] : children;

					if (React.isValidElement(child)) {
						const childProps = child.props as {
							className?: string;
							children?: React.ReactNode;
						};

						if (
							typeof childProps.className === 'string' &&
							childProps.className.includes('language-mermaid')
						) {
							return (
								<MermaidDiagram
									chart={String(childProps.children ?? '').replace(/\n$/, '')}
								/>
							);
						}
					}

					return <pre>{children}</pre>;
				},
				a: ({ href, children }) => (
					<a
						href={href}
						target={href?.startsWith('http') ? '_blank' : undefined}
						rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
					>
						{children}
					</a>
				),
			}}
		>
			{content}
		</ReactMarkdown>
	);
}
