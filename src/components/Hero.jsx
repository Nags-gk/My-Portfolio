'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="h-screen w-full flex items-center justify-center relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-ethereal-purple/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-ethereal-indigo/30 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                    Nagaraj <span className="text-ethereal-peach">GK</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-3xl text-gray-300 mb-8"
                >
                    Software Engineer | Data Science Specialist
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-6 italic"
                >
                    "Code is the language of the future, and I am its poet."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="#projects" className="px-8 py-3 bg-ethereal-peach text-ethereal-dark font-bold rounded-full hover:bg-white transition-colors duration-300">
                        View my work
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
