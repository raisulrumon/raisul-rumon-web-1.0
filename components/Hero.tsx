import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-gray-50/50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-500 dark:from-primary-400 dark:to-cyan-300">Raisul Rumon</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary-600/90 dark:text-primary-400 mb-6">
              Creative Designer & Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I design and code beautifully simple things, and I love what I do. Based in Dhaka, Bangladesh.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#resume" 
                className="px-10 py-4 text-lg rounded-lg bg-primary-600 text-white font-semibold shadow-lg shadow-primary-600/30 hover:bg-primary-700 hover:shadow-primary-600/40 transition-all transform hover:-translate-y-1 hover:scale-105"
              >
                View Resume
              </a>
              <a 
                href="#contact" 
                className="px-10 py-4 text-lg rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-semibold shadow-lg hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all transform hover:-translate-y-1 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative flex justify-center lg:justify-end">
            {/* Decorative Elements - Parallax Effect */}
            <div 
                className="absolute top-1/2 left-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-gradient-to-tr from-primary-100 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/10 rounded-full blur-3xl -z-10 opacity-70 transition-transform duration-75 ease-out"
                style={{ 
                    transform: `translate(-50%, calc(-50% + ${scrollY * 0.2}px))` 
                }}
            ></div>
            
            <div 
                className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] transition-transform duration-75 ease-out"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
                <div className="absolute inset-0 bg-gray-900 dark:bg-white rounded-full rotate-3 opacity-5"></div>
                <img 
                    src="https://picsum.photos/seed/portrait1/600/600" 
                    alt="Raisul Rumon" 
                    className="rounded-full w-full h-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl relative z-10 transition-colors duration-300"
                />
                
                {/* Floating badges (optional decoration) */}
                <div className="absolute top-10 -left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-bounce border border-gray-100 dark:border-gray-700" style={{ animationDuration: '3s' }}>
                    <span className="text-2xl">🎨</span>
                </div>
                <div className="absolute bottom-10 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-bounce border border-gray-100 dark:border-gray-700" style={{ animationDuration: '4s' }}>
                    <span className="text-2xl">💻</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;