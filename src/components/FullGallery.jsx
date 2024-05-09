import React, { useState } from 'react';
import { fullGalleryData } from '../data';
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const slides = fullGalleryData.images.map(({original, width,height})=> ({
  src: original,
  width,
  height,
}))

const FullGallery = () => {

  const [index, setIndex] = useState(-1);
  const { images } = fullGalleryData;


  return (
    <section className='relative mt-[40px] lg:mt-0'>
      
      <div className='mb-8 lg:mb-20'>
         <PhotoAlbum 
        onClick={(event, photo, index) => setIndex(index)}
        layout='rows' 
        photos={images} 
        />
       <Lightbox slides={slides} styles={{container:
        {background: 'rgba(0,0,0,.9)'} }} 
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        />
      </div>
    </section>
  );
};

export default FullGallery;

  