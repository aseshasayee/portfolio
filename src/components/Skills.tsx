"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Code2,
    Database,
    Globe,
    Server,
    Cpu,
    Cloud,
    Container,
    Terminal,
    Layers,
    Workflow,
    BrainCircuit,
    Box
} from "lucide-react";

interface Skill {
    name: string;
    category: "Core" | "Advanced" | "Ecosystem";
    icon: React.ElementType;
    description: string;
}

const skills: Skill[] = [
    { name: "Java", category: "Core", icon: Code2, description: "Enterprise Logic" },
    { name: "Spring Boot", category: "Core", icon: Server, description: "Backend Framework" },
    { name: "React", category: "Core", icon: Globe, description: "Frontend Library" },
    { name: "PostgreSQL", category: "Core", icon: Database, description: "Relational DB" },
    { name: "TypeScript", category: "Advanced", icon: Code2, description: "Type Safety" },
    { name: "Node.js", category: "Advanced", icon: Server, description: "Runtime" },
    { name: "Next.js", category: "Advanced", icon: Layers, description: "React Framework" },
    { name: "Docker", category: "Advanced", icon: Container, description: "Containerization" },
    { name: "Python", category: "Advanced", icon: Terminal, description: "Scripting & AI" },
    { name: "AWS", category: "Ecosystem", icon: Cloud, description: "Cloud Infrastructure" },
    { name: "Kubernetes", category: "Ecosystem", icon: Box, description: "Orchestration" },
    { name: "OpenAI", category: "Ecosystem", icon: BrainCircuit, description: "LLM Integration" },
    { name: "Git", category: "Ecosystem", icon: Workflow, description: "Version Control" },
    { name: "Linux", category: "Ecosystem", icon: Terminal, description: "OS Environment" },
];

export default function Skills() {
    return (
        <section id="skills" className="relative min-h-screen w-full flex flex-col justify-center py-24 overflow-hidden">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Massive Header */}
                <div className="mb-16 relative">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[15vw] leading-[0.8] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none absolute -top-24 -left-10 z-0"
                    >
                        SKILLS
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 pl-4 border-l-4 border-cyan-500"
                    >
                        <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
                            Technical <br />
                            <span className="text-cyan-500">Arsenal</span>
                        </h3>
                    </motion.div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/10 border border-white/10">

                    {/* Category 1: Core */}
                    <div className="md:col-span-4 bg-black/50 backdrop-blur-sm p-8 relative group overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h4 className="text-xl font-mono text-cyan-400 mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            CORE_STACK
                        </h4>
                        <div className="space-y-6 relative z-10">
                            {skills.filter(s => s.category === "Core").map(skill => (
                                <SkillItem key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Category 2: Advanced */}
                    <div className="md:col-span-4 bg-black/50 backdrop-blur-sm p-8 relative group overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h4 className="text-xl font-mono text-purple-400 mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                            ADVANCED_TOOLS
                        </h4>
                        <div className="space-y-6 relative z-10">
                            {skills.filter(s => s.category === "Advanced").map(skill => (
                                <SkillItem key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Category 3: Ecosystem */}
                    <div className="md:col-span-4 bg-black/50 backdrop-blur-sm p-8 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h4 className="text-xl font-mono text-blue-400 mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                            ECOSYSTEM
                        </h4>
                        <div className="space-y-6 relative z-10">
                            {skills.filter(s => s.category === "Ecosystem").map(skill => (
                                <SkillItem key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function SkillItem({ skill }: { skill: Skill }) {
    const Icon = skill.icon;
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 group/item cursor-pointer"
        >
            <div className="p-2 bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                <Icon className="w-6 h-6 text-gray-400 group-hover/item:text-white transition-colors" />
            </div>
            <div>
                <div className="text-lg font-bold text-gray-300 group-hover/item:text-white transition-colors">
                    {skill.name}
                </div>
                <div className="text-xs text-gray-500 font-mono group-hover/item:text-cyan-400 transition-colors">
                    {skill.description}
                </div>
            </div>
        </motion.div>
    );
}
