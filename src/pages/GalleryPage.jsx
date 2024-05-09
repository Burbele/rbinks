import React from 'react';
import FullGallery from '../components/FullGallery';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';

const GalleryPage = () => {

  const { t } = useTranslation();

  return (
    <section className='bg-[#f9f9f9] section relative mt-[120px] lg:mt-[150px] pt-16 items-center'>
        <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('right')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-full lg:mb-20'>
           {t('heading22')}
        </motion.h2>
      </div>
    <FullGallery />
    </section>
  );
};

export default GalleryPage;