import { personalInfo } from "@/constants/data";

export default function ContactPage() {
    return (
        <div className="flex-1 flex items-center justify-center pt-16 md:pt-0 px-6 bg-gray-50">

            <div className="relative w-full max-w-lg aspect-[1.586/1] bg-white rounded-xl shadow-2xl p-8 sm:p-12 flex flex-col justify-between overflow-hidden border border-gray-200 hover:shadow-3xl transition-shadow group">

                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-50 rounded-tr-full -z-10 transition-transform duration-700 group-hover:scale-110"></div>

                <div>
                    <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                        {personalInfo.name}
                    </h1>
                    <p className="text-sm sm:text-base font-semibold text-blue-700 mt-1 uppercase tracking-wider">
                        {personalInfo.title}
                    </p>
                </div>

                <div className="space-y-3 font-medium text-sm sm:text-base text-gray-700">
                    <div className="flex items-center gap-4">
                        <span className="opacity-40 select-none">E</span>
                        <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors">
                            {personalInfo.email}
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="opacity-40 select-none">L</span>
                        <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                            {personalInfo.linkedin}
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="opacity-40 select-none">P</span>
                        <span>
                            {personalInfo.phone}
                        </span>
                    </div>
                </div>

            </div>

        </div>
    );
}
