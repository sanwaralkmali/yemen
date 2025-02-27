import React, { useState } from 'react';
import { X } from 'lucide-react';

// Sample photo data - in a real app, this would come from your assets folder
const photos = [
  {
    id: 1,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Yemeni Flag',
    category: 'Yemeni flag'
  },
  {
    id: 2,
    src: 'https://i.pinimg.com/736x/fc/8c/1c/fc8c1c4bc4108a15e7fa0ea50d78ba7b.jpg',
    alt: 'Sanaa Old City',
    category: 'Sana\'a'
  },
  {
    id: 3,
    src: 'https://media.istockphoto.com/id/149081119/tr/foto%C4%9Fraf/traditional-yemen-houses-sanaa.jpg?s=1024x1024&w=is&k=20&c=4v_ousMWg1m330Zd4Q8FFj3i9wHbOTpaQJjyq8BJYA4=',
    alt: 'Old buildings',
    category: 'Sana\'a'
  },
  {
    id: 4,
    src: 'https://media.istockphoto.com/id/152960953/tr/foto%C4%9Fraf/panorama-of-sanaa-at-night-yemen.jpg?s=1024x1024&w=is&k=20&c=uU_Xtr_G1k-K3OpXmp50u2823uVfl5UIJ5jSpTRvp6k=',
    alt: 'Sanaa Old City',
    category: 'Sana\'a'
  },
  {
    id: 5,
    src: 'https://i.pinimg.com/736x/3e/b8/9c/3eb89ca92f50cc4c936a5c834893e972.jpg',
    alt: 'Jambiya',
    category: 'Culutral heritage'
  },
  {
    id: 6,
    src: 'https://i.pinimg.com/736x/98/28/cc/9828cc90aaf7044f8b296bc2a30e4fdc.jpg',
    alt: 'Yemeni Weman',
    category: 'People'
  },
  {
    id: 7,
    src: 'https://i.pinimg.com/736x/7b/d4/38/7bd438206c71a75260456a45bb1efce3.jpg',
    alt: 'Jambiya',
    category: 'Culutral heritage'
  },
  {
    id: 8,
    src: 'https://i.pinimg.com/736x/00/0f/51/000f5103899829bcb0d5594a40fe87d9.jpg',
    alt: 'Yemeni Food',
    category: 'Food'
  },
  {
    id: 9,
    src: 'https://i.pinimg.com/736x/9f/66/a3/9f66a3d7c05fbc93162db5a6055b8f1f.jpg',
    alt: 'Yemen',
    category: 'Culutral heritage'
  }
  ,
  {
    id: 10,
    src: 'https://v1.pinimg.com/videos/mc/720p/85/5f/09/855f09efe368191753152be9075cdebc.mp4',
    alt: ' ',
    category: 'Yemen'
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
    src: 'https://img.freepik.com/free-vector/vector-illustration-ukrainian-folk-seamless-pattern-ornament-ethnic-ornament-border-element-traditional-ukrainian-belarusian-folk-art-knitted-embroidery-pattern-vyshyvanka_1217-285.jpg?t=st=1740677549~exp=1740681149~hmac=73fe734b67d1641885498650e563696ccf767835b7f9b3ed262e11d8d3839794&w=1380',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 27,
    src: 'https://i.pinimg.com/736x/2e/c5/58/2ec5583fba7d1970898da1f96a537c98.jpg',
    alt: ' ',
    category: ' Nature'
  }
  ,
  {
    id: 28,
    src: 'https://i.pinimg.com/736x/6d/b4/7e/6db47edb80a05c6c1b1a043d4141fa1f.jpg',
    alt: ' ',
    category: ' Nature'
  },
  {
    id: 29,
    src: 'https://i.pinimg.com/736x/34/c5/58/34c558a535cd9fd963c09336fcecf5c6.jpg',
    alt: ' ',
    category: ' Nature'
  },
  {
    id: 30,
    src: 'https://i.pinimg.com/736x/c7/c0/2f/c7c02f865362d43b699031796feffe6d.jpg',
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