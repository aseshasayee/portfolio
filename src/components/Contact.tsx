"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-20 relative">
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[12vw] md:text-[8vw] font-black text-white/5 absolute -top-20 left-0 select-none"
                    >
                        GET IN TOUCH
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">CONNECT</span>
                        </h3>
                        <p className="text-gray-400 mt-4 text-lg max-w-xl">
                            I'm always open to discussing new projects, creative ideas, or opportunities.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                >

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <a
                            href="mailto:aseshasayee1@gmail.com"
                            className="flex flex-col items-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="p-4 bg-black/50 rounded-full mb-6 group-hover:text-primary transition-colors border border-white/5 group-hover:border-primary/50">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                            <p className="text-gray-400 text-sm">aseshasayee1@gmail.com</p>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/aseshasayee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="p-4 bg-black/50 rounded-full mb-6 group-hover:text-secondary transition-colors border border-white/5 group-hover:border-secondary/50">
                                <Linkedin size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
                            <p className="text-gray-400 text-sm">Connect with me</p>
                        </a>

                        <a
                            href="https://github.com/aseshasayee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="p-4 bg-black/50 rounded-full mb-6 group-hover:text-primary transition-colors border border-white/5 group-hover:border-primary/50">
                                <Github size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">GitHub</h3>
                            <p className="text-gray-400 text-sm">Check my code</p>
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-gray-500">
                        <MapPin size={16} />
                        <span>Chennai, India</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
