import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import GallerySection from '../components/GallerySection';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <GallerySection />
      <Contact />
    </div>
  );
};

export default HomePage;
