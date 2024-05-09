import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Nav = () => {
    const { t } = useTranslation();
    const { navhome, navabout, navgallery, navaftercare, navappointments } = t("navData", { returnObjects: true });

    return (
        <nav>
            <ul className='flex gap-x-[58px]'>
                <li>
                    <Link to="/" className='link hover:border-b-2 hover:border-dark transition duration-300'>{navhome}</Link>
                </li>
                <li>
                    <Link to="/about" className='link hover:border-b-2 hover:border-dark transition duration-300'>{navabout}</Link>
                </li>
                <li>
                    <Link to="/gallery" className='link hover:border-b-2 hover:border-dark transition duration-300'>{navgallery}</Link>
                </li>
                <li>
                    <Link to="/aftercare" className='link hover:border-b-2 hover:border-dark transition duration-300'>{navaftercare}</Link>
                </li>
                <li>
                    <Link to="/appointments" className='link hover:border-b-2 hover:border-dark transition duration-300'>{navappointments}</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
