import React, { useEffect, useState } from 'react';
import Lottie from 'components/common/LottieWrapper';
import DevSkillsAnimation from '../../assets/lottie/developer-yoga.json';
import { Categories, allSkills } from 'utils/constants/Skills';
import SkillBadge from 'components/common/SkillBadge';
import SkillsFilter from './SkillsFilter';

const AllCategories = [
	{
		name: 'All Categories',
		id: 'all',
	},
	...Categories,
];

export default function Skills() {
	const [allSkillsFiltered, setAllSkillsFiltered] = useState(allSkills);
	const [selectedCategory, setSelectedCategory] = useState(AllCategories[0]);
	const [showAll, setShowAll] = useState(false);
	const INITIAL_DISPLAY_COUNT = 12; // Adjust this number as needed

	useEffect(() => {
		if (selectedCategory.id === 'all') {
			setAllSkillsFiltered(allSkills);
		} else {
			setAllSkillsFiltered(
				allSkills.filter(
					(skill) =>
						skill.category?.findIndex(
							(e) => e === selectedCategory.id
						) !== -1
				)
			);
		}
		// Reset showAll when category changes
		setShowAll(false);
	}, [selectedCategory]);

	const displayedSkills = showAll
		? allSkillsFiltered
		: allSkillsFiltered.slice(0, INITIAL_DISPLAY_COUNT);

	return (
		<section className='home-section bg-dark-gray flex-center' id='skills'>
			<div className='max-section-width flex gap-4 items-center justify-center relative text-center lg:text-right'>
				<div className='lg:w-1/2'>
					<h1 className='h1 animate-text-bg before:bg-white hover:text-dark-gray'>
						Tools & Skills
					</h1>
					<p className='font-extralight text-sm -mt-4 mb-4'>
						More of a{' '}
						<b>
							<i>learn-it-all</i>
						</b>
						, than a know-it-all.
					</p>
					<ul className='flex flex-row-reverse flex-wrap items-center justify-center lg:justify-start gap-3'>
						<SkillsFilter
							AllCategories={AllCategories}
							selectedCategory={selectedCategory}
							setSelectedCategory={setSelectedCategory}
						/>
						{displayedSkills.map((skill, index) => (
							<SkillBadge
								skill={skill}
								index={index}
								key={index}
							/>
						))}
					</ul>
					{allSkillsFiltered.length > INITIAL_DISPLAY_COUNT && (
						<button
							onClick={() => setShowAll(!showAll)}
							className='mt-4 px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl'
						>
							{showAll
								? 'Show Less'
								: `Show ${allSkillsFiltered.length - INITIAL_DISPLAY_COUNT} More`}
						</button>
					)}
				</div>
				<div className='mr-10 hidden lg:block'>
					<Lottie
						animationData={DevSkillsAnimation}
						className='max-w-sm'
					/>
				</div>
			</div>
		</section>
	);
}
