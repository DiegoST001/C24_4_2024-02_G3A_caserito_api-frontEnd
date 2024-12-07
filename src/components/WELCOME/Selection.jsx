import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * @typedef {Object} Item
 * @property {number} id
 * @property {string} imageUrl
 * @property {string} title
 */

const items = [
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131', title: 'Explorar naturaleza' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9', title: 'Aventuras urbanas' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1533050487297-09b450131914', title: 'Relax en la playa' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba', title: 'Montañas majestuosas' },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938', title: 'Descubrir culturas' },
];

const SelectedForYou = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Seleccionados para ti</h2>
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {items.map((item) => (
              <div key={item.id} className="w-1/3 flex-shrink-0 px-2">
                <div className="bg-gray-200 aspect-[998/240] rounded-lg overflow-hidden relative group">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold p-4">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default SelectedForYou;