'use client';
import React from 'react';

const Hero = () => {
  return (
    <section className="mp-hero">
      <div id="bottombanner">
        {/* Simplified slider structure for React, keeping the same style classes */}
        <div id="wowslider-container1">
          <div className="ws_images">
            <ul>
              <li><img src="/img/banner1.jpg" alt="best packers and movers in India" title="" id="wows1_0" /></li>
              <li><img src="/img/banner2.jpg" alt="packers and movers near me" title="" id="wows1_1" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mp-hero-ov">
        <div className="container">
          <div className="mp-hero-content-grid">
            <div className="mp-hc">
              <div className="mp-hpill"><span className="dot"></span> India's Trusted Since 2007</div>
              <h1 className="mp-htitle">
                <span className="solid">We Move</span>
                <span className="outline">What</span>
                <span className="solid">Matters.</span>
              </h1>
              <p className="mp-hsub">Mountain Packers &amp; Movers — delivering safe, affordable, and stress-free
                relocation services across India. Local, domestic, international &amp; vehicle shifting.</p>
              <div className="mp-hbtns">
                <a href="/contact-us" className="mp-btn-red">Get Free Quote &#8594;</a>
                <a href="/services" className="mp-btn-wh">Our Services</a>
              </div>
            </div>
            <div className="mp-hero-form-wrap">
              <div className="mp-qbox sr vis">
                <h3>Get A Free Quote</h3>
                <p className="qs">Tell us about your move — we respond instantly.</p>
                <form className="quote-form" action="/process.php" method="post" encType="multipart/form-data"
                  name="form">
                  <div className="mp-field"><input type="text" name="S_name" id="S_name"
                      placeholder="Your Full Name" />
                  </div>
                  <div className="mp-row2">
                    <div className="mp-field"><input type="email" name="S_email" id="S_email"
                        placeholder="Email Address" /></div>
                    <div className="mp-field"><input type="phone" name="S_phone" id="S_phone"
                        placeholder="Phone Number" /></div>
                  </div>
                  <div className="mp-row2">
                    <div className="mp-field"><input type="text" name="Location_form" id="Location_form"
                        placeholder="Moving From" /></div>
                    <div className="mp-field"><input type="text" name="Location_to" id="Location_to"
                        placeholder="Moving To" /></div>
                  </div>
                  <div className="mp-field"><textarea name="message" id="message"
                      placeholder="Your Message..."></textarea></div>
                  <button type="submit" value="Submit" name="" id="submit1" className="mp-submit">Send My
                    Request
                    &#8594;</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
