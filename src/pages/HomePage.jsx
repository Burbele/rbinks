import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import About from '../components/About';
import GallerySection from '../components/GallerySection';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Rbinks - Tattoo Apprentice in Aarhus, Denmark</title>
        <meta name="description" content="Welcome to Rbinks' portfolio. Rebeca is a tattoo apprentice based in Aarhus, Denmark. Explore her unique and elegant tattoo designs and book a session at an affordable rate." />
        <meta name="keywords" content="tattoo apprentice, affordable tattoos, Aarhus, Denmark, Rbinks, Rebeca, Rebeca Bianca Serban, tattoo designs, book appointment, tattoo portfolio" />
        <meta name="author" content="Rbinks - Rebeca" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Hero />
      <About />
      <GallerySection />
      <Contact />
    </div>
  );
};

export default HomePage;
