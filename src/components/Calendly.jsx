import React from 'react';

const Calendly = () => {
  return (
    <div className="bg-[#f9f9f9] h-[1000px] md:h-[1000px] lg:h-[1000px] relative overflow-hidden">
      <iframe
        src="https://calendly.com/rebecabianca1211/tattoo-appointment"
        className="w-full h-full overflow-auto"
        frameBorder="0"
        title="Calendly Appointment"
        style={{ touchAction: 'pan-y' }}
      ></iframe>
    </div>
  );
};

export default Calendly;
