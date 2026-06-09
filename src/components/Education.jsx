import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education({ darkMode }) {
  const academics = [
    {
      degree: 'Master of Computer Application (MCA)',
      period: '2015 – 2018',
      institution: 'University Graduate Studies', // standard placeholder for MCA
      details: 'Focused on advanced algorithms, software engineering principles, database management systems, and web application design.'
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      period: '2012 – 2015',
      institution: 'Undergraduate Studies', // standard placeholder for BCA
      details: 'Acquired foundation in computer systems architecture, programming fundamentals (C/C++, Java), data structures, and responsive layouts.'
    }
  ];

  const certifications = [
    {
      title: 'Capgemini Certified Web Developer',
      provider: 'Edu Bridge Program',
      period: '2020 – 2021',
      details: 'Rigorous technical boot camp training specialized in Python backend development, Ruby on Rails MVC frameworks, and full-stack integration methodologies.'
    }
  ];

  return (
    <section 
      id="education" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Education & Credentials
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            My academic foundations and professional certifications.
          </p>
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Academic Degrees */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className={`p-2.5 rounded-xl ${
                darkMode ? 'bg-slate-900/50 text-indigo-400' : 'bg-slate-100 text-indigo-600'
              }`}>
                <GraduationCap className="w-6 h-6" />
              </span>
              <h3 className="text-xl font-bold tracking-tight">Academic History</h3>
            </div>

            <div className="space-y-6">
              {academics.map((edu, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
                    darkMode 
                      ? 'bg-slate-900/30 border-slate-800/80 hover:border-indigo-500/30 hover:bg-slate-900/50 shadow-md shadow-slate-950/20' 
                      : 'bg-white border-slate-200/85 hover:border-indigo-200 hover:bg-slate-50/50 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h4 className="text-base font-bold text-indigo-500 dark:text-indigo-400">
                      {edu.degree}
                    </h4>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Calendar size={12} />
                      {edu.period}
                    </span>
                  </div>
                  <p className={`text-sm mb-2 font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {edu.institution}
                  </p>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className={`p-2.5 rounded-xl ${
                darkMode ? 'bg-slate-900/50 text-purple-400' : 'bg-slate-100 text-purple-600'
              }`}>
                <Award className="w-6 h-6" />
              </span>
              <h3 className="text-xl font-bold tracking-tight">Professional Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
                    darkMode 
                      ? 'bg-gradient-to-br from-indigo-950/20 to-purple-950/20 border-purple-500/20 hover:border-purple-500/40 shadow-md shadow-slate-950/20' 
                      : 'bg-gradient-to-br from-indigo-50/30 to-purple-50/30 border-purple-100 hover:border-purple-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h4 className="text-base font-bold text-purple-500 dark:text-purple-400">
                      {cert.title}
                    </h4>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Calendar size={12} />
                      {cert.period}
                    </span>
                  </div>
                  <p className={`text-sm mb-2 font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {cert.provider}
                  </p>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {cert.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
