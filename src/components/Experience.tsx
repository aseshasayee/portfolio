"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        id: 1,
        year: "2011",
        title: "Learning Java",
        place: "Primrose Schools",
        description: "The spark. Started my journey with Java, mastering OOPs concepts and building my first console applications.",
        color: "bg-blue-500"
    },
    {
        id: 2,
        year: "2023",
        title: "B.Tech CSE",
        place: "SRM Institute",
        description: "Deep diving into Computer Science. Specializing in backend architecture, algorithms, and system design.",
        color: "bg-cyan-500"
    },
    {
        id: 3,
        year: "2025",
        title: "Internship",
        place: "IITM Pravartak",
        description: "Professional breakthrough. Architecting scalable backend systems and integrating AI workflows.",
        color: "bg-purple-500"
    },
    {
        id: 4,
        year: "NOW",
        title: "Freelance",
        place: "CareChain",
        description: "Building the future. Developing a SaaS hiring platform with modern tech stacks like React Native and Django.",
        color: "bg-pink-500"
    },
];

export default function Experience() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    return (
        <section ref={targetRef} id="experience" className="relative h-[300vh] w-full">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                {/* Cinematic Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

                {/* Progress Line */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
                <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 origin-left -translate-y-1/2 shadow-[0_0_20px_rgba(6,182,212,0.5)] z-0"
                />

                {/* Horizontal Track */}
                <motion.div
                    style={{ x }}
                    className="flex items-center h-full"
                >
                    {/* Title Section - Full Screen to start centered */}
                    <div className="w-screen flex-shrink-0 flex items-center justify-center relative z-10">
                        <div className="flex flex-col border-l border-white/10 h-[60vh] justify-center px-12 bg-background/50 backdrop-blur-sm">
                            <span className="text-7xl md:text-9xl font-black text-white/40 whitespace-nowrap">MY</span>
                            <span className="text-7xl md:text-9xl font-black text-white -mt-4 whitespace-nowrap">JOURNEY</span>
                            <span className="text-cyan-400 mt-6 font-mono text-xl">Est. 2011</span>
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className="flex gap-12 px-12 z-10">
                        {experiences.map((exp) => (
                            <div
                                key={exp.id}
                                className="relative group min-w-[400px] md:min-w-[500px]"
                            >
                                {/* Connection Node */}
                                <div className="absolute top-1/2 -left-[30px] w-4 h-4 -translate-y-1/2 bg-black border-2 border-white/20 rounded-full z-20 group-hover:border-cyan-400 group-hover:scale-150 transition-all duration-500" />

                                {/* Card */}
                                <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:border-white/20">
                                    <span className="absolute -top-10 right-4 text-9xl font-black text-white/5 select-none transition-colors group-hover:text-white/10">
                                        {exp.year}
                                    </span>

                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 ${exp.color} rounded-2xl mb-8 flex items-center justify-center shadow-lg`}>
                                            <div className="w-4 h-4 bg-white rounded-full" />
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                                        <p className="text-cyan-400 font-mono mb-6">{exp.place}</p>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* End Marker */}
                    <div className="min-w-[400px] flex flex-col justify-center pl-12 border-l border-white/10 h-[60vh] ml-12">
                        <span className="text-6xl font-black text-white/20">NEXT</span>
                        <span className="text-6xl font-black text-white">CHAPTER</span>
                        <span className="text-cyan-500 mt-4 animate-pulse">Loading...</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
