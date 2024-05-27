import React from 'react';

// LazyImage component for lazy loading images
const LazyImage = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} loading="lazy" {...props} />;
};

export default LazyImage;
