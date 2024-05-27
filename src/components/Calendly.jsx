import React from 'react';

const Calendly = () => {
  return (
    <div className="calendly-wrapper">
      <iframe
        src="https://calendly.com/rebecabianca1211/tattoo-appointment" // Calendly appointment URL
        className="calendly-iframe"
        frameBorder="0"
        title="Calendly Appointment"
        style={{ minHeight: '1350px' }} // Ensure iframe has enough height
      ></iframe>
    </div>
  );
};

export default Calendly;
