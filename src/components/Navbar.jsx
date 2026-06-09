import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Journey', href: '#journey' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode 
          ? 'glass py-4 shadow-lg shadow-slate-950/20' 
          : 'glass-light py-4 shadow-lg shadow-slate-200/50'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Namitha
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-indigo-500 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors border ${
                darkMode 
                  ? 'border-slate-800 bg-slate-900/50 text-amber-400 hover:bg-slate-800 hover:text-amber-300' 
                  : 'border-slate-200 bg-slate-100 text-indigo-600 hover:bg-slate-200 hover:text-indigo-700'
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume Button */}
            <a
              href="/NamithaKannothVeedu.pdf"
              download="Namitha_Kannoth_Veedu_Resume.pdf"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-300 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5"
            >
              Resume <ArrowUpRight size={14} className="ml-1" />
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg border ${
              darkMode 
                ? 'border-slate-800 bg-slate-900/50 text-amber-400' 
                : 'border-slate-200 bg-slate-100 text-indigo-600'
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg border ${
              darkMode 
                ? 'border-slate-800 bg-slate-900/50 text-slate-300 hover:text-white' 
                : 'border-slate-200 bg-slate-100 text-slate-600 hover:text-slate-800'
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out border-b ${
        isOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto visible' 
          : 'opacity-0 -translate-y-4 pointer-events-none invisible'
      } ${
        darkMode 
          ? 'bg-slate-950/95 border-slate-900 shadow-xl' 
          : 'bg-white/95 border-slate-100 shadow-xl'
      }`}>
        <div className="px-6 py-6 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 transition-colors hover:text-indigo-500 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/NamithaKannothVeedu.pdf"
            download="Namitha_Kannoth_Veedu_Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="w-full text-center mt-2 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/25"
          >
            Resume <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </nav>
  );
}
