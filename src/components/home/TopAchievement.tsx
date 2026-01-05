import React from 'react';
import Image from 'next/image';
import { Achievements } from 'utils/constants/Achievements';
import { FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TopAchievement = () => {
    const mainAchievement = Achievements.gssocRank;

    if (!mainAchievement) return null;

    return (
        <motion.a
            href="https://gssoc.girlscript.tech/leaderboard"
            target="_blank"
            rel="noopener noreferrer"
            title="View GSSoC 2025 Global Leaderboard"
            aria-label="View GSSoC 2025 Global Leaderboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="relative block w-full overflow-hidden bg-zinc-950 border-y border-zinc-900 cursor-pointer group"
        >
            {/* Background Glow Effect - Intensifies on Hover */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-full bg-blue-600/10 blur-[120px] pointer-events-none"
                whileHover={{ backgroundColor: "rgba(37, 99, 235, 0.2)", scale: 1.5 }}
            />

            {/* Shimmer / Light Sweep Animation */}
            <motion.div
                className="absolute inset-0 w-full h-full pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "linear",
                    repeatDelay: 2
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
                    zIndex: 10
                }}
            />

            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative z-20">
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 flex-shrink-0">
                        <motion.div
                            className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        />
                        <div className="relative w-full h-full flex items-center justify-center text-blue-500">
                            <FaTrophy size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold">
                            Top Global Achievement
                        </span>
                        <h3 className="text-white font-bold text-lg md:text-xl tracking-tight relative overflow-hidden">
                            {mainAchievement.title}
                            {/* Text-specific shimmer overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                            />
                        </h3>
                    </div>
                </div>

                <div className="h-px w-12 bg-zinc-800 hidden md:block" />

                <div className="flex items-center gap-4">
                    {mainAchievement.imageURL && (
                        <div className="relative w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                            <Image
                                src={mainAchievement.imageURL}
                                alt="GSSoC Logo"
                                layout="fill"
                                objectFit="contain"
                                loader={({ src }) => src}
                                unoptimized={true}
                            />
                        </div>
                    )}
                    <p className="text-zinc-400 text-sm md:text-base font-medium max-w-md text-center md:text-left leading-tight">
                        Outperformed <span className="text-white font-bold">3,424</span> developers to claim <span className="text-blue-400 font-bold">#2</span> rank worldwide.
                    </p>
                </div>

                {/* Subtle right-side accent */}
                <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-blue-600/5 to-transparent hidden lg:block opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Animated Bottom Border */}
            <motion.div
                className="absolute bottom-0 left-0 h-[1.5px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 3 }}
            />
        </motion.a>
    );
};

export default TopAchievement;
