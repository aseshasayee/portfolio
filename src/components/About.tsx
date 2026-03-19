"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} id="about" className="relative min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] opacity-30" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    style={{ opacity }}
                    className="max-w-5xl mx-auto text-center space-y-24"
                >
                    {/* Manifesto Statements */}
                    <div className="space-y-8">
                        <ManifestoLine delay={0.1}>
                            I BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">SCALABLE SYSTEMS.</span>
                        </ManifestoLine>
                        <ManifestoLine delay={0.2}>
                            I TURN <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-300">COMPLEXITY</span> INTO CLARITY.
                        </ManifestoLine>
                        <ManifestoLine delay={0.3}>
                            I ARCHITECT <span className="text-white">THE FUTURE.</span>
                        </ManifestoLine>
                    </div>

                    {/* Narrative Block */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light"
                    >
                        I'm <span className="text-white font-bold">Seshasayee</span> (Sesh). Unlike typical academic projects, I build complete backend ecosystems.
                        From <span className="text-primary">healthcare simulations</span> (DICOM, HL7) to <span className="text-secondary">Agentic AI</span> workflows,
                        I focus on clean architecture, robust databases, and real-world impact.
                    </motion.p>

                    {/* Credentials Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
                    >
                        <CredentialItem label="Education" value="B.Tech CSE" sub="SRM Institute" />
                        <CredentialItem label="Performance" value="9.3 GPA" sub="Consistent Excellence" />
                        <CredentialItem label="Focus" value="Backend" sub="System Architecture" />
                        <CredentialItem label="Experience" value="2023-2027" sub="Engineering Student" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function ManifestoLine({ children, delay }: { children: React.ReactNode, delay: number }) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-black tracking-tighter text-white/90 leading-[1.1]"
        >
            {children}
        </motion.h2>
    );
}

function CredentialItem({ label, value, sub }: { label: string, value: string, sub: string }) {
    return (
        <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">{label}</div>
            <div className="text-xl md:text-2xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm text-gray-400">{sub}</div>
        </div>
    );
}
