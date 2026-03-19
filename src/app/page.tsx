import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import NonTechSkills from "@/components/NonTechSkills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary selection:text-black">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <NonTechSkills />
            <Projects />
            <Certifications />
            <Contact />
            <Footer />
        </main>
    );
}
