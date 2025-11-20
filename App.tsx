import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans selection:bg-primary-100 selection:text-primary-700">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <ChatWidget />
    </div>
  );
}

export default App;