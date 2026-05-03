import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Wave from 'react-wavify';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { AiFillLinkedin, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsQuote } from 'react-icons/bs';
import Lottie from 'components/common/LottieWrapper';
import RecommendationAnimation from '../../assets/lottie/recommendation.json';
import { recommendations } from 'utils/constants/Recommendations';

const SWIPE_THRESHOLD = 70;

function Testimonials() {
	const [showIndex, setShowIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isReducedMotion, setIsReducedMotion] = useState(false);
	const [showIllustration, setShowIllustration] = useState(false);
	const [isAutoplayEnabled] = useState(true);
	const [isCarouselPaused, setIsCarouselPaused] = useState(false);

	const activeRecommendation = useMemo(
		() => recommendations[showIndex],
		[showIndex]
	);

	useEffect(() => {
		setIsExpanded(false);
	}, [showIndex]);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const reducedMotionMedia = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		);
		const tabletMedia = window.matchMedia('(min-width: 1024px)');

		const updateState = () => {
			const shouldReduce = reducedMotionMedia.matches;
			setIsReducedMotion(shouldReduce);
			setShowIllustration(tabletMedia.matches && !shouldReduce);
		};

		updateState();
		reducedMotionMedia.addEventListener('change', updateState);
		tabletMedia.addEventListener('change', updateState);

		return () => {
			reducedMotionMedia.removeEventListener('change', updateState);
			tabletMedia.removeEventListener('change', updateState);
		};
	}, []);

	const moveToIndex = useCallback(
		(nextIndex: number) => {
			if (nextIndex === showIndex) return;
			setDirection(nextIndex > showIndex ? 1 : -1);
			setShowIndex(nextIndex);
		},
		[showIndex]
	);

	const handlePreviousRecommendation = useCallback(() => {
		if (showIndex === 0) return;
		setDirection(-1);
		setShowIndex((prev) => prev - 1);
	}, [showIndex]);

	const handleNextRecommendation = useCallback(() => {
		if (showIndex === recommendations.length - 1) return;
		setDirection(1);
		setShowIndex((prev) => prev + 1);
	}, [showIndex]);

	const handleNextRecommendationLoop = useCallback(() => {
		setDirection(1);
		setShowIndex((prev) =>
			prev === recommendations.length - 1 ? 0 : prev + 1
		);
	}, []);

	const handleKeyNavigation = useCallback(
		(event: React.KeyboardEvent<HTMLElement>) => {
			if (event.key === 'ArrowLeft') {
				event.preventDefault();
				handlePreviousRecommendation();
			}
			if (event.key === 'ArrowRight') {
				event.preventDefault();
				handleNextRecommendation();
			}
		},
		[handleNextRecommendation, handlePreviousRecommendation]
	);

	useEffect(() => {
		if (!isAutoplayEnabled || isCarouselPaused || isReducedMotion) return;
		const autoplayTimer = window.setInterval(() => {
			handleNextRecommendationLoop();
		}, 4500);
		return () => window.clearInterval(autoplayTimer);
	}, [
		handleNextRecommendationLoop,
		isAutoplayEnabled,
		isCarouselPaused,
		isReducedMotion,
	]);

	const visibleIndexes = useMemo(() => {
		const total = recommendations.length;
		if (total <= 7) return Array.from({ length: total }, (_, index) => index);
		if (showIndex <= 3) return [0, 1, 2, 3, 4, -1, total - 1];
		if (showIndex >= total - 4)
			return [0, -1, total - 5, total - 4, total - 3, total - 2, total - 1];
		return [0, -1, showIndex - 1, showIndex, showIndex + 1, -1, total - 1];
	}, [showIndex]);

	return (
		<section
			className='home-section relative'
			id='testimonials'
			tabIndex={0}
			onKeyDown={handleKeyNavigation}
		>
			<div className='max-section-width h-full flex flex-col gap-8 items-center justify-center'>
				<div className='w-full text-center lg:text-left'>
					<h1 className='h1 leading-normal animate-text-bg before:bg-white hover:text-dark-gray'>
						Recommendations
					</h1>
					<p className='text-gray-500 text-2xs md:text-sm -mt-4 mb-3 md:-mt-7'>
						Success stories from satisfied clients and colleagues
					</p>
				</div>

				<div className='w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch'>
					<div className='hidden lg:block lg:col-span-3'>
						{showIllustration && (
							<Lottie
								animationData={RecommendationAnimation}
								className='max-w-sm mx-auto opacity-85'
								loop={!isReducedMotion}
							/>
						)}
					</div>

					<div className='lg:col-span-9'>
						<div
							className='relative rounded-2xl border border-zinc-800 bg-gradient-to-br from-[#101317] via-[#0a0d10] to-[#070709] p-5 md:p-7 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_22px_48px_rgba(0,0,0,0.45)]'
							onFocusCapture={() => setIsCarouselPaused(true)}
							onBlurCapture={() => setIsCarouselPaused(false)}
						>
							<div className='pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-700/20 via-transparent to-cyan-500/15 opacity-90' />
							<div className='relative z-10'>
								<div className='mb-4 flex items-center justify-between gap-3'>
									<div className='inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300'>
										<BsQuote className='text-sm text-blue-300' />
										Recommendation {showIndex + 1}/{recommendations.length}
									</div>
									<div className='text-xs text-zinc-400'>
										{activeRecommendation.date}
									</div>
								</div>

								<AnimatePresence custom={direction} mode='wait'>
									<motion.div
										key={activeRecommendation.id}
										custom={direction}
										initial={
											isReducedMotion
												? { opacity: 0 }
												: { opacity: 0, x: direction >= 0 ? 50 : -50 }
										}
										animate={{ opacity: 1, x: 0 }}
										exit={
											isReducedMotion
												? { opacity: 0 }
												: { opacity: 0, x: direction >= 0 ? -50 : 50 }
										}
										transition={{ duration: isReducedMotion ? 0.12 : 0.28 }}
										drag='x'
										dragDirectionLock
										dragConstraints={{ left: 0, right: 0 }}
										onDragEnd={(_, info) => {
											if (info.offset.x > SWIPE_THRESHOLD) {
												handlePreviousRecommendation();
											}
											if (info.offset.x < -SWIPE_THRESHOLD) {
												handleNextRecommendation();
											}
										}}
									>
										<div
											style={
												isExpanded
													? undefined
													: {
															overflow: 'hidden',
															display: '-webkit-box',
															WebkitBoxOrient: 'vertical',
															WebkitLineClamp: 6,
													  }
											}
										>
											<ReactMarkdown
												allowedElements={['p', 'a', 'b', 'i', 'strong', 'em']}
												skipHtml
												className='testimonial-react-markdown'
											>
												{activeRecommendation.message}
											</ReactMarkdown>
										</div>

										{activeRecommendation.message.length > 280 && (
											<button
												type='button'
												onClick={() => setIsExpanded((prev) => !prev)}
												className='mt-2 text-xs md:text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors'
											>
												{isExpanded ? 'Show less' : 'Read more'}
											</button>
										)}

										<div className='mt-6 border-t border-zinc-800/90 pt-4'>
											<div className='flex items-start gap-3'>
												<div className='flex-1 min-w-0'>
													<div className='flex items-center gap-2'>
														<p className='text-base md:text-lg font-semibold leading-tight text-zinc-100'>
															{activeRecommendation.name}
														</p>
														{activeRecommendation.linkedinUrl && (
															<Link
																href={activeRecommendation.linkedinUrl}
																passHref
																legacyBehavior
															>
																<a
																	target='_blank'
																	rel='noopener noreferrer'
																	className='text-blue-400 hover:text-blue-300'
																	title={`View ${activeRecommendation.name}'s LinkedIn`}
																>
																	<AiFillLinkedin className='inline-block text-lg align-middle' />
																</a>
															</Link>
														)}
													</div>
													<p className='mt-1 text-xs md:text-sm text-zinc-300'>
														{activeRecommendation.designation}
													</p>
													<p className='mt-1 text-xs md:text-sm text-zinc-400'>
														{activeRecommendation.relation}
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								</AnimatePresence>

								<div className='mt-5 flex items-center justify-between gap-3 flex-wrap'>
									<div className='flex items-center gap-2 flex-wrap'>
										<button
											type='button'
											onClick={handlePreviousRecommendation}
											disabled={showIndex === 0}
											className='w-9 h-9 rounded-full flex items-center justify-center border border-zinc-700 bg-zinc-100 text-black disabled:opacity-30 disabled:cursor-not-allowed'
											aria-label='Show previous recommendation'
										>
											<AiOutlineLeft className='flex-shrink-0' />
										</button>
										<button
											type='button'
											onClick={handleNextRecommendation}
											disabled={showIndex === recommendations.length - 1}
											className='w-9 h-9 rounded-full flex items-center justify-center border border-zinc-700 bg-zinc-100 text-black disabled:opacity-30 disabled:cursor-not-allowed'
											aria-label='Show next recommendation'
										>
											<AiOutlineRight className='flex-shrink-0' />
										</button>
									</div>
									<div className='flex items-center gap-1.5 flex-wrap justify-end'>
										{visibleIndexes.map((idx, itemIndex) =>
											idx === -1 ? (
												<span key={`ellipsis-${itemIndex}`} className='px-1 text-zinc-500'>
													...
												</span>
											) : (
												<button
													type='button'
													key={recommendations[idx].id}
													onClick={() => moveToIndex(idx)}
													className={`w-2.5 h-2.5 rounded-full transition-all ${
														idx === showIndex
															? 'bg-blue-400 scale-110'
															: 'bg-zinc-600 hover:bg-zinc-400'
													}`}
													aria-label={`Go to recommendation ${idx + 1}`}
												/>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Wave
					fill='#101010'
					paused={isReducedMotion}
					options={{
						height: 20,
						amplitude: isReducedMotion ? 0 : 20,
						speed: isReducedMotion ? 0 : 0.2,
						points: 3,
					}}
					className='absolute bottom-0 -mb-6 h-12 left-0 right-0 w-screen bg-black'
				/>
			</div>
		</section>
	);
}

export default Testimonials;
