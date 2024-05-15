import React, { useState } from 'react';
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { IoMdArrowForward } from 'react-icons/io';
import { fullGalleryData } from '../data';

const FullGallery = () => {
  const [index, setIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState('Show all');
  const [imageCount, setImageCount] = useState(16); // Initially load 16 images

  const { images } = fullGalleryData;

  const tabs = ['Show all', 'Fine-line', 'Micro-realism', 'Realism', 'Other'];
  const filteredImages = images.filter(image =>
    activeTab === 'Show all' ? true : image.category === activeTab
  );

  const loadMoreImages = () => {
    setImageCount(prevCount => prevCount + 16); // Load more images each time
  };

  const displayedImages = filteredImages.slice(0, imageCount);

  return (
    <section className='w-full'>
      <div className='border-b border-gray-200'>
        <div className='container mx-auto px-4 sm:px-6'>
          <div className='max-w-4xl mx-auto py-4'>
            <nav className='-mb-px flex space-x-1 sm:space-x-2 justify-center' aria-label='Tabs'>
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setImageCount(16); // Reset image count when tab changes
                  }}
                  className={`whitespace-nowrap py-2 px-1 sm:px-2 border-b-2 font-medium text-xs sm:text-sm transition-all duration-300 ease-in-out capitalize tracking-tighter
                    ${activeTab === tab ? 'border-dark text-dark' : 'border-transparent text-gray-500 hover:text-dark hover:border-dark'}`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className='w-full pt-4'>
        <PhotoAlbum
          photos={displayedImages}
          onClick={(event, photo, index) => setIndex(index)}
          layout="rows"
          style={{ width: '100%' }}
        />
        <Lightbox
          slides={displayedImages.map(({ src, width, height }) => ({ src, width, height }))}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
        {imageCount < filteredImages.length && (
          <div className='text-center my-8 flex justify-center'>
            <button onClick={loadMoreImages} className='btn btn-lg btn-dark'>
              Load more <div className='text-xl'><IoMdArrowForward /></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FullGallery;
