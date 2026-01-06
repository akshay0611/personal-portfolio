import React, { useState } from 'react';
import {
	DEFAULT_POSITION_TYPES,
	DeveloperStoryDataProps,
	POSITION_TYPES,
	STORY_TYPES,
} from 'utils/developerStory';
import { StoryItem } from './StoryItem';
import Lottie from 'components/common/LottieWrapper';
import NoResultAnimation from '../../assets/lottie/no-results.json';

interface DeveloperStoryProps extends React.HTMLAttributes<HTMLDivElement> {
	position?: POSITION_TYPES;
	limitTo?: number;
	developerStoryData: DeveloperStoryDataProps;
	muted?: boolean;
	showReadMore?: boolean;
	showFeatured?: boolean;
}

export default function DeveloperStory({
	position = DEFAULT_POSITION_TYPES,
	limitTo,
	developerStoryData,
	muted = false,
	showReadMore = true,
	showFeatured = true,
	...props
}: DeveloperStoryProps) {
	const [limitToValue, setLimitToValue] = useState(limitTo);
	const [activePosition, setActivePosition] = useState<POSITION_TYPES>(position);

	React.useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setActivePosition('left');
			} else {
				setActivePosition(position);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [position]);

	const outerClass = {
		left: 'grid-cols-[25px_1fr]',
		right: 'grid-cols-[1fr_25px]',
		alternate: 'grid-cols-[1fr_25px_1fr]',
		'left-with-blank': 'grid-cols-[1fr_25px_1fr]',
		'right-with-blank': 'grid-cols-[1fr_25px_1fr]',
	};
	return (
		<>
			<div
				className={
					outerClass[activePosition || DEFAULT_POSITION_TYPES] +
					' grid w-full'
				}
			>
				{developerStoryData
					.slice(0, limitToValue)
					.map((storyItem, index) => (
						<StoryItem
							data={storyItem.data}
							position={activePosition}
							storyType={storyItem.storyType as STORY_TYPES}
							index={index}
							firstIndex={index === 0}
							lastIndex={index === developerStoryData.length - 1}
							key={index}
							muted={muted}
							showReadMore={showReadMore}
							showFeatured={showFeatured}
						/>
					))}
			</div>
			{developerStoryData.length === 0 && (
				<div className='w-full flex-col-center'>
					<Lottie
						animationData={NoResultAnimation}
						className='max-w-xs'
					/>
					<h1 className='-mt-10 text-lg'>Nothing to show here!</h1>
				</div>
			)}
		</>
	);
}
