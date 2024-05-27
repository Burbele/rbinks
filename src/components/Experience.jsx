import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { fadeIn } from '../variants';
import LiIcon from './LiIcon';
import { useTranslation } from 'react-i18next';

// Component to display each experience detail
const Details = ({ type, time, place, info }) => {
  const ref = useRef(null); // Reference for each list item
  return (
    <li ref={ref} className='my-8 first:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <LiIcon reference={ref} /> {/* Custom icon component */}
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl'>{type}</h3>
        <span className='capitalize font-medium text-dark/75'>
          {time}  |  {place}
        </span>
        <p className='font-medium w-full text-sm md:text-base'>{info}</p>
      </motion.div>
    </li>
  );
}

const Experience = () => {
  const { t } = useTranslation();
  const ref = useRef(null); // Reference for the scroll container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <section className='lg:py-16 xl:pb-[160px]'>
      <div className='container mx-auto '>
        <div>
          <motion.h3
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.6 }}
            className='h2 max-w-full lg:mb-20 mt-20 text-left mb-20'>
            {t('subtitle3')}
          </motion.h3>
        </div>
        <div ref={ref} className='w-full max-w-[800px] mx-auto relative md:flex md:flex-row-reverse'>
          {/* Scroll progress indicator */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
          />
          <ul className='w-full flex flex-col items-center justify-between md:items-start md:ml-4'>
            <Details
              type={t('experience.experiencetitle1')}
              time="2018"
              place="Bishop Gore Comprehensive School, Wales"
              info={t('experience.experiencedescription1')}
            />
            <Details
              type={t('experience.experiencetitle2')}
              time="2019-2020"
              place="Gower College, Swansea"
              info={t('experience.experiencedescription2')}
            />
            <Details
              type={t('experience.experiencetitle3')}
              time="2020-2023"
              place="University of the West of England, Bristol"
              info={t('experience.experiencedescription3')}
            />
            <Details
              type={t('experience.experiencetitle4')}
              time="2023-Present"
              place="Epic Ink Studio, Aarhus, Denmark"
              info={t('experience.experiencedescription4')}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
