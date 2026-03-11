"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Courses", href: "/courses" },
        { name: "Projects", href: "/projects" },
        { name: "Experiences", href: "/experiences" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* Mobile Top Navbar */}
            <nav className="md:hidden fixed w-full top-0 z-50 bg-[#f9f9f9]/90 backdrop-blur-md border-b border-gray-200 h-16 flex items-center justify-between px-6">
                <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-70 transition-opacity">
                    Roy Wassermann
                </Link>
                {/* Simplified mobile links */}
                <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                    <Link href="/courses" className={`transition-colors ${pathname === '/courses' ? 'text-black font-semibold' : 'hover:text-black'}`}>Courses</Link>
                    <Link href="/projects" className={`transition-colors ${pathname === '/projects' ? 'text-black font-semibold' : 'hover:text-black'}`}>Projects</Link>
                </div>
            </nav>

            {/* Desktop Left Sidebar */}
            <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-[#f9f9f9] border-r border-gray-200 z-50 flex-col px-8 py-12">
                <Link href="/" className="font-bold text-xl tracking-tight hover:opacity-70 transition-opacity mb-12">
                    Roy Wassermann
                </Link>
                
                <div className="flex flex-col gap-2 text-[15px] font-medium text-gray-500">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className={`px-4 py-2.5 -mx-4 rounded-lg transition-all ${isActive ? 'bg-gray-200/60 text-gray-900 font-semibold shadow-sm' : 'hover:text-gray-900 hover:bg-gray-100/50'}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-auto pt-8">
                    <a
                        href="/cv.pdf"
                        download
                        className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium shadow-sm hover:shadow active:scale-95"
                    >
                        Download PDF
                    </a>
                </div>
            </nav>
        </>
    );
}
