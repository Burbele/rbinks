import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import aboutPicture from '../img/about/about2.jpg';
import Experience from '../components/Experience';

const AboutPage = () => {
  return (
    <section className='bg-[#f9f9f9] section relative mt-[120px] lg:mt-[150px] pt-16 items-center'>
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('right')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-full lg:mb-20'>
          Get to know me!
        </motion.h2>
      </div>
      <div className='container mx-auto grid w-full grid-cols-1 md:grid-cols-7 gap-16 justify-between'>
        <div className='col-span-1 md:col-span-4 flex flex-col items-start justify-start'>
          <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About me</h2>
          <p className='font-medium'>My name is Rebeca, and I am a Bristol University Fine Art graduate with a deep passion for art. As an aspiring tattoo apprentice,
            I am on an exciting journey to combine my love for artistic expression with the unique medium of tattooing.</p>
          <p className='my-4 font-medium'>Drawing inspiration from my fine art background, I strive to create tattoos that are not only visually captivating but also
            deeply meaningful for each individual.</p>
          <p className='my-4 font-medium'>Through my work, I aim to bring together the worlds of fine art and body art, offering a personalized and artistic experience
            for my clients.</p>
          <p className='font-medium'>I draw inspiration from things I love when creating designs, such as: painting, photography, nature, and travel.</p>
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
