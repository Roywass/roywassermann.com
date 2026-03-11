export default function Footer() {
    return (
        <footer id="contact" className="border-t border-gray-100 py-12 mt-20">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Roy Wassermann. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm font-medium text-gray-600">
                    <a href="mailto:roywass1204@gmail.com" className="hover:text-black transition-colors">
                        roywass1204@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
