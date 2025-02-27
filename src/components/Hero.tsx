import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('photos');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1533158326339-7f3cf2404354?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)',
          transform: 'scale(1.1)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 z-10" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Exhibition
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
          Explore YEMEN
        </p>
        
        <button 
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          onClick={scrollToGallery}
        >
          Explore Gallery
        </button>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 animate-bounce">
        <button 
          onClick={scrollToGallery}
          className="text-white/70 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
};