import React from 'react';
import { useTranslation } from 'react-i18next';

const Nav = () => {
    const { t } = useTranslation();
    const { navhome, navabout, navgallery, navaftercare, navappointments } = t("navData");

    return (
        <nav>
            <ul className='flex gap-x-[58px]'>
                <li>
                    <a href="/" className='link hover:border-b-2 hover:border-dark transition duration-300'>{navhome}</a>
                </li>
                <li>
                    <a href="/about" className='link hover:border-b-2 hover:border-dark transition duration-300'>{navabout}</a>
                </li>
                <li>
                    <a href="/gallery" className='link hover:border-b-2 hover:border-dark transition duration-300'>{navgallery}</a>
                </li>
                <li>
                    <a href="/aftercare" className='link hover:border-b-2 hover:border-dark transition duration-300'>{navaftercare}</a>
                </li>
                <li>
                    <a href="/appointments" className='link hover:border-b-2 hover:border-dark transition duration-300'>{navappointments}</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
