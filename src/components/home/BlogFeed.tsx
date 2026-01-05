import React from 'react';
import { motion } from 'framer-motion';
import { curatedArticles } from 'utils/constants/Articles';
import { AiOutlineArrowRight, AiOutlineClockCircle } from 'react-icons/ai';

const BlogFeed = () => {
    return (
        <section className="home-section" id="blog">
            <div className="max-section-width">
                <div className="flex flex-col mb-10 md:mb-16">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {curatedArticles.map((article, index) => (
                        <motion.a
                            key={index}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group relative flex flex-col bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
                        >
                            {/* Platform Accent Strip (Idea #1) */}
                            <div className={`absolute left-0 top-0 h-full w-1.5 transition-all duration-300 ${article.platform === 'Codeunia' ? 'bg-[#7C3AED]/50 group-hover:bg-[#7C3AED]' : 'bg-[#C89D52]/50 group-hover:bg-[#C89D52]'
                                }`} />

                            <div className="flex justify-between items-start mb-6 pl-2">
                                <span className={`px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-widest font-mono ${article.platform === 'Codeunia' ? 'bg-[#7C3AED]/10 text-[#7C3AED]' : 'bg-[#C89D52]/10 text-[#C89D52]'
                                    }`}>
                                    {article.platform}
                                </span>

                                {/* System Readout Metadata (Idea #3) */}
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
                                    READ ARTICLE <AiOutlineArrowRight />
                                </div>
                            </div>

                            {/* Card Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                    ))}
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
