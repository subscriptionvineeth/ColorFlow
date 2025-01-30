import React, { useState, useEffect } from 'react';
import { useColorStore } from '../store/colorStore';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: './assets/banner1.jpg',
    title: 'Modern Design Tools',
    description: 'Create stunning color schemes with our intuitive interface',
  },
  {
    image: './assets/banner2.jpg',
    title: 'Real-time Preview',
    description: 'See your changes instantly as you customize colors',
  },
  {
    image: './assets/banner3.jpg',
    title: 'Export & Share',
    description: 'Export your color schemes in multiple formats',
  },
];

const Carousel: React.FC = () => {
  const { colors } = useColorStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative overflow-hidden h-[650px] group">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center text-white text-center p-4"
             
            >
              <div className="max-w-2xl mx-auto animate-fade-in">
                <h2
                  className="text-4xl font-bold mb-4"
                  style={{ color: colors.primary }}
                >
                  {slide.title}
                </h2>
                <p className="text-xl" style={{ color: colors.text }}>
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? 'w-6' : ''
            }`}
            style={{
              backgroundColor:
                currentSlide === index ? colors.primary : `${colors.primary}44`,
            }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export { Carousel }