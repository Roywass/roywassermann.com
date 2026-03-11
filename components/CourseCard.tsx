interface Section {
    title: string;
    description: string;
}

interface CourseCardProps {
    degree: string;
    year: string;
    language: string;
    code: string;
    credits: string;
    semester: string;
    courseName: string;
    bgClass?: string;
    sections: Section[];
}

export default function CourseCard({
    year,
    language,
    code,
    credits,
    semester,
    courseName,
    bgClass = "bg-gray-50",
    sections
}: CourseCardProps) {
    const metaString = `${semester} • ${year} • ${language} • ${code} • ${credits}`;

    return (
        <div className="border border-[#d1d5db] bg-white flex flex-col h-full overflow-hidden shadow-sm transition-all hover:shadow-md group">
            {/* Header Area */}
            <div className={`pt-6 pb-6 px-6 border-b border-[#e5e7eb] relative ${bgClass}`}>
                <div className="relative z-10">
                    <p className="text-[11px] font-bold text-gray-700 tracking-wider mb-2 uppercase opacity-80">{metaString}</p>
                    <h3 className="text-[22px] font-bold text-gray-900 tracking-tight leading-tight">{courseName}</h3>
                </div>
                {/* Abstract graphic placeholder if desired... leaving blank keeps it minimal and matches if bg gives light coloring */}
            </div>

            {/* Body Area */}
            <div className="p-6 flex flex-col gap-6 flex-1 bg-white">
                {sections.map((sec, idx) => (
                    <div key={idx}>
                        <h4 className="font-semibold text-gray-900 text-[15px] mb-1 tracking-tight">{sec.title}</h4>
                        <p className="text-gray-700 text-[14px] leading-relaxed">{sec.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
