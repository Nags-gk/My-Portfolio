'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Education = () => {
    const education = [
        {
            university: "San Jose State University",
            degree: "Masters in Software Engineering",
            location: "San Jose, CA",
            period: "2024 - 2025"
        },
        {
            university: "Nitte Meenakshi Institute of Technology",
            degree: "Bachelor of Engineering (CS)",
            location: "Bangalore, India",
            period: "2018 - 2022"
        }
    ];

    return (
        <section id="education" className="py-24 relative z-10 flex flex-col justify-center min-h-[50vh]">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <BookOpen className="text-ethereal-peach" size={40} />
                    <h2 className="text-4xl font-bold text-white">
                        Education
                    </h2>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative border-l-2 border-white/10 ml-5 md:ml-6 pl-8 md:pl-16 space-y-16">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[43px] md:-left-[75px] top-1 h-5 w-5 rounded-full bg-ethereal-peach border-4 border-zinc-950 shadow-[0_0_10px_rgba(255,165,133,0.3)]" />

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">
                                        {edu.degree}
                                    </h3>
                                    <h4 className="text-xl text-gray-300 mb-1">
                                        {edu.university}
                                    </h4>
                                    <div className="flex items-center text-gray-500 text-sm font-medium">
                                        <span>• {edu.location}</span>
                                    </div>
                                </div>

                                <span className="bg-white/5 border border-white/10 text-ethereal-peach px-4 py-2 rounded-full text-sm font-mono self-start whitespace-nowrap">
                                    {edu.period}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
