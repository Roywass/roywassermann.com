import { personalInfo } from "@/constants/data";

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-gray-100 py-12 mt-20">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Roy Wassermann. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm font-medium text-gray-600">
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-black transition-colors">
                        {personalInfo.email}
                    </a>
                    <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
