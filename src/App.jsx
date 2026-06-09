import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Mail, Phone } from 'lucide-react';
import Linkedin from './components/LinkedinIcon';

export default function App() {
  // Try to load initial theme from localStorage, default to dark (true)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to dark mode for rich premium aesthetic
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Navigation */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Sections */}
      <main>
        {/* Hero Landing */}
        <Hero darkMode={darkMode} />

        {/* Experience & Rebranded Break Timeline */}
        <Journey darkMode={darkMode} />

        {/* Technical Skills Board */}
        <Skills darkMode={darkMode} />

        {/* Services & Expertise */}
        <Services darkMode={darkMode} />

        {/* Dynamic Project Portfolio */}
        <Projects darkMode={darkMode} />

        {/* Connect & Contact Forms */}
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <footer className={`py-12 border-t text-center transition-colors duration-300 ${
        darkMode 
          ? 'bg-slate-950 border-slate-900 text-slate-500' 
          : 'bg-white border-slate-200 text-slate-500'
      }`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Namitha Kannoth Veedu. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/namithakannoth" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="mailto:namithakv605@gmail.com" 
              className="hover:text-indigo-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a 
              href="tel:+447768148686" 
              className="hover:text-indigo-500 transition-colors"
              aria-label="Phone"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
