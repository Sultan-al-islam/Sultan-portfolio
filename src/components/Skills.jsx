import { motion } from 'framer-motion';
import { FiCode, FiGlobe, FiDatabase, FiTool } from 'react-icons/fi';

const skillsData = [
    {
        category: "Programming",
        icon: <FiCode className="text-blue-400" size={24} />,
        skills: ["C", "C++", "Python", "Java", "JavaScript"]
    },
    {
        category: "Web Development",
        icon: <FiGlobe className="text-purple-400" size={24} />,
        skills: ["React", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "MySQL", "Render", "Vercel"]
    },
    {
        category: "Machine Learning",
        icon: <FiDatabase className="text-pink-400" size={24} />,
        skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
    },
    {
        category: "Tools & Technologies",
        icon: <FiTool className="text-teal-400" size={24} />,
        skills: ["Git", "GitHub", "VS Code", "Cisco Packet Tracer"]
    }
];

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="py-24 px-6 relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Technical Skills</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {skillsData.map((category, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="glow-hover">
                        <div className="glass-card p-8 h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/10 rounded-xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-white">{category.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium hover:bg-white/20 transition-colors shadow-sm cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
