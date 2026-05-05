'use client';
import React from 'react';

const PricingTable = () => {
  const rates = [
    { distance: "0 - 50 km", rk: "₹3,500 - 6,000", bhk1: "₹6,000 - 10,000", bhk2: "₹10,000 - 15,000", bhk3: "₹15,000 - 22,000" },
    { distance: "50 - 200 km", rk: "₹6,000 - 9,000", bhk1: "₹8,000 - 15,000", bhk2: "₹15,000 - 22,000", bhk3: "₹22,000 - 35,000" },
    { distance: "200 - 500 km", rk: "₹9,000 - 14,000", bhk1: "₹12,000 - 22,000", bhk2: "₹22,000 - 32,000", bhk3: "₹32,000 - 45,000" },
    { distance: "500 - 1000 km", rk: "₹12,000 - 18,000", bhk1: "₹18,000 - 30,000", bhk2: "₹30,000 - 45,000", bhk3: "₹45,000 - 65,000" },
  ];

  return (
    <section className="mp-pricing-section py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <span className="mp-pill mb-3">
             <span className="dot"></span> Fair Pricing
          </span>
          <h2 className="display-5 fw-bold text-navy mp-heading mt-2">
            Estimated <span className="text-brand">Moving Charges</span>
          </h2>
          <p className="text-muted mx-auto mp-body-text" style={{ maxWidth: '750px' }}>
            Get transparent estimates for <strong className="text-navy">Movers and Packers in Chandigarh</strong>. Final quotes depend on item volume and specific requirements for your <strong className="text-navy">Local House Shifting Services</strong>.
          </p>
        </div>

        <div className="card border-0 shadow-sm overflow-hidden rounded-4 border">
          <div className="table-responsive">
            <table className="table table-hover mb-0 align-middle">
              <thead className="bg-navy text-white text-uppercase small">
                <tr>
                  <th className="py-4 ps-4 border-0">Distance</th>
                  <th className="py-4 border-0">1 RK / Studio</th>
                  <th className="py-4 border-0">1 BHK Home</th>
                  <th className="py-4 border-0">2 BHK Home</th>
                  <th className="py-4 pe-4 border-0">3 BHK Home</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {rates.map((row, index) => (
                  <tr key={index} className="border-bottom">
                    <td className="py-4 ps-4 fw-bold text-navy">{row.distance}</td>
                    <td className="py-4 text-muted">{row.rk}</td>
                    <td className="py-4 text-muted">{row.bhk1}</td>
                    <td className="py-4 text-muted">{row.bhk2}</td>
                    <td className="py-4 pe-4 text-muted">{row.bhk3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-light p-4 d-flex justify-content-between align-items-center flex-wrap gap-3 border-top">
            <div className="small text-muted d-flex align-items-center">
              <i className="fa-solid fa-circle-info text-brand me-2"></i>
              Note: Above rates are indicative. Total cost includes packing material, labor, and GST.
            </div>
            <a href="/contact-us" className="fw-bold text-brand text-decoration-none mp-link-arrow">
              Get Exact Quote <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-navy { color: var(--navy); }
        .bg-navy { background-color: var(--navy); }
        .text-brand { color: var(--brand); }
        .bg-light { background-color: var(--bg); }
        .mp-heading { 
          font-family: var(--f-head); 
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }
        .mp-body-text {
          font-family: var(--f-body);
        }
        .mp-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--bg);
          padding: 6px 18px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--navy);
          border: 1px solid var(--border);
        }
        .mp-pill .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--amber);
          box-shadow: 0 0 8px var(--amber);
        }
        .mp-link-arrow {
          transition: transform 0.3s;
        }
        .mp-link-arrow:hover {
          color: var(--brand-dk);
        }
        .mp-link-arrow:hover i {
          transform: translateX(5px);
        }
      `}</style>
    </section>
  );
};

export default PricingTable;
