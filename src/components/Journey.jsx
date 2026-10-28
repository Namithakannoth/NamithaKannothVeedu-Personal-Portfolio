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
        'Built a UML sequence diagram editor for the ProcessPro platform in React.js and TypeScript, from initial setup through to production deployment.',
        'Engineered real-time synchronisation between the code editor and visual canvas, with drag-and-drop editing, zoom controls, saved sessions and PNG/SVG export.',
        'Designed a reusable UI component library in TypeScript and Tailwind CSS, standardising the look and feel across 3+ internal tools.',
        'Enhanced the usability of internal reporting tools through responsive UI improvements and targeted debugging.',
        'Collaborated in an Agile team through GitHub workflows, raising pull requests, taking part in code reviews and presenting weekly progress to my manager.'
      ]
    },
    {
      role: 'Career Break (Childcare) & Self-Directed Learning',
      company: 'Alongside part-time work as a Healthcare Assistant (Runwood Homes)',
      location: 'United Kingdom',
      period: 'Oct 2022 – Jan 2026',
      icon: <UserCheck className="w-5 h-5" />,
      highlight: true,
      bullets: [
        'Took a planned career break for childcare while continuing to study the React ecosystem, TypeScript and state management (Redux).',
        'Built personal projects, including this portfolio (React, Vite, Tailwind CSS), to practise component design, REST API integration and Git workflows.',
        'Kept up to date with modern frontend practice, including web accessibility (WCAG basics) and responsive design.'
      ]
    },
    {
      role: 'Frontend Developer (Freelance)',
      company: 'TrumpCode Pvt Ltd',
      location: 'Remote',
      period: 'Jan 2022 – Oct 2022',
      icon: <Briefcase className="w-5 h-5" />,
      bullets: [
        'Developed the frontends of two client web applications in React.js and JavaScript: a banking management system (TrumpCore) and a healthcare platform (AroyaLife).',
        'Built mobile-first interfaces integrated with REST APIs and backend services to deliver dynamic, data-driven features.',
        'Carried out systematic testing, debugging and issue resolution across multiple releases.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'WebSoulLabs',
      location: 'Kerala, India',
      period: 'Apr 2021 – Dec 2021',
      icon: <Briefcase className="w-5 h-5" />,
      bullets: [
        'Delivered responsive websites using React.js, JavaScript, HTML and CSS within a cross-functional development team, including the GM4 esports tournament platform.',
        'Carried out frontend debugging, UI improvements and on-page SEO optimisation.'
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
