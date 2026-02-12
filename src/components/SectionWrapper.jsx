import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "", decorative = true }) => {
    return (
        <>
            {/* Decorative Section Divider */}
            {decorative && (
                <div className="relative py-16 md:py-20 bg-rich-black">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="relative">
                            {/* Diamond decoration */}
                            <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-10 h-10 rotate-45 border border-gold/20 bg-rich-black z-10"></div>
                            {/* Line */}
                            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                        </div>
                    </div>
                </div>
            )}

            <section id={id} className={`py-24 md:py-32 lg:py-40 relative overflow-hidden ${className}`}>
                {/* Background Elements */}
                <div className="absolute inset-0 bg-rich-black -z-20" />
                <div className="absolute inset-0 noise -z-10 opacity-20 mix-blend-soft-light"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl spotlight -z-10"></div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10"
                >
                    {children}
                </motion.div>
            </section>
        </>
    );
};

export default SectionWrapper;
