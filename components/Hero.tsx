import { experience } from "../constants/data";

export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
            <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Roy Wassermann
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    CS Student at EPFL. Passionate about building minimalist, scalable
                    software systems and intuitive user interfaces.
                </p>
                <div className="mb-12">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-6">Experience</h2>
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <div key={index} className="flex flex-col md:flex-row md:gap-8">
                                <div className="md:w-1/4 text-sm text-gray-500 font-medium mb-2 md:mb-0">
                                    {exp.dates}
                                </div>
                                <div className="md:w-3/4">
                                    <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                                    <div className="text-sm text-gray-600 mb-3">{exp.company}</div>
                                    <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-1">
                                        {exp.bulletPoints.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
