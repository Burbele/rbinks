import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Copyright from './Copyright';

// Layout component to wrap around the main content of the page
const Layout = ({ children }) => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header /> {/* Header component */}
      <div>{children}</div> {/* Main content */}
      <Footer /> {/* Footer component */}
      <Copyright /> {/* Copyright component */}
    </div>
  );
};

export default Layout;
