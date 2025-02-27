import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Create directories for assets
try {
  // This is just for demonstration - in a real project, you would create these directories
  // in your file system and add actual images and videos
  console.log('In a real project, you would create:');
  console.log('- assets/pictures/ directory for your images');
  console.log('- assets/videos/ directory for your videos');
} catch (error) {
  console.error('Error creating directories:', error);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);