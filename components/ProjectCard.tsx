interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    githubLink: string;
}

export default function ProjectCard({ title, description, techStack, githubLink }: ProjectCardProps) {
    return (
        <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group block overflow-hidden border border-[#d1d5db] bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col relative"
        >
            {/* Visual Header Gradient - placeholder for abstract graphics or images */}
            <div className="h-32 w-full bg-gradient-to-br from-gray-100 to-gray-50 border-b border-[#e5e7eb] relative overflow-hidden flex items-center justify-center">
                {/* Decorative elements representing code/tech */}
                <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center">
                   <span className="text-9xl font-mono font-bold">&lt;/&gt;</span>
                </div>
                {/* Subtle hover overlay effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-300 pointer-events-none" />
            </div>

            <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                    <span className="text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </span>
                </div>
                
                <p className="text-[15px] text-gray-700 leading-relaxed mb-8 flex-1">
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
