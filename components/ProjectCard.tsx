interface ProjectCardProps {
    title: string;
    year?: string;
    description: string;
    techStack: string[];
    githubLink: string;
    status?: 'In Progress' | 'Completed' | 'Upcoming';
}

export default function ProjectCard({ title, year, description, techStack, githubLink, status = 'Completed' }: ProjectCardProps) {
    return (
        <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-[#d1d5db] bg-white flex flex-col h-full overflow-hidden shadow-sm transition-all hover:shadow-md group relative"
        >
            {/* Header Area */}
            <div className="pt-6 pb-5 px-6 border-b border-[#e5e7eb] relative bg-[#FFF0E8]">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3 flex-wrap">
                        {year && (
                            <span className="text-[12px] font-bold text-[#D94F2B] tracking-wider uppercase opacity-90">
                                {year}
                            </span>
                        )}
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-[#D94F2B]/10 text-[#D94F2B] border-[#D94F2B]/30">
                            {status}
                        </span>
                    </div>
                    
                    <span className="text-gray-400 group-hover:text-[#E65632] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ml-2 mt-0.5">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </span>
                </div>
                
                <h3 className="text-[22px] font-bold text-gray-900 tracking-tight leading-tight group-hover:text-[#E65632] transition-colors pr-8">
                    {title}
                </h3>
            </div>

            {/* Body Area */}
            <div className="p-6 flex flex-col gap-6 flex-1 bg-white">
                <p className="text-gray-700 text-[14px] leading-relaxed flex-1">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="text-[12px] font-bold tracking-wider uppercase text-gray-600 bg-gray-100/80 px-2.5 py-1 rounded border border-gray-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}
