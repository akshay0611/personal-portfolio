'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ReadingProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 140,
		damping: 28,
		restDelta: 0.001,
	});

	return (
		<motion.div
			aria-hidden='true'
			style={{ scaleX }}
			className='fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-blue-600 via-blue-400 to-sky-300'
		/>
	);
}
