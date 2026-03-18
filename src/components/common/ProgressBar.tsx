import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ProgressBar() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	return (
		<motion.div
			className='fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 z-[100] origin-left'
			style={{ scaleX }}
		/>
	);
}
