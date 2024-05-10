import React from 'react';

const Calendly = () => {
  return (
    <div className="calendly-wrapper h-screen relative overflow-hidden mb-[2rem]">
      <iframe
        src="https://calendly.com/rebecabianca1211/tattoo-appointment"
        className="calendly-iframe w-full h-full lg:min-h-[1200px] lg:min-w-[1000px] md:min-h-[800px] md:min-w-[800px] xl:min-h-[1200px] xl:min-w-[1000px]"
        frameBorder="0"
        title="Calendly Appointment"
      ></iframe>
    </div>
  );
};

export default Calendly;
