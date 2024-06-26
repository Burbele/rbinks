import React, { useState, useRef } from 'react';
import { galleryData } from '../data';
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

// Prepare slides for Lightbox from gallery data
const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const GallerySection = () => {
  const [index, setIndex] = useState(-1); // State for currently selected image in Lightbox
  const { t } = useTranslation(); // Translation hook for multi-language support
  const { images } = galleryData;

  // Create a ref for the Zoom plugin
  const zoomRef = useRef(null);

  return (
    <section className=' w-full bg-[#f9f9f9] section relative mt-[40px] lg:mt-0'>
      <div className='container mx-auto'>
        {/* Section heading */}
        <motion.h2
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.6 }}
          className='h2 max-w-[370px] lg:mb-20'>
          {t('heading2')}
        </motion.h2>
      </div>
      {/* Photo gallery */}
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.2 }}
        className='mb-8 lg:mb-20 max-w-[1920px] mx-auto'>
        <PhotoAlbum
          onClick={(event, photo, index) => setIndex(index)} // Open Lightbox on image click
          layout='rows'
          photos={images}
        />
        <Lightbox
          slides={slides}
          styles={{ container: { background: 'rgba(0,0,0,.9)' } }}
          open={index >= 0} // Open Lightbox when index is non-negative
          index={index}
          close={() => setIndex(-1)} // Close Lightbox
          plugins={[Zoom]} // Add the Zoom plugin
          zoom={{
            ref: zoomRef,
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickMaxStops: 3,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 100,
            pinchZoomDistanceFactor: 100,
            scrollToZoom: true,
          }}
        />
      </motion.div>
      {/* Button to view full gallery */}
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.2 }}
        className='flex justify-center'>
        <Link
          to='/gallery'
          className='btn btn-lg btn-dark'
          onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
        >
          {t('btnText3')} <div className='text-xl'><IoMdArrowForward /></div>
        </Link>
      </motion.div>
    </section>
  );
};

export default GallerySection;
