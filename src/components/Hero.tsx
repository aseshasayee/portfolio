"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-hero-gradient">
            {/* Gradient Fade for Seamless Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#020617] z-20 pointer-events-none" />
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Floating Orbs */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base animate-pulse-slow">
                        Backend Developer & System Architect
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-black tracking-tighter mb-6 text-white relative"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">SESH</span>
                    <span className="text-primary text-glow">.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10"
                >
                    Building scalable systems, healthcare simulations, and agentic AI workflows.
                    <br className="hidden md:block" />
                    Turning complex problems into clean, efficient code.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 w-full md:w-auto rounded-sm"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 w-full md:w-auto rounded-sm"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="text-gray-500" />
            </motion.div>
        </section>
    );
}
