import React from 'react';

const Features = () => {
  return (
    <section className="mp-features-luxury-premium py-10 bg-navy text-white position-relative overflow-hidden">
      {/* Immersive Decorative Elements */}
      <div className="mp-glow-amber position-absolute top-0 start-0 opacity-10 blur-100 rounded-circle"></div>
      <div className="mp-glow-red position-absolute bottom-0 end-0 opacity-05 blur-100 rounded-circle"></div>
      <div className="mp-dot-pattern position-absolute inset-0 opacity-05"></div>
      <div className="mp-mesh-bg opacity-20"></div>

      <div className="container py-5 position-relative z-2">
        <div className="row justify-content-center mb-5 pb-4 sr vis d1">
          <div className="col-lg-8 text-center">
            <div className="mp-eyebrow justify-content-center mb-3 text-white mp-letter-spacing-wide">Our Core Values</div>
            <h2 className="mp-stitle text-white display-3 fw-black">Engineered for <span className="text-red">Excellence.</span></h2>
          </div>
        </div>

        <div className="row g-5">
          {[
            { icon: 'fa-shield', title: 'Fully Insured', desc: 'Every move is covered by comprehensive insurance, ensuring your absolute peace of mind.' },
            { icon: 'fa-clock-o', title: 'On-Time Delivery', desc: 'Precision-timed logistics backed by Indias largest transportation network.' },
            { icon: 'fa-users', title: 'Expert Team', desc: 'Trained specialists executing your relocation with surgical precision and care.' }
          ].map((f, i) => (
            <div key={i} className="col-lg-4 sr vis" style={{ transitionDelay: `${0.2 + i * 0.1}s` }}>
              <div className="mp-luxury-card-premium h-100 transition-all mp-border-gradient">
                <div className="mp-icon-box-3d mb-5">
                  <i className={`fa ${f.icon} h1 text-navy mb-0 transition-all`}></i>
                </div>
                <h3 className="h3 fw-black text-uppercase font-head tracking-2 mb-4">{f.title}</h3>
                <p className="text-white-50 leading-loose mb-0 h6 fw-normal mp-line-height-extra">{f.desc}</p>

                <div className="mt-5 pt-2">
                  <div className="w-25 h-1px bg-red opacity-50"></div>
                </div>

                <div className="mp-card-number font-head display-4 opacity-10 position-absolute bottom-0 end-0 p-4">{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Features;
