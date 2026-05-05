import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';
import HeroQuoteForm from '@/components/HeroQuoteForm';

export const metadata = {
  title: 'Mountain Packers - Packers and Movers in Mandi',
  description:
    'Looking for reliable packers and movers in Mandi? Look no further than Mountain Packers! Our experienced team provides affordable moving services.',
  keywords: 'best packers and movers in Mandi',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/packers-and-movers-in-mandi.html',
  },
  openGraph: {
    title: 'Mountain Packers - Packers and Movers in Mandi',
    description:
      'Looking for reliable packers and movers in Mandi? Look no further than Mountain Packers! Our experienced team provides affordable moving services.',
    url: 'https://www.mountainpackersmovers.in/packers-and-movers-in-mandi.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: "Recognizing the significance of your time and the potential benefits of timely delivery, we ensure that our packages are delivered within the designated timeframe." },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'We carefully pack your priceless valuables to protect the security of your belongings because we place a high focus on their security.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team comprises of proficient experts who can instill confidence in you prior to and following the implementation process.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'We understand your concerns about the safety of your belongings, which is why we offer SMS notifications and live tracking.' },
  { icon: 'fa-indian-rupee-sign', title: 'Customer Support', desc: 'The specialized services we offer are both cost-effective and simple to incorporate into your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'To ensure your transportation, we have the best vehicles and skilled, seasoned drivers available.' },
];

const processSteps = [
  { num: '01', title: 'Terrain Analysis', desc: 'Detailed survey of your Mandi location, accounting for hill terrain to plan the safest route for your goods.' },
  { num: '02', title: 'Mountain Packing', desc: 'Extra protection for fragile items using premium bubble wraps and waterproof sheets for climate protection.' },
  { num: '03', title: 'Stable Loading', desc: 'Systematic loading into our specialized hill-ready vehicles to ensure zero movement during mountain transit.' },
  { num: '04', title: 'Safe Unpacking', desc: 'Punctual delivery at your new home with professional help in setting up your belongings safely.' },
];

