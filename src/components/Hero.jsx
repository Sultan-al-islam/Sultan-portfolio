import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiAward } from 'react-icons/fi';
import { BsCodeSlash, BsCpu } from 'react-icons/bs';

export default function Hero() {
    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const [currentStat, setCurrentStat] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const stats = [
        {
            id: 0,
            icon: <BsCodeSlash size={20} />,
            count: "500+",
            label: "Problems Solved",
            iconBg: "from-blue-500/20 to-cyan-500/20",
            iconColor: "text-blue-400",
            borderColor: "border-blue-500/30"
        },
        {
            id: 1,
            icon: <BsCpu size={20} />,
            count: "10+",
            label: "Web & ML Projects",
            iconBg: "from-purple-500/20 to-pink-500/20",
            iconColor: "text-purple-400",
            borderColor: "border-purple-500/30"
        },
        // <FiAward />
        {
            id: 2,
            icon: <FiAward size={20} />,
            count: "CGPA: 3.87",
            label: "Academic Excellence",
            iconBg: "from-purple-500/20 to-pink-500/20",
            iconColor: "text-purple-400",
            borderColor: "border-purple-500/30"
        }

    ];

    const blobVariants = {
        animate: {
            borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        hover: {
            borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStat((prev) => (prev + 1) % stats.length);
        }, 3500); // Cards rotate every 3.5 seconds
        return () => clearInterval(interval);
    }, [stats.length]);

    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-8 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10 w-full flex-1">
                {/* Left side: Text & Buttons */}
                <div className="flex-1 text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-blue-400 font-medium mb-4 tracking-wider uppercase text-sm"
                    >
                        Hi there, I am
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight font-serif"
                    >
                        Sultan Al Islam
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl md:text-3xl font-light mb-8 text-gray-400"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">
                            CSE Student
                        </span><br />
                        {' '} Machine Learning Enthusiast, <br className="hidden md:block" /> Competitive Programmer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0"
                    >
                        I am a Computer Science student passionate about Data Science, Machine Learning, and Competitive Programming.
                        I enjoy solving challenging problems, exploring algorithms, and continuously learning new technologies to create modern, impactful applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
                    >
                        <a
                            href="https://drive.usercontent.google.com/u/0/uc?id=1R6x2mlsQ9isRB5P5O5y_MVtyIHNR-_uD&export=download"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-medium bg-white/10 hover:bg-white/20 border border-white/10 glass-card"
                        >
                            <span>Download CV</span>
                            <FiDownload className="group-hover:translate-y-1 transition-transform" />
                        </a>

                        <button
                            onClick={scrollToProjects}
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 transition-all duration-300"
                        >
                            <span>View Projects</span>
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="flex items-center gap-3 ml-2 sm:ml-0">
                            <a
                                href="https://github.com/Sultan-al-islam"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative inline-flex items-center justify-center w-[46px] h-[46px] rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/10 glass-card transition-all"
                            >
                                <FiGithub size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://linkedin.com/in/sultan-al-islam"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative inline-flex items-center justify-center w-[46px] h-[46px] rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/10 glass-card transition-all"
                            >
                                <FiLinkedin size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right side: Photo */}
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 flex justify-center md:justify-end w-full"
                >
                    <div
                        className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <motion.div
                            variants={blobVariants}
                            animate={isHovered ? "hover" : "animate"}
                            className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        ></motion.div>
                        <motion.img
                            variants={blobVariants}
                            animate={isHovered ? "hover" : "animate"}
                            src="/siam.jpeg"
                            alt="Sultan Al Islam"
                            className="relative w-full h-full object-cover bg-blue-600 shadow-2xl"
                            onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Sultan+Al+Islam&background=0D8ABC&color=fff&size=400" }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Middle Sliders - Animated One By One Carousel */}
            <div className="z-20 w-full flex justify-center mt-12 mb-6 h-[70px] relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStat}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute flex items-center gap-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-3 w-[240px] shadow-xl hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-default"
                    >
                        <div className={`p-2 bg-gradient-to-br ${stats[currentStat].iconBg} ${stats[currentStat].iconColor} rounded-xl border ${stats[currentStat].borderColor}`}>
                            {stats[currentStat].icon}
                        </div>
                        <div className="text-left flex-1">
                            <div className="text-lg font-bold text-white tracking-wide leading-tight">{stats[currentStat].count}</div>
                            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest">{stats[currentStat].label}</div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>


        </section>
    );
}
