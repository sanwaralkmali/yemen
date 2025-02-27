import React, { useState } from 'react';
import { X } from 'lucide-react';

// Sample photo data - in a real app, this would come from your assets folder
const photos = [
  {
    id: 1,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Sanaa Old City',
    category: 'Historical Architecture '
  },
  {
    id: 2,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Nature photography',
    category: 'Historical Architecture '
  },
  {
    id: 3,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Old buildings',
    category: 'Historical Architecture '
  },
  {
    id: 4,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Shibam Hadramout',
    category: 'Historical Architecture '
  },
  {
    id: 5,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Sheharah Bridge',
    category: 'Historical Architecture'
  },
  {
    id: 6,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Sanaa Old City',
    category: 'Historical buildings'
  },
  {
    id: 7,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Nature photography',
    category: 'Nature'
  },
  {
    id: 8,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Landscape photography',
    category: 'Landscape'
  },
  {
    id: 9,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 10,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 11,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 12,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  },
  {
    id: 13,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  },
  {
    id: 14,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  },
  {
    id: 15,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  },
  {
    id: 16,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 17,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 18,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 19,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 20,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 21,
    src: 'https://scontent.fist20-1.fna.fbcdn.net/v/t39.30808-6/480783976_1100718481829232_4528252137738178694_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=zt8brsVMTVgQ7kNvgFG3QYi&_nc_oc=AdjNOibRnvOB1_jVV8KzoVvR83VS1YKCTspNfHZuh9XgJg2rqF1gyR5Hdcuj-FvJ9K8&_nc_zt=23&_nc_ht=scontent.fist20-1.fna&_nc_gid=Ajdd68hBMwUQI2LydvPfUzC&oh=00_AYBdrMuP0j1QV2N8yVbTvmgKR7bPckOlGjyBICp7BUnR_A&oe=67C5DB54',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 22,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 23,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 24,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 25,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 26,
    src: '/assets/pictures/26.jpg',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 27,
    src: '/assets/pictures/27.jpg',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 28,
    src: '/assets/pictures/28.jpg',
    alt: ' ',
    category: ' Nature'
  },
  {
    id: 29,
    src: '/assets/pictures/29.jpg',
    alt: ' ',
    category: ' Nature'
  },
  {
    id: 30,
    src: '/assets/pictures/30.jpg',
    alt: ' ',
    category: ' Nature'
  }
];

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(photos.map(photo => photo.category)))];
  
  const filteredPhotos = filter === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === filter);
  
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === category 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredPhotos.map(photo => (
          <div 
            key={photo.id}
            className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p className="text-white font-medium">{photo.alt}</p>
                <p className="text-gray-300 text-sm">{photo.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={32} />
          </button>
          
          <img 
            src={selectedPhoto.src} 
            alt={selectedPhoto.alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={e => e.stopPropagation()}
          />
          
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white text-xl">{selectedPhoto.alt}</p>
            <p className="text-gray-400">{selectedPhoto.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};