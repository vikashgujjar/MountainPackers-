'use client';
import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    { 
      q: "How far in advance should I book my move?", 
      a: "For the best experience with <strong class='text-brand'>Movers and Packers in Chandigarh</strong>, we recommend booking at least 7-10 days in advance, especially during peak season." 
    },
    { 
      q: "Are my goods insured during the move?", 
      a: "Yes, we provide comprehensive transit insurance for all our <strong class='text-brand'>Local House Shifting Services</strong> to ensure peace of mind." 
    },
    { 
      q: "How is the cost of my move calculated?", 
      a: "Costs are based on distance, volume of goods, and specific requirements like premium <strong class='text-brand'>Packing and Moving Services</strong>." 
    },
    { 
      q: "Do you offer packing materials and services?", 
      a: "Absolutely! Our <strong class='text-brand'>Movers And Packers</strong> team uses high-quality bubble wrap, crates, and corrugated sheets for maximum safety." 
    },
    { 
      q: "Can I track my shipment in real-time?", 
      a: "Yes, we offer live GPS tracking for all <strong class='text-brand'>Home Shifting Services Near Me</strong> so you always know where your belongings are." 
    },
    { 
      q: "Do you handle international relocations?", 
      a: "Yes, besides <strong class='text-brand'>Local Shifting Services</strong>, we also specialize in domestic and international shifting with complete customs support." 
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mp-faq-section py-5 bg-light border-top">
      <div className="container">
        <div className="text-center mb-5">
          <span className="mp-pill mb-3">
             <span className="dot"></span> FAQ Help Center
          </span>
          <h2 className="display-5 fw-bold text-navy mp-heading mt-2">
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>
          <p className="text-muted mp-body-text">Everything you need to know about our relocation services.</p>
        </div>

        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <div className="d-flex flex-column gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-3 shadow-sm border overflow-hidden">
                <button 
                  className="w-100 p-4 text-start bg-transparent border-0 d-flex justify-content-between align-items-center transition-all"
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={activeIndex === i}
                  style={{ outline: 'none' }}
                >
                  <span className={`fw-bold mp-heading fs-5 ${activeIndex === i ? 'text-brand' : 'text-navy'}`} style={{ textTransform: 'none', letterSpacing: '0' }}>{faq.q}</span>
                  <div className={`faq-icon d-flex align-items-center justify-content-center rounded-circle ${activeIndex === i ? 'bg-brand text-white' : 'bg-light text-muted'}`} style={{ width: '32px', height: '32px' }}>
                    <i className={`fa-solid ${activeIndex === i ? 'fa-minus' : 'fa-plus'} small`}></i>
                  </div>
                </button>
                <div 
                  className={`px-4 pb-4 text-muted mp-body-text overflow-hidden transition-all duration-300 ${activeIndex === i ? 'max-h-500 opacity-100' : 'max-h-0 opacity-0'}`}
                  dangerouslySetInnerHTML={{ __html: faq.a }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-navy { color: var(--navy); }
        .text-brand { color: var(--brand); }
        .bg-brand { background-color: var(--brand); }
        .bg-light { background-color: var(--bg); }
        .mp-heading { 
          font-family: var(--f-head); 
          text-transform: uppercase;
        }
        .mp-body-text { font-family: var(--f-body); }
        .mp-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--white);
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
        .max-h-0 { max-height: 0; padding-bottom: 0 !important; }
        .max-h-500 { max-height: 500px; }
        .transition-all { transition: all 0.3s ease-in-out; }
      `}</style>
    </section>
  );
};

export default FAQSection;
