// components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Copyright from './Copyright';

const Layout = ({ children }) => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header />
      <div>{children}</div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Layout;
