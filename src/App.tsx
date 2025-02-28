import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Gallery } from './components/Gallery';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Function to toggle music play/pause
  const toggleMusic = () => {
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio) {
      if (isMusicPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Music */}
      <audio id="background-music" loop>
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Toggle Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 p-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition-colors"
        aria-label={isMusicPlaying ? 'Pause background music' : 'Play background music'}
      >
        {isMusicPlaying ? '🔊' : '🔇'}
      </button>

      {loading ? (
        <LoadingScreen />
      ) : (
        <Layout>
          <Gallery />
        </Layout>
      )}
    </div>
  );
}

export default App;