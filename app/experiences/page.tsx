import { experience, education } from "@/constants/data";

export default function ExperiencesPage() {
    return (
        <div className="pt-24 pb-20 px-8 max-w-6xl mx-auto">
            <div className="mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">Experience</h1>
                <p className="text-lg text-gray-600">My professional and academic journey so far.</p>
            </div>

            <div className="flex flex-col gap-16">
                <section>
                    <h2 className="text-[28px] font-bold tracking-tight text-[#333] mb-8">Work Experience</h2>
                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div key={index} className="grid md:grid-cols-4 gap-4 md:gap-8 border-b border-gray-100 pb-12 last:border-0 last:pb-0">
                                <div className="md:col-span-1 text-[13px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                                    {exp.dates}
                                </div>
                                <div className="md:col-span-3">
                                    <h3 className="text-[22px] font-bold text-gray-900 tracking-tight leading-tight mb-1">{exp.role}</h3>
                                    <div className="text-[17px] font-medium text-blue-600 mb-5">{exp.company}</div>
                                    <ul className="list-disc list-outside ml-4 text-gray-700 space-y-2.5 text-[15px] leading-relaxed">
                                        {exp.bulletPoints.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-[28px] font-bold tracking-tight text-[#333] mb-8">Education</h2>
                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <div key={index} className="grid md:grid-cols-4 gap-4 md:gap-8 border-b border-gray-100 pb-12 last:border-0 last:pb-0">
                                <div className="md:col-span-1 text-[13px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                                    {edu.dates}
                                </div>
                                <div className="md:col-span-3">
                                    <h3 className="text-[22px] font-bold text-gray-900 tracking-tight leading-tight mb-1">{edu.degree}</h3>
                                    <div className="text-[17px] font-medium text-blue-600 mb-5">{edu.institution}</div>
                                    <ul className="list-disc list-outside ml-4 text-gray-700 space-y-2.5 text-[15px] leading-relaxed">
                                        {edu.bulletPoints.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
