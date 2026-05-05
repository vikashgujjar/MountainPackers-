'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const HeroQuoteForm = ({ 
  title = "Get A Quote", 
  subtitle = "Free, no-obligation estimate", 
  icon = "fa-truck-moving",
  moveType = "General Quote Request"
}) => {
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shiftingType: '',
    fromCity: '',
    toCity: '',
    date: '',
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
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    if (!formData.fromCity.trim()) newErrors.fromCity = 'Required';
    if (!formData.toCity.trim()) newErrors.toCity = 'Required';
    if (!formData.date) newErrors.date = 'Required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all required fields.',
        confirmButtonColor: '#004F80',
      });
      return;
    }

    setLoader(true);

    const payload = {
      company: "mountainpackers",
      company_name: "Mountain Packers and Movers",
      moveType: moveType,
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
          title: "Request Sent!",
          text: "We have received your request and will contact you shortly.",
          confirmButtonColor: '#004F80',
        });
        setFormData({
          name: '',
          phone: '',
          shiftingType: '',
          fromCity: '',
          toCity: '',
          date: '',
        });
      } else {
        Swal.fire("Error", "Failed to submit request.", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Something went wrong.", "error");
    } finally {
      setLoader(false);
    }
  };

  const handleDateClick = (e) => {
    try {
      e.target.showPicker();
    } catch (err) {
      // Fallback
    }
  };

  return (
    <div className="mp-hero-qcard">
      <div className="mp-qcard-head">
        <i className={`fa-solid ${icon}`} />
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mp-qcard-body">
        <div className="mp-field">
          <label>YOUR FULL NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            style={errors.name ? { borderColor: 'red' } : {}}
          />
        </div>

        <div className="mp-row2">
          <div className="mp-field">
            <label>PHONE NUMBER</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 00000 00000"
              value={formData.phone}
              onChange={handleChange}
              style={errors.phone ? { borderColor: 'red' } : {}}
            />
          </div>
          <div className="mp-field">
            <label>SHIFTING TYPE</label>
            <select
              name="shiftingType"
              value={formData.shiftingType}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option>1 BHK Shifting</option>
              <option>2 BHK Shifting</option>
              <option>3+ BHK Shifting</option>
              <option>Villa / Bungalow</option>
              <option>Office Relocation</option>
              <option>Vehicle Transport</option>
            </select>
          </div>
        </div>

        <div className="mp-row2">
          <div className="mp-field">
            <label>FROM CITY</label>
            <input
              type="text"
              name="fromCity"
              placeholder="Pickup location"
              value={formData.fromCity}
              onChange={handleChange}
              style={errors.fromCity ? { borderColor: 'red' } : {}}
            />
          </div>
          <div className="mp-field">
            <label>TO CITY</label>
            <input
              type="text"
              name="toCity"
              placeholder="Drop location"
              value={formData.toCity}
              onChange={handleChange}
              style={errors.toCity ? { borderColor: 'red' } : {}}
            />
          </div>
        </div>

        <div className="mp-field">
          <label>PREFERRED DATE</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            onClick={handleDateClick}
            style={errors.date ? { borderColor: 'red' } : {}}
          />
        </div>

        <button type="submit" disabled={loader} className="mp-submit-btn">
          <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }} />
          {loader ? 'Sending...' : 'CALCULATE ESTIMATE'}
        </button>
      </form>
    </div>
  );
};

export default HeroQuoteForm;
