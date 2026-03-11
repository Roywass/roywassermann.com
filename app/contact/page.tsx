"use client";

import { personalInfo } from "@/constants/data";

export default function ContactPage() {
    return (
        <div className="flex-1 flex items-center justify-center pt-16 md:pt-0 px-6 bg-gray-50 overflow-hidden relative">
            <style>{`
                @keyframes cardEntrance {
                    0% {
                        opacity: 0;
                        transform: perspective(1200px) rotateY(-180deg) scale(0.8);
                    }
                    100% {
                        opacity: 1;
                        transform: perspective(1200px) rotateY(0deg) scale(1);
                    }
                }
                .animate-card-entrance {
                    animation: cardEntrance 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                    transform-style: preserve-3d;
                }
            `}</style>

            <div className="animate-card-entrance relative w-full max-w-lg aspect-[1.586/1] bg-white rounded-xl shadow-xl flex flex-col justify-between p-8 sm:p-12 border border-gray-200 hover:shadow-2xl transition-shadow group overflow-hidden">

                {/* Subtle colorful corners to keep it modern but mostly sober */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-50 rounded-tr-full -z-10 transition-transform duration-700 group-hover:scale-110"></div>
                
                <div className="text-left z-10 w-full">
                    <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                        {personalInfo.name}
                    </h1>
                    <p className="text-sm sm:text-base font-semibold text-blue-700 mt-1 uppercase tracking-wider">
                        {personalInfo.title}
                    </p>
                </div>
                
                <p className="text-sm font-medium text-gray-500 z-10 leading-relaxed max-w-[85%] mt-4 flex-1">
                    N'hésitez pas à me contacter pour un projet, une collaboration ou simplement pour échanger !
                </p>

                {/* 3 Clickable Logos */}
                <div className="flex items-center gap-4 mt-auto z-10">
                    {/* Mail */}
                    <a href={`mailto:${personalInfo.email}`} aria-label="Email"
                       className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-gray-600 border border-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </a>
                    
                    {/* LinkedIn */}
                    <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                       className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-gray-600 border border-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    
                    {/* Github */}
                    <a href="https://github.com/Roywass" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                       className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-gray-600 border border-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
