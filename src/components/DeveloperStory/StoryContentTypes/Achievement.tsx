import React from 'react';
import { AchievementProps } from 'utils/developerStory';
import StoryComponent from '../StoryComponent';
import StoryDescription from '../StoryDescription';

export default function Achievement({
	title = 'No title',
	orgName,
	imageURL,
	description,
	url,
	showReadMore = true,
	...props
}: AchievementProps & { showReadMore?: boolean }) {
	return (
		<>
			<StoryComponent.HeaderWrapper>
				<StoryComponent.SquareLogo imageURL={imageURL} />
				<div className='flex flex-col'>
					<h3 className='w-full font-semibold text-xl'>{title}</h3>
					{orgName && (
						<h4 className='w-full font-normal text-sm'>
							{orgName}
						</h4>
					)}
				</div>
			</StoryComponent.HeaderWrapper>
			{description && <StoryDescription showReadMore={showReadMore}>{description}</StoryDescription>}
			<StoryComponent.Button url={url}>View</StoryComponent.Button>
		</>
	);
}
