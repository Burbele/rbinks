import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const NavMobile = ({ setNavMobile }) => {
  const { t } = useTranslation();
  const { navhome, navabout, navgallery, navaftercare, navappointments } = t("navData");

  // Function to handle link click: close mobile navigation and scroll to top
  const handleLinkClick = () => {
    setNavMobile(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
      <ul className='flex flex-col justify-center items-center gap-y-6 py-6 mb-8'>
        {/* Navigation links with translation and smooth scrolling to top */}
        <li>
          <Link to="/" className='text-2xl font-primary uppercase' onClick={handleLinkClick}>
            {navhome}
          </Link>
        </li>
        <li>
          <Link to="/about" className='text-2xl font-primary uppercase' onClick={handleLinkClick}>
            {navabout}
          </Link>
        </li>
        <li>
          <Link to="/gallery" className='text-2xl font-primary uppercase' onClick={handleLinkClick}>
            {navgallery}
          </Link>
        </li>
        <li>
          <Link to="/aftercare" className='text-2xl font-primary uppercase' onClick={handleLinkClick}>
            {navaftercare}
          </Link>
        </li>
        <li>
          <Link to="/appointments" className='text-2xl font-primary uppercase' onClick={handleLinkClick}>
            {navappointments}
          </Link>
        </li>
      </ul>
      <div className='pb-20'>
        <LanguageSelector /> {/* Language selector component */}
      </div>
    </nav>
  );
};

export default NavMobile;
