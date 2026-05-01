import React from 'react';

const About = () => {
  return (
    <section className="mp-about">
      <div className="container">
        <div className="mp-about-grid">
          <div className="mp-about-vis sr vis" style={{ height: '100%' }}>
            <img src="/img/about/house.jpg" alt="Mountain Packers Move"
              style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 60px rgba(8,20,58,0.1)', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div className="mp-atxt">
            <div className="mp-eyebrow sr vis">About Us</div>
            <h1 className="sr vis d1">Packers &amp; Movers<br /><span className="r">Services In India</span></h1>
            <p className="sr vis d2">Mountain Packers &amp; Movers offers the <strong><a
              href="https://www.mountainpackersmovers.in/">best packers and movers services in
              India</a></strong>. We deal in local shifting, international shifting, car &amp; bike
              transportation, and warehouse services. With years of experience, we've helped thousands move
              homes, offices, and vehicles across the country.</p>
            <p className="sr vis d3">We understand that moving can be stressful. That's why we provide the best possible
              services at affordable prices. Whether you're moving locally, domestically, or internationally —
              we ensure your belongings are transported safely. We are the best <strong><a
                href="https://en.wikipedia.org/wiki/Housejoy" target="_blank" rel="noopener noreferrer">packers and movers in
                India</a></strong>.</p>
            <div className="mp-mv sr vis d4">
              <div className="mp-mvc">
                <h5>Our Mission</h5>
                <p>Provide innovative, reliable moving solutions backed by professionals committed to the
                  highest customer satisfaction.</p>
              </div>
              <div className="mp-mvc">
                <h5>Our Vision</h5>
                <p>Become the world's leading provider of cargo and logistics services with customized
                  solutions for diverse client needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
