import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Best Packing and Unpacking Services In Chandigarh',
  description:
    'If you are looking for the best packing and unpacking services in Chandigarh, then you must choose Mountain packers. It can be the best selection for you.',
  keywords:
    'packing unpacking services in Chandigarh, hire the best packing unpacking services in Chandigarh, affordable packing and unpacking services in Chandigarh, best packing unpacking services in Chandigarh',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/Packing-Unpacking-Services.html',
  },
  openGraph: {
    title: 'Best Packing and Unpacking Services In Chandigarh',
    description:
      'If you are looking for the best packing and unpacking services in Chandigarh, then you must choose Mountain packers. It can be the best selection for you.',
    url: 'https://www.mountainpackersmovers.in/Packing-Unpacking-Services.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: 'We understand the importance of your time and the significance of timely delivery. Thus, we ensure to deliver of your consignment within the specified time.' },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'We always pack your items properly so that they can be secured while completing the entire moving procedure.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team comprises skilled professionals who are committed to delivering satisfactory packing and moving services to you.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'Stay updated on your move with our SMS alerts and live tracking, ensuring the safety of your belongings.' },
  { icon: 'fa-indian-rupee-sign', title: 'AFFORDABLE SERVICES', desc: 'We offer specialized services at affordable prices that can be easily accommodated within your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'Our team of well-trained drivers and experts is capable of completing your entire moving cycle without any damage.' },
];

const processSteps = [
  { num: '01', title: 'Inventory Check', desc: 'We start by analyzing your items to determine the specific packing materials and techniques needed for each category.' },
  { num: '02', title: 'Secure Layering', desc: 'Using bubble wraps, corrugated sheets, and foam, we create multi-layered protection for fragile and valuable items.' },
  { num: '03', title: 'Systematic Loading', desc: 'Items are loaded into specialized containers with proper bracing to prevent any movement or collision during transit.' },
  { num: '04', title: 'Expert Unpacking', desc: 'At the destination, we carefully unpack and help you arrange your belongings as per your new floor plan.' },
];

