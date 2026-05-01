import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Best Warehouse Services In Chandigarh - Mountain Packers',
  description:
    'Mountain packers in Chandigarh is an organization where you can get the best and most secure warehouse services in Chandigarh at an affordable charge.',
  keywords:
    'warehouse service in Chandigarh, best warehouse services in Chandigarh, hire affordable warehouse services in Chandigarh, warehouse company in Chandigarh, best storage services in Chandigarh',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/Warehouse-Service.html',
  },
  openGraph: {
    title: 'Best Warehouse Services In Chandigarh - Mountain Packers',
    description:
      'Mountain packers in Chandigarh is an organization where you can get the best and most secure warehouse services in Chandigarh at an affordable charge.',
    url: 'https://www.mountainpackersmovers.in/Warehouse-Service.html',
    siteName: 'Mountain Packers and Movers',
    images: [
      {
        url: 'https://mountainpackersmovers.in/img/MountainpackersandmoverschandigarhIndia.webp',
        alt: 'Mountain Packers',
      },
    ],
    type: 'website',
  },
};

/* ─── Static data ─────────────────────────────────── */

const serviceLinks = [
  { href: '/Domestic-Shifting-Services', label: 'Domestic Shifting Services' },
  { href: '/Corporate-Relocation-Services', label: 'Corporate Relocation Services' },
  { href: '/Local-House-Shifting-Services', label: 'Local Shifting Services' },
  { href: '/Car-Bike-Transportation', label: 'Car & Bike Transportation' },
  { href: '/Packing-Unpacking-Services', label: 'Packing & Unpacking Services' },
  { href: '/Warehouse-Service', label: 'Warehouse Service' },
];

const branchLinks = [
  { href: '/packers-and-movers-in-chandigarh', label: 'Packers and Movers in Chandigarh' },
  { href: '/packers-and-movers-in-panchkula', label: 'Packers and Movers in Panchkula' },
  { href: '/packers-and-movers-in-mohali', label: 'Packers and Movers in Mohali' },
  { href: '/packers-and-movers-in-kurukshetra', label: 'Packers and Movers in Kurukshetra' },
  { href: '/packers-and-movers-in-solan', label: 'Packers and Movers In Solan' },
  { href: '/packers-and-movers-in-shimla', label: 'Packers and Movers in Shimla' },
  { href: '/packers-and-movers-in-dharamshala', label: 'Packers and Movers in Dharamshala' },
  { href: '/packers-and-movers-in-mandi', label: 'Packers and Movers in Mandi' },
  { href: '/packers-and-movers-in-himachal-pardesh', label: 'Packers and Movers in Himachal Pardesh' },
  { href: '/packers-and-movers-in-ludhiana', label: 'Packers and Movers In Ludhiana' },
  { href: '/packers-and-movers-in-jalandhar', label: 'Packers and Movers in Jalandhar' },
  { href: '/packers-and-movers-in-hoshiarpur', label: 'Packers and Movers In Hoshiarpur' },
];

const whyCards = [
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: 'We prioritize timely delivery and ensure consignment is delivered within the given timeframe.' },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'We ensure proper packing of your items for their security throughout the moving process.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'We have a team of skilled professionals who deliver satisfactory packing and moving services for you.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'To address your concerns about the safety of your belongings, we offer SMS alerts and live tracking services to keep you updated.' },
  { icon: 'fa-indian-rupee-sign', title: 'AFFORDABLE SERVICES', desc: 'Our specialized services are quite affordable and are very easy to integrate into your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'Our highly skilled drivers and experts can complete your entire move without causing any damages.' },
];

const processSteps = [
  { num: '01', title: 'Space Analysis', desc: 'We assess the volume of your goods to provide the most cost-effective storage plan in our modern facilities.' },
  { num: '02', title: 'Protective Wrap', desc: 'Every item is moisture-proofed and dust-protected before being placed in the warehouse to ensure zero aging.' },
  { num: '03', title: 'Vaulted Storage', desc: 'Your goods are stored in climate-controlled, pest-protected vaults with systematic labeling for easy retrieval.' },
  { num: '04', title: 'Active Guarding', desc: '24/7 CCTV surveillance and physical guarding ensure your valuable assets remain safe until you need them.' },
];

