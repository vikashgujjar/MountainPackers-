'use client';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Script from 'next/script';

const Hero = () => {
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    S_name: '',
    S_email: '',
    S_phone: '',
    Location_form: '',
    Location_to: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.S_name.trim()) newErrors.S_name = 'Full name is required';
    if (!formData.S_email.trim()) {
      newErrors.S_email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.S_email)) {
      newErrors.S_email = 'Please enter a valid email';
    }
    if (!formData.S_phone.trim()) newErrors.S_phone = 'Phone number is required';
    if (!formData.Location_form.trim()) newErrors.Location_form = 'Pickup location is required';
    if (!formData.Location_to.trim()) newErrors.Location_to = 'Drop location is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all required fields correctly.',
        confirmButtonColor: '#d33',
      });
      return;
    }

    setLoader(true);

    const payload = {
      company: "mountainpackers",
      company_name: "Mountain Packers and Movers",
      moveType: "Hero Quote Form",
      mail_to: "mountainpackersmover@gmail.com",
      ...formData,
    };

    try {
      const response = await fetch(
        "https://mail.futuretouch.org/api/send-message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Request Received!",
          text: "Your quote request has been submitted successfully. We will contact you shortly.",
          confirmButtonColor: '#004F80',
        });
        setFormData({
          S_name: '',
          S_email: '',
          S_phone: '',
          Location_form: '',
          Location_to: '',
          message: '',
        });
      } else {
        Swal.fire("Error", "Failed to submit request. Please try again.", "error");
      }
    } catch (error) {
      console.error(formData, error);
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoader(false);
    }
  };

  return (
    <section className="mp-hero">
      <div id="bottombanner" className='w-100'>
        <div id="wowslider-container1" className='w-100'>
          <div className="ws_images w-100">
            <ul className='w-100'>
              <li><img src="/img/banner1.jpg" alt="best packers and movers in India" title="" id="wows1_0" /></li>
              <li><img src="/img/banner2.jpg" alt="packers and movers near me" title="" id="wows1_1" /></li>
              <li><img src="/img/banner1.jpg" alt="best packers and movers in India" title="" id="wows1_0" /></li>
              <li><img src="/img/banner2.jpg" alt="packers and movers near me" title="" id="wows1_1" /></li>
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
                <form className="quote-form" onSubmit={handleSubmit}>
                  <div className="mp-field">
                    <input
                      type="text"
                      name="S_name"
                      placeholder="Your Full Name"
                      value={formData.S_name}
                      onChange={handleChange}
                      style={errors.S_name ? { borderColor: 'red' } : {}}
                    />
                  </div>
                  <div className="mp-row2">
                    <div className="mp-field">
                      <input
                        type="email"
                        name="S_email"
                        placeholder="Email Address"
                        value={formData.S_email}
                        onChange={handleChange}
                        style={errors.S_email ? { borderColor: 'red' } : {}}
                      />
                    </div>
                    <div className="mp-field">
                      <input
                        type="tel"
                        name="S_phone"
                        placeholder="Phone Number"
                        value={formData.S_phone}
                        onChange={handleChange}
                        style={errors.S_phone ? { borderColor: 'red' } : {}}
                      />
                    </div>
                  </div>
                  <div className="mp-row2">
                    <div className="mp-field">
                      <input
                        type="text"
                        name="Location_form"
                        placeholder="Moving From"
                        value={formData.Location_form}
                        onChange={handleChange}
                        style={errors.Location_form ? { borderColor: 'red' } : {}}
                      />
                    </div>
                    <div className="mp-field">
                      <input
                        type="text"
                        name="Location_to"
                        placeholder="Moving To"
                        value={formData.Location_to}
                        onChange={handleChange}
                        style={errors.Location_to ? { borderColor: 'red' } : {}}
                      />
                    </div>
                  </div>
                  <div className="mp-field">
                    <textarea
                      name="message"
                      placeholder="Your Message..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" disabled={loader} className="mp-submit">
                    {loader ? 'Sending...' : 'Send My Request →'}
                  </button>
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
