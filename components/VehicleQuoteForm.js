'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const VehicleQuoteForm = () => {
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleType: '',
    pickupCity: '',
    dropCity: '',
    preferredDate: '',
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
    if (!formData.pickupCity.trim()) newErrors.pickupCity = 'Required';
    if (!formData.dropCity.trim()) newErrors.dropCity = 'Required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Info',
        text: 'Please fill in all required fields.',
        confirmButtonColor: '#004F80',
      });
      return;
    }

    setLoader(true);

    const payload = {
      company: "mountainpackers",
      company_name: "Mountain Packers and Movers",
      moveType: "Vehicle Transportation Quote",
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
          title: "Quote Requested!",
          text: "We have received your vehicle transport request.",
          confirmButtonColor: '#004F80',
        });
        setFormData({
          name: '',
          phone: '',
          vehicleType: '',
          pickupCity: '',
          dropCity: '',
          preferredDate: '',
        });
      } else {
        Swal.fire("Error", "Failed to send request.", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Network error.", "error");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="mp-hero-qcard">
      <div className="mp-qcard-head">
        <i className="fa-solid fa-car" />
        <div>
          <h3>Book Transport</h3>
          <p>Get an instant free quote</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mp-qcard-body">
        <div className="mp-field">
          <label>YOUR NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
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
            <label>VEHICLE TYPE</label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
            >
              <option value="">Select Vehicle</option>
              <option>Car (Sedan)</option>
              <option>Car (SUV)</option>
              <option>Bike / Two-Wheeler</option>
              <option>Luxury Vehicle</option>
            </select>
          </div>
        </div>

        <div className="mp-row2">
          <div className="mp-field">
            <label>PICKUP CITY</label>
            <input
              type="text"
              name="pickupCity"
              placeholder="From city"
              value={formData.pickupCity}
              onChange={handleChange}
              style={errors.pickupCity ? { borderColor: 'red' } : {}}
            />
          </div>
          <div className="mp-field">
            <label>DROP CITY</label>
            <input
              type="text"
              name="dropCity"
              placeholder="To city"
              value={formData.dropCity}
              onChange={handleChange}
              style={errors.dropCity ? { borderColor: 'red' } : {}}
            />
          </div>
        </div>

        <div className="mp-field">
          <label>PREFERRED DATE</label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            onClick={(e) => { try { e.target.showPicker(); } catch (err) { } }}
          />
        </div>

        <button type="submit" disabled={loader} className="mp-submit-btn">
          <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }} />
          {loader ? 'Sending...' : 'Get Free Quote'}
        </button>
      </form>
    </div>
  );
};

export default VehicleQuoteForm;
