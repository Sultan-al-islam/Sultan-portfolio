import { motion } from 'framer-motion';
import { SiCodeforces, SiCodechef, SiLeetcode } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { BsTrophy, BsCodeSlash } from 'react-icons/bs';

const platforms = [
    {
        name: "Codeforces",
        icon: <SiCodeforces className="text-[#1F8ACB]" size={50} />,
        link: "https://codeforces.com/profile/IamSultan",
        color: "text-[#1F8ACB]",
        borderColor: "hover:border-[#1F8ACB]/50",
        shadowColor: "hover:shadow-[#1F8ACB]/20",
        rating: "1076",
        ratingLabel: "Newbie",
        solved: "200+"
    },
    {
        name: "CodeChef",
        icon: <SiCodechef className="text-[#5B4638]" size={50} />,
        link: "https://www.codechef.com/users/sultan_81",
        color: "text-[#5B4638]",
        borderColor: "hover:border-[#5B4638]/50",
        shadowColor: "hover:shadow-[#5B4638]/20",
        rating: "1503",
        ratingLabel: "2 Star",
        solved: "150+"
    },
    {
        name: "LeetCode",
        icon: <SiLeetcode className="text-[#FFA116]" size={50} />,
        link: "https://leetcode.com/u/iam_sultan/",
        color: "text-[#FFA116]",
        borderColor: "hover:border-[#FFA116]/50",
        shadowColor: "hover:shadow-[#FFA116]/20",
        rating: "1484",
        ratingLabel: "Top 61.77%",
        solved: "70+"
    }
];

export default function Competitive() {
    return (
        <section id="competitive" className="py-24 px-6 relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Competitive Programming</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
                    Passionate about problem solving, competitive programming, and mastering complex algorithms.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {platforms.map((platform, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`glass-card p-8 rounded-3xl border border-white/5 transition-all duration-300 ${platform.borderColor} hover:shadow-2xl hover:-translate-y-2 ${platform.shadowColor} relative group flex flex-col items-center bg-white/[0.02] backdrop-blur-xl`}
                    >
                        <div className="mb-6 relative">
                            <div className="absolute inset-0 bg-white/5 blur-xl rounded-full scale-150 border opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                                {platform.icon}
                            </div>
                        </div>

                        <h3 className={`text-2xl font-bold mb-8 ${platform.color} transition-colors tracking-wide`}>
                            {platform.name}
                        </h3>

                        <div className="w-full flex-1 flex flex-col gap-4 mb-8">
                            <div className="w-full flex justify-between items-center px-5 py-4 bg-white/[0.03] border border-white/[0.05] rounded-2xl group-hover:bg-white/[0.06] transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-yellow-400/10 rounded-lg">
                                        <BsTrophy className="text-yellow-400" size={18} />
                                    </div>
                                    <span className="text-gray-300 font-medium">Rating</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-white font-bold text-xl">{platform.rating}</div>
                                    <div className="text-xs text-gray-500 font-medium mt-0.5">{platform.ratingLabel}</div>
                                </div>
                            </div>

                            <div className="w-full flex justify-between items-center px-5 py-4 bg-white/[0.03] border border-white/[0.05] rounded-2xl group-hover:bg-white/[0.06] transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-400/10 rounded-lg">
                                        <BsCodeSlash className="text-green-400" size={18} />
                                    </div>
                                    <span className="text-gray-300 font-medium">Solved</span>
                                </div>
                                <div className="text-white font-bold text-xl">{platform.solved}</div>
                            </div>
                        </div>

                        <a
                            href={platform.link}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 text-white font-semibold flex items-center justify-center gap-2 transition-all border border-white/10 hover:border-white/20 hover:shadow-lg"
                        >
                            View Profile
                            <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
