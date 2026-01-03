import React from 'react';
import { curatedSkills, secondarySkills } from 'utils/constants/Skills';
import SkillBadge from 'components/common/SkillBadge';
import Lottie from 'components/common/LottieWrapper';
import DevSkillsAnimation from '../../assets/lottie/developer-yoga.json';

export default function Skills() {
	return (
		<section className='home-section bg-dark-gray flex-center py-20' id='skills'>
			<div className='max-section-width px-4 w-full flex flex-col lg:flex-row items-center gap-10'>
				<div className='flex-1 w-full'>
					<div className='text-center lg:text-left mb-16'>
						<h1 className='h1 animate-text-bg before:bg-white hover:text-dark-gray inline-block'>
							What I Work With
						</h1>
						<p className='font-light text-sm md:text-base mt-2 text-white/70'>
							Tools I use to design, build, and ship production-grade systems.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
						{Object.entries(curatedSkills).map(([key, group]) => (
							<div key={key} className='flex flex-col items-center md:items-start'>
								<h3 className='text-base font-semibold mb-4 text-white/90 border-b border-white/10 pb-2 w-full text-center md:text-left'>
									{group.title}
								</h3>
								<div className='flex flex-wrap justify-center md:justify-start gap-3'>
									{group.items.map((skill) => (
										<SkillBadge key={skill.id} skill={skill} />
									))}
								</div>
							</div>
						))}
					</div>

					<div className='max-w-4xl mx-auto lg:mx-0'>
						<details className='group bg-black/30 rounded-xl overflow-hidden border border-white/5 transition-all duration-300'>
							<summary className='flex items-center justify-between p-5 cursor-pointer hover:bg-white/5 transition-colors list-none'>
								<div className='flex flex-col items-start'>
									<span className='text-base font-medium text-white/90'>
										Supporting Tools & Platforms
									</span>
									<span className='text-xs text-white/50 mt-1'>
										Used where they fit best across projects.
									</span>
								</div>
								<div className='text-white/30 group-open:rotate-180 transition-transform duration-300'>
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<polyline points="6 9 12 15 18 9"></polyline>
									</svg>
								</div>
							</summary>
							<div className='p-5 pt-0 flex flex-wrap gap-2 justify-center md:justify-start'>
								{secondarySkills.map((skill) => (
									<SkillBadge key={skill.id} skill={skill} />
								))}
							</div>
						</details>
					</div>
				</div>

				<div className='lg:w-1/3 hidden lg:block opacity-80 hover:opacity-100 transition-opacity duration-500'>
					<Lottie
						animationData={DevSkillsAnimation}
						className='max-w-xs md:max-w-sm ml-auto'
					/>
				</div>
			</div>
		</section>
	);
}
