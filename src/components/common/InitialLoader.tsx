'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HELLO_LANGUAGES = [
	{ text: 'Hello', lang: 'English' },
	{ text: 'Hola', lang: 'Spanish' },
	{ text: 'Bonjour', lang: 'French' },
	{ text: 'नमस्ते', lang: 'Hindi' },
	{ text: 'こんにちは', lang: 'Japanese' },
	{ text: 'Olá', lang: 'Portuguese' },
	{ text: 'Hallo', lang: 'German' },
	{ text: 'Ciao', lang: 'Italian' },
	{ text: '안녕하세요', lang: 'Korean' },
	{ text: 'مرحبا', lang: 'Arabic' },
];

const CYCLE_DURATION = 150; // ms per word
const HOLD_DURATION = 600; // ms to hold on final word before exit

export default function InitialLoader() {
	const [visible, setVisible] = useState(true);
	const [index, setIndex] = useState(0);
	const [reducedMotion, setReducedMotion] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		setReducedMotion(mq.matches);
	}, []);

	useEffect(() => {
		if (!visible) return;
		if (index >= HELLO_LANGUAGES.length - 1) {
			const exitTimer = setTimeout(() => setVisible(false), HOLD_DURATION);
			return () => clearTimeout(exitTimer);
		}
		const timer = setTimeout(() => setIndex((i) => i + 1), reducedMotion ? 80 : CYCLE_DURATION);
		return () => clearTimeout(timer);
	}, [index, visible, reducedMotion]);

	useEffect(() => {
		document.body.style.overflow = visible ? 'hidden' : '';
		return () => { document.body.style.overflow = ''; };
	}, [visible]);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: reducedMotion ? 0.1 : 0.4, ease: 'easeInOut' }}
					className='fixed inset-0 z-[9999] bg-black flex items-center justify-center'
				>
					<div className='relative flex flex-col items-center gap-4'>
						<AnimatePresence mode='popLayout'>
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
								animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
								exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
								transition={{ duration: reducedMotion ? 0.05 : 0.15, ease: 'easeOut' }}
								className='flex flex-col items-center'
							>
								<span className='text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-league'>
									{HELLO_LANGUAGES[index].text}
								</span>
								<span className='text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/25 mt-2 font-mono'>
									{HELLO_LANGUAGES[index].lang}
								</span>
							</motion.div>
						</AnimatePresence>

						<div className='absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-1'>
							{HELLO_LANGUAGES.map((_, i) => (
								<span
									key={i}
									className={`block w-1 h-1 rounded-full transition-all duration-150 ${
										i === index ? 'bg-white/80 scale-125' : i < index ? 'bg-white/30' : 'bg-white/10'
									}`}
								/>
							))}
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
