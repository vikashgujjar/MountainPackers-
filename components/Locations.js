import React from 'react';

const Locations = () => {
  const locations = [
    { name: 'Chandigarh', link: '/packers-and-movers-in-chandigarh' },
    { name: 'Panchkula', link: '/packers-and-movers-in-panchkula' },
    { name: 'Mohali', link: '/packers-and-movers-in-mohali' },
    { name: 'Kurukshetra', link: '/packers-and-movers-in-kurukshetra' },
    { name: 'Solan', link: '/packers-and-movers-in-solan' },
    { name: 'Shimla', link: '/packers-and-movers-in-shimla' },
    { name: 'Dharamshala', link: '/packers-and-movers-in-dharamshala' },
    { name: 'Mandi', link: '/packers-and-movers-in-mandi' },
    { name: 'Himachal Pradesh', link: '/packers-and-movers-in-himachal-pardesh' },
    { name: 'Ludhiana', link: '/packers-and-movers-in-ludhiana' },
    { name: 'Jalandhar', link: '/packers-and-movers-in-jalandhar' },
    { name: 'Hoshiarpur', link: '/packers-and-movers-in-hoshiarpur' }
  ];

  return (
    <section className="mp-locs">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center' }}>
          <div className="mp-eyebrow sr vis" style={{ justifyContent: 'center' }}>Pan India Presence</div>
          <h2 className="mp-stitle sr vis d1" style={{ textAlign: 'center' }}>Our Services <span className="r">In India.</span></h2>
        </div>
        <div className="mp-locs-grid">
          {locations.map((loc, i) => (
            <div key={i} className={`mp-loc sr vis ${i % 4 === 1 ? 'd1' : i % 4 === 2 ? 'd2' : i % 4 === 3 ? 'd3' : ''}`}>
              <a href={loc.link}>
                <i className="bx bx-location-plus"></i>
                <span>Packers and Movers in {loc.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
