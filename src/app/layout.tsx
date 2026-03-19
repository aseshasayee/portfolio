import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Seshasayee | Backend Developer",
    description: "Portfolio of Seshasayee, a Backend Developer & System Architect specializing in healthcare tech and AI.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-background text-foreground antialiased`}>
                {children}
            </body>
        </html>
    );
}
