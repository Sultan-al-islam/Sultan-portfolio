import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const mlProjectsData = [
    {
        title: "Audio Reconstruction using Variational Autoencoder (VAE)",
        description: "Developed a Variational Autoencoder (VAE) model in PyTorch to reconstruct 44.1kHz mono audio signals from segmented waveform data. Implemented audio preprocessing, normalization, latent space encoding, and Beta-VAE loss optimization. Evaluated performance using MSE, Signal-to-Noise Ratio (SNR), and Cosine Similarity, achieving high reconstruction fidelity.",
        techStack: ["Python", "PyTorch", "Librosa", "NumPy", "Matplotlib", "Deep Learning", "VAE"],
        githubLink: "https://github.com/Sultan-al-islam/audio-codec"
    },
    {
        title: "Diabetes Prediction System",
        description: "This system analyzes patient health data such as glucose level, BMI, blood pressure, insulin level, age, and other medical indicators to predict the likelihood of diabetesThe model is trained using Logistic Regression and deployed through a simple web interface.",
        techStack: ["Python", "Scikit-learn", "Pandas"],
        githubLink: "https://github.com/Sultan-al-islam/Data-Science-Final-Project/blob/main/Final_project.ipynb"
    },
   {
    title: "Breast Cancer Classification using Machine Learning & ANN",
    description: "Built a supervised machine learning pipeline to classify malignant and benign breast cancer tumors using Logistic Regression, Decision Tree, and Artificial Neural Network (ANN). Performed exploratory data analysis (EDA), feature scaling using RobustScaler, and model evaluation using accuracy, precision, recall, F1-score, and confusion matrix visualization.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib", "Machine Learning", "ANN"],
    githubLink: "https://github.com/Sultan-al-islam/Breast-Cancer-Classification/blob/main/Breast_Cancer_Classification.ipynb"
},

    {
        title: "Crop Recommendation System",
        description: "An ML-based system designed to predict the most suitable crop for a country based on historical agricultural data, including yield, rainfall, temperature, and pesticide usage. Conducted extensive EDA with visualizations like correlation heatmaps, scatterplots, and distribution plots. Implemented and compared multiple models including Decision Tree, Random Forest, SVM, XGBoost, and an ANN, achieving the highest accuracy of 83.98% with Decision Tree. Provided feature importance analysis and confusion matrices to interpret model performance.",
        techStack: ["Python", "TensorFlow", "Scikit-learn","XGBoost","ANN","Random Forest","SVM","Decision Tree","Matplotlib"],
        githubLink: "https://github.com/Sultan-al-islam/Crop_recommendations/blob/main/Crop_recommendation.ipynb"
    }
];

const webProjectsData = [
    {
        title: "STalk - Real Time Chat Application",
        description: "A modern, full-stack chat platform that enables seamless real-time communication. Built with React, Node.js, Express, and MongoDB, STalk supports user authentication, multimedia sharing, and persistent chat history. Users can interact with friends, share files, view online statuses, and experience live typing indicators. The application leverages Socket.io for real-time messaging and Cloudinary for media uploads, providing a responsive, mobile-friendly interface powered by Tailwind CSS.",
        techStack: ["React", "Tailwind CSS", "Vite", "Axios", "Zustand/Redux", "React Router","Node.js", "Express", "MongoDB", "Mongoose", "Socket.io", "JWT", "Cloudinary"],
        githubLink: "https://github.com/Sultan-al-islam/fullstack-chat-app",
        liveLink: "https://fullstack-chat-app-1-onap.onrender.com/"
    },
    {
        title: "Siam BitTrack - Cryptocurrency Tracking Application",
        description: "Siam BitTrack is a modern, React-based cryptocurrency tracker that provides real-time market data and detailed coin information. Built with Vite for blazing-fast performance, it delivers a smooth, responsive user experience across devices. Users can monitor prices, view detailed coin stats, and stay updated with live cryptocurrency trends this project demonstrates my proficiency in React development, API integration, and building performant, responsive web applications, making it an essential highlight in my portfolio.",
        techStack: ["React", "CSS", "Vite", "ESLint","CoinGecko"],
        githubLink: "https://github.com/Sultan-al-islam/Siam-BitTrack",
        liveLink: "https://siam-bit-track.vercel.app/"
    },
   
    {
        title: "🍽️ Foodie Hub – Food Delivery Web Application",
        description: "Foodie Hub is a modern, responsive food delivery platform built with React and Vite, offering a smooth, intuitive interface for users to explore menus, place orders, and engage with services. The application focuses on interactive UI elements, seamless navigation, and a mobile-first design, providing a professional and engaging user experience.",
        techStack: ["React 19.2", "Vite 7.3", "Tailwind CSS 4.1", "React Icons", "ESLint"],
        githubLink: "https://github.com/Sultan-al-islam/Food-hub",
        liveLink: "https://food-hub-siam.vercel.app/"
    },
     {
        title: "🍔 Food In – Fast Food Restaurant Website",
        description: "Food In is a modern, responsive landing page for a fast food restaurant, built with HTML5, CSS3, and JavaScript. The project emphasizes clean UI design, structured layouts, and mobile-friendly responsiveness, making it perfect for showcasing fast food services online.",
        techStack: ["HTML5", "CSS3", "JavaScript"],
        githubLink: "https://github.com/Sultan-al-islam/Static-Reastaurant-web",
        liveLink: "https://sultan-al-islam.github.io/Static-Reastaurant-web/"
    }

];

const ProjectCard = ({ project, idx }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
        className="glow-hover h-full"
    >
        <div className="glass-card p-8 h-full flex flex-col items-start group transition-all">
            <div className="w-full flex justify-between items-center mb-6">
                <div className="text-blue-400">
                    <FiFolder size={40} strokeWidth={1.5} />
                </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 transition-colors group-hover:text-blue-400">
                {project.title}
            </h3>

            <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 w-full mb-6">
                {project.techStack.map((tech, i) => (
                    <span key={i} className="text-sm font-mono px-3 py-1 rounded-full text-purple-400 bg-purple-400/10">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Premium action buttons for all projects */}
            <div className="w-full flex items-center gap-3 pt-2">
                {project.liveLink && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white font-medium text-sm transition-all shadow-lg border bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 hover:shadow-blue-500/25 border-blue-500/50"
                    >
                        <FiExternalLink /> Live Demo
                    </a>
                )}
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm glass-card border border-white/10 transition-colors"
                >
                    <FiGithub /> GitHub Link
                </a>
            </div>
        </div>
    </motion.div>
);

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Machine Learning & Thesis Section */}
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                        Machine Learning Thesis & Projects
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {mlProjectsData.map((project, idx) => (
                        <ProjectCard key={idx} project={project} idx={idx} />
                    ))}
                </div>
            </div>

            {/* Web Development Section */}
            <div>
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 w-12 bg-purple-500 rounded-full"></div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                        Web Development
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {webProjectsData.map((project, idx) => (
                        <ProjectCard key={idx} project={project} idx={idx} isWebProject={true} />
                    ))}
                </div>
            </div>
        </section>
    );
}
