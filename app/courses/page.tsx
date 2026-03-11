import CourseCard from "@/components/CourseCard";
import { courses } from "@/constants/data";

export default function CoursesPage() {
    // Group courses by degree
    const degrees = Array.from(new Set(courses.map(c => c.degree)));

    return (
        <div className="pt-24 pb-20 px-8 max-w-6xl mx-auto">
            <div className="mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">Courses</h1>
                <p className="text-lg text-gray-600">A detailed look at my academic coursework, notes, and projects.</p>
            </div>
            
            <div className="flex flex-col gap-16">
                {degrees.map((degree) => {
                    const degreeCourses = courses.filter(c => c.degree === degree);
                    return (
                        <section key={degree}>
                            <h2 className="text-[28px] font-bold tracking-tight text-[#333] mb-8">{degree}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {degreeCourses.map((course, index) => (
                                    <CourseCard key={index} {...course} />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}
