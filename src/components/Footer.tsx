export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 text-center">
            <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Seshasayee. Built with Next.js & Tailwind.
            </p>
        </footer>
    );
}
