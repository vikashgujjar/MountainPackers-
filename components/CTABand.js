import React from 'react';
import Link from 'next/link';

const CTABand = () => {
  return (
    < section className="mp-cta-band" >
      <div className="mp-container">
        <h2 className="sr">Ready to Start Your Move?</h2>
        <p className="sr d1">
          Get a free, no-obligation quote today. Our team will plan your perfect
          transportation experience tailored to your schedule and budget.
        </p>
        <div className="mp-cta-band-btns sr d2">
          <Link href="/contact-us" className="mp-btn-navy">
            <i className="fa-solid fa-file-alt" /> Get Free Quote
          </Link>
          <a href="tel:+919317718180" className="mp-btn-navy-outline">
            <i className="fa-solid fa-phone" /> Call Us Now
          </a>
        </div>
        <div className="mp-cta-trust sr d3">
          <span><i className="fa-solid fa-check-circle" /> 24/7 Support</span>
          <span><i className="fa-solid fa-check-circle" /> Transparent Pricing</span>
          <span><i className="fa-solid fa-check-circle" /> 100% Safe Delivery</span>
          <span><i className="fa-solid fa-check-circle" /> GPS Tracked</span>
        </div>
      </div>
    </section >
  );
};

export default CTABand;
