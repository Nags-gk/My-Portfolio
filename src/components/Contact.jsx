'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative z-10 flex flex-col items-center justify-center text-center">
            <div className="container mx-auto px-6">



                {/* Main Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Let's create something <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        extraordinary.
                    </span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
                >
                    I'm constantly excited to explore the intersection of machine learning, cloud computing, and intelligent automation.
                </motion.p>

                {/* Contact Info (Button style) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center gap-4 mb-16"
                >
                    <a
                        href="mailto:nagarajgk50@gmail.com"
                        className="bg-zinc-950 text-white border border-white/20 px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                    >
                        Get In Touch
                    </a>

                    {/* Displaying info as requested */}
                    <div className="flex flex-col md:flex-row gap-6 text-gray-400 mt-4 text-sm font-medium">
                        <span className="hover:text-white transition-colors">nagarajgk50@gmail.com</span>
                        <span className="hidden md:block text-gray-700">•</span>
                        <span className="hover:text-white transition-colors">+1 408-210-2658</span>
                    </div>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center gap-6 mb-20"
                >
                    {/* Github */}
                    <a href="https://github.com/Nags-gk" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 4 2c-.45.15-.9.3-1.35.45.95-.5 2.05-.5 3 .5-1.5 0-3 1.5-3 3.5-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/nagaraj-kanni" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    {/* Mail */}
                    <a href="mailto:nagarajgk50@gmail.com" className="p-3 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                        <Mail size={24} />
                    </a>
                </motion.div>


            </div>
        </section>
    );
};

export default Contact;
