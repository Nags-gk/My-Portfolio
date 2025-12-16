'use client';
import { motion } from 'framer-motion';


const About = () => {
    return (
        <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 md:pl-12 lg:pl-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                            About <span className="text-ethereal-peach">Me</span>
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Solutions that feel just right don't start that way — they’re born from curiosity, iteration, and the freedom to reimagine. That mindset drives me as a Software Engineer specialized in Data Science, passionate about turning complex problems into seamless, data-driven systems.
                            </p>
                            <p>
                                Over the years, I’ve built end-to-end solutions across AI, machine learning, and full-stack systems — from Experimenting with supercomputers to developing AI-powered chatbots and Researching Quantum computers and its processing speed, Building banking systems.
                            </p>
                            <p>
                                I’m constantly excited to explore the true power of LLm's & intersection of machine learning, cloud computing, and intelligent automation, believing that real innovation lives where data meets design and systems think for themselves.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image (Right) */}
                    <div className="md:w-1/2 flex justify-center md:justify-center">
                        <div className="relative group">
                            {/* Solid border instead of glow */}
                            <div className="absolute -inset-1 bg-white/10 rounded-2xl"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-sm w-full border border-white/10 bg-zinc-800">
                                <img
                                    src="/profile-about.jpg"
                                    alt="Nagaraj Gireppa Kanni"
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
