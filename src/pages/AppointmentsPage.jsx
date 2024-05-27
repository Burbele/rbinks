import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Loading from '../components/Loading';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';

const Calendly = lazy(() => import('../components/Calendly'));

const AppointmentsPage = () => {
  const { t } = useTranslation();

  return (
    <section className='bg-[#f9f9f9] relative mt-[120px] lg:mt-[150px] pt-16 flex flex-col items-center'>
      <Helmet>
        <title>Book a Tattoo Session | Rbinks - Tattoo Appointments</title>
        <meta name="description" content="Book a full day tattoo session with Rebeca at Epic Ink Studio. Work on large projects or multiple smaller tattoos. Secure your booking with a 500 kr deposit." />
        <meta name="keywords" content="book tattoo session, tattoo appointment, affordable tattoos, Rebeca, Rbinks, Epic Ink Studio, Aarhus, Denmark, custom tattoo designs" />
        <meta name="author" content="Rbinks - Rebeca" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('right')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.6 }}
          className='h2 max-w-full lg:mb-10 text-left lg:text-center'>
          {t('heading6')}
        </motion.h2>
        <p className='text-left lg:text-center mx-auto mb-6 lg:w-[1000px]'>
          {t('appointmentsdescription')}
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        <Calendly />
      </Suspense>
    </section>
  );
};

export default AppointmentsPage;
