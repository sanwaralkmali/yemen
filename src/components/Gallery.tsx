import { PhotoGallery } from './PhotoGallery';
import { VideoGallery } from './VideoGallery';
import { Hero } from './Hero';

export const Gallery: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      <Hero />
      <section id="photos" className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
             Photography
          </span>
        </h2>
        <PhotoGallery />
      </section>
      
      <section id="videos" className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
             Videos
          </span>
        </h2>
        <VideoGallery />
      </section>
      
    </div>
  );
};