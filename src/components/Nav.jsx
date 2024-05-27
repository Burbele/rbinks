import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next'; 

const Nav = () => {
    const { t } = useTranslation(); // Using the useTranslation hook
    // Extracting navigation text from the translation files
    const { navhome, navabout, navgallery, navaftercare, navappointments } = t("navData", { returnObjects: true });

    return (
        <nav>
            <ul className='flex gap-x-[58px]'>
                {/* Navigation links with translation and smooth scrolling to top */}
                <li>
                    <Link 
                        to="/" 
                        className='link hover:border-b-2 hover:border-dark transition duration-300' 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    >
                        {navhome}
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className='link hover:border-b-2 hover:border-dark transition duration-300' 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    >
                        {navabout}
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/gallery" 
                        className='link hover:border-b-2 hover:border-dark transition duration-300' 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    >
                        {navgallery}
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/aftercare" 
                        className='link hover:border-b-2 hover:border-dark transition duration-300' 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    >
                        {navaftercare}
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/appointments" 
                        className='link hover:border-b-2 hover:border-dark transition duration-300' 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    >
                        {navappointments}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
