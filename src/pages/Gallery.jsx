import React, { useState } from 'react';
import Heading from '../components/shared/Heading';
import { galleryImages } from '../data/gallery';
import GalleryModal from '../components/shared/GalleryModal';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className='lg:w-[86.5%] py-12 w-full px-4 lg:px-0 h-full min-h-screen flex flex-col items-center justify-center mx-auto'>
      <section className='w-full h-full flex flex-col items-center justify-center'>
        <Heading title="Gallery" />
        <div className='w-full mt-6 h-full grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] items-center justify-center justify-items-center gap-8'>
          {galleryImages.map((item, index) => (
            <div 
              key={index} 
              className='w-full h-full cursor-pointer hover:opacity-90 transition-opacity'
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className='w-full h-full object-cover object-center rounded-xl' 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedImage !== null && (
        <GalleryModal
          images={galleryImages}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
} 