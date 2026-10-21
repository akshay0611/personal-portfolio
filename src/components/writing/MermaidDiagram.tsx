'use client';

import { useEffect, useId, useState } from 'react';

interface MermaidDiagramProps {
	chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
	const [svg, setSvg] = useState('');
	const [failed, setFailed] = useState(false);
	const rawId = useId();
	const id = `mermaid-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

	useEffect(() => {
		let cancelled = false;

		const renderChart = async () => {
			try {
				const mermaid = (await import('mermaid')).default;

				mermaid.initialize({
					startOnLoad: false,
					theme: 'dark',
					securityLevel: 'strict',
					fontFamily: 'inherit',
				});

				const { svg: renderedSvg } = await mermaid.render(id, chart);
				if (!cancelled) setSvg(renderedSvg);
			} catch {
				if (!cancelled) setFailed(true);
			}
		};

		renderChart();

		return () => {
			cancelled = true;
		};
	}, [chart, id]);

	if (failed) {
		return (
			<pre>
				<code>{chart}</code>
			</pre>
		);
	}

	return (
		<div className='writing-mermaid' role='img' aria-label='Diagram'>
			{svg ? (
				<div dangerouslySetInnerHTML={{ __html: svg }} />
			) : (
				<div className='writing-mermaid-placeholder'>Rendering diagram…</div>
			)}
		</div>
	);
}