const sidebarStats = [
  { icon: 'fa-boxes-packing', n: '5000+', l: 'Boxes Monthly' },
  { icon: 'fa-shield-heart', n: 'Zero', l: 'Damage Record' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function PackingUnpackingPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/Packing-and-Unpacking-Services-in-Chandigarh.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Advanced Packing Technology
            </div>

            <h1 className="mp-hero-title">
              Packing <span className="amber">&amp; Unpacking</span>
              <span className="outline">Services</span>
            </h1>

            <p className="mp-hero-sub">
              Professional grade packing solutions that ensure your belongings 
              survive any journey. We use multi-layer protection and expert 
              techniques for total peace of mind.
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
              <i className="fa-solid fa-box-open" />
              <div>
                <h3>Packing Quote</h3>
                <p>Get an estimate for your items</p>
              </div>
            </div>
            <div className="mp-qcard-body">
              <div className="mp-field">
                <label>Your Name</label>
                <input type="text" placeholder="Enter full name" />
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>
                <div className="mp-field">
                  <label>Material Type</label>
                  <select defaultValue="">
                    <option value="" disabled>Select Primary Type</option>
                    <option>Household Goods</option>
                    <option>Fragile / Glassware</option>
                    <option>Electronic Equipment</option>
                    <option>Industrial Machinery</option>
                  </select>
                </div>
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Pickup Area</label>
                  <input type="text" placeholder="Sector/Location" />
                </div>
                <div className="mp-field">
                  <label>Quantity</label>
                  <input type="text" placeholder="Approx no. of items" />
                </div>
              </div>

              <div className="mp-field">
                <label>Service Date</label>
                <input type="date" />
              </div>

              <button className="mp-submit-btn">
                <i className="fa-solid fa-box" style={{ marginRight: '8px' }} />
                Get Packing Estimate
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
                  src="/img/about/Packing-and-Unpacking-Services-in-Chandigarh.webp"
                  alt="Packing and Unpacking Services in Chandigarh"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-tape" /> Professional Grade
                </div>
                <div className="mp-img-tag">✓ Bubble Wrap Protection</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Secure Shifting Solutions</div>
                <h1 className="mp-section-title">
                  PACKING AND <span className="r">UNPACKING SERVICES</span>
                  <br />IN <span className="a">CHANDIGARH</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  If you are looking for{' '}
                  <strong>
                    <Link href="/Packing-Unpacking-Services">
                      packing and unpacking services in Chandigarh
                    </Link>
                  </strong>
                  , then you must choose Mountain Packers &amp; Movers. It can be the best
                  selection for you. When you plan to move from one place to another, the safety of
                  your belongings is a top concern. While it may seem tempting to tackle the
                  packing and unpacking process on your own, it&apos;s not always feasible to
                  achieve the same level of efficiency and safety as professionals can provide.
                  It&apos;s essential to hire an expert who can handle the task appropriately,
                  ensuring that your belongings are secure throughout the entire moving process.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Mountain Packers can be one of the best preferences for you where you can get
                  affordable <strong>packing and unpacking services</strong>. Especially for
                  packing, our experts utilize the right materials as well as the right techniques
                  to pack your valuable items. They utilize top-quality packing materials to
                  prevent breakage or any other kind of damage during loading, transportation, and
                  unloading. As part of our packing and unpacking services, we use specialized
                  materials for packing your items to ensure maximum protection during the move.
                  Moreover, the entire packing process is closely monitored by a supervisor to
                  ensure that everything is packed securely and with utmost care.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Furthermore, after confirming secure packing we safely load and transport the
                  items with the most appropriate container with an expert team. Additionally, we
                  offer unpacking services as per your agreement with us for the move. Our
                  proficient team guarantees safe delivery within the stipulated timeframe, not
                  only saving your efforts but also your valuable time and money.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/service/Packing-and-Unpacking-in-Chandigarh.webp"
                  alt="packers and movers in chandigarh"
                  width={860}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: '400px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Why Choose section */}
              <div className="sr">
                <div className="mp-eyebrow">Maximum Protection</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  WHY CHOOSE US FOR PACKING AND UNPACKING SERVICES IN CHANDIGARH?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Mountain Packers provides outstanding packing assistance for convenient and secure
                  shifting. Our Packing and Moving Services are carried out by a team of trained
                  professionals who analyze the requirements for packing items before making
                  recommendations to clients. By choosing our services, you can benefit from a range
                  of additional advantages that can make your move a smooth and stress-free
                  experience.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Our team of experts provides top-notch{' '}
                  <a href="https://dir.indiamart.com/chandigarh/unpacking-services.html" target="_blank" rel="noopener noreferrer">
                    packing and unpacking services in Chandigarh
                  </a>{' '}
                  and nationwide. Simply request a quote and we will deliver the most reliable
                  packing and unpacking services right to your doorstep.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Besides offering reliable packing and unpacking services, we also provide various
                  related services, such as car and bike transportation, warehousing, local and
                  domestic shifting, and more. Whether it&apos;s a household move or a corporate
                  relocation, we take complete responsibility to ensure a hassle-free move. If
                  you&apos;re looking for the <strong>packing and unpacking services near me</strong>
                  , look no further than{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>
                  . We have a reputation as a trusted name in the packing and moving industry in
                  Chandigarh, and we strive to provide our clients with the best moving experience
                  possible. Feel free to{' '}
                  <strong>
                    <Link href="/contact-us">contact us</Link>
                  </strong>{' '}
                  if do you have any queries.
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
                        className={link.href === '/Packing-Unpacking-Services' ? 'active' : ''}
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
                  <i className="fa-solid fa-chart-bar" /> Packing Stats
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
                <h4>Safety First</h4>
                <p>
                  Have fragile items or heavy machinery? Let our specialists handle it.
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
                  <i className="fa-solid fa-map-marker-alt" /> Our Presence
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
              Safety Protocol
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              Our 4-Layer <span className="r">Packing Process</span>
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
