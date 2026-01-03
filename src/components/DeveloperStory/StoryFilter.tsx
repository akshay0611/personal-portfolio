import React, { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { storyTypes } from 'utils/developerStory';
import {
	DeveloperStoryDataProps,
} from 'utils/developerStory';
import { useRouter } from 'next/router';

interface DeveloperStoryFilterProps {
	setFilteredStoryData: Function;
	developerStoryData: DeveloperStoryDataProps;
}

export const DeveloperStoryFilter = ({
	setFilteredStoryData,
	developerStoryData,
}: DeveloperStoryFilterProps) => {
	const router = useRouter();
	const [chosenType, setChosenType] = useState('featured');

	const filterData = () => {
		switch (chosenType) {
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
						(story) => story.storyType === chosenType
					)
				);
		}
	};

	const handleChoiceChange = (choice: string) => {
		setChosenType(choice);
		router.push(
			{
				pathname: '/story',
				query: { filter: choice },
			},
			undefined,
			{ shallow: true }
		);
	};

	useEffect(() => {
		filterData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chosenType]);

	useEffect(() => {
		if (!router.isReady) return;

		const {
			query: { filter },
		} = router;
		if (Object.keys(storyTypes).includes(filter as string) || filter === 'all' || filter === 'featured') {
			handleChoiceChange(filter as string);
		} else {
			handleChoiceChange('featured');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.isReady]);

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
};
