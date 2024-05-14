import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import aboutPicture from '../img/about/about2.jpg';
import Experience from '../components/Experience';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <section className='bg-[#f9f9f9] section relative mt-[120px] lg:mt-[150px] pt-16 items-center'>
      <Helmet>
        <title>About Rebeca | Rbinks - Tattoo Apprentice in Aarhus, Denmark</title>
        <meta name="description" content="Learn more about Rebeca, a tattoo apprentice based in Aarhus, Denmark. Discover her journey, experience, and educational background in the world of tattooing and fine art." />
        <meta name="keywords" content="Rebeca, tattoo apprentice, Aarhus, Denmark, Rbinks, tattoo artist, tattoo journey, tattoo experience, fine art" />
        <meta name="author" content="Rbinks - Rebeca" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('right')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-full lg:mb-20'>
          {t('heading4')}
        </motion.h2>
      </div>
      <div className='container mx-auto grid w-full grid-cols-1 md:grid-cols-7 gap-16 justify-between'>
        <div className='col-span-1 md:col-span-4 flex flex-col items-start justify-start'>
          <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>{t('subtitle2')}</h2>
          <p className='font-medium text-grey'>{t('aboutpage.about1')}</p>
          <p className='my-4 font-medium text-grey'>{t('aboutpage.about2')}</p>
          <p className='my-4 font-medium text-grey'>{t('aboutpage.about3')}</p>
          <p className='font-medium text-grey'>{t('aboutpage.about4')}</p>
        </div>
        <div className='col-span-1 md:col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
          <img src={aboutPicture} alt='' className='w-full h-auto rounded-2xl' />
        </div>
      </div>
      <Experience />
    </section>
  );
};

export default AboutPage;
