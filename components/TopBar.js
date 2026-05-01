import React from 'react';

const TopBar = () => {
  return (
    <div className="mp-topbar" id="home">
      <div className="container">
        <div className="mp-tb-left">
          <a href="tel:+919317718180"><i className="fa-solid fa-phone"></i> +91-9317718180</a>
          <a href="tel:+919781018180"><i className="fa-solid fa-phone"></i> +91-9781018180</a>
          <a href="mailto:mountainpackersmover@gmail.com"><i className="fa-solid fa-envelope"></i>
            mountainpackersmover@gmail.com</a>
        </div>
        <div className="mp-tb-right">
          <div className="mp-tb-msg">
            <marquee style={{ color: 'var(--amber)', fontWeight: 'bold' }}>Welcome to Mountain Packers and Movers in India</marquee>
          </div>
          <div className="mp-tb-social">
            <a href="https://www.facebook.com/people/Mountain-Packers-Movers/100090872461843/"><i
              className="fa-brands fa-facebook"></i></a>
            <a href="https://in.pinterest.com/mountainpackers/"><i className="fa-brands fa-pinterest"></i></a>
            <a href="https://twitter.com/PackersMountain"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/mountainpackers/"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
