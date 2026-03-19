"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, CheckCircle2, Code2, Database } from "lucide-react";

const certifications = [
    {
        title: "Java Data Structures & Algorithms",
        issuer: "Udemy",
        date: "2023",
        link: "https://www.udemy.com/certificate/UC-5f264069-1db1-4b29-ba1a-15a3d44181b6/",
        color: "text-orange-400",
        border: "group-hover:border-orange-500/50",
        bg: "group-hover:bg-orange-500/10",
        icon: Code2
    },
    {
        title: "Python & Django Full Stack",
        issuer: "Udemy",
        date: "2024",
        link: "https://www.udemy.com/certificate/UC-77388dd4-39e3-4d6b-a7cb-2402977f0fc8/",
        color: "text-blue-400",
        border: "group-hover:border-blue-500/50",
        bg: "group-hover:bg-blue-500/10",
        icon: Code2
    },
    {
        title: "Database Management Systems",
        issuer: "NPTEL",
        date: "2024",
        link: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS18S24330604101247713",
        color: "text-green-400",
        border: "group-hover:border-green-500/50",
        bg: "group-hover:bg-green-500/10",
        icon: Database
    },
    {
        title: "Advanced JavaScript",
        issuer: "Scaler",
        date: "2023",
        link: "https://moonshot.scaler.com/s/sl/0LUa7-ncBX",
        color: "text-yellow-400",
        border: "group-hover:border-yellow-500/50",
        bg: "group-hover:bg-yellow-500/10",
        icon: Award
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-24 relative">
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[12vw] md:text-[8vw] font-black text-white/5 absolute -top-20 left-0 select-none whitespace-nowrap"
                    >
                        ACHIEVEMENTS
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                            CERTIFICATIONS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">& AWARDS</span>
                        </h3>
                        <p className="text-gray-400 mt-4 text-lg max-w-xl">
                            Continuous learning and validation of technical expertise.
                        </p>
                    </motion.div>
                </div>

                {/* List Container */}
                <div className="flex flex-col gap-4 max-w-5xl">
                    {certifications.map((cert, index) => (
                        <CertificateItem key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CertificateItem({ cert, index }: { cert: any, index: number }) {
    return (
        <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`
                group relative flex items-center justify-between p-6 md:p-8
                bg-white/5 border border-white/10 rounded-2xl
                transition-all duration-500
                ${cert.border} ${cert.bg}
                hover:scale-[1.02] hover:shadow-lg
            `}
        >
            <div className="flex items-center gap-6 md:gap-8">
                <div className={`
                    p-4 rounded-xl bg-white/5 border border-white/10
                    ${cert.color} group-hover:scale-110 transition-transform duration-500
                `}>
                    <cert.icon size={32} />
                </div>

                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        {cert.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-400 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 size={16} className={cert.color} />
                            {cert.issuer}
                        </span>
                        <span className="w-1 h-1 bg-gray-600 rounded-full" />
                        <span>{cert.date}</span>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
                <ArrowUpRight className="text-gray-400 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
            </div>
        </motion.a>
    );
}
