import React from 'react';
import { FaGithub, FaCodeBranch, FaStar, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

type StatIconKey = 'star' | 'branch' | 'code';

interface OpenSourceMetric {
	label: string;
	value: string;
	description: string;
	iconKey: StatIconKey;
	emphasis?: boolean;
	trend?: string;
	sourceUrl?: string;
}

export default function GitHubActivity() {
	const stats: OpenSourceMetric[] = [
		{
			label: 'GSSoC Rank',
			value: '#2',
			description: 'Out of 25,000+ global contributors',
			iconKey: 'star',
			emphasis: true,
		},
		{
			label: 'PRs Merged',
			value: '238+',
			description: 'Merged across multiple production repositories',
			iconKey: 'branch',
		},
		{
			label: 'Points Earned',
			value: '2,014',
			description: 'Total points during GSSoC 2025',
			iconKey: 'code',
		},
	];

	const iconMap: Record<StatIconKey, React.ReactNode> = {
		star: <FaStar className='text-amber-300' />,
		branch: <FaCodeBranch className='text-violet-300' />,
		code: <FaCode className='text-blue-300' />,
	};

	return (
		<section className='home-section relative py-20 bg-dark-gray overflow-hidden' id='github'>
			<div className='github-bg-glow' />
			<div className='max-section-width relative z-10'>
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5'>
					<div className='flex flex-col'>
						<h1 className='h1 leading-normal animate-text-bg before:bg-white hover:text-dark-gray'>
							Open Source Impact
						</h1>
						<p className='text-white/55 text-sm md:text-base -mt-2 font-light max-w-2xl leading-relaxed'>
							High-volume, sustained open-source delivery across global programs and real repositories. I focus on consistent execution, quality PRs, and measurable outcomes.
						</p>
					</div>
					<a
						href='https://github.com/akshay0611' 
						target='_blank' 
						rel='noopener noreferrer'
						className='github-button-minimal group'
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
							className='stat-card-minimal group'
						>
							<div className='flex items-start justify-between'>
								<div className='stat-content pr-3'>
									<p className='uppercase tracking-[0.18em] font-semibold text-[10px] mb-3 text-white/45 group-hover:text-white/60 transition-colors'>
										{stat.label}
									</p>
									<p className={`stat-value-minimal ${stat.emphasis ? 'text-white' : 'text-zinc-100'}`}>
										{stat.value}
									</p>
									<p className='text-xs text-white/45 mt-2 font-medium'>
										{stat.description}
									</p>
								</div>
								<div className='stat-icon-wrapper-minimal'>
									<div className='text-sm opacity-80'>
										{iconMap[stat.iconKey]}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<div className='mt-10 p-5 md:p-6 bg-zinc-950/45 rounded-2xl border border-white/10 relative overflow-hidden'>
					<div className='relative z-10' tabIndex={0}>
						<div className='mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2'>
							<h3 className='text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-white/65 flex items-center gap-2'>
								<span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>
								Recent Activity Heatmap
							</h3>
							<p className='text-xs text-white/45 uppercase tracking-[0.14em]'>
								Last 12 Months Consistency
							</p>
						</div>
						<div className='flex justify-between items-center mb-4'>
							<p className='text-sm text-zinc-300 font-medium'>
								2,592 contributions in the last year
							</p>
							<a
								href='https://github.com/pulls?q=is%3Apr+author%3Aakshay0611+is%3Amerged'
								target='_blank'
								rel='noopener noreferrer'
								className='text-xs text-blue-300 hover:text-blue-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 rounded-sm px-1'
							>
								View recent merged PRs
							</a>
						</div>
						<div className='overflow-x-auto pb-2 github-calendar-wrap'>
							<GitHubCalendar
								username='akshay0611'
								colorScheme='dark'
								theme={{
									dark: ['#121427', '#1e4d2b', '#2d7a3a', '#3da84e', '#4ac963'],
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
