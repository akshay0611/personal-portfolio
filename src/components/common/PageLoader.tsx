'use client';

import { Transition } from '@headlessui/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { ImSpinner10 } from 'react-icons/im';

function PageLoaderContent() {
	const [isLoading, setIsLoading] = useState(false);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		setIsLoading(false);
	}, [pathname, searchParams]);

	return (
		<>
			{
				<Transition
					show={isLoading}
					enter='transition duration-100'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
					unmount={false}
					className='fixed top-0 right-0 h-screen w-screen z-100 bg-zinc-900 flex-col-center gap-2'
					id='page-loader-backdrop'
				>
					<ImSpinner10 className='animate-spin text-5xl' />
					Loading Page
				</Transition>
			}
		</>
	);
}

export default function PageLoader() {
	return (
		<Suspense fallback={null}>
			<PageLoaderContent />
		</Suspense>
	);
}
