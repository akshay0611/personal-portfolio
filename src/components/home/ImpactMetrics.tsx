import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { impactMetrics } from 'utils/constants/Metrics';

const Counter = ({ value, suffix, isHovered, brandColor }: { value: number; suffix: string; isHovered: boolean; brandColor: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const spring = useSpring(0, { stiffness: 40, damping: 20 });
    const display = useTransform(spring, (current) => Math.floor(current));

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, value, spring]);

    return (
        <span ref={ref} className="font-sans text-3xl md:text-4xl font-black tracking-tight flex items-baseline">
            <motion.span
                animate={{ color: isHovered ? brandColor : '#ffffff', textShadow: isHovered ? `0 0 20px ${brandColor}40` : 'none' }}
                transition={{ duration: 0.3 }}
            >
                {display}
            </motion.span>
            <span className="text-zinc-500 font-bold ml-0.5">{suffix}</span>
        </span>
    );
};

const ImpactMetrics = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    return (
        <div className="bg-zinc-950 py-12 md:py-16 border-b border-zinc-900/50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-8">
                    {impactMetrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`relative flex flex-col items-center sm:items-start pl-0 lg:pl-8 
                                ${index !== 3 ? 'lg:border-r lg:border-zinc-800/60' : ''} 
                                ${index % 2 === 0 ? 'sm:border-r sm:border-zinc-800/40 lg:border-r lg:border-zinc-800/60' : 'sm:border-none lg:border-r lg:border-zinc-800/60'}
                                ${index === 3 ? 'sm:border-none lg:border-none' : ''}
                            `}
                        >
                            <div className="flex flex-col items-center sm:items-start group">
                                {/* Icon: Shrunk by 30%, muted by default */}
                                <div className="mb-3 transition-all duration-300">
                                    <metric.icon
                                        size={16}
                                        className={`transition-colors duration-300 ${hoveredIndex === index ? '' : 'text-zinc-600'}`}
                                        style={{ color: hoveredIndex === index ? metric.color : undefined }}
                                    />
                                </div>

                                <div className="flex flex-col items-center sm:items-start">
                                    <Counter
                                        value={metric.value}
                                        suffix={metric.suffix}
                                        isHovered={hoveredIndex === index}
                                        brandColor={metric.color}
                                    />

                                    {/* Monospaced Metadata */}
                                    <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-500 font-bold mt-2 group-hover:text-zinc-300 transition-colors">
                                        {metric.label}
                                    </span>
                                    <p className="text-[10px] uppercase font-mono text-zinc-700 mt-1 tracking-wider group-hover:text-zinc-500 transition-colors">
                                        {`// ${metric.subtext}`}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Glow Background - Very subtle */}
                            <motion.div
                                className="absolute top-1/2 left-0 w-full h-full -z-10 blur-[60px] opacity-0 pointer-events-none rounded-full"
                                animate={{
                                    opacity: hoveredIndex === index ? 0.05 : 0,
                                    backgroundColor: metric.color
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImpactMetrics;
