import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { testimonialsData } from '../data/testimonialsData';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <SectionWrapper id="testimonials" className="bg-rich-black relative">
            {/* Background decorative */}
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Client <span className="text-gradient-gold">Stories</span></h2>
                <p className="text-dim">Trusted by visionary leaders across the globe.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {testimonialsData.map((client, index) => (
                    <motion.div
                        key={client.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 p-8 rounded-lg border border-white/5 relative group hover:border-gold/30 transition-all duration-300"
                    >
                        <Quote className="absolute top-8 right-8 text-gold/20 w-8 h-8 group-hover:text-gold/40 transition-colors" />

                        <p className="text-gray-300 italic mb-6 relative z-10 font-light leading-relaxed">
                            "{client.content}"
                        </p>

                        <div className="flex items-center mt-auto">
                            <img src={client.image} alt={client.name} className="w-12 h-12 rounded-full object-cover mr-4 border border-gold/20" />
                            <div>
                                <h4 className="text-white font-serif">{client.name}</h4>
                                <p className="text-xs text-gold uppercase tracking-wider">{client.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
