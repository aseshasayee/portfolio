"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

const navLinks = [
    { name: "PROJECTS", href: "#projects" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const nameTextRef = useRef<HTMLSpanElement>(null);
    const dotRef = useRef<HTMLSpanElement>(null);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach((link) => {
            const sectionId = link.href.replace("#", "");
            const element = document.getElementById(sectionId);
            if (element) observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        // Initialize dot as circle
        if (dotRef.current && nameTextRef.current) {
            gsap.set(dotRef.current, {
                width: 4,
                height: 4,
                borderRadius: "50%",
                display: "inline-block",
                opacity: 1,
            });
            nameTextRef.current.textContent = "SESH";
        }
    }, []);

    const handleMouseEnter = () => {
        if (dotRef.current && nameTextRef.current) {
            const tl = gsap.timeline();

            // Just reveal text while dot stays as dot
            tl.to(nameTextRef.current, {
                duration: 0.8,
                onStart: () => {
                    const fullText = "SESHASAYEE";
                    let currentIndex = 4;
                    const interval = setInterval(() => {
                        if (currentIndex <= fullText.length && nameTextRef.current) {
                            nameTextRef.current.textContent = fullText.substring(0, currentIndex);
                            currentIndex++;
                        } else {
                            clearInterval(interval);
                        }
                    }, 60);
                }
            });
        }
    };

    const handleMouseLeave = () => {
        if (dotRef.current && nameTextRef.current) {
            const tl = gsap.timeline();

            // Just shrink text back while dot stays as dot
            tl.to(nameTextRef.current, {
                duration: 0.6,
                onStart: () => {
                    const startText = "SESHASAYEE";
                    let currentIndex = 10;
                    const interval = setInterval(() => {
                        if (currentIndex >= 4 && nameTextRef.current) {
                            nameTextRef.current.textContent = startText.substring(0, currentIndex);
                            currentIndex--;
                        } else {
                            clearInterval(interval);
                            if (nameTextRef.current) {
                                nameTextRef.current.textContent = "SESH";
                            }
                        }
                    }, 45);
                }
            });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/5"
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">

                        {/* Logo with GSAP Animation */}
                        <Link
                            href="/"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="inline-flex items-baseline gap-0"
                        >
                            <span
                                ref={nameTextRef}
                                className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase"
                            >
                                SESH
                            </span>
                            <span
                                ref={dotRef}
                                className="bg-primary"
                                style={{
                                    position: "relative",
                                    bottom: "0.15em",
                                    marginLeft: "1px",
                                }}
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8 lg:gap-12">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.replace("#", "");
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="group flex items-center gap-2 relative"
                                    >
                                        <span
                                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive
                                                    ? "bg-white"
                                                    : "bg-transparent border border-gray-600 group-hover:bg-gray-400"
                                                }`}
                                        />
                                        <span
                                            className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                                                }`}
                                        >
                                            {link.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-white z-50 relative"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Scroll Progress Bar */}
                <motion.div
                    className="h-[2px] bg-white origin-left"
                    style={{ scaleX }}
                />
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-40 flex items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-4xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
