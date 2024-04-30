import React from 'react';

const Calendly = () => {
  return (
    <div className="h-[1000px] md:h-[1000px] lg:h-[1000px] relative mt-[120px] lg:mt-[150px]">
      <iframe
        src="https://calendly.com/rebecabianca1211/tattoo-appointment"
        className="w-full h-full"
        frameborder="0"
        title="Calendly Appointment"
      ></iframe>
    </div>
  );
};

export default Calendly;
