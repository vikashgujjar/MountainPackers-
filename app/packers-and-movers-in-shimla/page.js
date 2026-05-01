import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Mountain Packers - Best Packers and Movers in Shimla',
  description:
    'Are you looking for the best packers and movers in Shimla? Then choose Mountain Packers & Movers in Shimla. We offer complete solutions & supreme quality',
  keywords: 'best packers and movers in Shimla',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/packers-and-movers-in-shimla.html',
  },
  openGraph: {
    title: 'Mountain Packers - Best Packers and Movers in Shimla',
    description:
      'Are you looking for the best packers and movers in Shimla? Then choose Mountain Packers & Movers in Shimla. We offer complete solutions & supreme quality',
    url: 'https://www.mountainpackersmovers.in/packers-and-movers-in-shimla.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: "We are aware of how valuable your time is and how timely delivery can help you save both. As a result, we ensure the timely delivery of our packages." },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'With a strong emphasis on security, we take great care in packing your priceless valuables to ensure their safekeeping.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'We have a team of trained specialists who can provide you with confidence both before and after implementation.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'We understand your concerns about your belongings. Therefore, we provide you with SMS alerts and live tracking.' },
  { icon: 'fa-indian-rupee-sign', title: 'Customer Support', desc: 'Our specialized services are highly cost effective and can be seamlessly integrated into your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'We have the finest vehicles and experienced, seasoned drivers at our disposal to guarantee your transportation needs.' },
];

const processSteps = [
  { num: '01', title: 'Mountain Survey', desc: 'Specialized assessment of Shimla steep terrain and narrow lanes to determine the best-fit vehicle for your move.' },
  { num: '02', title: 'Weatherproof Packing', desc: 'Advanced multi-layer packing using moisture-resistant materials, essential for Shimla unpredictable mountain climate.' },
  { num: '03', title: 'Skilled Hill Transit', desc: 'Safe transportation through hill roads by expert drivers trained specifically for the Chandigarh-Shimla highway.' },
  { num: '04', title: 'Doorstep Unpacking', desc: 'Timely arrival and professional unpacking service, helping you settle into your new home in the Queen of Hills.' },
];

const sidebarStats = [
  { icon: 'fa-mountain-city', n: 'Capital Hub', l: 'Top Shimla Shifters' },
  { icon: 'fa-snowflake', n: 'All-Weather', l: 'Safe Winter Shifting' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function ShimlaBranchPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/best-packers-and-movers-in-Shimla.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Shimla&apos;s Number One Choice
            </div>

            <h1 className="mp-hero-title">
              Movers <span className="amber">&amp; Packers</span>
              <span className="outline">Shimla</span>
            </h1>

            <p className="mp-hero-sub">
              Trusted, secure, and reliable shifting in the Queen of Hills. 
              Mountain Packers &amp; Movers provides complete solutions and 
              supreme quality for all your mountain relocation needs.
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
              <i className="fa-solid fa-mountain-sun" />
              <div>
                <h3>Shimla Branch</h3>
                <p>Book your mountain move</p>
              </div>
            </div>
            <div className="mp-qcard-body">
              <div className="mp-field">
                <label>Your Name</label>
                <input type="text" placeholder="Full name" />
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Contact Number</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>
                <div className="mp-field">
                  <label>Shifting Required</label>
                  <select defaultValue="">
                    <option value="" disabled>Select Service</option>
                    <option>Home Relocation</option>
                    <option>Commercial Shifting</option>
                    <option>Car/Bike Transit</option>
                    <option>Storage/Warehouse</option>
                  </select>
                </div>
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Current Locality</label>
                  <input type="text" placeholder="Shimla Area" />
                </div>
                <div className="mp-field">
                  <label>Target Area</label>
                  <input type="text" placeholder="Destination" />
                </div>
              </div>

              <div className="mp-field">
                <label>Proposed Date</label>
                <input type="date" />
              </div>

              <button className="mp-submit-btn">
                <i className="fa-solid fa-truck-fast" style={{ marginRight: '8px' }} />
                Get Shimla Pricing
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
                  src="/img/about/best-packers-and-movers-in-Shimla.webp"
                  alt="Best Packers and Movers in Shimla"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-mountain" /> Hill Specialist
                </div>
                <div className="mp-img-tag">✓ Queen of Hills Experts</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Excellence in Himachal</div>
                <h1 className="mp-section-title">
                  PACKERS AND <span className="r">MOVERS IN</span>
                  <br /><span className="a">SHIMLA</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Welcome to Mountain Packers &amp; Movers. We are one of the best{' '}
                  <strong>
                    <Link href="/packers-and-movers-in-shimla">
                      packers and movers in Shimla
                    </Link>
                  </strong>
                  . We are serving in this packing and moving industry for years and have
                  contributed a lot in this packing and moving industry. We have delivered services
                  to numerous clients with the best differentiae and have securely delivered their
                  assets to their destinations.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  We always perform the moving task with intense care and attention. Once you start
                  your moving with us you must be assured that your assets are in the safest hand
                  and will be delivered securely. No matter whether your product is massive or
                  helpful, intense or delicate, we prefer the best possible way in delivering them.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  We have a team of a profoundly talented group serving for years in Shimla. We
                  utilize elite and expanded packing procedures to complete the moving cycle.
                  Additionally, we also provide the most encyclopedic and cost-effective shifting
                  solutions.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packers-and-movers-for-shifting-in-Shimla.webp"
                  alt="packers and movers for shifting in Shimla"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Section 2 */}
              <div className="sr">
                <div className="mp-eyebrow">Trust & Reliability</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  CHOOSE THE BEST PACKERS AND MOVERS IN SHIMLA FOR SHIFTING
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Mountain Packers &amp; Movers is one of the most trustworthy{' '}
                  <strong>packers and movers in Shimla</strong>. We have a group of experts and are
                  certified packers-movers in this packing and moving industry. We have set a
                  standard for the whole Packing and Moving sector in Shimla and across the country.
                  We always strive to preserve clarity with our clients to earn their trust. Thus,
                  by giving complete satisfaction and comfort during shifting we are one of the most
                  reliable and trustworthy Packers and Movers.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  As you know, moving from one location to another can be a frustrating task, if you
                  are not an expert. Thus to make it easier and smoother you need an expert packer
                  and mover. Thus,{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Mover</Link>
                  </strong>{' '}
                  can be the ideal option and you can begin your Shifting with us. We offer a
                  complete moving solution and are the best packers movers who can meet all your
                  moving requirements.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packer-and-mover-in-Shimla.webp"
                  alt="packer and mover in Shimla"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              <div className="sr" style={{ marginTop: '30px' }}>
                <div className="mp-eyebrow">Professional Accountability</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  CHOOSING US AS YOUR PACKER AND MOVER IN SHIMLA
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Mountain Packers &amp; Movers is a leading <strong>packer and mover in Shimla</strong> that deliver top-to-bottom packing and moving solution to its clients. We
                  always efforts to provide an incredibly moving experience to our valuable clients.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  We are certified{' '}
                  <a href="https://www.justdial.com/Shimla/Packers-And-Movers/nct-10348289" target="_blank" rel="noopener noreferrer">
                    packers and movers in Shimla
                  </a>{' '}
                  and also provide services across the country. Our expert services have made us one
                  of the best movers and packers in Shimla. We are the trustworthy one for
                  delivering the best packing and moving resolutions. We can ensure you that we
                  provide expert services and are available with top to bottom services.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  We have a passionate team of skilled &amp; experienced workforce, who are dedicated
                  and accountable in their respective job. We strive to deliver the assignment
                  within the given period without hesitations. Most significantly, we always
                  guarantee the security of your assets first. Therefore If you want to make your
                  shifting a secure and smooth process then choose Mountain Packers &amp; Movers in
                  Shimla. Feel free to{' '}
                  <strong>
                    <Link href="/contact-us">Contact Us</Link>
                  </strong>{' '}
                  at any time for queries and questions.
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

              {/* Service Menu Card */}
              <div className="mp-sidebar-card sr">
                <div className="mp-sidebar-head">
                  <i className="fa-solid fa-list-check" /> Core Services
                </div>
                <ul className="mp-service-list">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>
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
                  <i className="fa-solid fa-mountain-city" /> Shimla Branch
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
                <h4>Capital Support</h4>
                <p>
                  Relocating to or within Shimla? Our hill-trained specialists ensure a safe move.
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
                  <i className="fa-solid fa-map-location-dot" /> Regional Presence
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        className={b.href === '/packers-and-movers-in-shimla' ? 'active' : ''}
                      >
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
              Relocation Workflow
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              Hill Shifting <span className="r">Protocol</span>
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
