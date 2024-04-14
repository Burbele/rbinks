import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {


  const { t } = useTranslation();
  const {studio, location, address, email, directions} = t("information");
  const {name, youremail, message, btnText4} = t("form");
  
  return (
  <section className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-y-16'>
        <motion.div
        variants={fadeIn('right')}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.4}}
        className='flex-1'
        >
          <h2 className='h2 max-w-[490px]'>{t('heading3')}</h2>
          <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
           
                <div>
                  <div className='font-primary uppercase font-medium text-xl mb-3'>{studio}</div>
                  <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>{location}</div>
                  <div className='flex flex-col gap-y-3 mb-8'>
                    <div className='flex items-center gap-[10px]'>
                    <div><FaMapMarkerAlt /></div>
                    <div className='font-medium'>{address}</div>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                    <div><FaEnvelope /></div>
                    <div className='font-medium'>{email}</div>
                    </div>
                    <a className='font-medium border-b border-dark pb-[5px]' target='_blank' href='https://www.google.com/maps/dir//Viborgvej+142,+st,+8210+Aarhus/@56.1671629,10.1620179,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x464c15b0d2483b09:0x8232700d07325149!2m2!1d10.1635437!2d56.1678441?entry=ttu'>
                      {directions}
                    </a>
                  </div>
                </div>
            
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn('left')}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.4}}
        className='flex-1 xl:pl-[40px] flex justify-center items-center'>
          <form className='flex flex-col gap-y-10 w-full'>
            <input className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' 
            placeholder={name} type='text' />
            <input className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' 
            placeholder={youremail} type='text' />
            <input className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' 
            placeholder={message} type='text' />
            <button className='btn btn-sm btn-dark self-start'>{btnText4}</button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
   );
  };

export default Contact;
