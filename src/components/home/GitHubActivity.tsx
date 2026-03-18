import React from 'react';
import { FaGithub, FaCodeBranch, FaStar, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

export default function GitHubActivity() {
	const stats = [
		{ label: 'GSSoC Rank', value: '#2', icon: <FaStar className='text-yellow-400' />, description: 'Out of 3,424+ Global Contributors' },
		{ label: 'PRs Merged', value: '238+', icon: <FaCodeBranch className='text-purple-400' />, description: 'Successfully across various repos' },
		{ label: 'Points Earned', value: '2,014', icon: <FaCode className='text-blue-400' />, description: 'Total points in GSSoC 2025' },
	];

	return (
		<section className='home-section relative py-20 bg-dark-gray' id='github'>
			<div className='max-section-width'>
				<div className='flex flex-col md:flex-row items-end justify-between mb-12 gap-6'>
					<div className='flex flex-col'>
						<h1 className='h1 leading-normal animate-text-bg before:bg-white hover:text-dark-gray'>
							Open Source Impact
						</h1>
						<p className='text-white/50 text-xs md:text-base -mt-2 font-light max-w-xl'>
							Consistency is key. My journey through global open-source programs and high-velocity contributions.
						</p>
					</div>
					<a 
						href='https://github.com/akshay0611' 
						target='_blank' 
						rel='noopener noreferrer'
						className='github-button group'
					>
						<FaGithub className='text-xl' />
						<span>Explore Repositories</span>
					</a>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className='stat-card group'
						>
							<div className='flex items-start justify-between'>
								<div className='stat-content'>
									<p className='stat-label uppercase tracking-widest font-bold text-[10px] mb-2 text-white/40 group-hover:text-white/60 transition-colors'>
										{stat.label}
									</p>
									<p className='stat-value'>
										{stat.value}
									</p>
									<p className='text-[11px] text-white/30 mt-2 font-medium italic'>
										{stat.description}
									</p>
								</div>
								<div className='stat-icon-wrapper bg-white/5 border border-white/10 group-hover:border-white/20'>
									<div className='text-xl group-hover:scale-110 transition-transform'>
										{stat.icon}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Contribution Heatmap Placeholder/Mockup Effect */}
				<div className='mt-12 p-8 bg-zinc-950/50 rounded-2xl border border-white/5 relative overflow-hidden group'>
					<div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity'>
						<FaGithub size={120} />
					</div>
					<div className='relative z-10'>
						<h3 className='text-sm font-bold tracking-[0.2em] uppercase text-white/60 mb-6 flex items-center gap-2'>
							<span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
							Recent Activity Heatmap
						</h3>
						<div className='flex flex-wrap gap-1.5 justify-center md:justify-between overflow-x-auto pb-2'>
							<GitHubCalendar 
								username="akshay0611"
								colorScheme="dark"
								theme={{
									dark: ['#1a1a2e', '#1e4d2b', '#2d7a3a', '#3da84e', '#4ac963']
								}}
								fontSize={12}
								blockSize={13}
								blockMargin={4}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
