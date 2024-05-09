import React from 'react';
import Calendly from '../components/Calendly';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const AppointmentsPage = () => {
  return (
    <section className='bg-[#f9f9f9] relative mt-[120px] lg:mt-[150px] pt-16 items-center'>
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('right')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-full lg:mb-10 text-left lg:text-center'>
          Book Your Tattoo Session
        </motion.h2>
        <p className='text-left lg:text-center mx-auto mb-6 lg:w-[1000px]'>
          Below you can see my availability. A full day session costs 1000 kr, with a 500 kr deposit required. This is a preliminary booking; I will contact you for design references, tattoo ideas, and payment instructions after you book.
        </p>
      </div>
      <Calendly />
    </section>
  );
};

export default AppointmentsPage;
