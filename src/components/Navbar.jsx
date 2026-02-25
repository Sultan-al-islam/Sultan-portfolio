import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Academic', href: '#academic' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'CP Stats', href: '#competitive' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const scrollTo = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-black/50 border-b border-white/10 py-3' : 'py-5'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="relative text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 z-50">
                    Sultan
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex justify-end gap-6 text-base text-gray-300 font-medium whitespace-nowrap">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={(e) => scrollTo(e, item.href)}
                                className="hover:text-white transition-colors relative group py-2"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Toggle */}
                <div className="md:hidden relative z-50 flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 focus:outline-none focus:text-white"
                    >
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed top-0 left-0 w-full h-screen bg-black/60 backdrop-blur-sm z-30 md:hidden"
                    />
                )}
                {isOpen && (
                    <motion.div
                        key="sidebar"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-black/40 backdrop-blur-2xl md:hidden z-40 border-l border-white/10 shadow-2xl flex flex-col justify-center items-center"
                    >
                        <ul className="flex flex-col gap-8 text-xl text-gray-300 font-medium z-50">
                            {navItems.map((item) => (
                                <li key={item.name} className="flex justify-center">
                                    <a
                                        href={item.href}
                                        onClick={(e) => scrollTo(e, item.href)}
                                        className="hover:text-white transition-colors relative group py-2"
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
