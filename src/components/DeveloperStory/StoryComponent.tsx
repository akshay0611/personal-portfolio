import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

// Story Square Logo Image
interface StorySquareLogoProps {
	imageURL?: StaticImageData;
	fit?: 'cover' | 'contain';
}

function SquareLogo({ imageURL, fit = 'cover' }: StorySquareLogoProps) {
	if (!imageURL) return null;
	if (fit === 'contain') {
		return (
			<div className='w-20 h-20 shrink-0 flex items-center justify-center p-2 rounded-[14px] bg-white border border-black/10 overflow-hidden'>
				<Image
					src={imageURL}
					alt='Logo'
					height={200}
					width={200}
					className='w-full h-full object-contain'
				/>
			</div>
		);
	}
	return (
		<div className='w-16 md:w-24 overflow-hidden aspect-squar shrink-0'>
			<Image
				src={imageURL}
				alt='Logo'
				height={200}
				width={200}
				className='object-cover'
			/>
		</div>
	);
}

// Story Content Arrow on left or right
const Arrow = (props: React.HTMLAttributes<HTMLOrSVGElement>) => {
	return (
		<svg
			viewBox='0 0 417 693'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M408.917 328.307L34.4385 5.35902C20.4742 -6.63845 0.0195312 4.17894 0.0195312 23.5519V669.448C0.0195312 688.821 20.4742 699.639 34.4385 687.641L408.917 364.693C419.636 355.449 419.636 337.551 408.917 328.307Z'
				fill='currentColor'
			/>
		</svg>
	);
};

// Empty Story Content
const EmptySpace = () => <div className='w-full h-full' />;

// Common Button for all Developer Story Content Types
interface StoryButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
	url?: string;
	variant?: 'default' | 'primary';
	children?: React.ReactNode;
}

const Button = ({
	url,
	variant = 'default',
	children = 'View',
	...props
}: StoryButtonProps) => {
	if (!url) return null;

	const isExternal = /^https?:\/\//.test(url);
	const baseClasses =
		'text-sm uppercase transition border-1 px-2 py-0.5 rounded-sm flex-center';
	const variantClasses =
		variant === 'primary'
			? 'bg-blue-800 text-white border-blue-800 hover:bg-blue-900 hover:text-white'
			: 'bg-white text-black hover:bg-blue-900 hover:text-white';

	return (
		<Link
			href={url}
			target={isExternal ? '_blank' : undefined}
			rel={isExternal ? 'noopener noreferrer' : undefined}
			className={`${baseClasses} ${variantClasses}`}
			{...props}
		>
			{children}
		</Link>
	);
};

// Story Content Header Wrapper
interface HeaderWrapperProps {
	children?: React.ReactNode;
}

const HeaderWrapper = ({ children }: HeaderWrapperProps) => {
	return (
		<div className='flex items-start md:items-center justify-start gap-1.5 md:gap-2'>
			{children}
		</div>
	);
};

// Story Subheader
interface SubheaderProps {
	children?: React.ReactNode;
}

const Subheader = ({ children }: SubheaderProps) => {
	return (
		<div className='text-base md:text-lg text-white font-semibold mb-1'>
			{children}
		</div>
	);
};

function StoryComponent() {
	return <></>;
}

StoryComponent.SquareLogo = SquareLogo;
StoryComponent.Arrow = Arrow;
StoryComponent.EmptySpace = EmptySpace;
StoryComponent.Button = Button;
StoryComponent.HeaderWrapper = HeaderWrapper;
StoryComponent.Subheader = Subheader;

export default StoryComponent;
