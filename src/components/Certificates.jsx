'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Certificate Images
import unisysImg from '../assets/certificates/unisys-qml.png';
import umichImg from '../assets/certificates/umich-python.png';
import ciscoIotImg from '../assets/certificates/cisco-iot.png';
import ciscoCyberImg from '../assets/certificates/cisco-cyber.png';
import sparksImg from '../assets/certificates/sparks-internship.png';
import linkedinSqlImg from '../assets/certificates/linkedin-sql.png';

const Certificates = () => {
    const certificates = [
        {
            name: "Quantum Machine Learning Research",
            issuer: "Unisys",
            date: "Nov 2021 - July 2022",
            image: unisysImg,
            link: "#"
        },
        {
            name: "Programming for Everybody (Python)",
            issuer: "University of Michigan (Coursera)",
            date: "Aug 2021",
            image: umichImg,
            link: "#"
        },
        {
            name: "Introduction to IoT",
            issuer: "Cisco Networking Academy",
            date: "May 2021",
            image: ciscoIotImg,
            link: "#"
        },
        {
            name: "Introduction to Cybersecurity",
            issuer: "Cisco Networking Academy",
            date: "May 2021",
            image: ciscoCyberImg,
            link: "#"
        },
        {
            name: "Graduate Rotational Internship Program",
            issuer: "The Sparks Foundation",
            date: "Jun 2021 - Jul 2021",
            image: sparksImg,
            link: "#"
        },
        {
            name: "Learning SQL Programming",
            issuer: "LinkedIn Learning",
            date: "Jun 2021",
            image: linkedinSqlImg,
            link: "#"
        }
    ];

    return (
        <section id="certificates" className="py-24 relative z-10 bg-black/20">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-16 text-center"
                >
                    Certifications <span className="text-ethereal-peach">& Awards</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                        >
                            {/* Certificate Image */}
                            <div className="absolute inset-0 bg-white/5">
                                <Image
                                    src={cert.image}
                                    alt={cert.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{cert.name}</h3>
                                <p className="text-ethereal-green text-sm mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{cert.issuer}</p>
                                <p className="text-gray-400 text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{cert.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
