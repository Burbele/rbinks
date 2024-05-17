import React from 'react';
import logo from '../img/header/logo.png';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={logo} alt="Loading..." />
    </div>
  );
};

export default Loading;
