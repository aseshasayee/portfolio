/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#020617", // Slate 950
                foreground: "#f8fafc", // Slate 50
                primary: "#06b6d4", // Cyan 500
                secondary: "#8b5cf6", // Violet 500
                accent: "#d946ef", // Fuchsia 500
                "primary-dim": "rgba(6, 182, 212, 0.1)",
                "secondary-dim": "rgba(139, 92, 246, 0.1)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-gradient": "linear-gradient(to bottom right, #020617, #1e1b4b)",
            },
            animation: {
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float": "float 6s ease-in-out infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 5px rgba(6, 182, 212, 0.5)" },
                    "100%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)" },
                },
            },
        },
    },
    plugins: [],
};
