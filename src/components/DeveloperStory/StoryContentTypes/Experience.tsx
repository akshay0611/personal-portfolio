import React from 'react';
import { ExperienceProps } from 'utils/developerStory';
import StoryComponent from '../StoryComponent';
import StoryDescription from '../StoryDescription';

export default function Experience({
	positionHeld,
	orgName = 'No name',
	orgLocation = 'No location',
	imageURL,
	description,
	url,
	ctaLabel = 'View',
	showReadMore = true,
	...props
}: ExperienceProps & { showReadMore?: boolean }) {
	return (
		<div className='flex flex-col gap-6'>
			<StoryComponent.HeaderWrapper>
				<StoryComponent.SquareLogo imageURL={imageURL} />
				<div className='flex flex-col'>
					<h3 className='w-full font-bold text-lg md:text-xl text-white leading-snug'>
						{positionHeld}
					</h3>
					<div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mt-1'>
						<h4 className='font-medium text-xs md:text-sm text-white/70'>{orgName}</h4>
						<span className='hidden md:block text-white/30'>•</span>
						<h4 className='font-normal text-xs text-white/50 italic'>
							{orgLocation}
						</h4>
					</div>
				</div>
			</StoryComponent.HeaderWrapper>

			{description && (
				<div className='story-description-container'>
					<StoryDescription showReadMore={showReadMore}>{description}</StoryDescription>
				</div>
			)}

			<div className='flex justify-start'>
				<StoryComponent.Button url={url}>{ctaLabel}</StoryComponent.Button>
			</div>
		</div>
	);
}
