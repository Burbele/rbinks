import React from 'react'; // Importing React library
import logo from '../img/header/logo.png'; // Importing the logo image

const Loading = () => {
  return (
    // Center the content both vertically and horizontally using flexbox
    <div className="flex justify-center items-center h-screen">
      {/* Display the logo image with alt text for accessibility */}
      <img src={logo} alt="Loading..." />
    </div>
  );
};

export default Loading; // Exporting the Loading component
