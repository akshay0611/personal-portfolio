'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'components/common/LottieWrapper';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { aboutContent } from 'utils/constants/About';

export default function About() {
	const [AboutMeAnimation, setAboutMeAnimation] = useState<any>(null);
	useEffect(() => {
		// @ts-ignore
		import('assets/lottie/about-me.json').then((m: any) => {
			setAboutMeAnimation(m.default ?? m);
		});
	}, []);
	return (
		<section className='home-section relative flex-center' id='about'>
			<div className='max-section-width h-full flex gap-4 items-center justify-center'>
				<div className='mr-10 hidden lg:block'>
					{AboutMeAnimation ? (
						<Lottie
							animationData={AboutMeAnimation}
							className='max-w-sm'
						/>
					) : null}
				</div>
				<div className='lg:w-1/2 text-center lg:text-left'>
					<h2 className='h1 animate-text-bg before:bg-white hover:text-black'>
						About Me
					</h2>
					<ReactMarkdown
						allowedElements={['p', 'a', 'b', 'i', 'strong', 'em']}
						skipHtml
						className='about-react-markdown flex flex-col items-start gap-2'
					>
						{aboutContent}
					</ReactMarkdown>
					<p className='leading-loose text-sm italic'>
						<span className='font-bold'>You know the drill</span> -
						Keep scrolling!
					</p>
				</div>
				<div className='absolute bottom-0 -mb-6 h-12 left-0 right-0 w-screen bg-black' aria-hidden='true' />
			</div>
		</section>
	);
}
