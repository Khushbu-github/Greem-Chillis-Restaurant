// src/components/Header.jsx
import React from 'react';
import logo from '../assets/logo.png'; // Logo from assets

const Header = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'collection', label: 'MENU' },
    { id: 'contact', label: 'CONTACT US' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[var(--color-primary-green)]/95 backdrop-blur-sm text-white z-50 border-b border-[var(--color-primary-yellow)]/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo + Shop Name */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Greenchillies Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-lg"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-serif italic text-white tracking-wider">
                Greenchillies
              </h1>
              <p className="text-xs md:text-sm tracking-widest text-[var(--color-primary-yellow)] font-medium">
                R E S T A U R A N T
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative text-sm font-medium tracking-widest transition-all duration-300
                  ${currentPage === item.id
                    ? 'text-[var(--color-primary-yellow)]'
                    : 'text-gray-300 hover:text-[var(--color-primary-yellow)]'
                  }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[var(--color-primary-yellow)]"></span>
                )}
              </button>
            ))}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;