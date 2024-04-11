import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import GallerySection from '../components/GallerySection';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <GallerySection />
    </div>
  );
};

export default HomePage;
