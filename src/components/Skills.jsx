import { Layout, Cpu, Wrench, Database } from 'lucide-react';

export default function Skills({ darkMode }) {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      skills: [
        'React.js',
        'TypeScript',
        'Redux Toolkit',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'SCSS',
        'Tailwind CSS',
        'Bootstrap',
        'jQuery'
      ]
    },
    {
      title: 'Core Concepts',
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      skills: [
        'Responsive Design',
        'Component-Based Architecture',
        'REST API Integration',
        'State Management (Redux/Context)',
        'Cross-Browser Compatibility',
        'Performance Optimization'
      ]
    },
    {
      title: 'Tools & Workflows',
      icon: <Wrench className="w-5 h-5 text-pink-400" />,
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Agile/Scrum',
        'Version Control',
        'Debugging'
      ]
    },
    {
      title: 'Databases & Backend',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      skills: [
        'MongoDB (Basic)',
        'SQL (Basic)',
        'REST APIs',
        'Backend Services'
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Skills & Expertise
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            My core technical competencies and software development methodologies.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-slate-900/30 border-slate-800/80 hover:border-indigo-500/30 hover:bg-slate-900/50 shadow-md shadow-slate-950/20' 
                  : 'bg-white border-slate-200/80 hover:border-indigo-200 hover:bg-slate-50/50 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`p-2.5 rounded-xl ${
                  darkMode ? 'bg-slate-800/50' : 'bg-slate-100'
                }`}>
                  {cat.icon}
                </span>
                <h3 className="text-lg font-bold tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border transition-all duration-300 ${
                      darkMode
                        ? 'border-slate-800/60 bg-slate-950/50 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/25 hover:bg-slate-900/20'
                        : 'border-slate-100 bg-slate-50 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50/20'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
