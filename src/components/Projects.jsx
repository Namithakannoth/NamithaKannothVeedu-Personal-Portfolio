import { useState } from 'react';
import { Network, Gamepad2, CreditCard, Heart, Lock, Eye } from 'lucide-react';

export default function Projects({ darkMode }) {
  const projectsList = [
    {
      title: 'Sequence Diagram Editor',
      subtitle: 'UML Visualization Tool',
      description: 'An interactive UML Sequence Diagram Editor featuring real-time synchronization between a text editor and a visual diagram canvas. Supports drag-and-drop node editing, PNG/SVG exports, and persistent state saving.',
      icon: <Network className="w-6 h-6 text-indigo-400" />,
      technologies: ['React.js', 'TypeScript', 'Mermaid.js', 'CodeMirror', 'Tailwind CSS'],
      type: 'Enterprise Project',
      isProprietary: true,
      features: [
        'Real-time text-to-canvas diagram synchronization',
        'Drag-and-drop workspace layout adjustment',
        'Direct export to high-resolution PNG/SVG vector formats',
        'Local storage autosave and document recovery'
      ]
    },
    {
      title: 'GM4 Esports Platform',
      subtitle: 'Tournament & Booking Portal',
      description: 'A responsive digital platform designed for esports tournament creation, team registrations, and booking coordination. Features visual dashboards for schedule planning and bracket management workflows.',
      icon: <Gamepad2 className="w-6 h-6 text-purple-400" />,
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'MongoDB'],
      type: 'Enterprise Project',
      isProprietary: true,
      features: [
        'Interactive team registration and player check-in wizard',
        'Visual tournament bracket management tool',
        'Responsive game lobby and booking schedulers',
        'User authorization and team dashboard spaces'
      ]
    },
    {
      title: 'TrumpCore',
      subtitle: 'Banking Management System',
      description: 'Administrative and operational dashboard panels built for banking internal workflows. Includes secure transaction tracking, reporting graphs, and client-profile management interfaces.',
      icon: <CreditCard className="w-6 h-6 text-pink-400" />,
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
      type: 'Client Project',
      isProprietary: false,
      features: [
        'Transaction logging and real-time audit ledger panel',
        'Administrative dashboard with dynamic reporting charts',
        'Client account lookup, modification, and onboarding flow',
        'Optimized responsive layouts for internal workspace laptops'
      ]
    },
    {
      title: 'AroyaLife',
      subtitle: 'Healthcare Application',
      description: 'A doctor-patient communication web interface designed to simplify appointment booking, schedule management, and medical profiles for patients and healthcare providers.',
      icon: <Heart className="w-6 h-6 text-emerald-400" />,
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'SCSS'],
      type: 'Client Project',
      isProprietary: false,
      features: [
        'Dr. schedule calendar matching and booking interface',
        'Patient profile panel containing historical logs',
        'Integrated messaging/notification component layout',
        'High-contrast visual layout for enhanced accessibility'
      ]
    }
  ];

  const [activeProject, setActiveProject] = useState(null);

  return (
    <section 
      id="projects" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Selected Work
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A showcase of client applications and enterprise software modules I have engineered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <div 
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode 
                  ? 'bg-slate-900/30 border-slate-800/80 hover:border-indigo-500/35 hover:bg-slate-900/50 shadow-lg shadow-slate-950/20' 
                  : 'bg-white border-slate-200/80 hover:border-indigo-200 hover:bg-slate-50/50 shadow-md'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className={`p-2.5 rounded-2xl ${
                      darkMode ? 'bg-slate-800/50' : 'bg-slate-100'
                    }`}>
                      {project.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">
                        {project.title}
                      </h3>
                      <span className={`text-xs font-semibold uppercase tracking-wider ${
                        darkMode ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        {project.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Badges */}
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase border ${
                    project.isProprietary
                      ? darkMode
                        ? 'bg-indigo-950/20 border-indigo-500/20 text-indigo-400'
                        : 'bg-indigo-50 border-indigo-100 text-indigo-700'
                      : darkMode
                        ? 'bg-purple-950/20 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-100 text-purple-700'
                  }`}>
                    {project.type}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-sm mb-6 leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                {/* Key Features Dropdown / Bullet points */}
                <div className="mb-6">
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                    darkMode ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    Key Architectures
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-xs leading-normal">
                        <span className="text-indigo-500 mt-0.5">•</span>
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Action */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className={`px-2.5 py-0.5 rounded text-[11px] font-semibold ${
                        darkMode 
                          ? 'bg-slate-950 text-slate-400 border border-slate-900' 
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800/10 dark:border-slate-100/10 flex items-center justify-between">
                  {project.isProprietary ? (
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                      darkMode ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      <Lock size={12} />
                      Proprietary Codebase
                    </span>
                  ) : (
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                      darkMode ? 'text-indigo-400' : 'text-indigo-600'
                    }`}>
                      Client Application
                    </span>
                  )}

                  <button
                    onClick={() => setActiveProject(project)}
                    className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors ${
                      darkMode 
                        ? 'text-indigo-400 hover:text-indigo-300' 
                        : 'text-indigo-600 hover:text-indigo-500'
                    }`}
                  >
                    View Details <Eye size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Details Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm cursor-pointer"
              onClick={() => setActiveProject(null)}
            />

            {/* Modal Box */}
            <div className={`relative max-w-lg w-full p-6 sm:p-8 rounded-3xl border shadow-2xl z-10 animate-fade-in-up ${
              darkMode 
                ? 'bg-slate-900 border-slate-800 text-slate-100' 
                : 'bg-white border-slate-200 text-slate-800'
            }`}>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`p-2.5 rounded-2xl ${
                  darkMode ? 'bg-slate-800' : 'bg-slate-100'
                }`}>
                  {activeProject.icon}
                </span>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    {activeProject.title}
                  </h3>
                  <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
                    {activeProject.subtitle}
                  </span>
                </div>
              </div>

              {/* Badges */}
              <div className="mb-6 flex gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                  darkMode ? 'bg-slate-850 border-slate-750 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}>
                  {activeProject.type}
                </span>
                {activeProject.isProprietary && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-1">
                    <Lock size={10} /> NDA Protected
                  </span>
                )}
              </div>

              {/* Description */}
              <p className={`text-sm mb-6 leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {activeProject.description}
              </p>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-indigo-400">
                  Detailed Implementation
                </h4>
                <ul className="space-y-2.5">
                  {activeProject.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5 text-sm">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Close Action */}
              <div className="flex justify-end pt-4 border-t border-slate-800/10 dark:border-slate-150/10">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
