import React from 'react';
import logo from '../assets/logo.png';
import backgroundImg from '../assets/DIsh1.jpeg'; // Reusing Dish1 for background if c6 is missing
import aboutImg from '../assets/DIsh12.jpeg';

const About = () => {
  return (
    <section id="about" className="relative bg-[var(--color-primary-green)] text-[var(--color-primary-yellow)] overflow-hidden font-sans">
      {/* Main Content */}
      <div className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center font-sans">

          {/* Image Section */}
          <div className="order-2 md:order-1">
            <img
              src={aboutImg}
              alt="Restaurant Ambiance"
              className="w-full rounded-lg md:rounded-xl shadow-2xl object-cover border-2 border-[var(--color-primary-yellow)]/40 
                         max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 text-[var(--color-primary-yellow)] leading-relaxed space-y-4 md:space-y-6 
                          text-sm sm:text-base md:text-lg font-sans px-2 sm:px-0">
            <p>
              Greenchillies Restaurant brings you the authentic taste of Andhra style multicuisine dining. With over 20 years of culinary expertise, we have been serving delicious memories since 2009.
            </p>
            <p>
              Located in the heart of JP Nagar, Bangalore, we specialize in offering a diverse menu that includes Chinese, South Indian, Mughlai, Andhra, and North Indian cuisines. Our dishes are crafted with passion and the finest ingredients to ensure a delightful experience.
            </p>
            <p>
              Whether you are looking for a quick bite, a casual dining experience, or ordering for delivery, we have got you covered. Our signature Chicken Guntur and Chicken Biryani are must-try items that keep our customers coming back for more.
            </p>
            <p className="font-medium text-[var(--color-primary-yellow)] text-base sm:text-lg md:text-xl">
              From candle light dinners to family gatherings, Greenchillies provides the perfect ambiance for any occasion.
            </p>

            {/* Bottom Banner */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t-2 border-[var(--color-primary-yellow)]/30">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center 
                           tracking-wide md:tracking-widest text-[var(--color-primary-yellow)] font-sans leading-tight">
                Celebrating 17 Years in Business
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div
        className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center font-sans"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Dark overlay for depth */}


        <div className="relative flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 
                          bg-[var(--color-primary-green)]/95 border-2 sm:border-3 md:border-4 border-[var(--color-primary-yellow)] 
                          rounded-lg md:rounded-xl shadow-2xl 
                          p-6 sm:p-8 md:p-10 lg:p-12 
                          text-center backdrop-blur-sm">

            {/* Logo */}
            <img
              src={logo}
              alt="Greenchillies Logo"
              className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48 mx-auto mb-6 sm:mb-8 drop-shadow-2xl"
            />

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
                           font-bold text-white tracking-wider md:tracking-widest uppercase 
                           drop-shadow-lg leading-tight mb-4 sm:mb-6">
              GREENCHILLIES RESTAURANT
            </h1>

            {/* Tagline */}
            <p className="text-[var(--color-primary-yellow)] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 
                          font-semibold tracking-wider md:tracking-widest uppercase 
                          drop-shadow-md">
              Taste • Quality • Ambience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;