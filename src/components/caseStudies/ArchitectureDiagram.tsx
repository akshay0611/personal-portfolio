interface ArchitectureDiagramNode {
	id: string;
	label: string;
}

interface ArchitectureDiagramEdge {
	from: string;
	to: string;
	label?: string;
}

interface ArchitectureDiagramProps {
	title?: string;
	description?: string;
	nodes: ArchitectureDiagramNode[];
	edges: ArchitectureDiagramEdge[];
}

const POSITIONS: Record<string, { x: number; y: number; width: number; height: number }> = {
	learner: { x: 280, y: 40, width: 170, height: 44 },
	cloudflare: { x: 470, y: 40, width: 170, height: 44 },
	sentry: { x: 740, y: 40, width: 180, height: 44 },
	cloudrun: { x: 720, y: 110, width: 180, height: 60 },
	nextjs: { x: 450, y: 200, width: 200, height: 64 },
	supabase: { x: 200, y: 200, width: 180, height: 64 },
	judge: { x: 450, y: 330, width: 200, height: 64 },
	razorpay: { x: 720, y: 330, width: 180, height: 56 },
	email: { x: 160, y: 330, width: 180, height: 56 },
};

const LABEL_FILL = '#e5e7eb';
const LABEL_SECONDARY_FILL = '#9ca3af';
const BOX_FILL = '#18181b';
const BOX_STROKE = 'rgba(96, 165, 250, 0.4)';

const elbow = (x1: number, y1: number, x2: number, y2: number) => {
	if (x1 === x2) return `M ${x1} ${y1} V ${y2}`;
	if (y1 === y2) return `M ${x1} ${y1} H ${x2}`;
	return `M ${x1} ${y1} H ${x2} V ${y2}`;
};

export default function ArchitectureDiagram({
	title,
	description,
	nodes,
	edges,
}: ArchitectureDiagramProps) {
	const nodeMap = new Map(nodes.map((node) => [node.id, node]));

	const edgeEndpoints = (edge: ArchitectureDiagramEdge) => {
		const from = POSITIONS[edge.from];
		const to = POSITIONS[edge.to];
	 return { from: { x: from.x + from.width / 2, y: from.y + from.height / 2 }, to: { x: to.x + to.width / 2, y: to.y + to.height / 2 } };
	};

	return (
		<div className='bg-zinc-900 border border-white/5 rounded-md p-3 md:p-4 flex flex-col gap-3'>
			{title && <h3 className='h3'>{title}</h3>}
			<svg viewBox='0 0 950 420' className='w-full h-auto' role='img' aria-label={title ? `${title} diagram` : 'Architecture diagram'}>
				{edges.map((edge) => {
					const { from, to } = edgeEndpoints(edge);
				 const isHorizontal = from.y === to.y;
				 const path = isHorizontal
						? `M ${from.x} ${from.y} H ${to.x}`
						: `M ${from.x} ${from.y} V ${to.y}`;
				 const midX = isHorizontal ? (from.x + to.x) / 2 : from.x;
					const midY = isHorizontal ? from.y : (from.y + to.y) / 2;
					return (
						<g key={`${edge.from}-${edge.to}`}>
							<path d={path} fill='none' stroke='rgba(96, 165, 250, 0.5)' strokeWidth={1.5} />
							{edge.label && (
								<text x={midX} y={midY - 4} textAnchor='middle' fontSize={10} fill='#60a5fa'>
									{edge.label}
								</text>
							)}
						</g>
					);
				})}
				{nodes.map((node) => {
					const pos = POSITIONS[node.id];
					if (!pos) return null;
					return (
						<g key={node.id}>
							<rect
								x={pos.x}
								y={pos.y}
								width={pos.width}
								height={pos.height}
								rx={10}
								fill={BOX_FILL}
								stroke={BOX_STROKE}
								strokeWidth={1}
							/>
							<text x={pos.x + pos.width / 2} y={pos.y + 18} textAnchor='middle' fontSize={12} fontWeight={600} fill={LABEL_FILL}>
								{node.label}
							</text>
							{node.id === 'supabase' && (
								<text x={pos.x + pos.width / 2} y={pos.y + 32} textAnchor='middle' fontSize={10} fill={LABEL_SECONDARY_FILL}>
									PostgreSQL · Auth · RLS
								</text>
							)}
							{node.id === 'nextjs' && (
								<text x={pos.x + pos.width / 2} y={pos.y + 32} textAnchor='middle' fontSize={10} fill={LABEL_SECONDARY_FILL}>
									App Router · RSC · TS
								</text>
							)}
						</g>
					);
				})}
			</svg>
			{description && (
				<p className='text-xs md:text-sm font-light leading-relaxed text-gray-400'>{description}</p>
			)}
		</div>
	);
}
