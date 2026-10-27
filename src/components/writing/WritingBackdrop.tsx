import { cn } from 'lib/utils';

interface WritingBackdropProps {
	className?: string;
}

export default function WritingBackdrop({ className }: WritingBackdropProps) {
	return (
		<div
			aria-hidden='true'
			className={cn(
				'pointer-events-none absolute inset-x-0 top-0 h-[720px] overflow-hidden',
				className,
			)}
		>
			<div
				className='absolute inset-0 opacity-[0.16]'
				style={{
					backgroundImage:
						'linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)',
					backgroundSize: '72px 72px',
					maskImage:
						'radial-gradient(ellipse 65% 55% at 50% 0%, #000 35%, transparent 100%)',
					WebkitMaskImage:
						'radial-gradient(ellipse 65% 55% at 50% 0%, #000 35%, transparent 100%)',
				}}
			/>
			<div
				className='absolute -top-56 left-1/2 h-[540px] w-[min(1000px,120vw)] -translate-x-1/2 rounded-full'
				style={{
					background:
						'radial-gradient(closest-side, rgba(37,99,235,0.22), rgba(37,99,235,0) 72%)',
				}}
			/>
			<div className='absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#101010]' />
		</div>
	);
}
