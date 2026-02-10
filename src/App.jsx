import React from 'react';
import Header from './components/header';
import Home from './components/home';
import About from './components/About';
import Collection from './components/Collections';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

import SpecialOffer from './components/SpecialOffer';

const App = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="offer">
        <SpecialOffer />
      </div>
      <div id="collection">
        <Collection />
      </div>
      <Testimonials />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default App;
