import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCalendar, FiMapPin, FiExternalLink, FiCpu, FiMonitor } from 'react-icons/fi';

export default function Academic() {
    return (
        <section id="academic" className="py-24 px-6 relative z-10 max-w-6xl mx-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Academic Background
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto flex flex-col gap-10">
                    {/* Card 1: University */}
                    <div className="relative group glow-hover">
                        <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 text-blue-500/10">
                                <FiBookOpen size={120} />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="flex-1 w-full">
                                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                                        B.Sc. in Computer Science & Engineering
                                    </h3>

                                    <div className="flex items-center gap-2 text-blue-400 font-medium text-lg mb-6">
                                        <FiMapPin />
                                        <p>Metropolitan University, Sylhet</p>
                                    </div>

                                    <div className="space-y-4 text-gray-300">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white/10 rounded-lg">
                                                <FiAward className="text-purple-400" />
                                            </div>
                                            <div>
                                                <span className="block text-sm text-gray-500 uppercase tracking-wider">CGPA</span>
                                                <strong className="text-xl text-white">3.87</strong>
                                                <span className="text-sm ml-2">(4th Year 2nd Semester)</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white/10 rounded-lg">
                                                <FiCalendar className="text-blue-400" />
                                            </div>
                                            <div>
                                                <span className="block text-sm text-gray-500 uppercase tracking-wider">Timeline</span>
                                                <strong className="text-lg text-white">2022 - Present</strong>
                                            </div>
                                        </div>

                                        {/* Marksheet Link Button */}
                                        <div className="pt-4">
                                            <a
                                                href="https://drive.google.com/file/d/1FhuhM9OOXKwuambh9-iLJBlEaTRVZTL6/view?usp=sharing"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-sm transition-all shadow-lg hover:shadow-blue-500/25 border border-blue-500/50"
                                            >
                                                <FiExternalLink size={18} /> View Marksheet
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: CSE Core Theory */}
                    <div className="relative group glow-hover">
                        <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 text-purple-500/10">
                                <FiCpu size={120} />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="flex-1 w-full">
                                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                        CSE Core Theory Fundamentals
                                    </h3>

                                    <p className="text-gray-300 mb-6 leading-relaxed max-w-3xl">
                                        Developed a strong foundation in essential computer science principles, emphasizing efficient algorithmic problem-solving, robust software architecture, and the low-level understanding of system design required to build optimal and scalable applications.
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {['Data Structures', 'OOP', 'Algorithms', 'Machine Learning', 'Computer Networks', 'Operating Systems', 'Software Design', 'BEE', 'Microprocessors'].map((subject, index) => (
                                            <span key={index} className="text-sm font-medium px-4 py-2 rounded-xl text-purple-300 bg-purple-500/10 border border-purple-500/20">
                                                {subject}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Basic Data Science Training */}
                    <div className="relative group glow-hover">
                        <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 text-pink-500/10">
                                <FiMonitor size={120} />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="flex-1 w-full">
                                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                                        Basic Data Science Training
                                    </h3>

                                    <div className="flex items-center gap-2 text-pink-400 font-medium text-lg mb-6">
                                        <FiMapPin />
                                        <p>EDGE, SUST Program</p>
                                    </div>

                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        Completed comprehensive training on basic data science concepts, data analysis, and predictive modeling under the EDGE program at Shahjalal University of Science and Technology (SUST).
                                    </p>

                                    {/* Certificate Link Button */}
                                    <div className="pt-2">
                                        <a
                                            href="https://drive.google.com/file/d/1v_pWHfi_U4xdKIEEiljIuB5FgXqOdOuy/view?usp=sharing"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-sm transition-all shadow-lg hover:shadow-blue-500/25 border border-blue-500/50"
                                        >
                                            <FiExternalLink size={18} /> View Certificate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
