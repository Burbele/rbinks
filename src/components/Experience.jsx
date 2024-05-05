import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { fadeIn } from '../variants';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  
  return ( 
    <li ref={ref} className='my-8 first:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between'>

      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl'>{type}</h3>
        <span className='capitalize font-medium text-dark/75'>
          {time}  |  {place}
        </span>
        <p className='font-medium w-full text-sm md:text-base'>{info}</p> {/* Adjust text size based on screen size */}
      </motion.div>
    </li>
  );
}

const Experience = () => {
  const ref = useRef(null);
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
            viewport={{ once: false, amount: 0.6 }}
            className='h2 max-w-full lg:mb-20 mt-20 text-left mb-20'>
            Experience
          </motion.h3>
        </div>
        <div ref={ref} className='w-full max-w-[800px] mx-auto relative md:flex md:flex-row-reverse'> {/* Adjust layout for mobile screens */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
          />

          <ul className='w-full flex flex-col items-center justify-between md:items-start md:ml-4'> {/* Center align items on mobile and start align on larger screens */}
            <Details
              type="Certificate in Art, Craft & Design"
              time="2018"
              place="Bishop Gore Comprehensive School, Wales"
              info="Joined the arts programme I have been a part of in the previous years, but this time in a higher age group where I have developed the skills I had learned. Followed by an exhibition at the end of the year which was held in Mission Gallery, Swansea."
            />
             <Details
              type="Foundation In Art & Design"
              time="2019-2020"
              place="Gower College, Swansea"
              info="Studied and achieved a foundation diploma level 3 in Art and Design. During this foundation year I worked on projects overlooking different areas of art with the aim of choosing the best suited path. Having done these projects I decided to follow the path of Fine Art."
            />
             <Details
              type="Bachelor Of Arts In Fine Art"
              time="2020-2023"
              place="University of the West of England, Bristol"
              info="During my degree, I participated in group exhibitions at Spike Island Studios, Bristol, gaining insight into the life of a Fine Artist. Additionally, CRIW CELF Crew invited me to exhibit at Mission Gallery, Swansea, showcasing my latest university works."
            />
             <Details
              type="Tattoo Apprentice"
              time="2023-Present"
              place="Epic Ink Studio, Aarhus, Denmark"
              info="I relocated to Denmark in 2023 to begin a journey as a tattoo apprentice. Specializing in minimalist designs, my work often showcases intricate one-line drawings and pointillism techniques."
            />
            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

