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
              type="Software Engineer"
              time="2016-2020"
              place="BLABLABLA"
              info="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for analysis and visualization."
            />
             <Details
              type="Software Engineer"
              time="2016-2020"
              place="BLABLABLA"
              info="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for analysis and visualization."
            />
             <Details
              type="Software Engineer"
              time="2016-2020"
              place="BLABLABLA"
              info="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for analysis and visualization."
            />
             <Details
              type="Software Engineer"
              time="2016-2020"
              place="BLABLABLA"
              info="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for analysis and visualization."
            />
            {/* Repeat Details component for each experience */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

