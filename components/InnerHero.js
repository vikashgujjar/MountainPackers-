import React from 'react';

const InnerHero = ({ title, subtitle, eyebrow = "Company Profile", bgImage = "/img/banner1.jpg", smallTitle = false }) => {
  return (
    <section className="mp-inner-hero mp-hero-center-stage position-relative overflow-hidden py-0">
      {/* Dynamic Background */}
      <div className="position-absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Background"
          className="w-100 h-100 object-fit-cover opacity-50 zoom-effect"
        />
        <div className="position-absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(8,20,58,0.7), rgba(8,20,58,0.95))' }}></div>
        <div className="mp-mesh-bg opacity-30"></div>
        <div className="mp-dot-pattern position-absolute inset-0 opacity-10"></div>
      </div>


      <div className="container position-relative z-2 py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 py-3">
            {/* Centered Badge */}
            <div className="mp-badge-premium d-inline-flex align-items-center px-4 py-2 rounded-pill bg-white-10 backdrop-blur border border-white-20 mb-5 sr vis d1 shadow-lg">
              <span className="mp-glow-dot me-3 pulse"></span>
              <span className="text-white small fw-bold mp-letter-spacing-wide text-uppercase">{eyebrow}</span>
            </div>

            {/* Giant Centered Title */}
            <h1 className="mp-hero-main-title mb-0 sr vis d2 text-shadow-premium">
              <span className="d-block text-white fw-black mb-n3 tracking-tight uppercase" style={{ lineHeight: smallTitle ? '1.2' : '0.8', fontSize: smallTitle ? 'clamp(24px, 4vw, 45px)' : 'clamp(50px, 10vw, 120px)', marginBottom: smallTitle ? '15px' : '' }}>{title}</span>
              <span className="d-block text-red fw-black display-2 tracking-tighter mp-text-outline uppercase" style={{ letterSpacing: '-2px' }}>{subtitle}</span>
            </h1>
          </div>


        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mp-scroll-indicator d-none d-lg-flex">
        <span className="small text-uppercase fw-bold tracking-widest">Explore</span>
        <div className="mp-mouse"></div>
      </div>

      {/* Bottom Cut */}
      <div className="mp-hero-bottom-cut"></div>
    </section>


  );
};

export default InnerHero;