const sidebarStats = [
  { icon: 'fa-warehouse', n: '1.5 Lakh', l: 'Sq. Ft. Storage' },
  { icon: 'fa-video', n: '24/7', l: 'CCTV Monitoring' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function WarehouseServicePage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/service/warehouse-services-in-Chandigarh.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Secure, Waterproof &amp; Guarded
            </div>

            <h1 className="mp-hero-title">
              Safe <span className="amber">Warehouse</span>
              <span className="outline">Storage</span>
            </h1>

            <p className="mp-hero-sub">
              Industry-leading storage solutions in Chandigarh. From household items 
              to corporate assets, we provide a clean, secure, and climate-controlled 
              environment for your belongings.
            </p>

            <div className="mp-hero-btns">
              <Link href="/contact-us" className="mp-btn-primary">
                <i className="fa-solid fa-file-alt" /> Get Free Quote
              </Link>
              <a href="tel:+919317718180" className="mp-btn-ghost">
                <i className="fa-solid fa-phone" /> Call Now
              </a>
            </div>
          </div>

          {/* Right — Quote Card */}
          <div className="mp-hero-qcard">
            <div className="mp-qcard-head">
              <i className="fa-solid fa-vault" />
              <div>
                <h3>Storage Quote</h3>
                <p>Request a customized plan</p>
              </div>
            </div>
            <div className="mp-qcard-body">
              <div className="mp-field">
                <label>Full Name</label>
                <input type="text" placeholder="Enter name" />
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>
                <div className="mp-field">
                  <label>Storage Duration</label>
                  <select defaultValue="">
                    <option value="" disabled>Select Duration</option>
                    <option>Short Term (1-3 Months)</option>
                    <option>Medium Term (3-12 Months)</option>
                    <option>Long Term (1 Year+)</option>
                  </select>
                </div>
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Storage Type</label>
                  <select defaultValue="">
                    <option value="" disabled>Select Type</option>
                    <option>Household Goods</option>
                    <option>Office Inventory</option>
                    <option>Vehicle Storage</option>
                    <option>Commercial Stocks</option>
                  </select>
                </div>
                <div className="mp-field">
                  <label>Quantity</label>
                  <input type="text" placeholder="Approx cubic feet" />
                </div>
              </div>

              <div className="mp-field">
                <label>Storage Start Date</label>
                <input type="date" />
              </div>

              <button className="mp-submit-btn">
                <i className="fa-solid fa-shield-halved" style={{ marginRight: '8px' }} />
                Calculate Storage Plan
              </button>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="mp-hero-wave">
          <svg viewBox="0 0 1200 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C200,70 400,0 600,50 C800,100 1000,10 1200,40 L1200,70 L0,70 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ══════════════ MAIN CONTENT ══════════════ */}
      <section className="mp-content-section mt-5">
        <div className="mp-container">
          <div className="mp-layout">

            {/* ── Left Main ── */}
            <div className="mp-main">

              {/* Featured Image */}
              <div className="mp-featured-img sr">
                <Image
                  src="/img/service/warehouse-services-in-Chandigarh.webp"
                  alt="warehouse services in Chandigarh"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-lock" /> 24/7 Secured
                </div>
                <div className="mp-img-tag">✓ Climate Controlled</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Professional Storage</div>
                <h1 className="mp-section-title">
                  BEST <span className="r">WAREHOUSE SERVICES</span>
                  <br />IN <span className="a">CHANDIGARH</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Are you looking for the{' '}
                  <strong>
                    <Link href="/Warehouse-Service">
                      best warehouse services in Chandigarh
                    </Link>
                  </strong>{' '}
                  or want to hire affordable warehousing services? Then, Mountain warehouse company
                  in Chandigarh can be an ideal decision for warehouse and storage services.
                  Mountain packers in Chandigarh is an organization where you can get the best and
                  most secure <strong>warehouse services in Chandigarh</strong> at an affordable
                  charge. We are a renowned name in the field warehouse or storage service provider
                  in Chandigarh. We have a crew of experts with huge experience in conveying the
                  the best storage services in Chandigarh.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  We are one of the top warehouse service providers in Chandigarh and are furnished
                  with a wide range of warehousing services. Our warehouses are available in
                  different parts of Chandigarh and across the country. Our Warehouses are totally
                  secured guarded, and waterproof, and have a wide area that easily meets all your
                  storage essentials. In addition to this, our skilled and well-experienced team
                  associates provide quality warehousing structures for valuable items or assets. In
                  addition, when it comes to storing we utilize good quality packaging material to
                  guarantee the proper safeguard of your assets during short or long-term storage.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Our warehouse or storage services are universally admitted for their authentic
                  secure storage. We offer storage services at the most affordable price with lots
                  of additional storage advantages. If you want to store your valuable items for a
                  short to long duration in Chandigarh or across the country, then{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>{' '}
                  in Chandigarh can be one of the best choices ever.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/service/warehouse-in-chandigarh.webp"
                  alt="warehouse in chandigarh"
                  width={860}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: '400px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Why Choose section */}
              <div className="sr">
                <div className="mp-eyebrow">The Secure Edge</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  WHY CHOOSE US FOR WAREHOUSE SERVICES IN CHANDIGARH?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Mountain Packer &amp; Mover offers one of the most reliable{' '}
                  <a href="https://en.wikipedia.org/wiki/Warehouse" target="_blank" rel="noopener noreferrer">
                    warehouse services in Chandigarh
                  </a>
                  . Our years of experience in this packing and moving enterprise have made us one
                  of the most dependable ones. We have helped thousands of people by delivering
                  top-quality warehouse services.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Our warehousing services enable one of the most reliable storage establishments.
                  We have specified one of the most protected warehouse facilities. We have a group
                  of experts who give special attention and care to your assets. We feed proper
                  supervision and are always attentive.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  We take entire accountability for all your valuable items by guaranteeing their
                  entire protection. Once you store your assets with us you don&apos;t need to be
                  uneasy because you have been chosen for the most secure storage services across
                  the country. We team of experts who keep an eye 24X7 on your belongings. For more
                  sure, we would like to ensure you that your assets are in the safest place and are
                  under CCTV observation 24X7. For more information{' '}
                  <strong>
                    <Link href="/contact-us">contact us</Link>
                  </strong>{' '}
                  any time.
                </p>
              </div>

              {/* Why Cards */}
              <div className="mp-why-cards-grid sr d2">
                {whyCards.map((card) => (
                  <div key={card.title} className="mp-why-card">
                    <div className="mp-why-icon">
                      <i className={`fa-solid ${card.icon}`} />
                    </div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* ── /Left Main ── */}

            {/* ── Sidebar ── */}
            <aside className="mp-sidebar">

              {/* All Services */}
              <div className="mp-sidebar-card sr">
                <div className="mp-sidebar-head">
                  <i className="fa-solid fa-th-list" /> All Services
                </div>
                <ul className="mp-service-list">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={link.href === '/Warehouse-Service' ? 'active' : ''}
                      >
                        <span>{link.label}</span>
                        <i className="fa-solid fa-angle-right" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="mp-sidebar-card sr d1">
                <div className="mp-sidebar-head">
                  <i className="fa-solid fa-chart-bar" /> Warehouse Stats
                </div>
                <div className="mp-quick-stats">
                  {sidebarStats.map((s) => (
                    <div key={s.l} className="mp-qstat">
                      <div className="mp-qstat-icon">
                        <i className={`fa-solid ${s.icon}`} />
                      </div>
                      <div>
                        <div className="n">{s.n}</div>
                        <div className="l">{s.l}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Help Card */}
              <div className="mp-help-card sr d2">
                <h4>Vault Support</h4>
                <p>
                  Need temporary storage during a delayed home handover? We have weekly plans.
                </p>
                <a href="tel:+919317718180" className="mp-contact-link">
                  <div className="mp-contact-icon"><i className="fa-solid fa-phone" /></div>
                  +91-9317718180
                </a>
                <a href="mailto:mountainpackersmover@gmail.com" className="mp-contact-link">
                  <div className="mp-contact-icon"><i className="fa-solid fa-envelope" /></div>
                  mountainpackersmover@gmail.com
                </a>
              </div>

              {/* Branches */}
              <div className="mp-sidebar-card sr d3">
                <div className="mp-sidebar-head">
                  <i className="fa-solid fa-map-marker-alt" /> Storage Network
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link href={b.href}>
                        <i className="fa-solid fa-map-marker-alt" /> {b.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>
            {/* ── /Sidebar ── */}

          </div>
        </div>
      </section>

      <CTABand />

      {/* ══════════════ PROCESS SECTION ══════════════ */}
      <section className="mp-process-section">
        <div className="mp-container">
          <div style={{ textAlign: 'center' }} className="sr">
            <div className="mp-eyebrow" style={{ justifyContent: 'center' }}>
              Storage Lifecycle
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              Our 4-Stage <span className="r">Warehouse Protocol</span>
            </h2>
          </div>

          <div className="mp-process-grid">
            {processSteps.map((step, i) => (
              <div key={step.num} className={`mp-process-step sr d${i + 1}`}>
                <div className="mp-step-num">{step.num}</div>
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
      <FloatingButtons />
    </main>
  );
}
