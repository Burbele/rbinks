import React, { useState, useRef } from 'react';
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { IoMdArrowForward } from 'react-icons/io';
import { fullGalleryData } from '../data';
import { useTranslation } from 'react-i18next';
import LazyImage from './LazyImage';

const FullGallery = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(-1); // State for currently selected image in Lightbox
  const [activeTab, setActiveTab] = useState('tab1'); // State for active tab
  const [imageCount, setImageCount] = useState(16); // State for number of images to display

  const { images } = fullGalleryData;
  const zoomRef = useRef(null); // Create a ref for the Zoom plugin

  // Mapping tabs to categories
  const tabMapping = {
    'tab1': 'Show all',
    'tab2': 'Fine-line',
    'tab3': 'Micro-realism',
    'tab4': 'Realism',
    'tab5': 'Other'
  };

  const tabs = Object.keys(tabMapping);
  const filteredImages = images.filter(image =>
    activeTab === 'tab1' ? true : image.category === tabMapping[activeTab]
  );

  const loadMoreImages = () => {
    setImageCount(prevCount => prevCount + 16); // Load more images when button is clicked
  };

  const displayedImages = filteredImages.slice(0, imageCount); // Images to be displayed

  return (
    <section className='w-full'>
      {/* Navigation tabs */}
      <div className='border-b border-gray-200'>
        <div className='container mx-auto px-4 sm:px-6'>
          <div className='max-w-4xl mx-auto py-4'>
            <nav className='-mb-px flex space-x-1 sm:space-x-2 justify-center' aria-label='Tabs'>
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setImageCount(16); // Reset image count when tab is changed
                  }}
                  className={`whitespace-nowrap py-2 px-1 sm:px-2 border-b-2 font-medium text-xs sm:text-sm transition-all duration-300 ease-in-out capitalize tracking-tighter
                    ${activeTab === tab ? 'border-dark text-dark' : 'border-transparent text-gray-500 hover:text-dark hover:border-dark'}`}
                >
                  {t(tab).toUpperCase()}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Image gallery */}
      <div className='w-full pt-4'>
        <PhotoAlbum
          photos={displayedImages.map(image => ({
            ...image,
            renderPhoto: ({ photo }) => (
              <LazyImage
                src={photo.src}
                alt={`Image ${photo.src}`}
                width={photo.width}
                height={photo.height}
              />
            ),
          }))}
          onClick={(event, photo, index) => setIndex(index)} // Open Lightbox on image click
          layout="rows"
          style={{ width: '100%' }}
        />
        <Lightbox
          slides={displayedImages.map(({ src, width, height }) => ({ src, width, height }))}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)} // Close Lightbox
          plugins={[Zoom]} // Add the Zoom plugin
          zoom={{
            ref: zoomRef,
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickMaxStops: 3,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 100,
            pinchZoomDistanceFactor: 100,
            scrollToZoom: true,
          }}
        />
        {imageCount < filteredImages.length && (
          <div className='text-center my-8 flex justify-center'>
            <button onClick={loadMoreImages} className='btn btn-lg btn-dark'>
              {t('btnText5')} <div className='text-xl'><IoMdArrowForward /></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FullGallery;
