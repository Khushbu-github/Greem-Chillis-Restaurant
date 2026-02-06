// src/components/Contact.jsx
import React from "react";
import logo from "../assets/logo.png";
import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const phoneNumber = "8296889485";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hello%20Greenchillies%20Restaurant%2C%20I%20would%20like%20to%20order%20food%20or%20make%20a%20reservation.`;

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--color-primary-green)] text-[var(--color-primary-yellow)] overflow-hidden font-sans">
      {/* Subtle golden gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-green)]/20 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-white mb-3 sm:mb-4">
            VISIT US
          </h2>
          <p className="text-[var(--color-primary-yellow)] text-lg sm:text-xl md:text-2xl font-medium px-4">
            Experience Authenticity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left: Logo + Address */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <img
                src={logo}
                alt="Greenchillies Restaurant Logo"
                className="w-40 sm:w-48 md:w-56 lg:w-64 drop-shadow-2xl"
              />
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl px-4 sm:px-0">
              <div className="flex items-start justify-center lg:justify-start gap-3 sm:gap-4">
                <MapPin size={24} className="text-[var(--color-primary-yellow)] mt-1 flex-shrink-0 sm:w-7 sm:h-7" />
                <p className="text-gray-200 leading-relaxed max-w-md text-left">
                  <span className="font-bold text-white">Address:</span><br />
                  17, 1st Cross Manjunatha Layout, Sri Rama Layout,<br />
                  Puttenahalli, opposite to RBI watertank,<br />
                  <span className="text-[var(--color-primary-yellow)]">Near Indian Museum,</span><br />
                  JP Nagar 7th Phase, Arekere,<br />
                  Bengaluru, Karnataka 560078
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Clock size={24} className="text-[var(--color-primary-yellow)] flex-shrink-0 sm:w-7 sm:h-7" />
                <p className="text-gray-200 text-left">
                  <span className="font-bold text-white">Open:</span> Mon–Sun until 10:30 PM
                </p>
              </div>

              <div className="flex items-start justify-center lg:justify-start gap-3 sm:gap-4">
                <Phone size={24} className="text-[var(--color-primary-yellow)] mt-1 flex-shrink-0 sm:w-7 sm:h-7" />
                <div className="text-gray-200 text-left flex flex-col">
                  <span className="font-bold text-white">Phones:</span>
                  <a href="tel:+918296889485" className="hover:text-[var(--color-primary-yellow)]">+91 82968 89485</a>
                  <a href="tel:08040919901" className="hover:text-[var(--color-primary-yellow)]">080 4091 9901</a>
                  <a href="tel:+919449647956" className="hover:text-[var(--color-primary-yellow)]">+91 94496 47956</a>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="pt-4 sm:pt-6 px-4 sm:px-0">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-full shadow-2xl transition-all transform hover:scale-105 text-sm sm:text-base md:text-lg"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-base sm:text-xl font-bold">WA</span>
                </div>
                <span className="whitespace-nowrap sm:whitespace-normal">
                  Chat on WhatsApp: <span className="hidden sm:inline">+91 </span>{phoneNumber}
                </span>
              </a>
            </div>
          </div>

          {/* Right: Google Maps Embed */}
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-96 rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[var(--color-primary-yellow)]/30">
            <iframe
              title="Greenchillies Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.060183612348!2d77.5896!3d12.9038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzEzLjciTiA3N8KwMzUnMjIuNiJF!5e0!3m2!1sen!2sin!4v1234567890" // Placeholder coordinates, user didn't provide exact lat/long but address. Using generic or approximate if needed, but keeping iframe structure.
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 px-4">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--color-primary-yellow)] tracking-wide sm:tracking-widest leading-tight">
            20+ Years of Culinary Excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;