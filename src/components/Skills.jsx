'use client';
import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial, Icosahedron, OrbitControls, Stars, Edges } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const skills = [
    { name: 'Python', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'React', category: 'Framework' },
    { name: 'FastAPI', category: 'Framework' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'PyTorch', category: 'AI/ML' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'LangChain', category: 'AI/ML' },
];

const CategoryColors = {
    Language: '#ff5252', // Bright Red/Coral
    Framework: '#00e5ff', // Bright Cyan
    Runtime: '#00e676', // Bright Green
    'AI/ML': '#e040fb', // Bright Purple
    Database: '#1de9b6', // Bright Teal
    Cloud: '#ffea00', // Bright Yellow
    DevOps: '#2979ff', // Bright Blue
};

const SkillItem = ({ position, skill }) => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.4;
            meshRef.current.rotation.y += delta * 0.5;
            meshRef.current.rotation.z += delta * 0.3;
        }
    });

    const color = CategoryColors[skill.category] || '#ffffff';

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh
                    ref={meshRef}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    scale={hovered ? 1.2 : 1}
                >
                    <icosahedronGeometry args={[0.5, 1]} />
                    <meshPhongMaterial color={color} transparent opacity={0.1} side={THREE.DoubleSide} />
                    <Edges
                        linewidth={3}
                        scale={1.05}
                        threshold={15}
                        color={color}
                    />
                </mesh>
                <Text
                    position={[0, -1.0, 0]}
                    fontSize={0.25}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                >
                    {skill.name}
                </Text>
                <Text
                    position={[0, -1.3, 0]}
                    fontSize={0.15}
                    color={color}
                    anchorX="center"
                    anchorY="middle"
                >
                    {skill.category}
                </Text>
            </Float>
        </group>
    );
};

const SkillsRing = ({ radius = 8 }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.05;
        }
    });

    const items = useMemo(() => {
        return skills.map((skill, index) => {
            const angle = (index / skills.length) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            return <SkillItem key={index} position={[x, 0, z]} skill={skill} />;
        });
    }, [radius]);

    return (
        <group ref={groupRef}>
            {items}
        </group>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="relative min-h-screen py-24 bg-ethereal-dark overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute top-10 z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white"
                >
                    Technical <span className="text-ethereal-peach">Arsenal</span>
                </motion.h2>
                <p className="text-white/50 text-sm mt-2">Interactive 3D Skills Universe</p>
            </div>

            <div className="absolute inset-0 w-full h-full">
                <Canvas camera={{ position: [0, 2, 14], fov: 50 }}>
                    <fog attach="fog" args={['#0a0a12', 10, 25]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2d1b4e" />

                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    <SkillsRing />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 1.5}
                        minPolarAngle={Math.PI / 3}
                    />
                </Canvas>
            </div>
        </section>
    );
};

export default Skills;
