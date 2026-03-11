import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/data";

export default function ProjectsPage() {
    return (
        <div className="pt-24 pb-20 px-8 max-w-6xl mx-auto">
            <div className="mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">Projects</h1>
                <p className="text-lg text-gray-600">A selection of my recent technical projects and developments.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}
