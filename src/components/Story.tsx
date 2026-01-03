import React, { useEffect, useState } from 'react';
import DeveloperStory from 'components/DeveloperStory';
import Link from 'next/link';
import Footer from 'components/footer';
import { fullStory } from 'data/story/all';
import { DeveloperStoryFilter } from './DeveloperStory/StoryFilter';
import { AiFillHome, AiOutlineLink } from 'react-icons/ai';

export default function Story() {
	const [position, setPosition] = useState('left');
	const [filteredStoryData, setFilteredStoryData] = useState(
		fullStory.filter((story) => story.data.featured)
	);

	// Orientation of the developer story
	useEffect(() => {
		setPosition(window.innerWidth < 500 ? 'left' : 'alternate');
	}, []);

	// This feature is not available for Mobile Devices with http protocol
	const copyUrl = async (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (navigator['share']) {
			await navigator.share({
				title: "Akshay's Developer Story",
				text: "Checkout Akshay's Developer Story",
				url: window.location.href,
			});
		} else if (navigator.clipboard) {
			navigator.clipboard.writeText(window.location.href);
			(
				e.currentTarget.lastChild as unknown as HTMLParagraphElement
			).textContent = 'Copied!';
		}
	};

	return (
		<>
			<section
				className='home-section min-h-fit bg-dark-gray relative'
				id='developerstory'
			>
				<div className='max-section-width flex flex-col items-center md:items-start gap-2'>
					<div className='sticky flex gap-2 top-2 md:top-4 text-white z-50'>
						<Link href='/' legacyBehavior>
							<a className='flex items-center gap-1 border-2 border-white px-2 md:px-3 py-2 rounded-full bg-dark-gray bg-opacity-50 backdrop-filter backdrop-blur-sm'>
								<AiFillHome className='text-base md:text-xl' />
								<p className='text-sm md:text-base mt-0.5'>
									Home
								</p>
							</a>
						</Link>
						<a
							onClick={copyUrl}
							className='flex transition items-center gap-1 border-2 border-white px-2 md:px-3 py-2 rounded-full bg-dark-gray bg-opacity-50 backdrop-filter backdrop-blur-sm cursor-pointer'
						>
							<AiOutlineLink className='text-base md:text-xl' />
							<p className='text-sm md:text-base mt-0.5'>
								Share URL
							</p>
						</a>
					</div>
					<h1 className='h1 leading-normal animate-text-bg before:bg-white hover:text-dark-gray'>
						Developer Story
					</h1>
					<p className='text-white/50 text-xs md:text-base -mt-4 mb-8 md:-mt-6 font-light max-w-2xl'>
						3+ years of building production systems, leading open-source projects, and shipping software that scales.
					</p>
					<DeveloperStoryFilter
						setFilteredStoryData={setFilteredStoryData}
						developerStoryData={fullStory}
					/>
					<DeveloperStory
						developerStoryData={filteredStoryData.sort((a, b) => {
							const fromDateA = a.data.fromDate;
							const fromDateTimeA =
								fromDateA.toLowerCase() === 'present'
									? new Date()
									: new Date(fromDateA);
							const toDateA = a.data.toDate;
							const toDateTimeA =
								toDateA.toLowerCase() === 'present'
									? new Date()
									: new Date(toDateA);
							const fromDateB = b.data.fromDate;
							const fromDateTimeB =
								fromDateB.toLowerCase() === 'present'
									? new Date()
									: new Date(fromDateB);
							const toDateB = b.data.toDate;
							const toDateTimeB =
								toDateB.toLowerCase() === 'present'
									? new Date()
									: new Date(toDateB);

							if (toDateTimeA > toDateTimeB) return -1;
							else if (toDateTimeA < toDateTimeB) return 1;
							else if (fromDateTimeA > fromDateTimeB) return -1;
							else if (fromDateTimeA < fromDateTimeB) return 1;

							return 0;
						})}
						position={position as any}
						muted={false}
					/>
				</div>
			</section>
			<Footer />
		</>
	);
}
