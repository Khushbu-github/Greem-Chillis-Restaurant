import React, { useState } from 'react';
import Header from './components/header';
import Home from './components/home';
import About from './components/About';
import Collection from './components/Collections';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Home />
      <About />
      <Collection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
