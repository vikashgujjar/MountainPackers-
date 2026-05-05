'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CorporateQuoteForm = ({ 
  title = "Relocation Quote", 
  subtitle = "Get a customized corporate plan", 
  icon = "fa-building",
  moveType = "Corporate Relocation Quote"
}) => {
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    officeSize: '',
    origin: '',
    destination: '',
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
    if (!formData.date) newErrors.date = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      Swal.fire({ icon: 'error', title: 'Validation Error', text: 'Please fill in all required fields.', confirmButtonColor: '#004F80' });
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
      const response = await fetch("https://mail.futuretouch.org/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        await Swal.fire({ icon: "success", title: "Request Sent!", text: "We have received your request and will contact you shortly.", confirmButtonColor: '#004F80' });
        setFormData({ name: '', phone: '', officeSize: '', origin: '', destination: '', date: '' });
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
    try { e.target.showPicker(); } catch (err) {}
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
          <label>CONTACT NAME</label>
          <input type="text" name="name" placeholder="Authorized person" value={formData.name} onChange={handleChange} style={errors.name ? { borderColor: 'red' } : {}} />
        </div>
        <div className="mp-row2">
          <div className="mp-field">
            <label>WORK PHONE</label>
            <input type="tel" name="phone" placeholder="+91 00000 00000" value={formData.phone} onChange={handleChange} style={errors.phone ? { borderColor: 'red' } : {}} />
          </div>
          <div className="mp-field">
            <label>OFFICE SIZE</label>
            <select name="officeSize" value={formData.officeSize} onChange={handleChange}>
              <option value="">Select Office Size</option>
              <option>Small Office (5-10 Staff)</option>
              <option>Medium (10-50 Staff)</option>
              <option>Large Enterprise</option>
              <option>IT / Server Room</option>
            </select>
          </div>
        </div>
        <div className="mp-row2">
          <div className="mp-field">
            <label>ORIGIN OFFICE</label>
            <input type="text" name="origin" placeholder="Current location" value={formData.origin} onChange={handleChange} />
          </div>
          <div className="mp-field">
            <label>NEW OFFICE</label>
            <input type="text" name="destination" placeholder="Destination" value={formData.destination} onChange={handleChange} />
          </div>
        </div>
        <div className="mp-field">
          <label>TARGET DATE</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} onClick={handleDateClick} style={errors.date ? { borderColor: 'red' } : {}} />
        </div>
        <button type="submit" disabled={loader} className="mp-submit-btn">
          <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }} />
          {loader ? 'Sending...' : 'GET CORPORATE ESTIMATE'}
        </button>
      </form>
    </div>
  );
};

export default CorporateQuoteForm;
