import React from 'react';

const Footer = () => {
  return (
    <footer className="mp-footer">
      <div className="container">
        <div className="mp-footer-grid">
          <div className="mp-fcol">
            <h3>About Us</h3>
            <p style={{ textAlign: 'justify' }}>If you're planning to move, look no further than Mountain Packers and Movers. Feel free to contact us today to learn more about our services and how we can help make your move a success!</p>
            <ul className="mp-fcon">
              <li><i className="fa-solid fa-phone"></i><a href="tel:+91-9317718180">+91-9317718180</a></li>
              <li><i className="fa-solid fa-phone"></i><a href="tel:+91-9781018180">+91-9781018180</a></li>
              <li><i className="fa-solid fa-envelope"></i><a
                href="mailto:mountainpackersmover@gmail.com">mountainpackersmover@gmail.com</a></li>
              <li><i className="fa-solid fa-location-dot"></i> 2248 Madiwala Town, Manimajra, Chandigarh — 160101</li>
            </ul>
          </div>
          <div className="mp-fcol">
            <h3>Important Links</h3>
            <ul className="mp-flinks">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/our-branches">Our Branches</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
            <div className="mp-showme">
              <a href="https://www.showmelocal.com/profile.aspx?bid=35628604"
                target="_blank">
                <img src="https://www.showmelocal.com/showmelocal-member-35628604"
                  style={{ width: '80px' }} alt="Best movers and packers in chandigarh,Manimajra" />
              </a>
            </div>
          </div>
          <div className="mp-fcol">
            <h3>Customer Service</h3>
            <ul className="mp-flinks">
              <li><a href="/Domestic-Shifting-Services">Domestic Shifting Services</a></li>
              <li><a href="/Corporate-Relocation-Services">Corporate Relocation Services</a></li>
              <li><a href="/Local-House-Shifting-Services">Local Shifting Services</a></li>
              <li><a href="/Car-Bike-Transportation">Car &amp; Bike Transportation</a></li>
              <li><a href="/Packing-Unpacking-Services">Packing Unpacking Services</a></li>
              <li><a href="/Warehouse-Service">Warehouse Service</a></li>
            </ul>
          </div>
          <div className="mp-fcol">
            <h3>Gallery</h3>
            <ul className="mp-fgal">
              <li><a href="#"><img src="/img/instafeed/movers-and-packers-in-India.webp" alt="movers and packers in India" /></a></li>
              <li><a href="#"><img src="/img/instafeed/best-warehouse-service-in-India.webp" alt="best warehouse service in India" /></a></li>
              <li><a href="#"><img src="/img/instafeed/packing-moving-services-in-India.webp" alt="packing moving services in India" /></a></li>
              <li><a href="#"><img src="/img/instafeed/international-packer-and-movers-services-in-India.webp" alt="international" /></a></li>
              <li><a href="#"><img src="/img/instafeed/transportation-in-India.webp" alt="transportation" /></a></li>
              <li><a href="#"><img src="/img/instafeed/domestic-shifting-services-in-India.webp" alt="domestic" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mp-fhr"></div>
      <div className="container">
        <div className="mp-fbot">
          <div className="mp-fcopy">
            <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | Mountain Packers &amp; Movers</p>
          </div>
          <div className="mp-fsoc">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-pinterest"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
