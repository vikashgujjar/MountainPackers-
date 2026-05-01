import React from 'react';

const BranchSection = () => {
  const branches = [
    {
      title: "Chandigarh Head Office",
      mobile: "+91-9317718180",
      email: "mountainpackersmover@gmail.com",
      website: "www.mountainpackersmovers.in",
      address: "2248 Madiwala Town, Manimajra, Chandigarh Pin code - 160101",
      icon: "fa-building",
      vector: "/img/vectors/house.png"
    },
    {
      title: "Ludhiana Branch",
      mobile: "+91 9317718180",
      email: "mountainpackersmover@gmail.com",
      website: "www.mountainpackersmovers.in",
      address: "Plot No. B-29-2332-3A, Siwach Complex, Industrial Area- A, Ludhiana, Punjab 141008",
      icon: "fa-truck",
      vector: "/img/vectors/truck.png"
    },
    {
      title: "Jalandhar Branch",
      mobile: "+91 9317718180",
      email: "mountainpackersmover@gmail.com",
      website: "www.mountainpackersmovers.in",
      address: "152/1, near Tagore Hospital, Sangat Colony, Durga Colony, Jalandhar, Punjab 144001",
      icon: "fa-warehouse",
      vector: "/img/vectors/warehouse.png"
    },
    {
      title: "Shimla Branch",
      mobile: "+91 9317718180",
      email: "mountainpackersmover@gmail.com",
      website: "www.mountainpackersmovers.in",
      address: "Sco No: 5 Near Dimond Hotel, BCS New, Shimla",
      icon: "fa-mountain",
      vector: "/img/vectors/mountain.png"
    }
  ];

  return (
    <section className="mp-branch-section py-10 bg-white position-relative overflow-hidden">
      {/* Immersive Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-05 pointer-events-none">
        <div className="mp-dot-pattern w-100 h-100"></div>
      </div>

      <div className="container position-relative z-1">
        <div className="text-center mb-5 pb-5 sr vis d1">
          <div className="mp-eyebrow justify-content-center mp-letter-spacing-wide">Network Coverage</div>
          <h2 className="mp-stitle display-3 fw-black">Our <span className="text-red">Strategic Hubs.</span></h2>
          <p className="text-muted mt-3 h5 fw-normal max-w-600 mx-auto">Seamless relocation solutions across North India with certified precision and care.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {branches.map((b, i) => (
            <div key={i} className="col-lg-10 sr vis" style={{ transitionDelay: `${0.1 * i}s` }}>
              <div className="mp-list-item-premium bg-white shadow-lg rounded-5 overflow-hidden transition-all hover:shadow-2xl border border-light group mb-4">
                <div className="row g-0 align-items-stretch">
                  {/* Visual Side */}
                  <div className="col-md-4 position-relative overflow-hidden" style={{ minHeight: '250px' }}>
                    <div className="mp-vector-overlay-dark position-absolute inset-0 z-1 opacity-20"></div>
                    <img
                      src={b.vector}
                      alt={b.title}
                      className="w-100 h-100 object-fit-cover transition-all group-hover:scale-110"
                    />
                    <div className="position-absolute top-0 start-0 p-4 z-2">
                        <span className="mp-index-graphic text-navy mp-text-outline d-block">0{i+1}</span>
                    </div>


                  </div>

                  {/* Content Side */}
                  <div className="col-md-8 p-5 d-flex flex-column justify-content-center position-relative">
                    <div className="mp-list-accent position-absolute start-0 top-0 bottom-0 w-5px bg-red opacity-0 group-hover:opacity-100 transition-all"></div>

                    <div className="d-flex justify-content-between align-items-start mb-4">
                      <div>
                        <h4 className="h3 fw-black text-navy text-uppercase tracking-1 mb-1">{b.title}</h4>
                        <div className="d-flex gap-2">
                          {[1, 2, 3, 4, 5].map(star => <i key={star} className="fa fa-star text-amber small"></i>)}
                          <span className="small text-muted fw-bold ms-2">Certified Branch</span>
                        </div>
                      </div>
                      <div className="mp-icon-box-3d" style={{ background: 'var(--navy)', width: '50px', height: '50px' }}>
                        <i className={`fa ${b.icon} text-white h5 mb-0`}></i>
                      </div>
                    </div>

                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div className="d-flex align-items-start gap-3">
                          <div className="mp-mini-icon-circle bg-light text-red p-2 rounded-circle">
                            <i className="fa fa-phone small"></i>
                          </div>
                          <div>
                            <span className="d-block small fw-bold text-muted text-uppercase tracking-widest mb-1" style={{ fontSize: '9px' }}>Contact</span>
                            <a href={`tel:${b.mobile}`} className="text-navy h6 fw-bold text-decoration-none hover:text-red transition-all">{b.mobile}</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-start gap-3">
                          <div className="mp-mini-icon-circle bg-light text-red p-2 rounded-circle">
                            <i className="fa fa-envelope small"></i>
                          </div>
                          <div>
                            <span className="d-block small fw-bold text-muted text-uppercase tracking-widest mb-1" style={{ fontSize: '9px' }}>Email</span>
                            <a href={`mailto:${b.email}`} className="text-navy fw-bold text-decoration-none small d-block overflow-hidden text-truncate">{b.email}</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 pt-3 border-top">
                        <div className="d-flex align-items-start gap-3">
                          <div className="mp-mini-icon-circle bg-navy text-white p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ flex: '0 0 auto', width: '45px', height: '45px' }}>
                            <i className="fa fa-map-marker small"></i>
                          </div>
                          <div>
                            <span className="d-block small fw-bold text-muted text-uppercase tracking-widest mb-1" style={{ fontSize: '9px' }}>Address</span>
                            <p className="text-navy fw-medium h6 mb-0 leading-relaxed">{b.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




export default BranchSection;
