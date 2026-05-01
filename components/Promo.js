import React from 'react';

const Promo = () => {
  const promos = [
    { icon: 'fa-anchor', title: 'Affordable Services', desc: "We are the most affordable packers and movers services provider across the country." },
    { icon: 'fa-newspaper-o', title: 'Insurance Coverage', desc: "Full insurance coverage for your goods throughout the moving process — complete peace of mind." },
    { icon: 'fa-lock', title: 'Secure Shifting', desc: "We provide the most secure packing and moving services — your belongings are always protected." },
    { icon: 'fa-umbrella', title: '24/7 Support', desc: "Available round the clock for customer services & support — any day, any time, always here." },
    { icon: 'fa-bicycle', title: 'Fast Delivery', desc: "We always ensure your consignment is delivered on time within the promised duration." },
    { icon: 'fa-star', title: 'Rated #1 In India', desc: "Thousands of happy customers rate us #1 for reliability, safety, and value across India." }
  ];

  return (
    <section className="mp-promo py-5">
      <div className="container py-4">
        <div className="text-center mb-5 pb-2">
          <div className="mp-eyebrow justify-content-center">Our Advantages</div>
          <h2 className="mp-stitle text-center">Why We Stand <span className="r">Apart.</span></h2>
        </div>
        <div className="mp-promo-grid">
          {promos.map((p, i) => (
            <div key={i} className={`mp-pc sr vis ${i % 3 === 1 ? 'd1' : i % 3 === 2 ? 'd2' : ''}`}>
              <div className="mp-pic"><i className={`fa ${p.icon}`}></i></div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promo;
