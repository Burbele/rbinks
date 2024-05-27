import React, { useState, useEffect } from 'react';
import { headerData } from '../data';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { TiThMenuOutline } from 'react-icons/ti';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { logo } = headerData;
  const [isActive, setIsActive] = useState(false); // State to track if header is active (scrolled)
  const [navMobile, setNavMobile] = useState(false); // State for mobile navigation menu

  // Effect to handle scroll event to toggle header state
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  // Effect to handle body overflow when mobile nav is open
  useEffect(() => {
    if (navMobile) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [navMobile]);

  return (
    <header
      className={`${
        isActive ? 'h-[100px] lg:h-[110px] shadow-lg' : 'h-[120px] lg:h-[150px]'
      } fixed bg-white left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
        <a href='/'>
          <img className='w-[188px] h-[90px]' src={logo} alt='Logo' />
        </a>
        {/* Desktop Navigation */}
        <div className='hidden xl:flex'>
          <Nav />
        </div>
        {/* Mobile Menu Button */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className='xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer'
        >
          <TiThMenuOutline className='text-3xl' />
        </div>
        {/* Mobile Navigation Menu */}
        <div
          className={`${
            navMobile ? 'max-h-full' : 'max-h-0'
          } ${isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]'}
          fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile setNavMobile={setNavMobile} />
        </div>
        {/* Language Selector for Desktop */}
        <div className='hidden xl:flex'>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
