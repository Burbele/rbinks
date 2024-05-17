import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Loading from '../components/Loading';

// Lazy load the components
const Hero = lazy(() => import('../components/Hero'));
const About = lazy(() => import('../components/About'));
const GallerySection = lazy(() => import('../components/GallerySection'));
const Contact = lazy(() => import('../components/Contact'));

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
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <GallerySection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default HomePage;
