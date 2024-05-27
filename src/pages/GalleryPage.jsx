import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async'; 
import Loading from '../components/Loading';
import { motion } from 'framer-motion'; 
import { fadeIn } from '../variants'; 
import { useTranslation } from 'react-i18next'; 

const FullGallery = lazy(() => import('../components/FullGallery')); // Lazy load the FullGallery component

const GalleryPage = () => {
  const { t } = useTranslation(); // Hook for translation

  return (
    <section className='bg-[#f9f9f9] section relative mt-[120px] lg:mt-[150px] pt-16 items-center'>
      {/* Setting up meta tags and title for SEO purposes */}
      <Helmet>
        <title>Gallery | Rbinks - Fine-Line and Pointillism Tattoos in Aarhus</title>
        <meta name="description" content="Explore the gallery of Rebeca, a tattoo apprentice specializing in fine-line and pointillism tattoos. Discover a variety of stunning tattoo designs and styles." />
        <meta name="keywords" content="tattoo gallery, fine-line tattoos, pointillism tattoos, Rebeca, Rbinks, tattoo apprentice, Aarhus, Denmark, tattoo designs" />
        <meta name="author" content="Rbinks - Rebeca" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='container mx-auto'>
        {/* Animated heading using framer-motion */}
        <motion.h2
          variants={fadeIn('right')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.6 }}
          className='h2 max-w-full lg:mb-10 xl:flex xl:justify-center'>
          {t('heading22')}
        </motion.h2>
      </div>
      {/* Using Suspense to show a loading component while the lazy-loaded component is being fetched */}
      <Suspense fallback={<Loading />}>
        <FullGallery />
      </Suspense>
    </section>
  );
};

export default GalleryPage;
