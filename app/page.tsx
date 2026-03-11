import { personalInfo, experience, education } from "@/constants/data";

export default function Home() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-5xl font-bold tracking-tight text-blue-700 mb-2">
          {personalInfo.name}
        </h1>
        <h2 className="text-xl font-medium text-gray-800 mb-6">
          {personalInfo.title}
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          {personalInfo.bio}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Content (Left Column, 2/3 width) */}
        <div className="md:col-span-2 space-y-12">
          {/* Work Experience */}
          <section>
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b-2 border-gray-200 pb-2 mb-6">
              Work Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-blue-700 text-lg">{exp.role}</h4>
                  </div>
                  <div className="text-sm font-semibold text-gray-800 mb-1">{exp.company}</div>
                  <div className="text-xs text-gray-500 mb-3 uppercase tracking-wide">{exp.dates}</div>
                  <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-2">
                    {exp.bulletPoints.map((point, i) => (
                      <li key={i} className="pl-1">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b-2 border-gray-200 pb-2 mb-6">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-bold text-blue-700 text-lg mb-1">{edu.degree}</h4>
                  <div className="text-sm font-semibold text-gray-800 mb-1">{edu.institution}</div>
                  <div className="text-xs text-gray-500 mb-3 uppercase tracking-wide">{edu.dates}</div>
                  <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-2">
                    {edu.bulletPoints.map((point, i) => (
                      <li key={i} className="pl-1">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar (Right Column, 1/3 width) */}
        <div className="space-y-10">
          {/* Contact */}
          <section>
            <h3 className="text-md font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-4">
              Contact
            </h3>
            <ul className="text-sm text-gray-700 space-y-3 font-medium">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 hover:underline">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                  {personalInfo.linkedin}
                </a>
              </li>
              <li>{personalInfo.phone}</li>
            </ul>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-md font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-4">
              Languages
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              {personalInfo.languages.map((lang, index) => (
                <li key={index}>
                  <span className="font-medium text-gray-900">{lang.language}</span> : {lang.proficiency}
                </li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-md font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-4">
              Skills
            </h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              {personalInfo.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          {/* Tools */}
          <section>
            <h3 className="text-md font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-4">
              Tools
            </h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              {personalInfo.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
