import React, { useState, useEffect, useCallback } from 'react';
import { Project } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = ['All', 'Web', 'Branding', 'App', 'Design', 'UI/UX'];

  const projects: Project[] = [
    { id: 1, title: 'E-commerce UI', category: 'Web', image: 'https://picsum.photos/seed/p1/600/400', description: 'A short description of the project goes here.' },
    { id: 2, title: 'Brand Identity', category: 'Branding', image: 'https://picsum.photos/seed/p2/600/400', description: 'A short description of the project goes here.' },
    { id: 3, title: 'Mobile App', category: 'App', image: 'https://picsum.photos/seed/p3/600/400', description: 'A short description of the project goes here.' },
    { id: 4, title: 'Dashboard', category: 'Web', image: 'https://picsum.photos/seed/p4/600/400', description: 'A short description of the project goes here.' },
    { id: 5, title: 'Landing Page', category: 'Design', image: 'https://picsum.photos/seed/p5/600/400', description: 'A short description of the project goes here.' },
    { id: 6, title: 'Prototype', category: 'UI/UX', image: 'https://picsum.photos/seed/p6/600/400', description: 'A short description of the project goes here.' },
    { id: 7, title: 'SaaS Platform', category: 'Web', image: 'https://picsum.photos/seed/p7/600/400', description: 'A short description of the project goes here.' },
    { id: 8, title: 'Logo System', category: 'Branding', image: 'https://picsum.photos/seed/p8/600/400', description: 'A short description of the project goes here.' },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Generate 20 mock images for the gallery based on project ID
  const getGalleryImages = (projectId: number) => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      src: `https://picsum.photos/seed/project_${projectId}_img_${i}/1200/800`
    }));
  };

  const galleryImages = selectedProject ? getGalleryImages(selectedProject.id) : [];

  // Reset index when modal opens
  useEffect(() => {
    if (selectedProject) {
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  // Navigation handlers
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, [galleryImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, [galleryImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setSelectedProject(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, nextImage, prevImage]);

  return (
    <section id="portfolio" className="py-24 bg-gray-100 dark:bg-gray-950 transition-colors duration-300 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">My Recent Work</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Here are some of the projects I've worked on.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeFilter === filter 
                        ? 'bg-primary-600 text-white shadow-md scale-105' 
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
                <div key={project.id} className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-primary-500/20 transition-all duration-300">
                    {/* Top Gradient Line (z-10 to show over image) */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20" />

                    <div className="relative h-64 overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Overlay and Button */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[1px]">
                             <a 
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedProject(project);
                                }}
                                className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full shadow-lg transform translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out hover:bg-primary-700 hover:scale-105"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{project.category}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">{project.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>

      {/* Full Screen Project Gallery Modal (Carousel) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="p-4 md:p-6 flex justify-between items-center bg-black/20 z-20 absolute top-0 left-0 right-0">
                <div className="text-white">
                    <h3 className="text-xl md:text-2xl font-bold">{selectedProject.title}</h3>
                    <span className="text-sm text-gray-300">{selectedProject.category} <span className="mx-2">•</span> {currentImageIndex + 1} / {galleryImages.length}</span>
                </div>
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Main Carousel Area */}
            <div className="flex-1 relative flex items-center justify-center p-4 md:p-10 overflow-hidden">
                {/* Previous Button */}
                <button 
                    onClick={prevImage}
                    className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110"
                    aria-label="Previous image"
                >
                    <ChevronLeft size={32} />
                </button>

                {/* Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                        src={galleryImages[currentImageIndex].src} 
                        alt={`${selectedProject.title} - View ${currentImageIndex + 1}`} 
                        className="max-w-full max-h-full object-contain shadow-2xl rounded-md"
                    />
                </div>

                {/* Next Button */}
                <button 
                    onClick={nextImage}
                    className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110"
                    aria-label="Next image"
                >
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Thumbnails Strip */}
            <div className="h-24 bg-black/40 backdrop-blur-md p-4 flex items-center gap-3 overflow-x-auto z-20">
                {galleryImages.map((img, idx) => (
                    <button 
                        key={img.id}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative flex-shrink-0 w-24 h-16 rounded-md overflow-hidden transition-all duration-300 ${
                            idx === currentImageIndex 
                            ? 'ring-2 ring-primary-500 scale-105 opacity-100' 
                            : 'opacity-50 hover:opacity-100 hover:scale-105'
                        }`}
                    >
                        <img 
                            src={img.src} 
                            alt={`Thumbnail ${idx + 1}`} 
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

        </div>
      )}
    </section>
  );
};

export default Portfolio;