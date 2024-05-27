import React from 'react';
import { motion, useScroll } from 'framer-motion';

const LiIcon = ({ reference }) => {
  // Destructure scrollYProgress from the useScroll hook
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"]
  });

  return (
    // Figure element to contain the SVG icon
    <figure className='absolute left-0 stroke-dark'>
      {/* SVG with a width and height of 75 */}
      <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
        {/* Static background circle */}
        <circle cx="75" cy="50" r="20" className='stroke-slate-400 stroke-1 fill-none' />
        {/* Animated circle that fills based on scroll progress */}
        <motion.circle
          cx="75" cy="50" r="20" className='stroke-[5px] fill-white'
          style={{ pathLength: scrollYProgress }}
        />
        {/* Static foreground circle */}
        <circle cx="75" cy="50" r="20" className='stroke-1 fill-white' />
      </svg>
    </figure>
  );
};

export default LiIcon;
