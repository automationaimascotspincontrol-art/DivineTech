import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = "primary", onClick, className = "", ...props }) => {
    const baseStyles = "relative inline-flex items-center justify-center px-10 py-5 text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-500 overflow-hidden group rounded-full backdrop-blur-sm z-10";

    const variants = {
        primary: "bg-gradient-to-r from-[#D4AF37] via-[#F1D06E] to-[#D4AF37] text-rich-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-105 border border-white/20",
        secondary: "bg-white/5 border border-gold/40 text-gold hover:bg-gold hover:text-rich-black hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-gold",
        outline: "bg-transparent border border-white/10 text-white/70 hover:text-gold hover:border-gold/50 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {/* Shimmer effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></span>

            {/* Inner Glow/Highlight */}
            <span className="absolute inset-0 rounded-full border border-white/10 pointer-events-none"></span>

            <span className="relative z-10 drop-shadow-sm flex items-center justify-center gap-3">{children}</span>
        </motion.button>
    );
};

export default Button;
