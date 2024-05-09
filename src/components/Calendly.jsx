import React from 'react';

const Calendly = () => {
  return (
    <div className="calendly-wrapper h-screen relative overflow-hidden">
      <iframe
        src="https://calendly.com/rebecabianca1211/tattoo-appointment"
        className="calendly-iframe w-full h-full"
        frameBorder="0"
        title="Calendly Appointment"
      ></iframe>
    </div>
  );
};

export default Calendly;
