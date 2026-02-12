import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-rich-black noise pt-32">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-mesh-gradient"></div>

            {/* Floating orbs */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-float"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gold/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)',
                backgroundSize: '100px 100px'
            }}></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >


                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight"
                    >
                        Crafting <span className="text-gradient-gold block md:inline">Digital Luxury</span>
                        <br className="hidden sm:block" />
                        <span className="block mt-2">for Visionary Brands</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-dim text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        Divine Tech Solution aligns technical excellence with aesthetic perfection.
                        <br className="hidden md:block" />
                        We build immersive websites and platforms for those who demand nothing less than <span className="text-white font-medium">world-class</span>.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20"
                    >
                        <Button variant="primary" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Our Work
                        </Button>
                        <Button variant="outline" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Start a Project
                            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Stats / Trust Signals - Enhanced with Better Divisions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Top border with decorative element */}
                    <div className="relative mb-12">
                        <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 rotate-45 border border-gold/20 bg-rich-black"></div>
                        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
                        {[
                            { label: "Years Experience", value: "5+" },
                            { label: "Projects Delivered", value: "100+" },
                            { label: "Client Satisfaction", value: "100%" },
                            { label: "Support", value: "24/7" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.3 + index * 0.1, duration: 0.8 }}
                                className="group relative px-8"
                            >
                                {/* Vertical Divider - except for last item on desktop */}
                                {index < 3 && (
                                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
                                )}

                                {/* Vertical Divider for mobile - except for items in last column */}
                                {index % 2 === 0 && index < 3 && (
                                    <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
                                )}

                                {/* Content */}
                                <div className="relative">
                                    <h4 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-gold group-hover:scale-110 transition-transform duration-300 mb-3">
                                        {stat.value}
                                    </h4>
                                    <p className="text-dim text-xs md:text-sm uppercase tracking-[0.25em] group-hover:text-gray-300 transition-colors">
                                        {stat.label}
                                    </p>

                                    {/* Decorative underline on hover */}
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:w-3/4 transition-all duration-500"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-gold rounded-full mt-2"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
