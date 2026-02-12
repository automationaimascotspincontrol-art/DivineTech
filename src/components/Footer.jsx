import React from 'react';
import { siteConfig } from '../data/siteConfig';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-gray-900">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h3 className="text-xl font-serif font-bold text-gradient-gold mb-2">{siteConfig.name}</h3>
                    <p className="text-dim text-sm max-w-xs">{siteConfig.tagline}</p>
                </div>

                <div className="flex space-x-6 mb-6 md:mb-0">
                    <a href={siteConfig.social.linkedin} className="text-dim hover:text-gold transition-colors">LinkedIn</a>
                    <a href={siteConfig.social.twitter} className="text-dim hover:text-gold transition-colors">Twitter</a>
                    <a href={siteConfig.social.instagram} className="text-dim hover:text-gold transition-colors">Instagram</a>
                </div>

                <div className="text-dim text-sm">
                    &copy; {siteConfig.year} {siteConfig.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
