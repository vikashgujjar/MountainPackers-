import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="mp-about-detail-section py-5 bg-white position-relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-05 pointer-events-none">
        <div className="mp-dot-pattern w-100 h-100"></div>
      </div>
      
      <div className="container py-5 position-relative z-1">
        {/* Header Part */}
        <div className="text-center mb-5 pb-4 sr vis d1">
          <div className="mp-eyebrow justify-content-center mp-letter-spacing-wide">Company Profile</div>
          <h2 className="mp-stitle display-3 fw-black">
            Welcome to <br /><span className="r">Mountain Packers !</span>
          </h2>
        </div>

        <div className="row g-5 align-items-center">
          {/* Visual Side: Editorial Mosaic */}
          <div className="col-lg-6 sr vis d2">
            <div className="row g-4">
               <div className="col-6 mt-lg-5">
                  <div className="mp-img-lift overflow-hidden rounded-5 shadow-xl">
                    <img src="/img/instafeed/movers-and-packers-in-India.webp" alt="Service 1" 
                      className="img-fluid w-100" />
                  </div>
               </div>
               <div className="col-6">
                  <div className="mp-img-lift overflow-hidden rounded-5 shadow-2xl">
                    <img src="/img/about/Mountain-Packers-And-Movers-In-India.webp" alt="Main About" 
                      className="img-fluid w-100" />
                  </div>
               </div>
               <div className="col-12 mt-4">
                  <div className="mp-glass-stats p-5 rounded-5 d-flex justify-content-around align-items-center border-white-05 mp-border-gradient">
                      <div className="text-center">
                          <span className="d-block display-5 fw-black text-navy mb-0">12+</span>
                          <span className="small text-uppercase fw-bold text-red tracking-widest">Years Exp.</span>
                      </div>
                      <div className="vr h-100 mx-3 opacity-10"></div>
                      <div className="text-center">
                          <span className="d-block display-5 fw-black text-navy mb-0">120</span>
                          <span className="small text-uppercase fw-bold text-red tracking-widest">Projects</span>
                      </div>
                      <div className="vr h-100 mx-3 opacity-10"></div>
                      <div className="text-center">
                          <span className="d-block display-5 fw-black text-navy mb-0">30+</span>
                          <span className="small text-uppercase fw-bold text-red tracking-widest">Branches</span>
                      </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="col-lg-6 sr vis d3">
            <div className="ps-lg-5">
              <div className="border-start border-5 border-red ps-4 mb-5">
                <p className="h3 fw-black text-navy mb-3 mp-line-height-extra">
                  Certified Excellence in Global Packing & Moving.
                </p>
                <p className="text-muted mb-0 h6 fw-normal leading-relaxed">
                  Mountain Packers specializes in packing and moving, providing the most reliable services to our valuable clients at affordable charges. We offer the best packers and movers services and significant distance moving and are the world’s best packers and movers.
                </p>
              </div>

              <div className="bg-light p-5 rounded-5 position-relative overflow-hidden border-0 shadow-sm mb-5">
                <div className="position-absolute top-0 end-0 p-4 opacity-05 h1 fw-black display-1 text-red pointer-events-none">12</div>
                <h3 className="h4 fw-black text-navy text-uppercase mb-4 tracking-1">
                  THE BEST BECAUSE WE HAVE BEEN SERVING FOR <span className="text-red">OVER 12 YEARS!</span>
                </h3>
                <p className="text-secondary mb-3 leading-relaxed">
                  If you want to hire movers and packers in India? Then you have reached your destination undoubtedly because Mountain Moving and Packing Services is the most affordable. We deliver complete packing and moving services.
                </p>
                <p className="text-secondary mb-0 leading-relaxed italic border-start border-2 border-red-dk ps-3 ms-1 opacity-75">
                  We at Mountain packers and movers understand the importance of your emotions with your assets. Hence, we execute the moving procedure in the best possible way.
                </p>
              </div>

              <Link href="/our-branches" className="mp-hbtn d-inline-flex px-5 py-3">
                <span>View All Our Network</span> <i className="fa fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutSection;
