import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">A brief intro to who I am and what I do.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://picsum.photos/seed/workspace/800/600" 
                        alt="Workspace" 
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
            </div>

            {/* Right Text */}
            <div className="w-full lg:w-1/2 space-y-6">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    I am a passionate and results-driven Designer and Developer with 6 years of experience in creating engaging and user-friendly digital experiences. My journey in tech started with a deep curiosity for how things work, which evolved into a career where I can blend creativity with problem-solving.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    I specialize in front-end development using modern frameworks like React and Vue, and have a keen eye for UI/UX design, ensuring that every project is not only functional but also aesthetically pleasing. I thrive in collaborative environments and am always eager to learn new technologies.
                </p>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
                { number: '128+', label: 'Projects' },
                { number: '42+', label: 'Happy Clients' },
                { number: '6+', label: 'Years of Experience' },
                { number: '3+', label: 'Awards Won' },
            ].map((stat, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:border-primary-500/20 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    {/* Top Gradient Line */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    
                    <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.number}</div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default About;