import { Mail, Phone, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import Linkedin from './LinkedinIcon';

export default function Hero({ darkMode }) {
  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden ${
        darkMode ? 'bg-grid-pattern' : 'bg-grid-pattern-light'
      }`}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '-4s' }} />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* UK Work Rights Badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8 animate-fade-in-up text-xs font-semibold tracking-wide ${
          darkMode 
            ? 'bg-indigo-950/40 border-indigo-500/30 text-indigo-300' 
            : 'bg-indigo-50 border-indigo-100 text-indigo-700'
        }`}>
          <ShieldCheck size={16} className="text-emerald-500 animate-pulse" />
          <span>Full Right to Work in the UK (No Sponsorship Required)</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className={darkMode ? 'text-slate-300' : 'text-slate-800'}>Hi, I'm </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-glow">
            Namitha Kannoth Veedu
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-6 tracking-wide animate-fade-in-up ${
          darkMode ? 'text-indigo-400' : 'text-indigo-600'
        }`} style={{ animationDelay: '0.2s' }}>
          Frontend Developer
        </h2>

        {/* Description */}
        <p className={`text-base sm:text-lg max-w-3xl mb-10 leading-relaxed font-normal animate-fade-in-up ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`} style={{ animationDelay: '0.3s' }}>
          Performance-driven developer with <strong>4+ years of professional and freelance experience</strong> engineering responsive, accessible, and user-focused web interfaces. Specialized in <strong>React.js</strong>, <strong>TypeScript</strong>, <strong>Redux/State Management</strong>, and <strong>Tailwind CSS</strong>, with a proven track record of reducing developer overhead, integrating REST APIs, and delivering scalable codebases.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 group"
          >
            View Projects 
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 border hover:-translate-y-0.5 ${
              darkMode 
                ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-700' 
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Get in Touch
          </a>
          <a
            href="/NamithaKannothVeedu.pdf"
            download="Namitha_Kannoth_Veedu_Resume.pdf"
            className={`inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 border hover:-translate-y-0.5 ${
              darkMode 
                ? 'border-indigo-500/30 bg-indigo-950/20 text-indigo-300 hover:bg-indigo-950/40 hover:border-indigo-500/50' 
                : 'border-indigo-100 bg-indigo-50/50 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-200'
            }`}
          >
            <FileText size={16} className="mr-2" />
            Download CV
          </a>
        </div>

        {/* Quick Social Links */}
        <div className="flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="https://www.linkedin.com/in/namithakannoth"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 border hover:scale-110 hover:-translate-y-1 ${
              darkMode 
                ? 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 shadow-md shadow-slate-950/20' 
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 shadow-sm'
            }`}
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:namithakv605@gmail.com"
            className={`p-3 rounded-full transition-all duration-300 border hover:scale-110 hover:-translate-y-1 ${
              darkMode 
                ? 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 shadow-md shadow-slate-950/20' 
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 shadow-sm'
            }`}
            title="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+447768148686"
            className={`p-3 rounded-full transition-all duration-300 border hover:scale-110 hover:-translate-y-1 ${
              darkMode 
                ? 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 shadow-md shadow-slate-950/20' 
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 shadow-sm'
            }`}
            title="Phone"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
