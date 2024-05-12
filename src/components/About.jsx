import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const { line1, line2 } = t('description');

  return (
    <section className='lg:py-16 xl:pb-[160px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'>
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.7 }}
            className='flex flex-col lg:flex-row flex-1'
          >
            <div
              className='text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent'
            >
              01
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.6 }}
            className='flex-1 h-full'
          >
            <h2 className='h2'>{t('heading')}</h2>
            <div className='flex flex-col items-start'>
              <div className='max-w-[530px] text-grey'>
                <p className='mb-6'>{line1}</p>
                <p className='mb-9'>{line2}</p>
                <Link
                  to='/about'
                  className='btn btn-lg btn-link'
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                >
                  {t('btnText2')} <div className='text-xl'><IoMdArrowForward /></div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
