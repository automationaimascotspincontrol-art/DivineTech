import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ExternalLink } from 'lucide-react';

const PortfolioCard = ({ title, category, image, description, link, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
        onClick={() => window.open(link, '_blank')}
    >
        <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
            <span className="text-gold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {category}
            </span>
            <h3 className="text-3xl font-serif text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                {title}
            </h3>
            <p className="text-gray-300 text-sm mb-6 max-w-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                {description}
            </p>
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                <Button variant="secondary" className="px-6 py-2 text-xs border-white text-white hover:bg-white hover:text-black hover:border-white">
                    View Project <ExternalLink className="ml-2 w-3 h-3" />
                </Button>
            </div>
        </div>
    </motion.div>
);

const Portfolio = () => {
    return (
        <SectionWrapper id="portfolio" className="bg-black">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Selected <span className="text-gradient-gold">Works</span></h2>
                    <p className="text-dim max-w-xl">
                        A curated selection of our finest digital craftsmanship.
                    </p>
                </div>
                <Button variant="outline" className="hidden md:flex" onClick={() => window.open('https://github.com/Sahilgitlab?tab=repositories', '_blank')}>View Github</Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {portfolioData.map((project, index) => (
                    <PortfolioCard key={project.id} {...project} index={index} />
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <Button variant="outline">View All Works</Button>
            </div>
        </SectionWrapper>
    );
};

export default Portfolio;
