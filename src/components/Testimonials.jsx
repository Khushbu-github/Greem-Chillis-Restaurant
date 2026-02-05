// src/components/Testimonials.jsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Customer Review",
    location: "Google Reviews",
    text: "Many customers mentioned that the Guntur Chicken Roast and Royal Sheema mutton were excellent. The flavors are authentic Andhra style!",
  },
  {
    name: "Regular Patron",
    location: "Bangalore",
    text: "Some customers praised the prompt service and friendly staff. It's always a pleasure dining here with family.",
  },
  {
    name: "Foodie",
    location: "Zomato",
    text: "A few reviews appreciated the taste of the Andhra meals and Hyderabadi dum biryani. Best place for spicy food lovers in JP Nagar.",
  },
  {
    name: "Local Guide",
    location: "JP Nagar",
    text: "Great multicuisine options. From North Indian to Chinese, everything is delicious. Especially love the ambiance for candle light dinners.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = React.useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="relative py-24 bg-[var(--color-primary-green)] text-white overflow-hidden font-sans">
      {/* Background subtle overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-widest">
          OUR HAPPY CLIENTS
        </h2>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-[var(--color-primary-yellow)]/20 rounded-2xl p-10 md:p-14 shadow-2xl">
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 italic mb-8">
                "{testimonials[current].text}"
              </p>

              {/* Client Name & Location */}
              <div className="mt-10">

                <h3 className="text-2xl font-bold text-[var(--color-primary-yellow)] tracking-wider">
                  {testimonials[current].name}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-[var(--color-primary-yellow)]/50 text-[var(--color-primary-yellow)] hover:bg-[var(--color-primary-yellow)]/10 transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-[var(--color-primary-yellow)]/50 text-[var(--color-primary-yellow)] hover:bg-[var(--color-primary-yellow)]/10 transition-all backdrop-blur-sm"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Dots Indicator */}

      </div>
    </section>
  );
};

export default Testimonials;