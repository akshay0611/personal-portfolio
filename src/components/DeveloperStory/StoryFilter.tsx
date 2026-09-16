'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { RadioGroup } from '@headlessui/react';
import { storyTypes } from 'utils/developerStory';
import {
	DeveloperStoryDataProps,
} from 'utils/developerStory';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

interface DeveloperStoryFilterProps {
	setFilteredStoryData: Function;
	developerStoryData: DeveloperStoryDataProps;
}

function DeveloperStoryFilterContent({
	setFilteredStoryData,
	developerStoryData,
}: DeveloperStoryFilterProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [chosenType, setChosenType] = useState('featured');

	const filterData = (type: string) => {
		switch (type) {
			case 'all':
				setFilteredStoryData(developerStoryData);
				break;
			case 'featured':
				setFilteredStoryData(
					developerStoryData.filter((story) => story.data.featured)
				);
				break;
			default:
				setFilteredStoryData(
					developerStoryData.filter(
						(story) => story.storyType === type
					)
				);
		}
	};

	const handleChoiceChange = (choice: string) => {
		setChosenType(choice);
		filterData(choice);
		const params = new URLSearchParams(searchParams ? searchParams.toString() : '');
		params.set('filter', choice);
		router.push(`${pathname}?${params.toString()}`);
	};

	useEffect(() => {
		const filter = searchParams ? searchParams.get('filter') : null;
		if (filter && (Object.keys(storyTypes).includes(filter) || filter === 'all' || filter === 'featured')) {
			setChosenType(filter);
			filterData(filter);
		} else {
			setChosenType('featured');
			filterData('featured');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams]);

	return (
		<RadioGroup
			value={chosenType}
			onChange={handleChoiceChange}
			className='flex gap-2 items-center mb-5'
		>
			<p className='text-sm md:text-base'>Filter: </p>
			<div className='flex items-center justify-center md:justify-start gap-1 flex-wrap'>
				{developerStoryData.filter((sd) => sd.data.featured).length > 0 && (
					<RadioGroup.Option value='featured'>
						{({ checked }) => (
							<span
								className={
									(checked
										? 'bg-blue-800'
										: 'bg-black') +
									' flex items-center justify-center gap-2 px-1.5 md:px-2 py-0.5 text-sm md:text-base md:py-1 border-1 cursor-pointer box-border'
								}
							>
								featured
								<span className='bg-white text-black text-sm px-2 rounded-lg'>
									{developerStoryData.filter((sd) => sd.data.featured).length}
								</span>
							</span>
						)}
					</RadioGroup.Option>
				)}
				<RadioGroup.Option value='all'>
					{({ checked }) => (
						<span
							className={
								(checked
									? 'bg-blue-800'
									: 'bg-black') +
								' flex items-center justify-center gap-2 px-1.5 md:px-2 py-0.5 text-sm md:text-base md:py-1 border-1 cursor-pointer box-border'
							}
						>
							all
							<span className='bg-white text-black text-sm px-2 rounded-lg'>
								{developerStoryData.length}
							</span>
						</span>
					)}
				</RadioGroup.Option>
				{Object.keys(storyTypes).map((key, index) => {
					const count = developerStoryData.filter(
						(sd) => sd.storyType === key
					).length;

					if (count === 0) return null;

					return (
						<RadioGroup.Option value={key} key={index}>
							{({ checked }) => (
								<span
									className={
										(checked
											? 'bg-blue-800 '
											: '') +
										' flex items-center justify-center gap-2 px-1.5 md:px-2 py-0.5 text-sm md:text-base md:py-1 border-1 cursor-pointer box-border'
									}
								>
									{
										storyTypes[
											key as unknown as keyof typeof storyTypes
										].title
									}
									<span className='bg-white text-black text-sm px-2 rounded-lg'>
										{count}
									</span>
								</span>
							)}
						</RadioGroup.Option>
					);
				})}
			</div>
		</RadioGroup>
	);
}

export const DeveloperStoryFilter = (props: DeveloperStoryFilterProps) => {
	return (
		<Suspense fallback={null}>
			<DeveloperStoryFilterContent {...props} />
		</Suspense>
	);
};
