import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { curatedArticles } from 'utils/constants/Articles';
import { AiOutlineArrowRight, AiOutlineClockCircle, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const BlogFeed = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const [isReducedMotion, setIsReducedMotion] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setVisibleCards(1);
            else if (window.innerWidth < 1024) setVisibleCards(2);
            else setVisibleCards(3);
        };
        handleResize();
        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updateReducedMotion = () => setIsReducedMotion(reducedMotionQuery.matches);
        updateReducedMotion();

        window.addEventListener('resize', handleResize);
        reducedMotionQuery.addEventListener('change', updateReducedMotion);
        return () => {
            window.removeEventListener('resize', handleResize);
            reducedMotionQuery.removeEventListener('change', updateReducedMotion);
        };
    }, []);

    const maxIndex = Math.max(0, curatedArticles.length - visibleCards);
    const totalPages = maxIndex + 1;

    const nextSlide = useCallback(() => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    }, [currentIndex, maxIndex]);

    const prevSlide = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }, [currentIndex]);

    const loopNextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    useEffect(() => {
        if (isPaused || isReducedMotion || totalPages <= 1) return;
        const timer = window.setInterval(() => {
            loopNextSlide();
        }, 5000);
        return () => window.clearInterval(timer);
    }, [isPaused, isReducedMotion, loopNextSlide, totalPages]);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLElement>) => {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                prevSlide();
            }
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                nextSlide();
            }
        },
        [nextSlide, prevSlide]
    );

    const activeVisualIndex = useMemo(
        () => currentIndex + Math.floor(visibleCards / 2),
        [currentIndex, visibleCards]
    );

    const visiblePageDots = useMemo(() => {
        if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i);
        if (currentIndex <= 2) return [0, 1, 2, 3, -1, totalPages - 1];
        if (currentIndex >= totalPages - 3) return [0, -1, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1];
        return [0, -1, currentIndex - 1, currentIndex, currentIndex + 1, -1, totalPages - 1];
    }, [currentIndex, totalPages]);

    const getPlatformStyles = (platform: string) => {
        switch (platform) {
            case 'Codeunia':
                return {
                    accent: 'blog-accent-violet',
                    badge: 'blog-badge-violet',
                };
            case 'EduLinkUp':
                return {
                    accent: 'blog-accent-gold',
                    badge: 'blog-badge-gold',
                };
            case 'Dev.to':
                return {
                    accent: 'blog-accent-light',
                    badge: 'blog-badge-light',
                };
            case 'Personal':
                return {
                    accent: 'blog-accent-blue',
                    badge: 'blog-badge-blue',
                };
            default:
                return {
                    accent: 'blog-accent-muted',
                    badge: 'blog-badge-muted',
                };
        }
    };

    return (
        <section className="home-section relative" id="blog" tabIndex={0} onKeyDown={handleKeyDown}>
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="blog-bg-glow blog-bg-glow-left" />
                <div className="blog-bg-glow blog-bg-glow-right" />
            </div>
            <div className="max-section-width overflow-hidden relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-5">
                    <div className="flex flex-col">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-3"
                        >
                            Engineering Insights
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            Latest Technical Writings
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 110 }}
                            viewport={{ once: true }}
                            className="blog-divider mt-5"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`blog-nav-btn ${currentIndex === 0
                                ? 'blog-nav-btn-disabled'
                                : 'blog-nav-btn-active'
                                }`}
                            aria-label="Previous articles"
                        >
                            <AiOutlineLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex === maxIndex}
                            className={`blog-nav-btn ${currentIndex === maxIndex
                                ? 'blog-nav-btn-disabled'
                                : 'blog-nav-btn-active'
                                }`}
                            aria-label="Next articles"
                        >
                            <AiOutlineRight size={20} />
                        </button>
                    </div>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocusCapture={() => setIsPaused(true)}
                    onBlurCapture={() => setIsPaused(false)}
                >
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: `calc(-${currentIndex * (100 / visibleCards)}% - ${currentIndex * (24 / visibleCards)}px)` }}
                        transition={{ type: "spring", stiffness: 260, damping: 34 }}
                    >
                        {curatedArticles.map((article, index) => {
                            const styles = getPlatformStyles(article.platform);
                            const distanceFromActive = Math.abs(index - activeVisualIndex);
                            return (
                                <div
                                    key={index}
                                    className="shrink-0 transition-all duration-300"
                                    style={{ width: `calc(${100 / visibleCards}% - ${(24 * (visibleCards - 1)) / visibleCards}px)` }}
                                >
                                    <motion.a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: (index % visibleCards) * 0.1 }}
                                        whileHover={{ y: -6 }}
                                        className={`group blog-card ${distanceFromActive === 0 ? 'blog-card-primary' : 'blog-card-secondary'}`}
                                    >
                                        {/* Card Image */}
                                        {article.image && (
                                            <div className="aspect-[16/10] w-full overflow-hidden relative bg-zinc-950/90 flex items-center justify-center">
                                                <Image
                                                    src={article.image}
                                                    alt={article.title}
                                                    width={800}
                                                    height={500}
                                                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                                                    unoptimized={true}
                                                    loader={({ src }: { src: string }) => src}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/0 pointer-events-none" />
                                            </div>
                                        )}

                                        <div className="p-6 flex flex-col flex-1 relative">
                                            {/* Platform Accent Strip */}
                                            <div className={`absolute left-0 top-0 h-full w-px transition-all duration-300 ${styles.accent} opacity-50 group-hover:opacity-80`} />

                                            <div className="flex justify-between items-start mb-6 pl-2">
                                                <span className={`px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-widest font-mono ${styles.badge}`}>
                                                    {article.platform}
                                                </span>

                                                <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] font-mono">
                                                    <span className="opacity-50">[</span>
                                                    <AiOutlineClockCircle className="text-zinc-500" />
                                                    <span className="group-hover:text-zinc-300 transition-colors">{article.readTime.toUpperCase()}</span>
                                                    <span className="opacity-50">]</span>
                                                </div>
                                            </div>

                                            <div className="pl-2">
                                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2 leading-snug">
                                                    {article.title}
                                                </h3>

                                                <p className="text-zinc-400 text-sm mb-8 line-clamp-3 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                                    {article.description}
                                                </p>
                                            </div>

                                            <div className="mt-auto flex items-center justify-between pl-2">
                                                <span className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest font-mono group-hover:text-zinc-400 transition-colors">
                                                    {`// ${article.date}`}
                                                </span>
                                                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs group-hover:translate-x-1 transition-all">
                                                    READ <AiOutlineArrowRight />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Background Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    </motion.a>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-1.5">
                        {visiblePageDots.map((dot, index) =>
                            dot === -1 ? (
                                <span key={`ellipsis-${index}`} className="text-zinc-600 px-1 text-sm">...</span>
                            ) : (
                                <button
                                    key={dot}
                                    type="button"
                                    aria-label={`Go to slide ${dot + 1}`}
                                    onClick={() => setCurrentIndex(dot)}
                                    className={`rounded-full transition-all ${dot === currentIndex
                                        ? 'w-3 h-3 bg-blue-400'
                                        : Math.abs(dot - currentIndex) <= 1
                                            ? 'w-2.5 h-2.5 bg-zinc-500 hover:bg-zinc-400'
                                            : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                                        }`}
                                />
                            )
                        )}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-10 border-t border-zinc-900/50 text-center"
                >
                    <p className="text-zinc-500 text-xs tracking-wider uppercase">
                        Follow the engineering journey on
                        <a href="https://www.linkedin.com/in/akshaykumar0611/" className="text-white hover:text-blue-500 transition-colors mx-2 font-bold underline decoration-blue-500/30 underline-offset-8">LINKEDIN</a>
                        &
                        <a href="https://x.com/Aksh0605" className="text-white hover:text-blue-500 transition-colors mx-2 font-bold underline decoration-blue-500/30 underline-offset-8">TWITTER</a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogFeed;
