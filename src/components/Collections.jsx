// src/components/Collections.jsx
import React from 'react';
import Dish1 from '../assets/DIsh1.jpeg';
import Dish2 from '../assets/Dish2.jpeg';
import Dish3 from '../assets/Dish3.jpeg';
import Dish4 from '../assets/Dish4.jpeg';
import Dish5 from '../assets/Dish5.jpeg';
import Dish6 from '../assets/Dish6.jpeg';
import Dish7 from '../assets/Dish7.jpeg';
import Dish8 from '../assets/Dish8.jpeg';
import Dish9 from '../assets/Dish9.jpeg';
import Dish10 from '../assets/Dish10.jpeg';
import Dish11 from '../assets/Dish11.jpeg';
import Dish12 from '../assets/DIsh12.jpeg';
import Dish13 from '../assets/DIsh13.jpeg';
import Dish14 from '../assets/DIsh14.jpeg';
import Dish15 from '../assets/DIsh15.jpeg';
import Dish16 from '../assets/DIsh16.jpeg';
import Dish18 from '../assets/DIsh18.jpeg';
import Dish19 from '../assets/DIsh19.jpeg';
import Dish20 from '../assets/DIsh20.jpeg';

const collections = [
  { id: 1, title: "Specialty Dish 1", img: Dish1 },
  { id: 2, title: "Specialty Dish 2", img: Dish2 },
  { id: 3, title: "Specialty Dish 3", img: Dish3 },
  { id: 4, title: "Specialty Dish 4", img: Dish4 },
  { id: 5, title: "Specialty Dish 5", img: Dish5 },
  { id: 6, title: "Chinese Special", img: Dish6 },
  { id: 7, title: "South Indian Delight", img: Dish7 },
  { id: 8, title: "Multicuisine Platter", img: Dish8 },
  { id: 9, title: "Mughlai Special", img: Dish9 },
  { id: 10, title: "Andhra Spice", img: Dish10 },
  { id: 11, title: "North Indian Feast", img: Dish11 },
  { id: 12, title: "Chef's Choice 1", img: Dish12 },
  { id: 13, title: "Chef's Choice 2", img: Dish13 },
  { id: 14, title: "Chef's Choice 3", img: Dish14 },
  { id: 15, title: "Chef's Choice 4", img: Dish15 },
  { id: 16, title: "Chef's Choice 5", img: Dish16 },
  { id: 18, title: "Chef's Choice 6", img: Dish18 },
  { id: 19, title: "Chef's Choice 7", img: Dish19 },
  { id: 20, title: "Chef's Choice 8", img: Dish20 },
];

const Collections = () => {
  return (
    <section className="py-20 px-6 bg-[var(--color-primary-green)] text-[var(--color-primary-yellow)] font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-widest font-sans">
          OUR DISHES
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
          {collections.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-2xl border border-[var(--color-primary-yellow)]/30 
                         transition-all duration-500 hover:scale-[1.02] hover:shadow-[var(--color-primary-yellow)]/30 break-inside-avoid"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 text-center w-full">
                  <h3 className="text-lg font-bold tracking-wider text-[var(--color-primary-yellow)] font-sans">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[var(--color-primary-yellow)] text-lg md:text-xl font-medium italic font-sans">
            Experience the authentic taste of Andhra & Multicuisine
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collections;