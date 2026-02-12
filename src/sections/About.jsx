import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-black" decorative={true}>
            <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
                {/* Left: Text Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            About <span className="text-gradient-gold">Divine Tech Solution</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mb-8 rounded-full"></div>

                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            Founded on the principles of precision and elegance, Divine Tech Solution is a premier digital agency specializing in high-end website design and development.
                        </p>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6">
                            With over <span className="text-white font-semibold">half a decade of hands-on experience</span>, we have partnered with restaurants, real estate firms, and ambitious startups to deliver digital products that not only look expensive but perform consistently at the highest level.
                        </p>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6">
                            We don't just write code; we architect trust, authority, and seamless user experiences that convert visitors into loyal clients.
                        </p>
                    </motion.div>
                </div>

                {/* Right: Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-premium">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Team working in a modern office"
                            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    {/* Decorative Frame */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/20 -z-10 rounded-lg"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-gold/30 rounded-tl-lg"></div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default About;
