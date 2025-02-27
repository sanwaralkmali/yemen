import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Gallery } from './components/Gallery';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
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