import React from 'react';

const WhyUs = () => {
  return (
    <section className="mp-why">
      <div className="container">
        <div className="mp-why-grid">
          <div>
            <div className="mp-eyebrow sr vis">Why Choose Us</div>
            <h2 className="mp-stitle sr vis d1">Moving Made<br /><span className="r">Simple.</span></h2>
            <p className="mp-ssub sr vis d2" style={{ marginTop: '14px', maxWidth: '440px' }}>Our expert team handles every
              detail from packing to delivery so you can focus on what matters most.</p>
            <div className="mp-feats">
              <div className="mp-feat sr vis d1">
                <div className="mp-fi"><i className="fa-solid fa-truck-fast"></i></div>
                <div className="mp-ft">
                  <h4>Door Step Pickup &amp; Delivery</h4>
                  <p>Our delivery and pickup management makes shifting smooth, reliable, secure, and
                    quick.</p>
                </div>
              </div>
              <div className="mp-feat sr vis d2">
                <div className="mp-fi"><i className="fa-solid fa-user-graduate"></i></div>
                <div className="mp-ft">
                  <h4>Professional Packing</h4>
                  <p>Expert professionals secure your items with premium packing materials for zero-damage
                    transport.</p>
                </div>
              </div>
              <div className="mp-feat sr vis d3">
                <div className="mp-fi"><i className="fa-solid fa-umbrella"></i></div>
                <div className="mp-ft">
                  <h4>Safety Handling</h4>
                  <p>Every item handled with extra care throughout — no damage, no loss, guaranteed.</p>
                </div>
              </div>
              <div className="mp-feat sr vis d4">
                <div className="mp-fi"><i className="fa-solid fa-clock"></i></div>
                <div className="mp-ft">
                  <h4>On Time Delivery</h4>
                  <p>Guaranteed on-time delivery every single time with our fleet and expert coordination
                    teams.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mp-why-vis sr vis d3">
            <div className="mp-vstat"><span className="mp-vs-lbl">Client Satisfaction Rate</span><span
              className="mp-vs-num">99<sup>%</sup></span>
              <div className="mp-vs-bar">
                <div className="mp-vs-fill" style={{ width: '99%' }}></div>
              </div>
            </div>
            <div className="mp-vstat"><span className="mp-vs-lbl">On-Time Delivery</span><span
              className="mp-vs-num">97<sup>%</sup></span>
              <div className="mp-vs-bar">
                <div className="mp-vs-fill" style={{ width: '97%' }}></div>
              </div>
            </div>
            <div className="mp-vstat"><span className="mp-vs-lbl">Damage-Free Rate</span><span
              className="mp-vs-num">100<sup>%</sup></span>
              <div className="mp-vs-bar">
                <div className="mp-vs-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="mp-vstat"><span className="mp-vs-lbl">Cities Covered</span><span
              className="mp-vs-num">200<sup>+</sup></span>
              <div className="mp-vs-bar">
                <div className="mp-vs-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
