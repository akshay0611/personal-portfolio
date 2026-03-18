import React from 'react';
import Image from 'next/image';
import { allExperiences } from 'utils/constants/Experiences';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Experiences() {
	// Filter for featured experiences to show on homepage
	const featuredExperiences = Object.values(allExperiences).filter(exp => exp.featured);

	return (
		<section className='home-section bg-black relative' id='experience'>
			<div className='max-section-width'>
				<div className='flex flex-col mb-12'>
					<h1 className='h1 leading-normal animate-text-bg before:bg-white hover:text-black'>
						Professional Journey
					</h1>
					<p className='text-white/50 text-xs md:text-base -mt-2 font-light max-w-2xl'>
						Building scalable systems and leading technical initiatives across production-grade platforms.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{featuredExperiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className='group relative bg-zinc-900/40 rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden backdrop-blur-sm'
						>
							{/* Background Glow */}
							<div className='absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500' />
							
							<div className='relative flex flex-col h-full'>
								<div className='flex flex-wrap md:flex-nowrap items-start justify-between mb-6 gap-y-4'>
									<div className='flex gap-4 items-center min-w-0 w-full md:w-auto'>
										<div className='w-12 h-12 rounded-xl overflow-hidden bg-zinc-800 border border-white/10 p-1 group-hover:scale-110 transition-transform duration-500 shrink-0'>
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
											<h3 className='font-bold text-white text-lg group-hover:text-yellow-200 transition-colors'>
												{exp.positionHeld}
											</h3>
											<p className='text-white/60 text-sm font-medium'>
												{exp.orgName}
											</p>
										</div>
									</div>
									<div className='text-left md:text-right shrink-0'>
										<span className='px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white/40 border border-white/5 group-hover:border-white/10 whitespace-nowrap'>
											{exp.fromDate} — {exp.toDate}
										</span>
									</div>
								</div>

								<div className='text-white/70 text-sm leading-relaxed mb-6 space-y-2 prose prose-invert prose-xs max-w-none'>
									{exp.description.split('\n').filter(line => line.trim()).map((line, i) => (
										<p key={i} className='flex gap-2 items-start'>
											<span className='text-yellow-500/50 mt-1.5 shrink-0'>•</span>
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
											className='flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors group/btn'
										>
											<span className='border-b border-transparent group-hover/btn:border-white transition-all'>
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

				<div className='w-full flex justify-center mt-12'>
					<Link href='/story' legacyBehavior>
						<a className='flex items-center gap-2 text-white/70 hover:text-white transition-colors group'>
							<span className='text-sm md:text-base border-b border-white/20 group-hover:border-white transition-all pb-0.5'>
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
