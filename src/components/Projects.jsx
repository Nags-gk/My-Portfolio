'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Using placeholder for now as assets are missing in this workspace
// Restored images
import placeholderImg from '../assets/placeholder.svg';

const projects = [
    {
        title: 'Taxbot',
        description: 'AI-powered Tax Assistant Chatbot using LangChain, ChromaDB and Gemini LLM. Achieved 90% query accuracy and reduced response time by 60%.',
        tags: ['LangChain', 'RAG', 'Vector Search', 'Gemini API'],
        links: { github: 'https://github.com/Nags-gk/Taxbot' },
        image: '/projects/taxbot.png',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Snooptrade',
        description: 'Insider trading analytics pipeline integrating SEC EDGAR data with stock prices. Features real-time dashboards and AWS deployment.',
        tags: ['Python', 'FastAPI', 'React', 'AWS'],
        links: { github: 'https://github.com/Nags-gk/SnoopTrade' },
        image: '/projects/snooptrade.png',
        color: 'from-emerald-500 to-teal-500'
    },
    {
        title: 'Canvas-Go',
        description: 'Secure Learning Management System with JWT auth and optimized MySQL database. Reduced query latency by 35%.',
        tags: ['FastAPI', 'React', 'MySQL', 'AWS'],
        links: { github: 'https://github.com/Nags-gk/Canvas-Go' },
        image: '/projects/canvas-go.png',
        color: 'from-orange-500 to-red-500'
    },
    {
        title: 'Quantum ML Research',
        description: 'Research paper on Quanvolutional Neural Networks for image classification. Demonstrated 5% accuracy improvement over classical CNNs.',
        tags: ['Quantum Computing', 'PennyLane', 'Qiskit', 'PyTorch'],
        links: { github: 'https://zenodo.org/records/17570822' },
        image: '/projects/quantum-ml.png',
        color: 'from-purple-500 to-pink-500'
    },
    {
        title: 'TrustVault',
        description: 'Comprehensive banking management system simulating real-world operations with secure transactions and session handling.',
        tags: ['PHP', 'MySQL', 'Bootstrap', 'Security'],
        links: { github: 'https://github.com/Nags-gk/TrustVault' },
        image: '/projects/trustvault.png',
        color: 'from-indigo-500 to-blue-500'
    },
    {
        title: 'CipherChat',
        description: 'Secure Android SMS encryption app using AES-128. Provides end-to-end encryption for private conversations.',
        tags: ['Android', 'Java', 'Cryptography', 'AES-128'],
        links: { github: 'https://github.com/Nags-gk' },
        image: '/projects/cipherchat.png',
        color: 'from-gray-600 to-gray-800'
    },
    {
        title: 'SmartCanteen',
        description: 'Desktop application for managing canteen orders with integrated billing, tax calculation, and service charge automation.',
        tags: ['Python', 'Tkinter', 'GUI', 'Automation'],
        links: { github: 'https://github.com/Nags-gk' },
        image: '/projects/smartcanteen.png',
        color: 'from-yellow-500 to-orange-500'
    },
    {
        title: 'Titanic Survival Prediction',
        description: 'CUDA-accelerated logistic regression model for Titanic survival prediction. Optimized matrix operations for high-performance computing.',
        tags: ['CUDA', 'C++', 'Machine Learning', 'GPU'],
        links: { github: 'https://github.com/Nags-gk/TitanicSurvivalPrecidtion' },
        image: '/projects/titanic-prediction.png',
        color: 'from-blue-600 to-indigo-600'
    },
    {
        title: 'Bitsmart',
        description: 'Bitcoin price prediction system using Multivariate LSTM neural networks. Analyzes 30-day historical data for 7-day price forecasting.',
        tags: ['Python', 'TensorFlow', 'LSTM', 'Flask'],
        links: { github: 'https://github.com/Nags-gk/Bitsmart' },
        image: '/projects/bitsmart.png',
        color: 'from-orange-400 to-yellow-400'
    },
    {
        title: 'SnapSummarizer',
        description: 'Text summarization chatbot using machine learning to condense long documents into concise summaries.',
        tags: ['Python', 'NLP', 'Machine Learning', 'Jupyter'],
        links: { github: 'https://github.com/Nags-gk' },
        image: '/projects/snapsummarizer.png',
        color: 'from-green-500 to-emerald-500'
    },
    {
        title: 'BloodLink',
        description: 'Web-based Blood Bank Management System for efficient management of blood donations, donor records, and inventory.',
        tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
        links: { github: 'https://github.com/Nags-gk' },
        image: '/projects/bloodlink.png',
        color: 'from-red-600 to-rose-600'
    },
    {
        title: 'Stock Portfolio Modern',
        description: 'Modern stock portfolio management application with real-time tracking and analysis features.',
        tags: ['TypeScript', 'React', 'Vercel', 'Finance'],
        links: { github: 'https://github.com/Nags-gk/stock-portfolio-modern' },
        image: '/projects/stock-portfolio.png',
        color: 'from-cyan-500 to-blue-500'
    },
    {
        title: 'Orbit (Personal Finance Dashboard)',
        description: 'A modern web-based personal finance dashboard that helps users track expenses, manage subscriptions, and view financial insights through interactive charts and analytics.',
        tags: ['React', 'TypeScript', 'Tailwind', 'Recharts', 'Zustand'],
        links: { github: 'https://github.com/Nags-gk/orbit' },
        image: '/projects/orbit.png',
        color: 'from-indigo-400 to-cyan-400'
    },
    {
        title: 'Personal Website',
        description: 'Responsive personal portfolio website deployed on GitHub Pages, showcasing projects and skills.',
        tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
        links: { github: 'https://github.com/Nags-gk/my-website-repo' },
        image: '/projects/personal-website.png',
        color: 'from-violet-500 to-purple-500'
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 shadow-xl"
        >
            {/* Project Image or Gradient */}
            <div className={`h-48 w-full relative overflow-hidden`}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="flex space-x-4">
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors text-white">
                                <Github size={24} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-ethereal-peach transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    const pageCount = Math.ceil(projects.length / itemsPerPage);

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % pageCount);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
    };

    const currentProjects = projects.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <section id="projects" className="py-24 bg-ethereal-indigo relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-16 text-center"
                >
                    Featured <span className="text-ethereal-peach">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
                    {currentProjects.map((project, index) => (
                        <ProjectCard key={`${currentPage}-${index}`} project={project} index={index} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center space-x-8">
                    <button
                        onClick={handlePrev}
                        className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                        aria-label="Previous page"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <span className="text-white/50 text-sm">
                        Page {currentPage + 1} of {pageCount}
                    </span>

                    <button
                        onClick={handleNext}
                        className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                        aria-label="Next page"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
