// src/components/Footer.jsx
import React from "react";
import { Facebook, Instagram, Twitter, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const whatsappLink = "https://wa.me/918296889485?text=Hello%20Greenchillies%20Restaurant%2C%20I%20would%20like%20to%20order%20food%20or%20make%20a%20reservation.";
  const address = "17, 1st Cross Manjunatha Layout, Sri Rama Layout, Puttenahalli, opposite to rbi watertank JP Nagar 7th Phase, Arekere, Bengaluru, Karnataka 560078";

  return (
    <footer className="bg-[var(--color-primary-green)] text-[var(--color-primary-yellow)] py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo & About – Left */}
          <div className="md:col-span-5 text-center md:text-left">
            <img
              src={logo}
              alt="Greenchillies Logo"
              className="w-40 mx-auto md:mx-0 mb-6 drop-shadow-2xl"
            />
            <p className="text-gray-300 text-lg leading-relaxed max-w-xs mx-auto md:mx-0">
              Authentic Andhra Style Multicuisine Restaurant.
              Chinese, South Indian, Mughlai, North Indian.
              <br />
              <strong>Est. 2009</strong>
            </p>
          </div>

          {/* Empty Space in Middle (pushes Contact to far right) */}
          <div className="hidden md:block md:col-span-3"></div>

          {/* Contact Info – Extreme Right */}
          <div className="md:col-span-4 text-center md:text-right">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-wider">
              CONTACT US
            </h3>
            <ul className="space-y-5 text-lg">
              <li className="flex items-start justify-center md:justify-end gap-4">
                <MapPin size={24} className="text-[var(--color-primary-yellow)] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-right leading-relaxed">
                  {address}
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-end gap-4">
                <Phone size={24} className="text-[var(--color-primary-yellow)]" />
                <a href="tel:+918296889485" className="text-gray-300 hover:text-[var(--color-primary-yellow)] transition">
                  +91 82968 89485
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-end gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--color-primary-yellow)] transition flex items-center gap-3"
                >
                  <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">WA</span>
                  </div>
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-primary-yellow)]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Greenchillies Restaurant. All Rights Reserved.
              Designed with love in Bangalore.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;