import React from 'react';

const Solutions = () => {
  const solutions = [
    { img: '/icons/International-movers-and-packers-in-India.png', title: 'International Moves', delay: '' },
    { img: '/icons/Domestic-Packers-And-Movers-in-India.png', title: 'Domestic Moves', delay: 'd1' },
    { img: '/icons/office-relocation-packers-and-movers-in-India.png', title: 'Office Moves', delay: 'd2' },
    { img: '/icons/vehicle-Transportation-services-in-India.png', title: 'Warehouse', delay: 'd3' },
    { img: '/icons/vehicle-transfer-services-in-India.png', title: 'Vehicle Transfer', delay: 'd4' }
  ];

  return (
    <section className="mp-solutions">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="mp-eyebrow sr vis" style={{ justifyContent: 'center' }}>Solutions</div>
          <h2 className="mp-stitle sr vis d1" style={{ textAlign: 'center' }}>Removal <span className="r">Solutions.</span></h2>
          <p className="mp-ssub sr vis d2" style={{ textAlign: 'center', margin: '14px auto 0', maxWidth: '480px' }}>Mountain Packers
            &amp; Movers offers excellence to each of its clients.</p>
        </div>
        <div className="mp-sol-grid">
          {solutions.map((sol, i) => (
            <div key={i} className={`mp-si sr vis ${sol.delay}`}>
              <img src={sol.img} alt={sol.title} />
              <h5>{sol.title}</h5>
              <div className="mp-sil">
                <a href="/about-us">Read More</a>
                <span className="mp-sil-sep">|</span>
                <a href="/contact-us">Get Quote</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
