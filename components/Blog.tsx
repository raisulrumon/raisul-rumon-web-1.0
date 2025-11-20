import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { X } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: '10 UI/UX Design Trends for 2024',
      category: 'DESIGN',
      image: 'https://picsum.photos/seed/blog1/600/400',
      summary: 'A short summary of the blog post content will go here, giving readers a glimpse of what to expect.',
      subtitle: 'Exploring the future of digital interfaces, user experience, and the visual languages defining this year.',
      content: `
        <p>The world of UI/UX design is ever-evolving. As we step further into 2024, we are seeing a shift towards more immersive, accessible, and personalized digital experiences. From the resurgence of brutalism to the refined elegance of glassmorphism, designers are pushing boundaries like never before.</p>
        <p>One of the key trends this year is the focus on micro-interactions. These small, subtle animations not only delight users but also provide valuable feedback, making interfaces feel alive and responsive. Whether it's a button that morphs when clicked or a loading skeleton that shimmers, these details matter.</p>
        <p>Another major shift is the adoption of AI-driven design workflows. Tools like Figma and Adobe XD are integrating AI to help designers iterate faster, generate assets on the fly, and ensure accessibility compliance from day one.</p>
      `
    },
    {
      id: 2,
      title: 'Getting Started with React Hooks',
      category: 'DEVELOPMENT',
      image: 'https://picsum.photos/seed/blog2/600/400',
      summary: 'A short summary of the blog post content will go here, giving readers a glimpse of what to expect.',
      subtitle: 'A comprehensive guide to mastering functional components and state management in modern React.',
      content: `
        <p>React Hooks have completely revolutionized how we write React components. Gone are the days of complex class components and lifecycle methods that were hard to follow. Hooks allow you to use state and other React features without writing a class.</p>
        <p>The most fundamental hook, <code>useState</code>, allows you to add state to functional components. It returns a pair: the current state value and a function that lets you update it. This simple concept is the building block of interactive UIs.</p>
        <p>Then there is <code>useEffect</code>, which handles side effects like data fetching, subscriptions, or manually changing the DOM. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.</p>
      `
    },
    {
      id: 3,
      title: 'How to Stay Productive as a Freelancer',
      category: 'PRODUCTIVITY',
      image: 'https://picsum.photos/seed/blog3/600/400',
      summary: 'A short summary of the blog post content will go here, giving readers a glimpse of what to expect.',
      subtitle: 'Tips, tricks, and strategies to maintain work-life balance while managing multiple clients effectively.',
      content: `
        <p>Freelancing offers freedom, but it also requires immense discipline. Without a boss watching over your shoulder, it's easy to fall into the trap of procrastination or, conversely, burnout from overworking.</p>
        <p>One effective strategy is time-blocking. By dedicating specific chunks of your day to specific tasks—like deep work, emails, and client meetings—you can ensure that you are making progress on all fronts without constant context switching.</p>
        <p>It's also crucial to set clear boundaries. Just because you work from home doesn't mean you are available 24/7. Communicating your working hours to clients early on sets expectations and protects your personal time.</p>
      `
    }
  ];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedPost]);

  return (
    <section id="blog" className="py-24 bg-gray-100 dark:bg-gray-950 transition-colors duration-300 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">From My Blog</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Sharing my thoughts on design, development, and tech.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
                <div 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)}
                    className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-50 dark:border-gray-700 hover:border-primary-500/20 transition-all duration-300 flex flex-col h-full cursor-pointer"
                >
                    {/* Top Gradient Line (z-10 to show over image) */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20" />

                    <div className="h-56 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <span className="text-xs font-bold text-pink-500 uppercase tracking-wider mb-2">{post.category}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{post.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 flex-1">{post.summary}</p>
                        <span className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            Read More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </span>
                    </div>
                </div>
            ))}
        </div>

      </div>

      {/* Full Screen Blog Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 animate-fade-in-up">
            <div className="bg-white dark:bg-gray-900 w-full max-w-4xl h-[90vh] rounded-2xl shadow-2xl flex flex-col relative overflow-hidden">
                
                {/* Close Button */}
                <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedPost(null); }}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-black transition-colors shadow-lg"
                >
                    <X size={24} />
                </button>

                {/* Content Container - Scrollable */}
                <div className="overflow-y-auto h-full custom-scrollbar">
                    
                    {/* Hero Image */}
                    <div className="w-full h-64 md:h-96 relative">
                        <img 
                            src={selectedPost.image} 
                            alt={selectedPost.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <div>
                                <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
                                    {selectedPost.category}
                                </span>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight shadow-black drop-shadow-md">
                                    {selectedPost.title}
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Article Body */}
                    <div className="p-8 md:p-12 max-w-3xl mx-auto">
                        
                        {/* Subtitle */}
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-8 italic border-l-4 border-primary-500 pl-4">
                            {selectedPost.subtitle}
                        </h2>

                        {/* Content Part 1 */}
                        <div 
                            className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mb-10"
                            dangerouslySetInnerHTML={{ __html: selectedPost.content?.split('</p>')[0] + '</p>' || '' }}
                        />

                        {/* Second Image */}
                        <div className="my-10 rounded-xl overflow-hidden shadow-lg">
                             <img 
                                src={`https://picsum.photos/seed/blog${selectedPost.id}_detail/800/450`} 
                                alt="Detail view" 
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2 italic">Visual representation of the concept.</p>
                        </div>

                        {/* Content Part 2 */}
                        <div 
                            className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300"
                            dangerouslySetInnerHTML={{ __html: selectedPost.content?.split('</p>').slice(1).join('</p>') || '' }}
                        />
                        
                    </div>

                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Blog;