const sidebarStats = [
  { icon: 'fa-mountain-sun', n: 'Hill Experts', l: 'Top Mandi Shifters' },
  { icon: 'fa-truck-ramp-box', n: 'Secure', l: 'Valley Transit' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function MandiBranchPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/packers-and-movers-in-Mandi.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Trusted Movers In Mandi
            </div>

            <h1 className="mp-hero-title">
              Movers <span className="amber">&amp; Packers</span>
              <span className="outline">Mandi</span>
            </h1>

            <p className="mp-hero-sub">
              Your search for reliable packers in Mandi ends here.
              Mountain Packers &amp; Movers provides affordable, expert,
              and safe shifting services tailored for the mountain terrain.
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
          <HeroQuoteForm
            title="Mandi Branch"
            subtitle="Request an on-site survey"
            icon="fa-map-location-dot"
            moveType="Mandi Branch Quote"
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
                  src="/img/about/packers-and-movers-in-Mandi.webp"
                  alt="packers and movers in Mandi"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-mountain-sun" /> Hill Shifting
                </div>
                <div className="mp-img-tag">✓ Secure Valley Transit</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Excellence in Himachal</div>
                <h1 className="mp-section-title">
                  ARE YOU LOOKING FOR <span className="r">PACKERS AND</span>
                  <br /><span className="a">MOVERS IN MANDI?</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Could it be said that you are looking for reliable{' '}
                  <strong>
                    <Link href="/packers-and-movers-in-mandi">
                      packers and movers in Mandi
                    </Link>
                  </strong>
                  ? Look no further than Mountain Packers &amp; Movers! Our experienced team provides
                  affordable moving services. Mountain Packers &amp; Movers is a main moving
                  specialist organization. We are conveying the best moving services in every one of
                  the areas of Mandi for quite a long time. We are a well-established moving
                  undertaking and have served a huge number of clients across the nation.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Along with this, we have a gathering of the committed and devoted labor force who
                  are generally prepared to meet all your moving prerequisites. We generally convey
                  our services in the most ideal manner with the goal that they can meet all packing
                  and moving necessities of our important clients. We implement the plans with
                  strong reinforcement so which can be useful in gathering all your moving
                  necessities on a solitary stage.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Also, our experience and master experts assume a compelling part in finishing your
                  development effectively with no issues. Additionally, our colleagues are
                  consistently prepared to convey their perfection at each point of packing and
                  moving. Furthermore, you can have the best moving experience by hiring us for the
                  job.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/best-packers-and-movers-in-Mandi.webp"
                  alt="best packers and movers in Mandi"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Top Service Section */}
              <div className="sr">
                <div className="mp-eyebrow">Premium Standards</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  MOUNTAIN PACKERS AND MOVERS - THE BEST PACKERS AND MOVERS IN MANDI
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>{' '}
                  offer one of the most amazing moving Support. We generally guarantee the moves
                  within the given period. Being prestigious <strong>packers and movers in Mandi</strong> and the nation over, we have formed our moving services into random
                  modules. We complete the entire moving cycle securely and make it more dependable,
                  we give quite possibly the best moving assistance. Moreover, we have fostered our
                  services capably to fulfill every one of the essential of the clients.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  In addition to this, we are a renowned <strong>mover and packer firm in Mandi</strong>, that applies smart approaches to move your belongings securely. Our
                  master abilities sustained by present-day innovation and our tremendous
                  deliberation guarantee smooth and quick shifting services in Mandi. We always get
                  multiple referrals from our valuable clients. These all reach conceivable because
                  we have earned trust by offering excellent services.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packer-and-mover-in-Mandi.webp"
                  alt="packer and mover in Mandi"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              <div className="sr" style={{ marginTop: '30px' }}>
                <div className="mp-eyebrow">Local Commitment</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  WHY CHOOSE US AS YOUR PACKER AND MOVER IN MANDI?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  We have gatherings of specialists who have acquired long periods of experience in
                  this packing and moving industry. Our experts have years of experience and have
                  served thousands of individuals and businesses with their packing and moving
                  services.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Our impacted services are planned so that can reach the fulfillment of the client.
                  Mountain packers and movers in Mandi are continuously becoming a one-stop goal for
                  the entirety of your packing and moving requirements. Being first-rated packers
                  and movers, we convey reasonably safe moving services to our important clients
                  with the assistance of our regarded and appropriately arranged moving.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Thusly, in the event that you are searching for the{' '}
                  <a href="https://www.justdial.com/Mandi/Packers-And-Movers/nct-10348289" target="_blank" rel="noopener noreferrer">
                    best packer and mover in Mandi
                  </a>
                  , Mountain Packers &amp; movers can constantly is an optimal decision for you.
                  Since we have long experience and are the most dependable packer movers in your
                  space. Particularly, our modified services can be extremely useful to you. For any
                  inquiries or to schedule your move with Mountain Packers &amp; Movers in Mandi,
                  please don&apos;t hesitate to{' '}
                  <strong>
                    <Link href="/contact-us">contact us</Link>
                  </strong>{' '}
                  at +91-9317718180.
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

              {/* Service Details Card */}
              <div className="mp-sidebar-card sr">
                <div className="mp-sidebar-head">
                  <i className="fa-solid fa-list-check" /> Shifting Details
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
                  <i className="fa-solid fa-mountain" /> Mandi Stats
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
                <h4>Mandi Local Help</h4>
                <p>
                  Relocating within Mandi or to another hill station? Our local valley team is here.
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
                  <i className="fa-solid fa-map-location-dot" /> Regional Branches
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        className={b.href === '/packers-and-movers-in-mandi' ? 'active' : ''}
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
              Hill Shifting Roadmap
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              Relocation <span className="r">Flow</span>
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
