import React from 'react';
import Image from 'next/image';
import { allExperiences } from 'utils/constants/Experiences';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Experiences() {
	const monthMap: Record<string, number> = {
		jan: 0,
		feb: 1,
		mar: 2,
		apr: 3,
		may: 4,
		jun: 5,
		jul: 6,
		aug: 7,
		sep: 8,
		oct: 9,
		nov: 10,
		dec: 11,
	};

	const parseFromDate = (value: string) => {
		const normalized = value.trim().toLowerCase();
		const [monthRaw, yearRaw] = normalized.split(/\s+/);
		const monthKey = monthRaw?.slice(0, 3) || 'jan';
		const month = monthMap[monthKey] ?? 0;
		const year = Number.parseInt(yearRaw || '0', 10);
		return new Date(year, month, 1).getTime();
	};

	// Filter for featured experiences to show on homepage
	const featuredExperiences = Object.values(allExperiences)
		.filter(exp => exp.featured)
		.sort((a, b) => parseFromDate(b.fromDate) - parseFromDate(a.fromDate));

	return (
		<section className='home-section bg-black relative' id='experience'>
			<div className='max-section-width'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
					<div className='lg:col-span-4'>
						<div className='lg:sticky lg:top-28'>
							<h1 className='text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-white'>
								Professional Journey
							</h1>
							<p className='text-white/55 text-sm md:text-base mt-4 font-light max-w-md leading-relaxed'>
								Building scalable systems and leading technical initiatives across production-grade platforms.
							</p>
						</div>
					</div>

					<div className='lg:col-span-8 space-y-4 md:space-y-5'>
						{featuredExperiences.map((exp, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.07 }}
								className='group relative rounded-xl p-5 md:p-6 border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all duration-300'
							>
								<div className='relative flex flex-col h-full'>
									<div className='flex flex-wrap md:flex-nowrap items-start justify-between mb-4 gap-y-3'>
										<div className='flex gap-3.5 items-center min-w-0 w-full md:w-auto'>
											<div className='w-10 h-10 rounded-lg overflow-hidden bg-zinc-900 border border-white/15 p-1 shrink-0'>
												{exp.imageURL ? (
													<Image 
														src={exp.imageURL} 
														alt={exp.orgName} 
														width={48} 
														height={48}
														className='w-full h-full object-contain'
														unoptimized={true}
														loader={({ src }: { src: string }) => src}
													/>
												) : (
													<div className='w-full h-full bg-zinc-700 flex items-center justify-center text-white/20 font-bold uppercase text-xl'>
														{exp.orgName[0]}
													</div>
												)}
											</div>
											<div className='min-w-0 flex-1'>
												<h3 className='font-semibold text-white text-xl md:text-2xl leading-tight'>
													{exp.positionHeld}
												</h3>
												<p className='text-white/60 text-sm md:text-base font-medium mt-1'>
													{exp.orgName}
												</p>
											</div>
										</div>
										<div className='text-left md:text-right shrink-0'>
											<span className='px-3 py-1 rounded-full text-[10px] md:text-[11px] font-semibold tracking-[0.15em] uppercase text-white/45 border border-white/10 bg-white/[0.03] whitespace-nowrap'>
												{exp.fromDate} — {exp.toDate}
											</span>
										</div>
									</div>

									<div className='text-white/70 text-sm md:text-[15px] leading-relaxed mb-5 space-y-2 max-w-none'>
										{exp.description.split('\n').filter(line => line.trim()).map((line, i) => (
											<p key={i} className='flex gap-2 items-start'>
												<span className='text-white/35 mt-1.5 shrink-0'>•</span>
												{line.replace(/^-\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')}
											</p>
										))}
									</div>

									{exp.url && (
										<div className='mt-auto flex justify-start'>
											<a 
												href={exp.url} 
												target='_blank' 
												rel='noopener noreferrer'
												className='flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/45 hover:text-white transition-colors group/btn'
											>
												<span className='border-b border-white/20 group-hover/btn:border-white transition-all'>
													{exp.ctaLabel || 'Visit project'}
												</span>
												<span className='text-base group-hover/btn:translate-x-1 transition-transform'>→</span>
											</a>
										</div>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<div className='w-full flex justify-center mt-10 md:mt-12'>
					<Link href='/story' legacyBehavior>
						<a className='flex items-center gap-2 text-white/70 hover:text-white transition-colors group'>
							<span className='text-sm md:text-base border-b border-white/25 group-hover:border-white transition-all pb-0.5'>
								View full growth timeline
							</span>
							<span className='text-lg transform group-hover:translate-x-1 transition-transform'>→</span>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
}
