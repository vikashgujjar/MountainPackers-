import React from 'react';

const FloatingButtons = () => {
  return (
    <div className="mp-fab-wrapper">
      <a href="https://api.whatsapp.com/send?phone=+919317718180&text=I%20am%20looking%20for%20shifting%20with%20your%20company"
        target="_blank" rel="noopener noreferrer" className="mp-fab mp-fab-whatsapp" aria-label="WhatsApp Us">
        <i className="fa-brands fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
      <a href="tel:+919317718180" className="mp-fab mp-fab-call" aria-label="Call Us">
        <i className="fa-solid fa-phone"></i>
        <span>Call Now</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
