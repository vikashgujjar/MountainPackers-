'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const WarehouseQuoteForm = ({ 
  title = "Storage Quote", 
  subtitle = "Request a customized plan", 
  icon = "fa-vault",
  moveType = "Warehouse Service Quote"
}) => {
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    duration: '',
    storageType: '',
    quantity: '',
    startDate: '',
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
    if (!formData.startDate) newErrors.startDate = 'Required';
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
        setFormData({ name: '', phone: '', duration: '', storageType: '', quantity: '', startDate: '' });
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
          <label>YOUR FULL NAME</label>
          <input type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} style={errors.name ? { borderColor: 'red' } : {}} />
        </div>
        <div className="mp-row2">
          <div className="mp-field">
            <label>PHONE NUMBER</label>
            <input type="tel" name="phone" placeholder="+91 00000 00000" value={formData.phone} onChange={handleChange} style={errors.phone ? { borderColor: 'red' } : {}} />
          </div>
          <div className="mp-field">
            <label>STORAGE DURATION</label>
            <select name="duration" value={formData.duration} onChange={handleChange}>
              <option value="">Select Duration</option>
              <option>Short Term (1-3 Months)</option>
              <option>Medium Term (3-12 Months)</option>
              <option>Long Term (1 Year+)</option>
            </select>
          </div>
        </div>
        <div className="mp-row2">
          <div className="mp-field">
            <label>STORAGE TYPE</label>
            <select name="storageType" value={formData.storageType} onChange={handleChange}>
              <option value="">Select Type</option>
              <option>Household Goods</option>
              <option>Office Inventory</option>
              <option>Vehicle Storage</option>
              <option>Commercial Stocks</option>
            </select>
          </div>
          <div className="mp-field">
            <label>QUANTITY</label>
            <input type="text" name="quantity" placeholder="Approx cubic feet" value={formData.quantity} onChange={handleChange} />
          </div>
        </div>
        <div className="mp-field">
          <label>STORAGE START DATE</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} onClick={handleDateClick} style={errors.startDate ? { borderColor: 'red' } : {}} />
        </div>
        <button type="submit" disabled={loader} className="mp-submit-btn">
          <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }} />
          {loader ? 'Sending...' : 'CALCULATE PLAN'}
        </button>
      </form>
    </div>
  );
};

export default WarehouseQuoteForm;
