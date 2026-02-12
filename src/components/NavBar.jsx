import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            setTimeout(() => {
                const offset = 80; // approximate header height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 100);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-3 shadow-premium border-b border-white/5' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl md:text-2xl font-display font-bold text-gradient-gold tracking-wider relative z-10"
                        onClick={(e) => handleNavClick(e, '#hero')}
                    >
                        Divine Tech
                    </motion.a>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="relative text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-gold transition-colors duration-300 group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-500"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button - Right */}
                    <div className="hidden md:block">
                        <Button variant="primary" className="px-6 py-2.5 text-xs" onClick={(e) => handleNavClick(e, '#contact')}>
                            Start Project
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white hover:text-gold transition-colors relative z-50 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 lg:hidden overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg uppercase tracking-widest text-gray-300 hover:text-gold transition-colors"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button variant="primary" className="px-8 py-3" onClick={(e) => handleNavClick(e, '#contact')}>
                                Start Project
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
