import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';


const NavMobile = () => {

    const { t } = useTranslation();
    const {navhome, navabout, navgallery, navaftercare, navappointments} = t("navData");

  return <nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
    <ul className='flex flex-col justify-center items-center gap-y-6 py-6 mb-8'>
  
          <li >
              <a href="/" className='text-2xl font-primary uppercase'>{navhome}</a>
          </li>
          <li >
              <a href="/about" className='text-2xl font-primary uppercase'>{navabout}</a>
          </li>
          <li >
              <a href="/gallery" className='text-2xl font-primary uppercase'>{navgallery}</a>
          </li>
          <li >
              <a href="/aftercare" className='text-2xl font-primary uppercase'>{navaftercare}</a>
          </li>
          <li >
              <a href="/"appointments className='text-2xl font-primary uppercase'>{navappointments}</a>
          </li>
        
    </ul>
    <div className='text-2xl'>
      <LanguageSelector />
    </div>
  </nav>;
};

export default NavMobile;
