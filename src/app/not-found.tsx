'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'components/common/LottieWrapper';
import Button from 'components/common/Button';
import Link from 'next/link';

export default function NotFound() {
	const [PageNotFoundAnimation, setPageNotFoundAnimation] = useState<any>(null);
	useEffect(() => {
		// @ts-ignore
		import('../assets/lottie/404-dino.json').then((m: any) => {
			setPageNotFoundAnimation(m.default ?? m);
		});
	}, []);
	return (
		<div className='min-h-screen min-w-full flex flex-col gap-4 items-center justify-center bg-black px-4'>
			{PageNotFoundAnimation ? (
				<Lottie
					animationData={PageNotFoundAnimation}
					className='max-w-xs'
				/>
			) : null}
			<div className='flex items-center justify-center gap-3'>
				<Button onClick={() => window.history.back()}>Go Back</Button>
				<Button>
					<Link href='/'>Home</Link>
				</Button>
			</div>
		</div>
	);
}
