import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Utensils, Building2, Briefcase, Zap, Globe, ShoppingBag } from 'lucide-react';

const industries = [
    { name: 'Hospitality & Dining', icon: Utensils },
    { name: 'Real Estate & Property', icon: Building2 },
    { name: 'Corporate & Finance', icon: Briefcase },
    { name: 'Startups & Tech', icon: Zap },
    { name: 'Global Brands', icon: Globe },
    { name: 'E-commerce & Retail', icon: ShoppingBag },
];

const Industries = () => {
    return (
        <SectionWrapper id="industries" className="bg-rich-black border-y border-white/5">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">Industries We <span className="text-gradient-gold">Serve</span></h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {industries.map((industry, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-lg border border-transparent hover:border-gold/30 hover:bg-white/10 transition-all duration-300 group">
                        <industry.icon className="w-8 h-8 text-dim mb-3 group-hover:text-gold transition-colors" />
                        <span className="text-sm text-dim group-hover:text-white transition-colors text-center">{industry.name}</span>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Industries;
