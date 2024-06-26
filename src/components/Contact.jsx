import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false); // State to track if message is sent
  const [showRecaptcha, setShowRecaptcha] = useState(false); // State to show/hide reCAPTCHA
  const [recaptchaValue, setRecaptchaValue] = useState(null); // State to track reCAPTCHA value
  const form = useRef(); // Reference to the form
  const recaptchaRef = useRef(); // Reference to reCAPTCHA

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!recaptchaValue) {
      setShowRecaptcha(true); // Show reCAPTCHA if not verified
      return;
    }

    // Send email using emailjs
    emailjs
      .sendForm('service_ax9tupp', 'template_u0vufrg', form.current, '7wDBvUSbnHzsBO8a0')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setMessageSent(true); // Set confirmation message to true
          setTimeout(() => setMessageSent(false), 5000); // Reset confirmation message after 5 seconds
        },
        (error) => {
          console.error('Email failed to send...', error.text);
        }
      );

    e.target.reset(); // Reset form fields
    setShowRecaptcha(false); // Hide reCAPTCHA after submission
    setRecaptchaValue(null); // Reset reCAPTCHA value
  };

  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value); // Update reCAPTCHA value
  };

  const { t } = useTranslation();
  const { studio, location, address, email, directions } = t('information');
  const { name, youremail, message, btnText4 } = t('form');

  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-y-16'>
          <motion.div 
            variants={fadeIn('right')} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{ once: true, amount: 0.4 }} 
            className='flex-1'
          >
            <h2 className='h2 max-w-[490px]'>{t('heading3')}</h2>
            <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
              <div>
                <div className='font-primary uppercase font-medium text-xl mb-3'>{studio}</div>
                <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>{location}</div>
                <div className='flex flex-col gap-y-3 mb-8'>
                  <div className='flex items-center gap-[10px]'>
                    <div>
                      <FaMapMarkerAlt />
                    </div>
                    <div className='font-medium'>{address}</div>
                  </div>
                  <div className='flex items-center gap-[10px]'>
                    <div>
                      <FaEnvelope />
                    </div>
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
            viewport={{ once: true, amount: 0.4 }} 
            className='flex-1 xl:pl-[40px] flex justify-center items-center'
          >
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-10 w-full'>
              <input 
                name='user_name' 
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' 
                placeholder={name} 
                type='text' 
                required 
              />
              <input 
                name='user_email' 
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' 
                placeholder={youremail} 
                type='email' 
                required 
              />
              <input 
                name='message' 
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' 
                placeholder={message} 
                type='text' 
                required 
              />
              {showRecaptcha && (
                <div className='my-4'>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey='6LcO_fspAAAAAALk2Pth_iR2_v56M1nhBiKo0ybo'
                    onChange={onRecaptchaChange}
                  />
                </div>
              )}
              <button className='btn btn-sm btn-dark self-start'>{btnText4}</button>
              {messageSent && <div className='text-green-500'>{t('msgconfirmation')}</div>} {/* Confirmation message */}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
