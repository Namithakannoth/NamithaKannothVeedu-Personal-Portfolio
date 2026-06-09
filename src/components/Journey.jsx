import { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, UserCheck } from 'lucide-react';

export default function Journey({ darkMode }) {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: '3S Knowledge',
      location: 'United Kingdom',
      period: 'Feb 2026 – Mar 2026',
      icon: <Briefcase className="w-5 h-5" />,
      bullets: [
        'Engineered a diagramming utility using TypeScript and Tailwind CSS, reducing diagram creation times for ProcessPro users by 18%.',
        'Built a modular component library, improving code reusability and decreasing frontend inconsistencies by 25%.',
        'Collaborated in Agile Git-based sprints, resolving 15+ complex frontend bugs and UI refactoring tasks per week.',
        'Enhanced responsiveness and rendering metrics of internal reporting dashboards to ensure optimal cross-device usability.',
        'Worked with senior engineers to implement client-side data serialization and diagram exports.'
      ]
    },
    {
      role: 'Continuous Professional Development / Childcare Break',
      company: 'Self-Driven / Runwood Homes (Part-Time)',
      location: 'United Kingdom',
      period: 'Jan 2023 – Present',
      icon: <UserCheck className="w-5 h-5" />,
      highlight: true,
      bullets: [
        'Executed a planned childcare break while dedicating 15+ hours/week to advanced technical learning in React.js, TypeScript, and state management (Redux Toolkit).',
        'Developed 4+ complex responsive applications (including a Sequence Canvas editor and tournament register portals) to master Vite configurations, custom React Hooks, and REST API integrations.',
        'Maintained absolute currency with the modern frontend ecosystem, centering on web accessibility (WCAG), performance auditing, and Git workflows.'
      ]
    },
    {
      role: 'Frontend Developer (Freelance)',
      company: 'TrumpCode Pvt Ltd',
      location: 'Remote',
      period: 'Jan 2022 – Oct 2022',
      icon: <Briefcase className="w-5 h-5" />,
      bullets: [
        'Architected mobile-first user interfaces and responsive layouts using React.js, boosting mobile user satisfaction scores by 12%.',
        'Integrated frontend views with secure REST API endpoints and backend services, achieving seamless data synchronization.',
        'Refactored legacy React architectures, improving load metrics by 20% and resolving cross-browser rendering discrepancies.',
        'Performed thorough unit testing and debugged layout issues, substantially improving application core stability.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'WebSoulLabs',
      location: 'Kerala, India',
      period: 'Apr 2021 – Dec 2021',
      icon: <Briefcase className="w-5 h-5" />,
      bullets: [
        'Programmed responsive business websites utilizing React.js, JavaScript, and CSS, ensuring pixel-perfect layout fidelity.',
        'Conducted comprehensive debugging and layout optimizations, raising client Lighthouse performance and SEO scores to 95+.',
        'Coordinated with cross-functional development teams during design iterations, speeding up product delivery timelines by 10%.'
      ]
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section 
      id="journey" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Professional Journey
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A timeline of my growth, experience, and dedication to frontend engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-300 dark:border-slate-800 ml-4 sm:ml-6 md:mx-auto md:w-full md:max-w-4xl">
          
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={index} className="mb-12 ml-6 sm:ml-8 relative">
                
                {/* Timeline dot */}
                <span className={`absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                  exp.highlight
                    ? 'bg-purple-600 border-purple-400 text-white animate-pulse'
                    : darkMode
                      ? 'bg-slate-900 border-slate-700 text-indigo-400 hover:border-indigo-500'
                      : 'bg-white border-slate-200 text-indigo-600 hover:border-indigo-500'
                }`}>
                  {exp.icon}
                </span>

                {/* Timeline Card */}
                <div 
                  onClick={() => toggleExpand(index)}
                  className={`cursor-pointer group p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
                    exp.highlight
                      ? darkMode
                        ? 'bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border-purple-500/30 hover:border-purple-500/50 shadow-lg shadow-purple-950/20'
                        : 'bg-gradient-to-br from-indigo-50/50 to-purple-50/50 border-purple-200 hover:border-purple-300 shadow-sm'
                      : darkMode
                        ? 'bg-slate-900/40 border-slate-800/80 hover:border-indigo-500/30 hover:bg-slate-900/60 shadow-md shadow-slate-950/25'
                        : 'bg-white border-slate-200/80 hover:border-indigo-200 hover:bg-slate-50/30 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className={`text-lg font-bold transition-colors ${
                        exp.highlight 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400' 
                          : 'group-hover:text-indigo-400'
                      }`}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-sm font-semibold ${
                          darkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          {exp.company}
                        </span>
                        <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                          • {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className={`inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.highlight
                        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        : darkMode 
                          ? 'bg-slate-800 text-slate-300' 
                          : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    isExpanded ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-16 opacity-80'
                  }`}>
                    <ul className={`space-y-2 text-sm leading-relaxed list-disc list-inside ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {exp.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="pl-1">
                          <span className="font-sans">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Click to expand prompt */}
                  <div className="flex justify-end mt-4 pt-3 border-t border-slate-800/10 dark:border-slate-100/10">
                    <button className={`inline-flex items-center gap-1 text-xs font-semibold ${
                      darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'
                    }`}>
                      {isExpanded ? (
                        <>
                          Show Less <ChevronUp size={14} />
                        </>
                      ) : (
                        <>
                          Show Details <ChevronDown size={14} />
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
          
        </div>

      </div>
    </section>
  );
}
