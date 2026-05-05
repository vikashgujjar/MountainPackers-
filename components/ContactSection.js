'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactSection = () => {
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

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
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Fields',
        text: 'Please check the form for errors.',
        confirmButtonColor: '#004F80',
      });
      return;
    }

    setLoader(true);

    const payload = {
      company: "mountainpackers",
      company_name: "Mountain Packers and Movers",
      moveType: "Contact Page Form",
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
          title: "Message Sent!",
          text: "Thank you for contacting us. We will get back to you shortly.",
          confirmButtonColor: '#004F80',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        Swal.fire("Error", "Something went wrong. Please try again.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Network error. Please try again.", "error");
    } finally {
      setLoader(false);
    }
  };

  return (
    <section className="mp-contact-section py-10 bg-white position-relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="position-absolute top-0 end-0 p-10 opacity-05 pointer-events-none">
        <i className="fa-solid fa-envelope-open display-1 text-navy rotate-12"></i>
      </div>
      <div className="mp-dot-pattern position-absolute inset-0 opacity-05"></div>

      <div className="container position-relative z-1">
        <div className="text-center mb-5 pb-5 sr vis d1">
          <div className="mp-eyebrow justify-content-center mp-letter-spacing-wide">Get In Touch</div>
          <h2 className="mp-stitle display-3 fw-black">Connect With <span className="text-red">Our Experts.</span></h2>
          <p className="text-muted mt-3 h5 fw-normal max-w-600 mx-auto">Have a query? Send us a message and our team will get back to you within 24 hours.</p>
        </div>

        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-8 sr vis d2">
            <div className="mp-glass-card p-5 rounded-5 border-0 shadow-2xl bg-white mp-border-gradient">
              <form onSubmit={handleSubmit} className="mp-premium-form">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-group mb-4">
                      <label className="small fw-bold text-navy text-uppercase tracking-widest mb-2 d-block">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control mp-form-control"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        style={errors.name ? { borderColor: 'red' } : {}}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-4">
                      <label className="small fw-bold text-navy text-uppercase tracking-widest mb-2 d-block">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control mp-form-control"
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={errors.email ? { borderColor: 'red' } : {}}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-4">
                      <label className="small fw-bold text-navy text-uppercase tracking-widest mb-2 d-block">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control mp-form-control"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-4">
                      <label className="small fw-bold text-navy text-uppercase tracking-widest mb-2 d-block">Your Message</label>
                      <textarea
                        name="message"
                        className="form-control mp-form-control"
                        rows="6"
                        placeholder="Describe your moving requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        style={errors.message ? { borderColor: 'red' } : {}}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" disabled={loader} className="mp-hbtn py-4 h5 mb-0 text-uppercase tracking-widest text-white border-0 w-100">
                      {loader ? 'Sending...' : <>Send Message <i className="fa-solid fa-paper-plane ms-2"></i></>}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 sr vis d3">
            <div className="d-flex flex-column gap-4 h-100">
              {/* Address Card */}
              <div className="mp-glass-card p-5 rounded-5 border-0 shadow-lg bg-navy text-white flex-grow-1">
                <h4 className="h4 fw-black text-uppercase tracking-1 mb-5 border-bottom border-white-10 pb-3">Contact Details</h4>

                <div className="d-flex flex-column gap-5">
                  <div className="d-flex align-items-start gap-4">
                    <div className="mp-icon-box-3d bg-red" style={{ width: '50px', height: '50px', flex: '0 0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <i className="fa-solid fa-phone text-white"></i>
                    </div>
                    <div>
                      <span className="d-block small fw-bold text-white-50 text-uppercase tracking-widest mb-1" style={{ fontSize: '10px' }}>Call Us Now</span>
                      <a href="tel:+91-9317718180" className="text-white h5 fw-bold text-decoration-none">+91-9317718180</a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-4">
                    <div className="mp-icon-box-3d bg-red" style={{ width: '50px', height: '50px', flex: '0 0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <i className="fa-solid fa-envelope text-white"></i>
                    </div>
                    <div>
                      <span className="d-block small fw-bold text-white-50 text-uppercase tracking-widest mb-1" style={{ fontSize: '10px' }}>Email Address</span>
                      <a href="mailto:mountainpackersmover@gmail.com" className="text-white fw-bold text-decoration-none">mountainpackersmover@gmail.com</a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-4">
                    <div className="mp-icon-box-3d bg-red" style={{ width: '50px', height: '50px', flex: '0 0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <i className="fa-solid fa-location-dot text-white"></i>
                    </div>
                    <div>
                      <span className="d-block small fw-bold text-white-50 text-uppercase tracking-widest mb-1" style={{ fontSize: '10px' }}>Head Office</span>
                      <p className="text-white-80 fw-medium small mb-0 leading-relaxed">2248 Madiwala Town, Manimajra, Chandigarh Pin code - 160101</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Connect */}
              <div className="mp-glass-card p-5 rounded-5 border-0 shadow-lg bg-light">
                <h4 className="h5 fw-black text-navy text-uppercase tracking-1 mb-4">Follow Our Journey</h4>
                <div className="d-flex gap-3">
                  <a href="https://www.facebook.com/p/Mountain-Packers-Movers-100090872461843/?locale=tl_PH" target="_blank" className="mp-social-icon-btn shadow-sm bg-white rounded-circle d-flex align-items-center justify-content-center text-navy transition-all" style={{ width: '45px', height: '45px' }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://x.com/PackersMountain" target="_blank" className="mp-social-icon-btn shadow-sm bg-white rounded-circle d-flex align-items-center justify-content-center text-navy transition-all" style={{ width: '45px', height: '45px' }}>
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/mountainpackers/" target="_blank" className="mp-social-icon-btn shadow-sm bg-white rounded-circle d-flex align-items-center justify-content-center text-navy transition-all" style={{ width: '45px', height: '45px' }}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10 sr vis d4 mt-5">
          <div className="mp-map-container rounded-5 overflow-hidden shadow-2xl border border-light" style={{ height: '500px' }}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="Mountain Packers Location"
              src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Chandigarh%20Pin%20code%20-%20160101+(Mountain%20Packers%20&amp;%20Movers)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
