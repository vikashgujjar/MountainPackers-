import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Domestic Shifting Services In Chandigarh - Mountain Packers',
  description:
    'Mountain packers offer the best domestic shifting services in Chandigarh at an affordable price. So, by choosing us, you can so get a complete solution.',
  keywords:
    'best domestic shifting services in Chandigarh, domestic shifting services, hire affordable domestic shifting services, domestic shifting services',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/Domestic-Shifting-Services.html',
  },
  openGraph: {
    title: 'Domestic Shifting Services In Chandigarh - Mountain Packers',
    description:
      'Mountain packers offer the best domestic shifting services in Chandigarh at an affordable price. So, by choosing us, you can so get a complete solution.',
    url: 'https://www.mountainpackersmovers.in/Domestic-Shifting-Services.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: 'We value your time and ensure timely delivery of your consignment within the scheduled timeframe.' },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'We take utmost care while packing your belongings to ensure their safety during the entire moving process.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'We have a team of trained specialists who provide satisfactory packing and moving assistance for you.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'Stay informed and worry-free about your belongings with our SMS alerts and live tracking service.' },
  { icon: 'fa-indian-rupee-sign', title: 'AFFORDABLE SERVICES', desc: 'Our specialized services are budget-friendly and easily integrable.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'Our team of well-trained drivers and experts ensures a damage-free moving cycle for your belongings.' },
];

const processSteps = [
  { num: '01', title: 'Request Quote', desc: 'Fill out our quick form or call us to get a free, no-obligation quote tailored to your home shifting needs.' },
  { num: '02', title: 'Professional Survey', desc: 'Our team conducts a detailed assessment of your belongings to provide an accurate and transparent estimate.' },
  { num: '03', title: 'Careful Packing', desc: 'Using high-quality materials, we pack your household items with the care they deserve, from fragile glassware to heavy furniture.' },
  { num: '04', title: 'Safe Delivery', desc: 'We transport and unpack your belongings at your new home, ensuring everything is placed exactly where you want it.' },
];

const sidebarStats = [
  { icon: 'fa-house-chimney', n: '45K+', l: 'Families Shifted' },
  { icon: 'fa-calendar', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
  { icon: 'fa-truck-ramp-box', n: '100%', l: 'Safe Delivery' },
];

/* ─── Page Component ─────────────────────────────── */

export default function DomesticShiftingPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/bestdomesticshiftingservicesinChandigarh.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              India&apos;s Most Trusted Shifting Partner
            </div>

            <h1 className="mp-hero-title">
              Domestic <span className="amber">Shifting</span>
              <span className="outline">Services</span>
            </h1>

            <p className="mp-hero-sub">
              Experience a seamless, stress-free relocation with Mountain Packers. 
              We offer comprehensive domestic moving solutions in Chandigarh with 
              guaranteed safety and real-time tracking.
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
              <i className="fa-solid fa-house-chimney-window" />
              <div>
                <h3>Home Shifting</h3>
                <p>Request a customized quote</p>
              </div>
            </div>
            <div className="mp-qcard-body">
              <div className="mp-field">
                <label>Your Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>
                <div className="mp-field">
                  <label>Shifting Type</label>
                  <select defaultValue="">
                    <option value="" disabled>Select Type</option>
                    <option>1 BHK / Studio</option>
                    <option>2 BHK House</option>
                    <option>3+ BHK House</option>
                    <option>Villa / Bungalow</option>
                  </select>
                </div>
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>From City</label>
                  <input type="text" placeholder="Pickup location" />
                </div>
                <div className="mp-field">
                  <label>To City</label>
                  <input type="text" placeholder="Drop location" />
                </div>
              </div>

              <div className="mp-field">
                <label>Preferred Date</label>
                <input type="date" />
              </div>

              <button className="mp-submit-btn">
                <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }} />
                Calculate Estimate
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
                  src="/img/about/bestdomesticshiftingservicesinChandigarh.webp"
                  alt="best domestic shifting services in Chandigarh"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-shield-heart" /> Trusted by Families
                </div>
                <div className="mp-img-tag">✓ Fully Insured</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Professional Relocation</div>
                <h1 className="mp-section-title">
                  DOMESTIC <span className="r">SHIFTING SERVICES</span>
                  <br />IN <span className="a">CHANDIGARH</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  If you&apos;re looking for reliable{' '}
                  <strong>
                    <Link href="/Domestic-Shifting-Services">
                      domestic shifting services in Chandigarh
                    </Link>
                  </strong>, look no further than Mountain Packers &amp; Movers. So, by
                  choosing us, you can so get a complete solution. We offer secure domestic moving
                  and packing services in the city. Our team of experts is dedicated to ensuring
                  that your move is stress-free and hassle-free. We provide dedicated domestic
                  packing and moving services to ensure the safe transportation of your belongings.
                  Our top-notch facilities make your move comfortable and relaxing. Trust Mountain
                  Packers to make your domestic move a seamless and satisfying experience.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  At Mountain Packers &amp; Movers, we understand the importance of a stress-free
                  move, and that&apos;s why we use high-quality trucks and packaging materials for
                  our <strong>Domestic Relocation Services in Chandigarh</strong>. Our team of
                  professionals takes great care in packing even the smallest items and ensures that
                  everything is unpacked and arranged at the new location as per your preferences.
                  We have expertly trained drivers and specialists who ensure the safety of your
                  belongings during transportation.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Our packing and moving services are comprehensive and include packing, sorting,
                  and arranging your belongings at your new destination. Trust us to make your
                  domestic move a hassle-free and satisfying experience.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/service/Domestic-Shifting-In-Chandigarh.webp"
                  alt="domestic shifting in chandigarh"
                  width={860}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: '400px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Why Choose section */}
              <div className="sr">
                <div className="mp-eyebrow">The Mountain Advantage</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  WHY CHOOSE US FOR DOMESTIC SHIFTING SERVICES IN CHANDIGARH?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Are you searching for a reliable <strong>packer and mover for domestic shifting
                  in Chandigarh</strong>? Then Choose{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>, where we offer comprehensive and safe moving solutions tailored to meet
                  your unique requirements.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Our team of experienced professionals has been providing top-notch{' '}
                  <a href="https://www.indiamart.com/beeratransport/relocation-shifting-services.html" target="_blank" rel="noopener noreferrer">
                    Domestic Shifting Services in Chandigarh
                  </a>{' '}
                  for years, earning us a trusted name in the industry. We understand that your
                  needs are ever-changing, so we continually update our methods and equipment to
                  ensure a seamless moving experience.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Our team of experts takes full responsibility for handling your assets, ensuring
                  their safety and security throughout the moving process. With our track record of
                  providing adequate and reliable services, you can count on us to make your
                  domestic move a success.{' '}
                  <strong>
                    <Link href="/contact-us">Contact us</Link>
                  </strong>{' '}
                  today for more information and a hassle-free move.
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
                        className={link.href === '/Domestic-Shifting-Services' ? 'active' : ''}
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
                  <i className="fa-solid fa-chart-bar" /> Shifting Stats
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
                <h4>Talk to Experts</h4>
                <p>
                  Need a custom shifting plan? Our experts are here to help you 24/7.
                </p>
                <a href="tel:+919317718180" className="mp-contact-link">
                  <div className="mp-contact-icon"><i className="fa-solid fa-phone" /></div>
                  +91-9317718180
                </a>
                <a href="mailto:info@mountainpackersmovers.in" className="mp-contact-link">
                  <div className="mp-contact-icon"><i className="fa-solid fa-envelope" /></div>
                  info@mountainpackersmovers.in
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
              Systematic Method
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              Our Stress-Free <span className="r">Shifting Process</span>
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
