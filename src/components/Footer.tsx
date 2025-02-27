import React from 'react';
export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} YEMEN Gallery. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400">
              Designed by <a 
                href="https://sanwaralkmali.github.io/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Salah alkmali
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};