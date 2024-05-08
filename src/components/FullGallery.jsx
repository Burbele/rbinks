import React, { useState } from 'react';
import { fullGalleryData } from '../data';
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';

const slides = fullGalleryData.images.map(({original, width,height})=> ({
  src: original,
  width,
  height,
}))

const FullGallery = () => {

  const [index, setIndex] = useState(-1);
  const { t } = useTranslation();
  const { images } = fullGalleryData;


  return (
    <section className='section relative mt-[40px] lg:mt-0'>
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-[470px] lg:mb-20'>
          {t('heading22')}
        </motion.h2>
      </div>
      <div className='mb-8 lg:mb-20'>
         <PhotoAlbum 
        onClick={(event, photo, index) => setIndex(index)}
        layout='rows' 
        photos={images} 
        />
       <Lightbox slides={slides} styles={{container:
        {background: 'rgba(0,0,0,.9)'} }} 
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        />
      </div>
    </section>
  );
};

export default FullGallery;

  