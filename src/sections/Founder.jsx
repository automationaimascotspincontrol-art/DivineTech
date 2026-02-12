import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { founderData } from '../data/founderData';
import { motion } from 'framer-motion';
import Button from '../components/Button'; // Assuming we might want a connect button

const Founder = () => {
    return (
        <SectionWrapper id="founder" className="bg-black">
            <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-12 items-center">
                {/* Bio */}
                <div className="md:col-span-7 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold text-sm tracking-widest uppercase mb-2 block">Visionary Leadership</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Meet the <span className="text-gradient-gold">Founder</span></h2>

                        <h3 className="text-2xl text-white mb-4">{founderData.name} <span className="text-dim text-lg block md:inline font-normal">| {founderData.role}</span></h3>

                        <p className="text-dim text-lg leading-relaxed mb-6">
                            {founderData.bio}
                        </p>

                        <ul className="space-y-3 mb-8">
                            {founderData.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-center text-gray-300">
                                    <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
                                    {highlight}
                                </li>
                            ))}
                        </ul>

                        {/* Signature or Quote could go here */}
                        <blockquote className="border-l-2 border-gold pl-4 text-xl italic text-gray-400">
                            "We don't just build websites. We build digital assets that compound in value over time."
                        </blockquote>

                    </motion.div>
                </div>

                {/* Image */}
                <div className="md:col-span-5 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-lg border border-white/10 relative z-10">
                            <img src={founderData.image} alt={founderData.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold/50 rounded-tr-3xl -z-10"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold/50 rounded-bl-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Founder;
