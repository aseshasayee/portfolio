"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
    BookOpen,
    CalendarCheck,
    MessageSquare,
    Puzzle,
    Brain,
    Shuffle,
    Users,
    TrendingUp,
    Clock
} from "lucide-react";
import { MouseEvent } from "react";

const nonTechSkills = [
    {
        title: "Technical Communication",
        description: "Bridging the gap between complex code and business logic.",
        icon: BookOpen,
        span: "md:col-span-2",
        gradient: "from-blue-500/20"
    },
    {
        title: "Planning & Org",
        description: "Structuring chaos into actionable roadmaps.",
        icon: CalendarCheck,
        span: "md:col-span-1",
        gradient: "from-orange-500/20"
    },
    {
        title: "Communication",
        description: "Clear, concise, and effective dialogue.",
        icon: MessageSquare,
        span: "md:col-span-1",
        gradient: "from-purple-500/20"
    },
    {
        title: "Problem-Solving",
        description: "Turning obstacles into optimized solutions.",
        icon: Puzzle,
        span: "md:col-span-2",
        gradient: "from-green-500/20"
    },
    {
        title: "Critical Thinking",
        description: "Analyzing depth before writing a single line.",
        icon: Brain,
        span: "md:col-span-1",
        gradient: "from-pink-500/20"
    },
    {
        title: "Adaptability",
        description: "Thriving in evolving tech landscapes.",
        icon: Shuffle,
        span: "md:col-span-1",
        gradient: "from-cyan-500/20"
    },
    {
        title: "Collaboration",
        description: "Force multiplier in team environments.",
        icon: Users,
        span: "md:col-span-1",
        gradient: "from-yellow-500/20"
    },
    {
        title: "Leadership Potential",
        description: "Inspiring ownership and excellence.",
        icon: TrendingUp,
        span: "md:col-span-2",
        gradient: "from-red-500/20"
    },
    {
        title: "Time Management",
        description: "Delivering quality within constraints.",
        icon: Clock,
        span: "md:col-span-1",
        gradient: "from-indigo-500/20"
    }
];

export default function NonTechSkills() {
    return (
        <section id="non-tech-skills" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="mb-24 relative">
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[12vw] md:text-[8vw] font-black text-white/5 absolute -top-20 left-0 select-none"
                    >
                        SOFT SKILLS
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                            BEYOND <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">CODE</span>
                        </h3>
                        <p className="text-gray-400 mt-4 text-lg max-w-xl">
                            Technical skills build products. Soft skills build teams and legacies.
                        </p>
                    </motion.div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
                    {nonTechSkills.map((skill, index) => (
                        <BentoCard key={skill.title} skill={skill} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function BentoCard({ skill, index }: { skill: any, index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                    }
                }
            }}
            onMouseMove={handleMouseMove}
            className={`
                group relative rounded-2xl border border-white/10 bg-white/5 
                overflow-hidden ${skill.span} min-h-[200px] flex flex-col justify-between p-8
                hover:border-white/20 transition-colors duration-300
                hover:z-10 hover:shadow-2xl hover:shadow-purple-500/10
            `}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.1),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Gradient Blob Background */}
            <div className={`
                absolute -right-20 -top-20 w-64 h-64 rounded-full 
                bg-gradient-to-br ${skill.gradient} to-transparent 
                blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
            `} />

            <div className="relative z-10">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <skill.icon className="w-6 h-6" />
                </div>

                <h4 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {skill.title}
                </h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {skill.description}
                </p>
            </div>
        </motion.div>
    );
}
