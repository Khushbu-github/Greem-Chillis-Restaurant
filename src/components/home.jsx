import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Images from src/assets/
import c1 from "../assets/DIsh1.jpeg";
import c2 from "../assets/Dish12.jpeg";
import c3 from "../assets/Dish2.jpeg";
import c4 from "../assets/Dish14.jpeg";
import c5 from "../assets/Dish5.jpeg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: c1, text: "GREEN CHILLIES ANDHRA STYLE MULTICUISINE RESTAURANT", textPosition: "left" },
    { image: c2, text: "AUTHENTIC ANDHRA SPICES & FLAVORS", textPosition: "left" },
    { image: c3, text: "MUST TRY: GUNTUR CHICKEN & HYDERABADI DUM BIRYANI", textPosition: "left" },
    { image: c4, text: "NORTH INDIAN, MUGHLAI, CHINESE & MORE", textPosition: "left" },
    { image: c5, text: "CELEBRATING 17 YEARS OF CULINARY EXCELLENCE", textPosition: "right" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              // Placeholder for restaurant images
              e.currentTarget.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop";
            }}
          />

          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/90 via-[var(--color-primary-green)]/40 to-[var(--color-primary-dark)]/30" />

          {/* TEXT — Fully Responsive */}
          <div className="absolute inset-0 flex items-center z-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
            <div
              className={`w-full ${slide.textPosition === "right" ? "text-right" : "text-left"
                }`}
            >
              <h2
                className={`inline-block max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
                  font-bold text-[var(--color-text-main)] leading-tight 
                  tracking-wide sm:tracking-wider md:tracking-widest
                  drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]
                  ${slide.textPosition === "right" ? "ml-auto" : "mr-auto"}`}
                style={{
                  textShadow: "0 0 30px rgba(6, 78, 59, 0.8), 0 0 10px rgba(0,0,0,0.5)",
                }}
              >
                {slide.text}
              </h2>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 
                   bg-black/20 hover:bg-[var(--color-primary-green)]/80 backdrop-blur-md text-white border border-white/20
                   p-2 sm:p-3 md:p-4 rounded-full transition-all
                   active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-pop)]"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[var(--color-text-muted)] group-hover:text-white" />
      </button>

      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 
                   bg-black/20 hover:bg-[var(--color-primary-green)]/80 backdrop-blur-md text-white border border-white/20
                   p-2 sm:p-3 md:p-4 rounded-full transition-all
                   active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-pop)]"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[var(--color-text-muted)] group-hover:text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 
              ${index === currentSlide
                ? 'bg-[var(--color-accent-pop)] w-6 sm:w-8 shadow-[0_0_10px_var(--color-accent-pop)]'
                : 'bg-white/30 hover:bg-white/60'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;