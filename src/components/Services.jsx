import { Monitor, Zap, Code } from 'lucide-react';

export default function Services({ darkMode }) {
  const servicesList = [
    {
      title: 'Responsive Web Design',
      description: 'Creating mobile-first, fluid, and cross-browser compatible layouts that render pixel-perfectly on mobile phones, tablets, and large desktop screens.',
      icon: <Monitor className="w-6 h-6 text-indigo-400" />,
      features: ['Mobile-first design', 'Fluid grids & media queries', 'Cross-browser rendering tests']
    },
    {
      title: 'React App Engineering',
      description: 'Building interactive and stateful Single Page Applications (SPAs) with modular, component-driven React architectures and clean hook abstractions.',
      icon: <Code className="w-6 h-6 text-purple-400" />,
      features: ['Component-driven development', 'Advanced React Hooks usage', 'Modular state integrations']
    },
    {
      title: 'TypeScript Integration',
      description: 'Adding type safety, scalable interfaces, and robust type definitions to Javascript codebases to catch compile-time bugs and improve code documentation.',
      icon: <Monitor className="w-6 h-6 text-pink-400" />, // Custom fallback styling
      features: ['Interface & Type setups', 'Enhanced compiler parameters', 'Safer REST endpoint operations']
    },
    {
      title: 'Performance & SEO Tuning',
      description: 'Improving loading speeds, reducing bundle sizes, and structuring semantic HTML markup to maximize Lighthouse performance scores and search engine indexing.',
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      features: ['Lighthouse performance audits', 'Core Web Vitals optimizations', 'Semantic SEO tagging']
    }
  ];

  return (
    <section 
      id="services" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* Visual background rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Services & Expertise
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            High-impact solutions I offer to build engaging, accessible, and fast web products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                darkMode 
                  ? 'bg-slate-900/30 border-slate-800/80 hover:border-indigo-500/30 hover:bg-slate-900/50 shadow-md shadow-slate-950/20' 
                  : 'bg-white border-slate-200/80 hover:border-indigo-200 hover:bg-slate-50/50 shadow-sm'
              }`}
            >
              <div>
                {/* Icon Circle */}
                <span className={`inline-flex p-3 rounded-2xl mb-6 ${
                  darkMode ? 'bg-slate-800/50' : 'bg-slate-100'
                }`}>
                  {service.icon}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-6 leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {service.description}
                </p>
              </div>

              {/* Sub-features list */}
              <ul className="space-y-2 pt-4 border-t border-slate-800/10 dark:border-slate-100/10">
                {service.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
