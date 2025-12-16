'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Student Researcher",
            company: "Unisys Pvt Ltd",
            location: "Bangalore",
            period: "Nov 2021 - Jul 2022",
            description: [
                "Selected for a competitive 9-month industry research initiative focused on Quantum Machine Learning (QML), developing hybrid quantum-classical algorithms to bridge the gap between quantum processing and classical AI architectures.",
                "Engineered novel Quanvolutional Neural Networks (QNNs) using Cirq, Qiskit, and PennyLane to classify real vs. fake images, successfully benchmarking quantum circuit efficiency against standard CNN models.",
                "Achieved a 5% accuracy improvement over classical baselines by optimizing quantum circuit depth and analyzing performance metrics, subsequently presenting research findings at internal technical symposiums.",
                "Awarded \"Certificate of Recognition\" by the Senior Engineering Director for technical excellence in R&D and successful collaboration with senior leadership on longitudinal model optimization studies."
            ]
        },
        {
            role: "Software Developer Intern",
            company: "The Sparks Foundation",
            location: "Remote",
            period: "Jun 2021 - Jul 2021",
            description: [
                "Designed and developed a responsive banking web application using JavaScript and modern UI principles to provide intuitive navigation and improve user experience.",
                "Implemented secure transaction processing in the PHP back end, ensuring reliable handling of user-initiated banking operations with proper validation and error handling.",
                "Built a real-time digital passbook feature that synchronizes transactions instantly so users always see up-to-date account balances and history.",
                "Designed and optimized the back-end database integrated with PHP to enable fast, dependable storage and retrieval of user and transaction data."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-16 text-center"
                >
                    Professional <span className="text-ethereal-peach">Experience</span>
                </motion.h2>

                <div className="max-w-6xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <p className="text-ethereal-peach">{exp.company}</p>
                                </div>
                                <div className="text-right md:text-left mt-2 md:mt-0">
                                    <p className="text-gray-400 text-sm">{exp.location}</p>
                                    <p className="text-gray-400 text-sm">{exp.period}</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-4">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="text-lg">{desc}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
