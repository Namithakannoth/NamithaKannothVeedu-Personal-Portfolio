import { GraduationCap, Award } from 'lucide-react';

export default function Education({ darkMode }) {
  const educationItems = [
    {
      degree: 'Master of Computer Application (MCA)',
      period: '2015 – 2018',
      description: 'Advanced curriculum in software engineering, database management systems, object-oriented design, and algorithms.'
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      period: '2012 – 2015',
      description: 'Foundational study in programming paradigms, data structures, web technologies, and systems analysis.'
    }
  ];

  const certificationItems = [
    {
      title: 'Capgemini Certified Web Developer (Python & Ruby on Rails)',
      provider: 'Edu Bridge',
      period: '2020 – 2021',
      description: 'Rigorous professional training program centered on backend development, MVC application architectures, databases, and full-stack software development.'
    }
  ];

  return (
    <section 
      id="education" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Education & Credentials
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            My academic foundation and professional certifications supporting my frontend expertise.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <span className={`p-2.5 rounded-xl ${
                darkMode ? 'bg-slate-900 border border-slate-800 text-indigo-400' : 'bg-white border border-slate-200 text-indigo-600 shadow-sm'
              }`}>
                <GraduationCap className="w-6 h-6" />
              </span>
              <h3 className="text-xl font-bold tracking-tight">Academic Degrees</h3>
            </div>

            {educationItems.map((item, idx) => (
              <div 
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                  darkMode 
                    ? 'bg-slate-900/30 border-slate-800/80 hover:border-indigo-500/30 hover:bg-slate-900/55 shadow-md shadow-slate-950/20' 
                    : 'bg-white border-slate-200/80 hover:border-indigo-200 hover:bg-slate-50/50 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h4 className="text-base font-bold tracking-tight">
                    {item.degree}
                  </h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold self-start sm:self-center ${
                    darkMode 
                      ? 'bg-slate-800/80 text-indigo-300 border border-slate-700/50' 
                      : 'bg-indigo-50 text-indigo-700 border border-indigo-100/50'
                  }`}>
                    {item.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <span className={`p-2.5 rounded-xl ${
                darkMode ? 'bg-slate-900 border border-slate-800 text-purple-400' : 'bg-white border border-slate-200 text-purple-600 shadow-sm'
              }`}>
                <Award className="w-6 h-6" />
              </span>
              <h3 className="text-xl font-bold tracking-tight">Professional Certifications</h3>
            </div>

            {certificationItems.map((item, idx) => (
              <div 
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                  darkMode 
                    ? 'bg-slate-900/30 border-slate-800/80 hover:border-purple-500/30 hover:bg-slate-900/55 shadow-md shadow-slate-950/20' 
                    : 'bg-white border-slate-200/80 hover:border-purple-200 hover:bg-slate-50/50 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h4 className="text-base font-bold tracking-tight">
                    {item.title}
                  </h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold self-start sm:self-center ${
                    darkMode 
                      ? 'bg-slate-800/80 text-purple-300 border border-slate-700/50' 
                      : 'bg-purple-50 text-purple-700 border border-purple-100/50'
                  }`}>
                    {item.period}
                  </span>
                </div>
                <div className={`text-xs font-semibold mb-3 tracking-wide uppercase ${
                  darkMode ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  Provider: {item.provider}
                </div>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
