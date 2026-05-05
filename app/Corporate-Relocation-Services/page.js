import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';
import CorporateQuoteForm from '@/components/CorporateQuoteForm';

export const metadata = {
  title: 'Corporate Relocation Services In Chandigarh | Mountain Packers',
  description:
    'If you are looking for corporate relocation services in Chandigarh then at Mountain packers & movers you can get the best corporate relocation services reliably.',
  keywords:
    'corporate relocation services Chandigarh, best corporate relocation services in Chandigarh, hire affordable corporate relocation in Chandigarh, corporate relocation services at low price, World best corporate relocation services company in Chandigarh',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/Corporate-Relocation-Services.html',
  },
  openGraph: {
    title: 'Corporate Relocation Services In Chandigarh | Mountain Packers',
    description:
      'If you are looking for corporate relocation services in Chandigarh then at Mountain packers & movers you can get the best corporate relocation services reliably.',
    url: 'https://www.mountainpackersmovers.in/Corporate-Relocation-Services.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: 'We are aware of how valuable your time is and how timely delivery can help you. Therefore, we deliver consignment within the allotted time.' },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'To ensure the safety of your belongings, we take utmost care in packing them properly for a smooth and secure move.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of highly trained specialists ensures your belongings are packed and moved with utmost care and satisfaction.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'We understand the concerns you may have about the safety of your belongings. As a result, we provide you with SMS alerts and live tracking so that you can stay informed.' },
  { icon: 'fa-indian-rupee-sign', title: 'AFFORDABLE SERVICES', desc: 'Our specialized services are both budget-friendly and easy to integrate into your financial plan.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'Our well-trained drivers and experts are capable enough to complete your entire moving cycle without a single damage.' },
];

const processSteps = [
  { num: '01', title: 'Request Quote', desc: 'Fill out our quick form or call us to get a free, no-obligation quote tailored to your office relocation needs.' },
  { num: '02', title: 'On-Site Survey', desc: 'Our experts visit your premises to assess the scope and create a customized relocation strategy.' },
  { num: '03', title: 'Secure Packing', desc: 'Premium materials and systematic labeling ensure every file and piece of equipment is protected.' },
  { num: '04', title: 'Seamless Move', desc: 'Coordinated transit and careful setup at your new location ensures minimal business downtime.' },
];

const sidebarStats = [
  { icon: 'fa-building', n: '12K+', l: 'Offices Moved' },
  { icon: 'fa-calendar', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
  { icon: 'fa-users-gear', n: '250+', l: 'Relocation Experts' },
];

/* ─── Page Component ─────────────────────────────── */

export default function CorporateRelocationPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/blog/BestcorporaterelocationservicesinChandigarh.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              #1 Office Relocation Expert
            </div>

            <h1 className="mp-hero-title">
              Corporate <span className="amber">Relocation</span>
              <span className="outline">Services</span>
            </h1>

            <p className="mp-hero-sub">
              Mountain Packers simplifies complex corporate moves with strategic
              planning, secure packing, and zero-downtime execution in Chandigarh
              and across India.
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
          <CorporateQuoteForm 
            title="Relocation Quote" 
            subtitle="Get a customized corporate plan" 
            icon="fa-building"
            moveType="Corporate Relocation Quote"
          />
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
                  src="/img/blog/BestcorporaterelocationservicesinChandigarh.webp"
                  alt="Best corporate relocation services in Chandigarh"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-award" /> Corporate Excellence
                </div>
                <div className="mp-img-tag">✓ 0% Downtime Goal</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Relocation Strategists</div>
                <h1 className="mp-section-title">
                  CORPORATE <span className="r">RELOCATION SERVICES</span>
                  <br />IN <span className="a">CHANDIGARH</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  If you are looking for{' '}
                  <strong>
                    <Link href="/Corporate-Relocation-Services">
                      corporate relocation services in Chandigarh
                    </Link>
                  </strong>{' '}
                  then at Mountain packers &amp; movers you can get the best corporate relocation
                  services reliably. We help you in making your shifting a simple and
                  stress-free procedure and are the World&apos;s best corporate relocation
                  services company in Chandigarh. We deal with all your Corporate Relocation
                  requirements strategically and provide Corporate relocation services at a low price.
                  Hence, by employing us, you can acquire the most reliable packing and moving
                  experience. We are committed to simplifying your most challenging relocation
                  problems. We treat all of your belongings carefully and move them safely to their
                  destination. At every step of your move, our proficient and knowledgeable staff
                  members are there to assist you.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  By employing Mountains packers you can easily access our top-quality services at
                  a reasonable cost. We cater to all your relocation requirements and offer
                  budget-friendly solutions. Furthermore, we take the entire accountability for all
                  your valuable moving items during the relocation process. We provide additional care
                  for all your valuable items to deliver them securely to their destination.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Also, our years of experience &amp; expertise can be very useful in making your
                  move smooth and hassle-free operation. To guarantee the shield of your
                  belongings we provide supreme-quality packing material.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/service/corporate-relocation-in-Chandigarh.webp"
                  alt="corporate relocation in Chandigarh"
                  width={860}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: '400px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Why Choose section */}
              <div className="sr">
                <div className="mp-eyebrow">Efficiency Guaranteed</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  WHY CHOOSE US FOR CORPORATE RELOCATION SERVICES IN CHANDIGARH?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  <Link href="/">Mountain Packers &amp; Movers</Link> offers one of the most
                  impressive <strong>corporate relocation services in Chandigarh</strong>. Our
                  organization has accumulated numerous loyal clients by delivering the most
                  reliable office relocation services. In addition to this, our dedicated, skilled,
                  and honest workforce always helps you make your whole process an easier and
                  smoother one. We offer entirely customized corporate relocation services that
                  allow your move to make it more reliable and comfortable.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  For our valuable clients, we outfit one of the best packing and moving services.
                  We always accomplish the whole process with additional care and a lookout. To
                  ensure the security of your valuable items, we transport them in the most
                  suitable containers.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  We highly recommend our fit-to-budget corporate relocation services to everyone
                  in Chandigarh. Being our significant client, one can be assured of profiting
                  from packing and moving services. We deliver complete satisfaction and pleasure
                  to our clients with our valuable services and assistance. Therefore, if you
                  want to hire an affordable{' '}
                  <a href="https://en.wikipedia.org/wiki/Relocation_service" target="_blank" rel="noopener noreferrer">
                    corporate relocation service in Chandigarh
                  </a>{' '}
                  that can meet all your packing and moving requirements in a single place, then{' '}
                  <strong>
                    <Link href="/contact-us">get in touch</Link>
                  </strong>{' '}
                  with Mountain Packers now.
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
                        className={link.href === '/Corporate-Relocation-Services' ? 'active' : ''}
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
                  <i className="fa-solid fa-chart-bar" /> Relocation Impact
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
                <h4>Corporate Desk</h4>
                <p>
                  Get a dedicated relocation manager for your organization.
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
              Strategic Planning
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              How We Execute <span className="r">Your Move</span>
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
