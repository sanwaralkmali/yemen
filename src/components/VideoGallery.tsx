import React, { useState, useRef } from 'react';
import { Play, Pause, X, Volume2, VolumeX } from 'lucide-react';

const videos = [
  {
    id: 1,
    src: '../../public/assets/videos/1.mp4',
    poster: '../../public/assets/posters/1.png',
    title: 'Nature Bloom',
    description: ' '
  },
  {
    id: 2,
    src: '../../public/assets/videos/2.mp4',
    poster: '../../public/assets/posters/2.png',
    title: 'Ocean Waves',
    description: ''
  },
  {
    id: 3,
    src: '../../public/assets/videos/3.mp4',
    poster: '../../public/assets/posters/3.png',
    title: 'Forest Stream',
    description: ''
  },
  {
    id: 4,
    src: '../../public/assets/videos/4.mp4',
    poster: '../../public/assets/posters/4.png',
    title: 'Sky View',
    description: ''
  }

  ,
  {
    id: 5,
    src: '../../public/assets/videos/5.mp4',
    poster: '../../public/assets/posters/5.png',
    title: 'Sky View',
    description: ''
  },

  {
    id: 6,
    src: '../../public/assets/videos/6.mp4',
    poster: '../../public/assets/posters/6.png',
    title: 'Sky View',
    description: ''
  },
  {
    id: 7,
    src: '../../public/assets/videos/7.mp4',
    poster: '../../public/assets/posters/7.png',
    title: 'Sky View',
    description: ''
  },
  {
    id: 8,
    src: '../../public/assets/videos/8.mp4',
    poster: '../../public/assets/posters/8.png',
    title: 'Sky View',
    description: ''
  },
];

export const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handleVideoClick = (video: typeof videos[0]) => {
    setSelectedVideo(video);
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };
  
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  const closeModal = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map(video => (
          <div 
            key={video.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleVideoClick(video)}
          >
            <div className="aspect-video bg-gray-900">
              <img 
                src={video.poster} 
                alt={video.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
              />
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/80 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-semibold">{video.title}</h3>
              <p className="text-gray-300 text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={closeModal}
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={selectedVideo.src}
              poster={selectedVideo.poster}
              className="w-full rounded-lg"
              controls={false}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
            />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
                <p className="text-gray-300 text-sm">{selectedVideo.description}</p>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                
                <button 
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};