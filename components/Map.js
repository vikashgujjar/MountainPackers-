import React from 'react';

const Map = () => {
  return (
    <div className="mp-map">
      <iframe 
        width="100%" 
        height="380" 
        frameBorder="0" 
        scrolling="no" 
        marginHeight="0"
        marginWidth="0"
        title="Mountain Packers Location"
        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Chandigarh+(The%20Movers%2024%20)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>
    </div>
  );
};

export default Map;
