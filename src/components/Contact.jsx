import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="max-w-xl mx-auto glow-hover"
            >
                <div className="glass-card p-10 flex flex-col items-center">
                    <p className="text-gray-400 text-center mb-10 text-lg leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <a
                                href="mailto:sultan.mucse@gmail.com"
                                className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 py-4 px-6 rounded-2xl transition-all group"
                            >
                                <FiMail className="text-blue-400 group-hover:scale-110 transition-transform" size={24} />
                                <span className="text-white font-medium">Email</span>
                            </a>

                            <a
                                href="tel:+1234567890"
                                className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 py-4 px-6 rounded-2xl transition-all group"
                            >
                                <FiPhone className="text-emerald-400 group-hover:scale-110 transition-transform" size={24} />
                                <span className="text-white font-medium">+880162-1987183</span>
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <a
                                href="https://www.linkedin.com/in/sultan-al-islam/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 py-4 px-6 rounded-2xl transition-all group"
                            >
                                <FiLinkedin className="text-blue-500 group-hover:scale-110 transition-transform" size={24} />
                                <span className="text-white font-medium">LinkedIn</span>
                            </a>

                            <a
                                href="https://github.com/Sultan-al-islam"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 py-4 px-6 rounded-2xl transition-all group"
                            >
                                <FiGithub className="text-gray-300 group-hover:scale-110 transition-transform" size={24} />
                                <span className="text-white font-medium">GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
