import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-950 transition-colors duration-300 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 text-center shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-lg mx-auto">
                I'm currently available for freelance work. Have a project in mind? Let's talk.
            </p>
            
            <div className="flex flex-col items-center gap-6">
                <a 
                  href="mailto:raisulrumon.co@gmail.com?subject=Project Inquiry"
                  className="px-10 py-4 bg-primary-600 text-white font-bold rounded-lg shadow-lg shadow-primary-600/30 hover:bg-primary-700 hover:shadow-primary-600/40 transition-all transform hover:-translate-y-0.5 inline-block"
                >
                    Send a Message
                </a>
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    Or email me directly at: <a href="mailto:raisulrumon.co@gmail.com" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">raisulrumon.co@gmail.com</a>
                </div>
            </div>
          </div>

        </div>
      </section>

      <footer className="bg-gray-100 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
             <p className="text-gray-500 dark:text-gray-500 text-sm">© 2025 Raisul Rumon. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Floating Whatsapp Button */}
      <a 
        href="https://wa.me/8801340741368" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-green-600 transition-transform hover:scale-110 z-50"
        aria-label="Chat on Whatsapp"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </>
  );
};

export default Contact;