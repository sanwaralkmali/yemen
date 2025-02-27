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
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2020/08/02_cut.jpg',
    alt: 'Socotra Island',
    category: 'Nature'
  }
  ,
  {
    id: 11,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2020/08/03_cut.jpg',
    alt: 'Socotra Island',
    category: 'Nature'
  }
  ,
  {
    id: 12,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2023/05/next-departures-01_cut.jpg',
    alt: 'Socotra',
    category: 'People'
  },
  {
    id: 13,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2023/05/next-departures02_cut.jpg',
    alt: 'People of Yemen',
    category: 'Nature'
  },
  {
    id: 14,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2020/08/01-4.jpg',
    alt: 'Red sea',
    category: 'Nature'
  },
  {
    id: 15,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2020/08/03-2.jpg',
    alt: 'Yemen Nature',
    category: 'Nature'
  },
  {
    id: 16,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2020/08/04-3-768x512.jpg',
    alt: 'Socotra Island',
    category: 'Nature'
  }
  ,
  {
    id: 17,
    src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/cb/b2/a1/socotra-island.jpg?w=900&h=-1&s=1',
    alt: 'Socotra',
    category: 'Nature'
  }
  ,
  {
    id: 18,
    src: 'https://media.gettyimages.com/id/582847878/photo/the-republic-of-yemen.jpg?s=1024x1024&w=gi&k=20&c=OkfZ0TdC-RsEEytpqJuXdP0a8Z0zPrIozq74Uao1tPw=',
    alt: 'Taiz City', 
    category: 'Taiz'
  }
  ,
  {
    id: 19,
    src: 'https://media.gettyimages.com/id/1749068772/photo/white-trimmed-gingerbread-styled-housing-complexes-are-scattered-among-terraced-farm-plots-on.jpg?s=1024x1024&w=gi&k=20&c=IKr0JMRjMOOarDSKoh6UcDmtm02r6HeLLqrx8tyQGyk=',
    alt: 'Taiz City',
    category: 'Nature'
  }
  ,
  {
    id: 20,
    src: 'https://i.pinimg.com/736x/95/bd/b3/95bdb35514b89bbda87ed4abac338a8e.jpg',
    alt: 'Yemeni girls',
    category: 'People'
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
    src: 'https://i.pinimg.com/736x/58/dd/ea/58ddeafaf7bcdeb192e143cacbf62a14.jpg',
    alt: 'Taiz City',
    category: 'Taiz'
  }
  ,
  {
    id: 23,
    src: 'https://i.pinimg.com/736x/97/05/89/9705894eaeb5e7a2b0069c1cfacbf22a.jpg',
    alt: 'Taiz City',
    category: 'Taiz'
  }
  ,
  {
    id: 24,
    src: 'https://i.pinimg.com/736x/a6/f4/4f/a6f44f58c271de2a32639d80c2d4da83.jpg',
    alt: 'Taiz City',
    category: 'Nature'
  }
  ,
  {
    id: 25,
    src: 'https://i.pinimg.com/736x/69/46/7a/69467aec89876328709d666c2b614e90.jpg',
    alt: 'Yemeni nutural',
    category: 'Nature'
  }
  ,
  {
    id: 26,
    src: 'https://i.pinimg.com/736x/0b/4b/73/0b4b73907f9cf9885bc245326c0df868.jpg',
    alt: 'Ibb City',
    category: 'Ibb'
  }
  ,
  {
    id: 27,
    src: 'https://i.pinimg.com/736x/2e/c5/58/2ec5583fba7d1970898da1f96a537c98.jpg',
    alt: 'Sanaa Old City',
    category: 'Sana\'a'
  }
  ,
  {
    id: 28,
    src: 'https://i.pinimg.com/736x/6d/b4/7e/6db47edb80a05c6c1b1a043d4141fa1f.jpg',
    alt: 'Old buildings',
    category: 'Sana\'a'
  },
  {
    id: 29,
    src: 'https://i.pinimg.com/736x/34/c5/58/34c558a535cd9fd963c09336fcecf5c6.jpg',
    alt: 'building',
    category: 'Nature'
  },
  {
    id: 30,
    src: 'https://i.pinimg.com/736x/c7/c0/2f/c7c02f865362d43b699031796feffe6d.jpg',
    alt: 'Sana\'a',
    category: 'culutral heritage'
  },
  {
    id: 31,
    src: "https://i.pinimg.com/736x/0e/21/e6/0e21e6334bf54317b1c27f65ba7536f8.jpg",
    alt: "Cultural buildings",
    category: "Nature"
  },
  {
    id: 32,
    src: "https://i.pinimg.com/736x/ba/10/8f/ba108f8873d5aa97cb382f66021e2cc1.jpg",
    alt: "Traditional Yemeni architecture blending with nature",
    category: "Nature"
  },
  {
    id: 33,
    src: "https://i.pinimg.com/736x/b7/84/c2/b784c2ecf9869301604bd6e7cd365a1e.jpg",
    alt: "Aden city",
    category: "Aden"
  },
  {
    id: 34,
    src: "https://i.pinimg.com/736x/ff/b5/b8/ffb5b8bfec84ce231892d35f33ddb09b.jpg",
    alt: "A scenic view of Aden city",
    category: "Aden"
  },
  {
    id: 35,
    src: "https://i.pinimg.com/736x/37/47/37/37473738358a547af8b3796c9db359da.jpg",
    alt: "Old buildings in Shibam",
    category: "Shibam"
  },
  {
    id: 36,
    src: "https://i.pinimg.com/736x/c9/f5/8a/c9f58ab6fb6aeff57a67d95b73371f3b.jpg",
    alt: "Shehara Bridge, an iconic historical landmark in Yemen",
    category: "Shehara"
  },
  {
    "id": 37,
    "src": "https://scontent-ist1-2.xx.fbcdn.net/v/t39.30808-6/480457122_1824449361703391_2354971476778171910_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wvY9YoWadYgQ7kNvgGdXOTb&_nc_oc=AdieCaocayF9A44vQu9StCEVGCDFWsO-IwgUSpikUQ_RnspRHCH_XhdJpHYY5Q1XYMEDZE4LNVtWgbtDidGz8t6U&_nc_zt=23&_nc_ht=scontent-ist1-2.xx&_nc_gid=AGfjmCn2wpvSP-LJwWTMqLt&oh=00_AYBVGcU1zkNV_va0umZIx5JhIVqbiPKzveA-4Zl18PBI_Q&oe=67C67C8A",
    "alt": "Yemeni coffee",
    "category": "Food"
  },
  {
    "id": 38,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/424972307_1569476337200696_1786384984043300778_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ssjq49oIBA0Q7kNvgEQVOx3&_nc_oc=AdiSjcExSPhuc1Q2jqVoYJO_olTVaKxanozqkqi2b6yx68CoxoaXynB7mDCRb-uS9mXVx4UUJXObp2fhm0imQo69&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AHsg9WayrWexdvEwSRIO0SC&oh=00_AYBeicj8pNFHlWYhLpERkVQGvMs4OQ9Z8l6qHxxPIRDJ_A&oe=67C68FC3",
    "alt": "Nature",
    "category": "Nature"
  },
  {
    "id": 39,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/416401579_1550505702431093_7536852384629327411_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q3fPLkxCUegQ7kNvgH3mRB9&_nc_oc=AdiO3HpX3dutyU8vyOFd9qlKPtcor4eLt4Uq0-WZGf_y8bUbN4wUQiQ85YTPk8UJq1jHFNcrFOvkfC1cPEEB-M69&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=ACxJPzGnbMvZw7xPpJCW2PE&oh=00_AYAPkY42kbsrfuxe337iLot5pI8hMVML_o7mIB5z45WIFg&oe=67C67D97",
    "alt": "Yemeni kids",
    "category": "People"
  },
  {
    "id": 40,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t1.6435-9/83093218_2250340621734284_566640103422689280_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vL5ofHSdn08Q7kNvgETT31u&_nc_oc=AdhvMX2EX3rMMQIEjuf5ELVFbF-zqJPEE9CySzTFVwfNlKGJcbJ8eNoL2V4NWkrs5h5U-Umb6AmcNNt94ARMUeRC&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AYrGt2yMj2d6jIJ5CUuHrkl&oh=00_AYCX1ZACuRSTDNoKdMnSrXlz-bjMd9jKwta5RZGFnXDxGA&oe=67E82E14",
    "alt": "Sheba",
    "category": "History"
  },
  {
    "id": 41,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/475662055_922533796662378_905741587330300682_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JzOPdl9_kcoQ7kNvgGdv-GD&_nc_oc=Adi3keHhNJBFreBsJDbir8pjR64JZZk7ww0BFhwYoCKAAuhboCbFdILMS66Hc0yAMkcGvPq8LLLzUGZNlPAEXebf&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=ASPK9C1hirpFz11yZl6dBcZ&oh=00_AYApvRVmKu27S14RbQH0VrTLHUM70VZcC_zhv4X_ETWdHg&oe=67C69A27",
    "alt": "Yemeni kid",
    "category": "People"
  },
  {
    "id": 42,
    "src": "https://scontent-ist1-2.xx.fbcdn.net/v/t39.30808-6/475564217_922534039995687_3890162233571671186_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DrHKfwmIWGAQ7kNvgHa3m2t&_nc_oc=AdihM0l6VM11m7I0VQpwRc-XFppPNAjQWDiNSFN7WgNpIS50bSNdJFP-GvDWc7zeaCIUJVzwGGhw2QhWjZ0WElKG&_nc_zt=23&_nc_ht=scontent-ist1-2.xx&_nc_gid=AW9sEruwWfCD5o7psfSjCKB&oh=00_AYARo8JvNqJzYTkHZ3LKMhpftBDH5sK52D1QXkp7kSY96A&oe=67C6A9C4",
    "alt": "Yemeni dance",
    "category": "Culture"
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