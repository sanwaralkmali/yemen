import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Camera className="h-6 w-6 text-white" />
          <span className="text-xl font-bold">YEMEN</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
            <li><a href="#photos" className="hover:text-purple-400 transition-colors">Photos</a></li>
            <li><a href="#videos" className="hover:text-purple-400 transition-colors">Videos</a></li>
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><a href="#" className="hover:text-purple-400 transition-colors" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#photos" className="hover:text-purple-400 transition-colors" onClick={() => setIsOpen(false)}>Photos</a></li>
            <li><a href="#videos" className="hover:text-purple-400 transition-colors" onClick={() => setIsOpen(false)}>Videos</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};