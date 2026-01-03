import {
	DEFAULT_STORY_TYPE,
	storyTypes,
	STORY_TYPES,
} from 'utils/developerStory';

interface StorySeperatorProps {
	firstIndex?: boolean;
	lastIndex?: boolean;
	storyType?: STORY_TYPES;
	muted?: boolean;
}

export const StorySeperator = ({
	firstIndex = false,
	lastIndex = false,
	storyType = DEFAULT_STORY_TYPE,
	muted = false,
	...props
}: StorySeperatorProps) => {
	return (
		<div className='flex-col-center w-full h-full'>
			{firstIndex ? (
				<span className='w-1px bg-transparent h-6' />
			) : (
				<span className={`w-1px ${muted ? 'bg-white/5' : 'bg-white/20'} h-6`} />
			)}
			<div
				style={
					{
						backgroundColor: storyTypes[storyType].color,
						// borderColor: storyTypes[storyType].color,
					}
				}
				className={`w-6 h-6 aspect-square border-1 ${muted ? 'border-white/20 opacity-40' : 'border-white/40 opacity-80'} box-border rounded-full flex-center hover:opacity-100 transition-opacity`}
			>
				<div className='scale-75 opacity-70'>
					{storyTypes[storyType as keyof typeof storyTypes].icon}
				</div>
			</div>
			{lastIndex ? (
				<span className='w-1px bg-transparent grow' />
			) : (
				<span className={`w-1px ${muted ? 'bg-white/5' : 'bg-white/20'} grow min-h-6`} />
			)}
		</div>
	);
};
