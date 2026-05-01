import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Local Shifting Services In Chandigarh - Mountain Packers',
  description:
    'If you want to experience the best local shifting services in Chandigarh then Mountain packers can be the ideal and best selection for house shifting services.',
  keywords:
    'local shifting services in Chandigarh, local house shifting services, hire affordable local shifting services in Chandigarh, local household shifting services',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/Local-House-Shifting-Services.html',
  },
  openGraph: {
    title: 'Local Shifting Services In Chandigarh - Mountain Packers',
    description:
      'If you want to experience the best local shifting services in Chandigarh then Mountain packers can be the ideal and best selection for house shifting services.',
    url: 'https://www.mountainpackersmovers.in/Local-House-Shifting-Services.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: 'We understand the importance of your time and the impact of timely delivery. As such, we ensure consignments are delivered within the designated timeframe.' },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'We take great care in packing your belongings to ensure their safety throughout the entire moving process.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of skilled professionals offers reliable packing and moving services to ensure your satisfaction.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'We understand your concerns about your belongings. Therefore, we offer SMS alerts and live tracking to keep you informed about their status.' },
  { icon: 'fa-indian-rupee-sign', title: 'AFFORDABLE SERVICES', desc: 'Our specialized services are budget-friendly and easy to incorporate into your financial plan.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'Our highly trained drivers and experts have the ability to complete your entire move without any damage.' },
];

const processSteps = [
  { num: '01', title: 'Call for Survey', desc: 'Contact us for a quick local survey. We estimate the volume and provide an instant, competitive quote for your city move.' },
  { num: '02', title: 'Swift Packing', desc: 'Our team arrives with high-grade materials to pack your household essentials quickly yet securely on the moving day.' },
  { num: '03', title: 'Safe Transit', desc: 'Using specialized local transport vehicles, we move your belongings through the city routes with zero-damage guarantee.' },
  { num: '04', title: 'Same-Day Setup', desc: 'Most local shifts are completed within hours. We help you unpack and arrange items so you can sleep in your new home tonight.' },
];

const sidebarStats = [
  { icon: 'fa-city', n: '50+', l: 'Areas Covered' },
  { icon: 'fa-clock-rotate-left', n: '4-6 Hrs', l: 'Avg. Shift Time' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function LocalShiftingPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/service/Local-Shifting-Services-in-Chandigarh.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Your Neighborhood Shifting Expert
            </div>

            <h1 className="mp-hero-title">
              Local <span className="amber">House</span>
              <span className="outline">Shifting</span>
            </h1>

            <p className="mp-hero-sub">
              Fast, reliable, and affordable local shifting services in Chandigarh. 
              We handle your move with the care of a neighbor and the precision 
              of a professional.
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
              <i className="fa-solid fa-truck-ramp-box" />
              <div>
                <h3>Local Move</h3>
                <p>Get an instant city-move quote</p>
              </div>
            </div>
            <div className="mp-qcard-body">
              <div className="mp-field">
                <label>Your Name</label>
                <input type="text" placeholder="Full name" />
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Mobile Number</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>
                <div className="mp-field">
                  <label>House Size</label>
                  <select defaultValue="">
                    <option value="" disabled>Select Size</option>
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                    <option>4+ BHK</option>
                    <option>Just few items</option>
                  </select>
                </div>
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>From Area</label>
                  <input type="text" placeholder="Sector/Colony" />
                </div>
                <div className="mp-field">
                  <label>To Area</label>
                  <input type="text" placeholder="Destination Sector" />
                </div>
              </div>

              <div className="mp-field">
                <label>Moving Date</label>
                <input type="date" />
              </div>

              <button className="mp-submit-btn">
                <i className="fa-solid fa-bolt" style={{ marginRight: '8px' }} />
                Get Instant Quote
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
                  src="/img/service/Local-Shifting-Services-in-Chandigarh.webp"
                  alt="Best Local House Shifting Services in Chandigarh"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-map-location-dot" /> Local Expert
                </div>
                <div className="mp-img-tag">✓ Same Day Shifting</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">City Relocation Experts</div>
                <h1 className="mp-section-title">
                  LOCAL <span className="r">SHIFTING SERVICES</span>
                  <br />IN <span className="a">CHANDIGARH</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  If you want to experience the{' '}
                  <strong>
                    <Link href="/Local-House-Shifting-Services">
                      local shifting services in Chandigarh
                    </Link>
                  </strong>{' '}
                  then Mountain Packers &amp; Movers can be the ideal and best selection for house
                  shifting services. It offers top to bottom house shifting services at low prices
                  and handles every one of your items with delicate care and adequate manner. We
                  have complete solutions for all your packing and moving prerequisites as
                  indicated by your comfort. We have a group of specialists who have been
                  providing <strong>local shifting services in Chandigarh</strong> for a long time.
                  Besides, our long stretches of understanding in these packing and moving
                  endeavors collected us into talented and exact local packers and movers.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Our experts reflect everything to give our clients a calm and satisfactory Local
                  House Shifting experience. You can surely depend upon us to convey your items
                  safely wherever you want. By utilizing our master and reasonable staff
                  individuals you acquire the ever-best local packing and moving services in
                  Chandigarh. At the point when you start your moving with us, we promise you that
                  your effects will show up at their objective on time and with no damage. So to
                  hold an encounter of easy developments, then, at that point, you simply reach out
                  to{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>
                  . We offer top-quality <strong>Local Shifting Services in Chandigarh</strong> and
                  across the country.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/service/local-house-shifting-in-Chandigarh.webp"
                  alt="local house hold shifting services in chandigarh"
                  width={860}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: '400px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Why Choose section */}
              <div className="sr">
                <div className="mp-eyebrow">Why We Are Different</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  WHY CHOOSE US FOR LOCAL SHIFTING SERVICES IN CHANDIGARH?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Mountain Packers &amp; Movers are a competent{' '}
                  <strong>Packer and Mover for house shifting in Chandigarh</strong> with a wide
                  range of packing and moving facilities. We have a group capable workforce that is
                  ready to manage all packing and moving necessities with intense consideration. We
                  deal with all the movement undertakings agreeable and to make it more solid we
                  additionally utilize current methods and innovation. We have served thousands of
                  clients in making their moves a more effortless and smoother.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  The master and experienced workers of our firm help you in the ideal ways to
                  convey a total moving arrangement. They outfit migration services in local
                  regions as well as across the country. We have effectively conveyed good and
                  reliable services to many clients. We present modest and trouble-free{' '}
                  <strong>Local Shifting Services in Chandigarh</strong> for everyone. We are one of
                  the trustworthy and if you want to hire affordable{' '}
                  <a href="https://dir.indiamart.com/chandigarh/local-shifting-service.html" target="_blank" rel="noopener noreferrer">
                    Local Shifting Services in Chandigarh
                  </a>{' '}
                  we can meet all your packing and moving prerequisites. Therefore, if you want to
                  have smooth and trouble-free packing and moving services then{' '}
                  <strong>
                    <Link href="/contact-us">Contact</Link>
                  </strong>{' '}
                  Mountain packers now.
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
                        className={link.href === '/Local-House-Shifting-Services' ? 'active' : ''}
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
                  <i className="fa-solid fa-chart-bar" /> Local Stats
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
                <h4>Quick Support</h4>
                <p>
                  Moving sectors today? Call our local hotline for immediate assistance.
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
                  <i className="fa-solid fa-map-marker-alt" /> Our Network
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
              Our Workflow
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              How We Complete <span className="r">Your Local Move</span>
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
