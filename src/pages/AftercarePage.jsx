import React from 'react';
import { Helmet } from 'react-helmet';
import AftercareFAQ from '../components/AftercareFAQ';

const AftercarePage = () => {
  return (
    <section className='bg-[#f9f9f9] section relative mt-[120px] lg:mt-[150px] pt-16 items-center'>
      <Helmet>
        <title>Aftercare | Rbinks - Tattoo Aftercare Guide</title>
        <meta name="description" content="Your guide to tattoo aftercare by Rebeca. Follow these tips to help your tattoo heal perfectly and avoid any complications. Contact Rebeca for any questions." />
        <meta name="keywords" content="tattoo aftercare, tattoo healing, Rebeca, Rbinks, tattoo care tips, new tattoo care, avoid infection, tattoo healing process" />
        <meta name="author" content="Rbinks - Rebeca" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <AftercareFAQ />
    </section>
  );
};

export default AftercarePage;
