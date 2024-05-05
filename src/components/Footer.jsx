import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { IoLogoTiktok } from "react-icons/io5";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {
  const { t } = useTranslation();
  const { aboutme, aboutdescription, aboutaddress, aboutemail } = t("about");
  const { linkname, linkabout, linkgallery, linkaftercare, linkappointment } = t("links");
  const { programname, day1, day2, day3 } = t("program");
  const { socialname, social1, social2 } = t("socials");

  return (
    <footer className='section bg-dark'>
      <div className='container mx-auto'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'>
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col gap-y-6 lg:w-[25%] lg:mr-5'> 
            <div className='font-primary text-xl uppercase tracking-[0.08em]'>{aboutme}</div>
            <div className='leading-relaxed text-[#dbdbdb]'>{aboutdescription}</div>
            <div className='flex flex-col gap-y-4 font-semibold text-[#dbdbdb]'>
              <div className='flex items-center gap-x-[10px]'>
                <div><FaMapMarkerAlt /></div>
                <div><span className="whitespace-nowrap">{aboutaddress}</span></div>
              </div>
              <div className='flex items-center gap-x-[10px]'>
                <div><FaEnvelope /></div>
                <div>{aboutemail}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col lg:ml-5 lg:mr-5'> 
            <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>{linkname}</div>
            <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
              <li>
                <a href="/about" className='hover:text-white transition' target="_blank">{linkabout}</a>
              </li>
              <li>
                <a href="/gallery" className='hover:text-white transition' target="_blank">{linkgallery}</a>
              </li>
              <li>
                <a href="/aftercare" className='hover:text-white transition' target="_blank">{linkaftercare}</a>
              </li>
              <li>
                <a href="/appointments" className='hover:text-white transition' target="_blank">{linkappointment}</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col lg:ml-5 lg:mr-5'> 
            <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>{programname}</div>
            <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
              <li>{day1}</li>
              <li>{day2}</li>
              <li>{day3}</li>
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col lg:ml-5'> 
            <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>{socialname}</div>
            <div className='flex flex-col gap-y-2'>
              <div className='flex items-center gap-x-[10px]'>
                <div><IoLogoInstagram /></div>
                <div><a href="https://www.instagram.com/r.b.ink.s/" target="_blank">{social1}</a></div>
              </div>
              <div className='flex items-center gap-x-[10px] mt-4'>
                <div><IoLogoTiktok /></div>
                <div><a href="https://www.tiktok.com/@r.b.ink.s" target="_blank">{social2}</a></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
