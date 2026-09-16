'use client';

import React from 'react';
import Lottie from 'components/common/LottieWrapper';
import PageNotFoundAnimation from '../assets/lottie/404-dino.json';
import Button from 'components/common/Button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='min-h-screen min-w-full flex flex-col gap-4 items-center justify-center bg-black px-4'>
			<Lottie
				animationData={PageNotFoundAnimation}
				className='max-w-xs'
			/>
			<div className='flex items-center justify-center gap-3'>
				<Button onClick={() => window.history.back()}>Go Back</Button>
				<Button>
					<Link href='/'>Home</Link>
				</Button>
			</div>
		</div>
	);
}
