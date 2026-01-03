import DeveloperStory from 'components/DeveloperStory';
import Link from 'next/link';
import React from 'react';
import Wave from 'react-wavify';
import { featuredStory } from 'data/story/featured';

export default function Projects() {
	return (
		<section
			className='home-section bg-dark-gray relative'
			id='developerstory'
		>
			<div className='max-section-width flex flex-col items-center md:items-start gap-2'>
				<h1 className='h1 leading-normal animate-text-bg before:bg-white hover:text-dark-gray text-center md:text-left'>
					Developer Story
				</h1>
				<p className='text-white/50 text-xs md:text-base -mt-4 mb-10 md:-mt-6 font-light max-w-2xl text-center md:text-left'>
					A timeline of growth, ownership, and real-world impact.
				</p>

				<DeveloperStory
					developerStoryData={featuredStory}
					position='alternate'
					muted={true}
				/>

				<div className='w-full flex justify-center mt-12'>
					<Link href='/story' legacyBehavior>
						<a className='flex items-center gap-2 text-white/70 hover:text-white transition-colors group'>
							<span className='text-sm md:text-base border-b border-white/20 group-hover:border-white transition-all pb-0.5'>
								View full timeline
							</span>
							<span className='text-lg transform group-hover:translate-x-1 transition-transform'>→</span>
						</a>
					</Link>
				</div>
			</div>
			<Wave
				fill='black'
				paused={false}
				options={{
					height: 20,
					amplitude: 20,
					speed: 0.2,
					points: 3,
				}}
				className='absolute bottom-0 -mb-6 h-12 left-0 right-0 w-screen bg-dark-gray'
			/>
		</section>
	);
}
