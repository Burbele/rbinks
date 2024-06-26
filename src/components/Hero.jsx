import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { IoMdArrowForward } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useMediaQuery from '../useMediaQuery';

// Container animation settings
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 1024px)'); // Check if the screen is mobile-sized

  return (
    <section className='max-w-[1920px] mx-auto bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={'show'}
        className={`container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end ${isMobile ? 'no-motion' : ''}`}
      >
        <div className='text-white text-center lg:text-left lg:max-w-[840px]'>
          <motion.h1 variants={fadeIn('down')} className={`h1 ${isMobile ? 'no-motion' : ''}`}>{t('title')}</motion.h1>
          <motion.p variants={fadeIn('down')} className={`mb-8 lg:mb-16 max-w-lg leading-relaxed ${isMobile ? 'no-motion' : ''}`}>{t('subtitle')}</motion.p>
          <motion.div variants={fadeIn('down')} className={isMobile ? 'no-motion' : ''}>
            {/* Link to Appointments page */}
            <Link
              to='/appointments'
              className='btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0 inline-flex'
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            >
              {t('btnText')} <div className='text-xl'><IoMdArrowForward /></div>
            </Link>
          </motion.div>
        </div>
        {/* Decorative text effect */}
        <div className='hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText'></div>
      </motion.div>
    </section>
  );
};

export default Hero;
