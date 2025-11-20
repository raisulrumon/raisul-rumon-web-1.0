import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<'EN' | 'BN'>('EN');

  useEffect(() => {
    // Logic to default to Light mode unless 'dark' is explicitly stored
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
        localStorage.theme = 'light'; // Ensure light is set by default
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Clickable */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-sm group-hover:border-primary-500 transition-colors">
               <img src="https://picsum.photos/seed/raisul/200/200" alt="Logo" className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-gray-900 dark:text-white text-lg leading-none group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Raisul Rumon</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Designer . Developer</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Dropdown / Actions */}
            <div className="flex items-center gap-5 pl-5 border-l border-gray-200 dark:border-gray-700">
                {/* Language Toggle */}
                <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 border border-gray-200 dark:border-gray-700">
                    <button 
                        onClick={() => setLang('EN')}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            lang === 'EN' 
                            ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm' 
                            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                    >
                        Eng
                    </button>
                    <button 
                        onClick={() => setLang('BN')}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            lang === 'BN' 
                            ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm' 
                            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                    >
                        বাংলা
                    </button>
                </div>

                <button 
                  onClick={toggleTheme}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  aria-label="Toggle Dark Mode"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                
                <a 
                  href="https://wa.me/8801340741368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary-700 transition shadow-lg shadow-primary-600/30 hover:shadow-primary-600/40 transform hover:-translate-y-0.5"
                >
                    Let's Talk
                </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={toggleTheme}
                className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {link.name}
              </a>
            ))}
             <div className="px-3 py-2 flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Language:</span>
                <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 border border-gray-200 dark:border-gray-700">
                    <button 
                        onClick={() => setLang('EN')}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            lang === 'EN' 
                            ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm' 
                            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                    >
                        Eng
                    </button>
                    <button 
                        onClick={() => setLang('BN')}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            lang === 'BN' 
                            ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm' 
                            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                    >
                        বাংলা
                    </button>
                </div>
            </div>
            <div className="px-3 pt-2">
                <a 
                  href="https://wa.me/8801340741368"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-primary-700 transition shadow-lg shadow-primary-600/30"
                >
                    Let's Talk
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;