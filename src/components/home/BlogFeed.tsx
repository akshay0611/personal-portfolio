import React from 'react';
import { motion } from 'framer-motion';
import { curatedArticles } from 'utils/constants/Articles';
import { AiOutlineArrowRight, AiOutlineClockCircle } from 'react-icons/ai';

const BlogFeed = () => {
    return (
        <section className="home-section" id="blog">
            <div className="max-section-width">
                <div className="flex flex-col mb-10 md:mb-16">
                    <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">
                        Engineering Insights
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Latest Technical Writings
                    </h2>
                    <div className="h-1.5 w-20 bg-blue-600 mt-6 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {curatedArticles.map((article, index) => (
                        <motion.a
                            key={index}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative flex flex-col bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300"
                        >
                            {/* Card Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                            <div className="flex justify-between items-start mb-6">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${article.platform === 'Codeunia' ? 'bg-orange-500/10 text-orange-500' : 'bg-blue-500/10 text-blue-500'
                                    }`}>
                                    {article.platform}
                                </span>
                                <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                                    <AiOutlineClockCircle />
                                    {article.readTime}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                {article.title}
                            </h3>

                            <p className="text-zinc-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                                {article.description}
                            </p>

                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-zinc-600 text-[10px] font-medium uppercase tracking-widest">
                                    {article.date}
                                </span>
                                <div className="flex items-center gap-2 text-blue-500 font-bold text-sm group-hover:translate-x-1 transition-transform">
                                    Read Article <AiOutlineArrowRight />
                                </div>
                            </div>

                            {/* Decorative line on hover */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-1 bg-blue-600 rounded-b-2xl"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <p className="text-zinc-500 text-sm">
                        Interested in more? Follow my engineering updates on
                        <a href="#" className="text-white hover:text-blue-500 transition-colors mx-1 underline underline-offset-4">LinkedIn</a>
                        and
                        <a href="#" className="text-white hover:text-blue-500 transition-colors mx-1 underline underline-offset-4">Twitter</a>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogFeed;
