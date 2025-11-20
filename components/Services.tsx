import React from 'react';
import { Fingerprint, PenTool, Megaphone, Image, Monitor, CreditCard, Package, Sparkles } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  
  const services: Service[] = [
    { id: 1, title: 'Brand Identity Design', icon: 'user' },
    { id: 2, title: 'Logo Design', icon: 'pen' },
    { id: 3, title: 'Social Media Design', icon: 'share' },
    { id: 4, title: 'Poster & Banner Design', icon: 'image' },
    { id: 5, title: 'Web Banner / Ad Design', icon: 'layout' },
    { id: 6, title: 'Business Card & Stationery', icon: 'card' },
    { id: 7, title: 'Packaging Design', icon: 'box' },
    { id: 8, title: 'And More...', icon: 'plus' },
  ];

  const renderIcon = (name: string) => {
    switch (name) {
        case 'user': return <Fingerprint className="w-10 h-10 text-primary-600 dark:text-primary-400" />;
        case 'pen': return <PenTool className="w-10 h-10 text-primary-600 dark:text-primary-400" />;
        case 'share': return <Megaphone className="w-10 h-10 text-primary-600 dark:text-primary-400" />;
        case 'image': return <Image className="w-10 h-10 text-primary-600 dark:text-primary-400" />;
        case 'layout': return <Monitor className="w-10 h-10 text-primary-600 dark:text-primary-400" />;
        case 'card': return <CreditCard className="w-10 h-10 text-primary-600 dark:text-primary-400" />;
        case 'box': return <Package className="w-10 h-10 text-primary-600 dark:text-primary-400" />;
        default: return <Sparkles className="w-10 h-10 text-primary-600 dark:text-primary-400" />;
    }
  };

  // Custom SVG Icons for authenticity
  const FigmaIcon = () => (
    <svg width="32" height="32" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38L19 38V28.5Z" fill="#1ABCFE"/>
        <path d="M9.5 38C6.98044 38 4.56408 36.9991 2.78249 35.2175C1.00089 33.4359 0 31.0196 0 28.5C0 25.9804 1.00089 23.5641 2.78249 21.7825C4.56408 20.0009 6.98044 19 9.5 19L19 19V38H9.5Z" fill="#A259FF"/>
        <path d="M19 57C16.4804 57 14.0641 56.0009 12.2825 54.2194C10.5009 52.4378 9.5 50.0215 9.5 47.5C9.5 44.9785 10.5009 42.5622 12.2825 40.7806C14.0641 38.9991 16.4804 38 19 38V57Z" fill="#0ACF83"/>
        <path d="M9.5 19C12.0196 19 14.4359 18.0009 16.2175 16.2175C17.9991 14.4359 19 12.0196 19 9.5C19 6.98044 17.9991 4.56408 16.2175 2.78249C14.4359 1.00089 12.0196 0 9.5 0C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 18.0009 6.98044 19 9.5 19Z" fill="#F24E1E"/>
        <path d="M19 19H28.5C31.0196 19 33.4359 18.0009 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0C25.9804 0 23.5641 1.00089 21.7825 2.78249C20.0009 4.56408 19 6.98044 19 9.5V19Z" fill="#FF7262"/>
    </svg>
  );

  return (
    <section id="skills" className="py-24 bg-gray-100 dark:bg-gray-950 transition-colors duration-300 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">My Design Skills</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">The tools I use to bring ideas to life.</p>
        </div>

        {/* Skills Cards - Authentically styled with Unique Border */}
        <div className="flex flex-wrap justify-center gap-8 mb-24">
            
            {/* Photoshop */}
            <div className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-10 w-64 text-center shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-6 border border-gray-50 dark:border-gray-700 hover:border-primary-500/20">
                {/* Top Gradient Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="w-20 h-20 rounded-2xl bg-[#001e36] flex items-center justify-center border-2 border-[#31a8ff]/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#31a8ff] font-bold text-3xl">Ps</span>
                </div>
                <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">Photoshop</span>
            </div>

            {/* Illustrator */}
            <div className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-10 w-64 text-center shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-6 border border-gray-50 dark:border-gray-700 hover:border-primary-500/20">
                {/* Top Gradient Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="w-20 h-20 rounded-2xl bg-[#330000] flex items-center justify-center border-2 border-[#ff9a00]/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#ff9a00] font-bold text-3xl">Ai</span>
                </div>
                <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">Illustrator</span>
            </div>

            {/* Figma */}
            <div className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-10 w-64 text-center shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-6 border border-gray-50 dark:border-gray-700 hover:border-primary-500/20">
                {/* Top Gradient Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center border-2 border-gray-100 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <FigmaIcon />
                </div>
                <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">Figma</span>
            </div>

        </div>

        {/* Services Grid */}
        <div id="services" className="mt-24 scroll-mt-28">
            {/* Services Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">My Services</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">Quality services tailored to your needs.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                    <div 
                        key={service.id} 
                        className={`group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg hover:shadow-primary-500/10 hover:border-primary-500/20 transition-all hover:-translate-y-1 flex flex-col items-center text-center gap-4 ${service.title === 'And More...' ? 'bg-primary-50/50 dark:bg-primary-900/20 border-primary-100 dark:border-primary-800' : ''}`}
                    >
                        {/* Top Gradient Line */}
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-full mb-2 transition-colors group-hover:scale-110 duration-300">
                            {renderIcon(service.icon)}
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Services;