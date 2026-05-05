'use client';
import React from 'react';

const WhyChooseUs = () => {
  const features = [
    { title: "Verified Labor", desc: "Background checked and trained workforce." },
    { title: "Transit Insurance", desc: "Full coverage for any unforeseen damages." },
    { title: "GPS Tracking", desc: "Live updates of your shipment's location." },
    { title: "No Hidden Costs", desc: "Transparent billing with zero surprise charges." },
  ];

  return (
    <section className="mp-why-section py-5 bg-white border-top">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Side: Content */}
          <div className="col-lg-7">
            <div className="mb-4">
              <span className="mp-pill mb-3">
                 <span className="dot"></span> Why Choose Us
              </span>
              <h2 className="display-6 fw-bold text-navy mp-heading mt-2">
                Mountain Packers <span className="text-brand">Relocation Advantage</span>
              </h2>
            </div>
            
            <div className="text-muted mb-5 mp-body-text">
              <p className="mb-4">
                When it comes to <strong className="text-navy">Packing and Moving Services</strong>, choosing the right partner is crucial. Mountain Packers stands out as one of the most reliable <strong className="text-brand">Movers And Packers</strong> in Chandigarh, offering a comprehensive range of shifting services tailored to your specific needs.
              </p>
              <p>
                Our commitment to excellence is reflected in our professional approach to <strong className="text-navy">Local Shifting Services</strong>. We use premium packing materials to ensure the absolute safety of your fragile items. Whether you are searching for <strong className="text-brand">Movers and Packers Near me</strong> or planning a long-distance move, our team ensures a seamless transition.
              </p>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div className="p-4 rounded-4 shadow-sm border border-light h-100 bg-light-alt">
                  <div className="rounded-circle bg-navy d-flex align-items-center justify-content-center mb-3" style={{ width: '45px', height: '45px' }}>
                    <i className="fa-solid fa-bullseye text-white"></i>
                  </div>
                  <h4 className="fw-bold text-navy mp-heading small-heading">Our Mission</h4>
                  <p className="text-muted small mb-0">
                    To provide world-class <strong className="text-dark">House Shifting Services Near Me</strong> by integrating advanced technology and customer-centric values.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-4 rounded-4 shadow-sm border border-light h-100 bg-light-alt">
                  <div className="rounded-circle bg-brand d-flex align-items-center justify-content-center mb-3" style={{ width: '45px', height: '45px' }}>
                    <i className="fa-solid fa-eye text-white"></i>
                  </div>
                  <h4 className="fw-bold text-navy mp-heading small-heading">Our Vision</h4>
                  <p className="text-muted small mb-0">
                    To become India's most trusted partner for <strong className="text-dark">Warehouse Services</strong> and <strong className="text-dark">Household Storage Services</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Features Card */}
          <div className="col-lg-5">
            <div className="bg-navy p-5 rounded-4 text-white shadow-lg position-relative overflow-hidden">
              <div className="position-absolute top-0 end-0 p-4 opacity-10">
                <i className="fa-solid fa-shield-halved display-1"></i>
              </div>
              <h3 className="fw-bold mb-4 mp-heading text-white">Premium Features</h3>
              <div className="d-flex flex-column gap-4">
                {features.map((f, i) => (
                  <div key={i} className="d-flex gap-3 align-items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-amber rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                        <i className="fa-solid fa-check small text-navy"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1 text-white">{f.title}</h6>
                      <p className="small opacity-75 mb-0">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 rounded-3 text-center border border-white border-opacity-10" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <p className="small mb-2 opacity-50 text-uppercase tracking-wider">Top Rated Services</p>
                <div className="mt-2 small fw-bold">
                  Reliable <strong className="text-amber">Home Shifting Services Near Me</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-navy { color: var(--navy); }
        .bg-navy { background-color: var(--navy); }
        .text-brand { color: var(--brand); }
        .bg-brand { background-color: var(--brand); }
        .text-amber { color: var(--amber); }
        .bg-amber { background-color: var(--amber); }
        .bg-light-alt { background-color: var(--bg); }
        .mp-heading { 
          font-family: var(--f-head); 
          text-transform: uppercase;
        }
        .small-heading { font-size: 18px; letter-spacing: 1px; }
        .mp-body-text { font-family: var(--f-body); font-size: 16px; line-height: 1.8; }
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
        .tracking-wider { letter-spacing: 2px; }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
