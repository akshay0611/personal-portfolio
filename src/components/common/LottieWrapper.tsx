import dynamic from 'next/dynamic';
import { LottieComponentProps } from 'lottie-react';

const Lottie = dynamic(() => import('lottie-react'), {
	ssr: false,
});

export default Lottie as React.ComponentType<LottieComponentProps>;
