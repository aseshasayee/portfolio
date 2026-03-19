"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Healthcare Simulation Platform",
        description: "A full-scale DICOM + HL7 simulation platform. Simulates hospital workflows including ORM, OMI, ORU, and MDM messages.",
        tech: ["NODE.JS", "POSTGRESQL", "PYTHON"],
        github: "https://github.com/aseshasayee",
        image: "https://placehold.co/1200x800/1a1a1a/333?text=Healthcare+Sim"
    },
    {
        title: "AI Legal Assistant",
        description: "Multi-agent system built with LangGraph to democratize legal assistance. Explains legal issues and gathers info.",
        tech: ["LANGGRAPH", "OPENAI", "REACT"],
        github: "https://github.com/aseshasayee",
        image: "https://placehold.co/1200x800/1a1a1a/333?text=AI+Legal"
    },
    {
        title: "Clean Architecture Todo API",
        description: "Production-grade Spring Boot API with JWT auth, refresh tokens, RBAC, and DTO mapping.",
        tech: ["JAVA", "SPRING BOOT", "DOCKER"],
        github: "https://github.com/aseshasayee",
        image: "https://placehold.co/1200x800/1a1a1a/333?text=Todo+API"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-24 relative">
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[12vw] md:text-[8vw] font-black text-white/5 absolute -top-20 left-0 select-none"
                    >
                        MY WORK
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">PROJECTS</span>
                        </h3>
                        <p className="text-gray-400 mt-4 text-lg max-w-xl">
                            Building solutions that solve real-world problems with clean code.
                        </p>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="space-y-32 md:space-y-48">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className="relative"
        >
            <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`space-y-8 ${!isEven ? 'md:col-start-2' : ''}`}
                >
                    {/* Index */}
                    <div className="flex items-center gap-4">
                        <span className="text-white/20 text-sm font-mono">0{index + 1}</span>
                        <div className="h-px flex-1 bg-white/10"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white hover:text-black transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-white text-sm uppercase tracking-[0.2em] font-bold border-b-2 border-white/30 pb-2 hover:border-white transition-colors group"
                    >
                        View Project
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative group ${!isEven ? '' : 'md:col-start-2'}`}
                >
                    <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-gradient-to-br from-gray-900 to-black border border-white/5">
                        <motion.div
                            style={{ y: imageY }}
                            className="absolute inset-0"
                        >
                            <div
                                className="w-full h-full bg-cover bg-center scale-110 group-hover:scale-125 transition-transform duration-700 ease-out"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                        </motion.div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                        {/* Hover Circle */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/20 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                                <ArrowUpRight className="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
