'use client';
import React, { useState, useEffect, useCallback } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    { name: 'Anubhav Singh', role: 'Verified Client', text: "I work in a service industry too and I can stamp with guarantee that your company is the best and your workforce along with supervisors are asset to your company. Your company has got permanent customer for life.. " },
    { name: 'Sumit khan', role: 'CEO, TOPSMMPANEL.COM', text: "I must say that the employees of the Mountain Packers & Movers packers & Movers company are very skilled and courteous. The car was transported to a new location well before time. I will definitely prefer and recommend their services to everyone for their car moving needs." },
    { name: 'Sanjay Verma', role: 'HDFC Bank Manager', text: "I work in a service industry too and I can stamp with guarantee that your company is the best and your workforce along with supervisors are asset to your company. Your company has got permanent customer for life." },
    { name: 'Vipin', role: 'Army Man', text: "Mountain packers & Movers in Chandigarh relocated my precious car to a new location in Delhi without any damage. They were prompt and fast to look after all my vehicle shifting requirements and made it a point to cover every possible part of the car with high quality packing materials." }
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="mp-testi" style={{ padding: '100px 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="mp-eyebrow" style={{
            display: 'inline-flex',
            justifyContent: 'center',
            background: 'rgba(2, 20, 157, 0.05)',
            color: 'var(--red)',
            padding: '8px 20px',
            borderRadius: '50px',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '15px'
          }}>
            Testimonials
          </div>
          <h2 className="mp-stitle" style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '800',
            color: 'var(--navy)',
            fontFamily: 'var(--f-head)',
            textTransform: 'uppercase',
            lineHeight: '1.1'
          }}>
            what client’s <span style={{ color: 'var(--red)' }}>say</span>
          </h2>
        </div>

        <div className="mp-tw" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <div className="mp-tnav">
            <button
              className="fa fa-angle-left testi_prev"
              onClick={prevSlide}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#fff',
                border: 'none',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                fontSize: '20px',
                color: 'var(--navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--navy)'; }}
            ></button>
            <button
              className="fa fa-angle-right testi_next"
              onClick={nextSlide}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#fff',
                border: 'none',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                fontSize: '20px',
                color: 'var(--navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--navy)'; }}
            ></button>
          </div>

          <div className="client-details-content" style={{ overflow: 'hidden', padding: '20px 0' }}>
            <div className="client_details" style={{
              display: 'flex',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translateX(-${activeIndex * 100}%)`
            }}>
              {reviews.map((r, i) => (
                <div key={i} className="mp-tcard" style={{
                  flex: '0 0 100%',
                  padding: '40px',
                  textAlign: 'center',
                  background: '#fff',
                  borderRadius: '24px',
                  boxShadow: '0 20px 60px rgba(8, 20, 58, 0.05)',
                  border: '1px solid var(--border)'
                }}>
                  <div className="mp-ts" style={{ color: 'var(--amber)', fontSize: '24px', marginBottom: '25px' }}>
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <q style={{
                    fontSize: '20px',
                    color: 'var(--navy)',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    display: 'block',
                    marginBottom: '30px',
                    fontFamily: 'inherit'
                  }}>
                    {r.text}
                  </q>
                  <div className="mp-ta">
                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--navy)', margin: '0 0 5px' }}>{r.name}</h3>
                    {r.role && <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{r.role}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
            {reviews.map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: i === activeIndex ? '30px' : '10px',
                  height: '10px',
                  borderRadius: '10px',
                  background: i === activeIndex ? 'var(--red)' : 'rgba(2, 20, 157, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.4s var(--ease)'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
