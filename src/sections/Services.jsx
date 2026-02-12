import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { servicesData } from '../data/servicesData';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group p-8 md:p-10 border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-500 rounded-lg hover:border-gold/50 cursor-default hover:shadow-gold backdrop-blur-sm"
    >
        <div className="mb-6 inline-block p-4 bg-black/50 rounded-full border border-gold/20 group-hover:border-gold/80 group-hover:shadow-gold transition-all duration-300 group-hover:bg-gold/10">
            <Icon className="w-8 h-8 text-gold" />
        </div>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-gold transition-colors">{title}</h3>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed group-hover:text-white transition-colors">
            {description}
        </p>
    </motion.div>
);

const Services = () => {
    return (
        <SectionWrapper id="services" className="bg-rich-black relative" decorative={true}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="text-center mb-16 md:mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Our <span className="text-gradient-gold">Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored for growth, performance, and aesthetic dominance.
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service, index) => (
                    <ServiceCard key={service.id} {...service} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Services;
