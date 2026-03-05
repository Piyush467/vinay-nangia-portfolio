import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

export default function GalleryModal({ images, currentIndex, onClose }) {
  const [imageIndex, setImageIndex] = useState(currentIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Get previous and next two images for the strip
  const getStripImages = () => {
    const strip = [];
    for (let i = -2; i <= 2; i++) {
      const index = (imageIndex + i + images.length) % images.length;
      strip.push({ ...images[index], index });
    }
    return strip;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center"
      >
        {/* Close and Zoom buttons */}
        <div className="absolute top-4 right-4 flex gap-4">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            {isZoomed ? <ZoomOut className="text-white" /> : <ZoomIn className="text-white" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="text-white" />
          </button>
        </div>

        {/* Main Image */}
        <motion.div 
          className="relative w-full h-[70vh] flex items-center justify-center"
          drag={isZoomed}
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        >
          <button
            onClick={prevImage}
            className="absolute left-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="text-white" />
          </button>
          
          <motion.img
            src={images[imageIndex].img}
            alt={images[imageIndex].title}
            className={`max-h-full max-w-full object-contain transition-transform duration-300 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
          />

          <button
            onClick={nextImage}
            className="absolute right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="text-white" />
          </button>
        </motion.div>

        {/* Image Strip */}
        <div className="flex gap-2 md:gap-4 mt-4 md:mt-8 px-4 overflow-x-auto">
          {getStripImages().map((img, idx) => (
            <motion.div
              key={idx}
              onClick={() => setImageIndex(img.index)}
              className={`w-16 h-16 md:w-24 md:h-24 rounded-md overflow-hidden cursor-pointer ${
                img.index === imageIndex ? 'ring-2 ring-white' : ''
              }`}
            >
              <img
                src={img.img}
                alt={img.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 