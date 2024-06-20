import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLogoInstagram, IoMailOutline } from 'react-icons/io5';
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
  const { studio, location, email, directions } = t('information');
  const { name, youremail, message, btnText4 } = t('form');

  return (
    <section className='section bg-[#f9f9f9]'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-y-16'>
          <div className='flex-1'>
            <h2 className='h2 max-w-[490px]'>{t('heading33')}</h2>
            <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
              <div>
                <div className='font-primary uppercase font-medium text-xl mb-3'>{studio}</div>
                <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>{location}</div>
                <div className='flex flex-col gap-y-3 mb-8'>
                  <div className='flex items-center gap-[10px]'>
                    <div>
                      <IoLogoInstagram className='text-xl' />
                    </div>
                    <div className='font-medium'>
                      <a href="https://www.instagram.com/r.b.ink.s/" target="_blank" rel="noopener noreferrer">
                        @r.b.ink.s
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center gap-[10px]'>
                    <div>
                      <IoMailOutline className='text-xl' />
                    </div>
                    <div className='font-medium'>{email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1 xl:pl-[40px] flex justify-center items-center'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-10 w-full'>
              <input 
                name='user_name' 
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 bg-[#f9f9f9]' 
                placeholder={name} 
                type='text' 
                required 
              />
              <input 
                name='user_email' 
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 bg-[#f9f9f9]' 
                placeholder={youremail} 
                type='email' 
                required 
              />
              <input 
                name='message' 
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 bg-[#f9f9f9]' 
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
