import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const NavMobile = () => {
    const { t } = useTranslation();
    const { navhome, navabout, navgallery, navaftercare, navappointments } = t("navData");

    return (
        <nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
            <ul className='flex flex-col justify-center items-center gap-y-6 py-6 mb-8'>
                <li>
                    <Link to="/" className='text-2xl font-primary uppercase' onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>{navhome}</Link>
                </li>
                <li>
                    <Link to="/about" className='text-2xl font-primary uppercase' onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>{navabout}</Link>
                </li>
                <li>
                    <Link to="/gallery" className='text-2xl font-primary uppercase' onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>{navgallery}</Link>
                </li>
                <li>
                    <Link to="/aftercare" className='text-2xl font-primary uppercase' onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>{navaftercare}</Link>
                </li>
                <li>
                    <Link to="/appointments" className='text-2xl font-primary uppercase' onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>{navappointments}</Link>
                </li>
            </ul>
            <div className='text-2xl'>
                <LanguageSelector />
            </div>
        </nav>
    );
};

export default NavMobile;
