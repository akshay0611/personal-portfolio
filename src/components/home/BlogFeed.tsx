import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { curatedArticles } from 'utils/constants/Articles';
import { AiOutlineArrowRight, AiOutlineClockCircle, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const BlogFeed = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setVisibleCards(1);
            else if (window.innerWidth < 1024) setVisibleCards(2);
            else setVisibleCards(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, curatedArticles.length - visibleCards);

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setDirection(1);
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex(prev => prev - 1);
        }
    };

    const getPlatformStyles = (platform: string) => {
        switch (platform) {
            case 'Codeunia':
                return {
                    accent: 'bg-[#7C3AED]',
                    bg: 'bg-[#7C3AED]/10',
                    text: 'text-[#7C3AED]'
                };
            case 'EduLinkUp':
                return {
                    accent: 'bg-[#C89D52]',
                    bg: 'bg-[#C89D52]/10',
                    text: 'text-[#C89D52]'
                };
            case 'Dev.to':
                return {
                    accent: 'bg-zinc-100',
                    bg: 'bg-zinc-100/10',
                    text: 'text-zinc-100'
                };
            case 'Personal':
                return {
                    accent: 'bg-blue-500',
                    bg: 'bg-blue-500/10',
                    text: 'text-blue-500'
                };
            default:
                return {
                    accent: 'bg-zinc-500',
                    bg: 'bg-zinc-500/10',
                    text: 'text-zinc-500'
                };
        }
    };

    return (
        <section className="home-section" id="blog">
            <div className="max-section-width overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
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
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            className="h-1.5 bg-blue-600 mt-6 rounded-full"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`p-4 rounded-full border transition-all duration-300 ${currentIndex === 0
                                ? 'border-zinc-800 text-zinc-700 cursor-not-allowed'
                                : 'border-zinc-700 text-white hover:border-blue-500 hover:bg-blue-500/10 active:scale-95'
                                }`}
                        >
                            <AiOutlineLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex === maxIndex}
                            className={`p-4 rounded-full border transition-all duration-300 ${currentIndex === maxIndex
                                ? 'border-zinc-800 text-zinc-700 cursor-not-allowed'
                                : 'border-zinc-700 text-white hover:border-blue-500 hover:bg-blue-500/10 active:scale-95'
                                }`}
                        >
                            <AiOutlineRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: `calc(-${currentIndex * (100 / visibleCards)}% - ${currentIndex * (24 / visibleCards)}px)` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {curatedArticles.map((article, index) => {
                            const styles = getPlatformStyles(article.platform);
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
                                        whileHover={{ y: -10 }}
                                        className="group relative flex flex-col h-full bg-zinc-900/40 border border-zinc-800/80 rounded-2xl hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
                                    >
                                        {/* Card Image */}
                                        {article.image && (
                                            <div className="aspect-[16/10] w-full overflow-hidden relative bg-zinc-950">
                                                <Image
                                                    src={article.image}
                                                    alt={article.title}
                                                    width={800}
                                                    height={500}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    unoptimized={true}
                                                    loader={({ src }: { src: string }) => src}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-40 pointer-events-none" />
                                            </div>
                                        )}

                                        <div className="p-6 flex flex-col flex-1 relative">
                                            {/* Platform Accent Strip */}
                                            <div className={`absolute left-0 top-0 h-full w-1.5 transition-all duration-300 ${styles.accent} opacity-50 group-hover:opacity-100`} />

                                            <div className="flex justify-between items-start mb-6 pl-2">
                                                <span className={`px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-widest font-mono ${styles.bg} ${styles.text}`}>
                                                    {article.platform}
                                                </span>

                                                <div className="flex items-center gap-1.5 text-zinc-600 text-[10px] font-mono">
                                                    <span className="opacity-50">[</span>
                                                    <AiOutlineClockCircle className="text-zinc-500" />
                                                    <span className="group-hover:text-zinc-400 transition-colors">{article.readTime.toUpperCase()}</span>
                                                    <span className="opacity-50">]</span>
                                                </div>
                                            </div>

                                            <div className="pl-2">
                                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                                                    {article.title}
                                                </h3>

                                                <p className="text-zinc-500 text-sm mb-8 line-clamp-3 leading-relaxed group-hover:text-zinc-400 transition-colors">
                                                    {article.description}
                                                </p>
                                            </div>

                                            <div className="mt-auto flex items-center justify-between pl-2">
                                                <span className="text-zinc-700 text-[9px] font-bold uppercase tracking-widest font-mono group-hover:text-zinc-500 transition-colors">
                                                    {`// ${article.date}`}
                                                </span>
                                                <div className="flex items-center gap-2 text-blue-500 font-bold text-xs group-hover:translate-x-1 transition-all">
                                                    READ <AiOutlineArrowRight />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Background Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    </motion.a>
                                </div>
                            );
                        })}
                    </motion.div>
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
