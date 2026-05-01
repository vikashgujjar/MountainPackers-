import React from 'react';
import Link from 'next/link';

const Services = () => {
  const servicesData = [
    {
      num: '01',
      title: 'Domestic Shifting',
      link: '/Domestic-Shifting-Services',
      img: '/img/about/packers-and-movers-for-domestic-shifting.webp',
      desc: 'Are you looking for the best packers and movers for domestic shifting? Then, Mountain Packers & Movers can be the most affordable and believable packers and movers in India.'
    },
    {
      num: '02',
      title: 'Corporate Relocation',
      link: '/Corporate-Relocation-Services',
      img: '/img/about/packers-and-movers-for-Corporate-Relocation.webp',
      desc: 'Are you looking for the best packers and movers for Corporate Relocation? Then, you should know that Mountain Packers & Movers can always be an ideal option for you.'
    },
    {
      num: '03',
      title: 'Local Shifting',
      link: '/Local-House-Shifting-Services',
      img: '/img/about/packers-and-movers-for-local-shifting.webp',
      desc: 'Is it true that you are searching for the best packers and movers for local shifting or local shifting services near me to make your moving process easier?'
    },
    {
      num: '04',
      title: 'Car & Bike Transportation',
      link: '/Car-Bike-Transportation',
      img: '/img/about/Car-and-bike-transportation-services.webp',
      desc: 'Are you looking for the most secure car & bike transportation services or any other transportation in India? Then, start your moving with Mountain Packers.'
    },
    {
      num: '05',
      title: 'Packing and Unpacking',
      link: '/Packing-Unpacking-Services',
      img: '/img/about/packing-and-unpacking-services.webp',
      desc: 'Do you want to hire the best packing and unpacking services? As you know, proper packing and unpacking of your items is essential to ensure safety.'
    },
    {
      num: '06',
      title: 'Warehouse Service',
      link: '/Warehouse-Service',
      img: '/img/about/Warehouse-Service.webp',
      desc: 'Are you looking for the most secure warehouse services? Then, Mountain packers & Movers can be an ideal decision for you. We are a renowned name.'
    }
  ];

  return (
    <section className="mp-services">
      <div className="container">
        <div className="mp-svc-header">
          <div>
            <div className="mp-eyebrow sr vis">Our Services</div>
            <h2 className="mp-stitle sr vis d1">What We <span className="r">Offer.</span></h2>
          </div>
          <p className="mp-ssub sr vis d2" style={{ maxWidth: '360px' }}>Secure packing and moving at affordable prices,
            available 24/7 across all of India.</p>
        </div>
        <div className="mp-svc-grid">
          {servicesData.map((svc, index) => (
            <div key={index} className={`mp-sc sr vis ${index % 3 === 1 ? 'd1' : index % 3 === 2 ? 'd2' : ''}`}>
              <div className="mp-sc-num">{svc.num}</div>
              <div className="mp-sc-img"><img src={svc.img} alt={svc.title} /></div>
              <div className="mp-sc-body">
                <h4><Link href={svc.link}>{svc.title}</Link></h4>
                <p>{svc.desc}</p>
                <Link href={svc.link} className="mp-sc-link">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
