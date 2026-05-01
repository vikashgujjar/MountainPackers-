import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Mountain Packers - Best Packers and Movers in Jalandhar',
  description:
    'Looking for the best packers and movers in Jalandhar? Our team of experts offers top-notch moving services, including packing, loading, and unloading.',
  keywords: 'best packers and movers in Jalandhar',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/packers-and-movers-in-jalandhar.html',
  },
  openGraph: {
    title: 'Mountain Packers - Best Packers and Movers in Jalandhar',
    description:
      'Looking for the best packers and movers in Jalandhar? Our team of experts offers top-notch moving services, including packing, loading, and unloading.',
    url: 'https://www.mountainpackersmovers.in/packers-and-movers-in-jalandhar.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: "We understand the importance of your time and how on-time delivery can save you a lot. We ensure packages are delivered within the designated timeframe." },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'We prioritize the safety of your valuable possessions by meticulously packing them to ensure their security.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of skilled professionals is capable of instilling confidence in you, both prior to and following implementation.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'We understand your concerns about your belongings, which is why we offer SMS alerts and real-time tracking.' },
  { icon: 'fa-indian-rupee-sign', title: 'Customer Support', desc: 'Our specialized services are highly cost-effective and can be seamlessly integrated into your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'We offer top-notch vehicles and highly experienced drivers to guarantee your transportation needs are met.' },
];

const processSteps = [
  { num: '01', title: 'Custom Survey', desc: 'We conduct a detailed inventory check at your Jalandhar location to provide a personalized shifting plan.' },
  { num: '02', title: 'Heavy-Duty Packing', desc: 'Using multi-layer protection for electronics and industrial-grade wraps for furniture and machinery.' },
  { num: '03', title: 'Safe Loading', desc: 'Systematic placement of goods in our verified transport vehicles to prevent any movement during transit.' },
  { num: '04', title: 'Prompt Delivery', desc: 'Timely arrival and professional unpacking at your new destination with our expert support team.' },
];

const sidebarStats = [
  { icon: 'fa-city', n: 'Hub Expert', l: 'Top Jalandhar Movers' },
  { icon: 'fa-truck-moving', n: 'Verified', l: 'Secure Fleet Transit' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function JalandharBranchPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/best-packers-and-movers-in-Jalandhar.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              #1 Packers In Jalandhar
            </div>

            <h1 className="mp-hero-title">
              Best <span className="amber">Packers</span>
              <span className="outline">&amp; Movers</span>
              <br /> Jalandhar
            </h1>

            <p className="mp-hero-sub">
              Your trusted partner for hassle-free shifting in Jalandhar. 
              We offer top-notch moving services including professional packing, 
              safe loading, and timely unloading at competitive prices.
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
              <i className="fa-solid fa-building-circle-check" />
              <div>
                <h3>Jalandhar Quote</h3>
                <p>Stress-free relocation starts here</p>
              </div>
            </div>
            <div className="mp-qcard-body">
              <div className="mp-field">
                <label>Your Name</label>
                <input type="text" placeholder="Enter name" />
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>
                <div className="mp-field">
                  <label>Shifting Service</label>
                  <select defaultValue="">
                    <option value="" disabled>Select Service</option>
                    <option>House Relocation</option>
                    <option>Office Shifting</option>
                    <option>Car/Bike Transport</option>
                    <option>Warehousing</option>
                  </select>
                </div>
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Current Area</label>
                  <input type="text" placeholder="Pickup point" />
                </div>
                <div className="mp-field">
                  <label>Target Area</label>
                  <input type="text" placeholder="Drop point" />
                </div>
              </div>

              <div className="mp-field">
                <label>Proposed Date</label>
                <input type="date" />
              </div>

              <button className="mp-submit-btn">
                <i className="fa-solid fa-truck-ramp-box" style={{ marginRight: '8px' }} />
                Get Instant Estimate
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
                  src="/img/about/best-packers-and-movers-in-Jalandhar.webp"
                  alt="Best Packers And Movers in Jalandhar"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-star" /> Best in Jalandhar
                </div>
                <div className="mp-img-tag">✓ Verified Professionals</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Premium Shifting Support</div>
                <h1 className="mp-section-title">
                  BEST PACKERS AND <span className="r">MOVERS IN</span>
                  <br /><span className="a">JALANDHAR</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  When it comes to shifting your goods from one location to another it becomes very
                  crucial to choose the right and best{' '}
                  <strong>
                    <Link href="/packers-and-movers-in-jalandhar">
                      packers and movers in Jalandhar
                    </Link>
                  </strong>
                  . Because packer-mover helps you in moving your valuable items and supports you as
                  a supportive hand. They put their efforts to ensure the safety of your valuable
                  items. Thus, if you are searching for the <strong>best packers and movers in Jalandhar</strong> then Mountain packers & movers always be an ideal choice for you.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Mountain Packers & Movers have served thousands of valuable clients with its
                  satisfactory services. We have offered them the best packing and moving
                  experiences with us. Additionally, we are still serving in this packing and moving
                  industry without a single complaint. Apart from the above, we all know, packing
                  plays an integral role in ensuring the safety of your belongings. Thus, we
                  satisfactorily accomplish the task and ensure the safety of your valuable articles.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Additionally, apart from offering the best packing and moving services we also
                  offer storage or warehousing services in Jalandhar. We at Mountain packers and
                  movers in Jalandhar offer the most secure and reliable packing and moving services.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/Best-Packers-and-Movers-services-in-Jalandhar.webp"
                  alt="best packers and movers services in Jalandhar"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Shifting section */}
              <div className="sr">
                <div className="mp-eyebrow">The Trusted Partner</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  MOUNTAIN PACKERS AND MOVERS - THE BEST PACKERS AND MOVERS SERVICES IN JALANDHAR
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Do you want to make your move more effortless and more satiny? Then you must
                  choose Mountain <strong>Packers and Movers services in Jalandhar</strong>. We can
                  help you in making your move a stress-free process. Because we are one of the most
                  reliable packers and movers service providers in Jalandhar. We utilize the best
                  approach while accomplishing the moving process to make it more dependable and
                  hassle-free. We take good care of your belongings by using really good packing
                  materials.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Moreover, our professional team always prefers the best protective ways while
                  performing their job and their respective accountabilities. As we use adequate
                  quality packing materials to secure the belongings. Moreover, our experience
                  surveillance is always ready to serve you and can meet all your packing and moving
                  needs without inducing any disruption.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  In addition to this, our skilled and knowledgeable experts carry out every task
                  with extra care and attention to make the process even more impressive. Therefore,
                  if you are thinking to Move any part of Jalandhar or across the country must
                  select Mountain Packers &amp; Movers.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packer-and-mover-in-Jalandhar.webp"
                  alt="packer and mover in Jalandhar"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              <div className="sr" style={{ marginTop: '30px' }}>
                <div className="mp-eyebrow">Customer Focus</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  WHY CHOOSE US AS YOUR PACKER AND MOVER IN JALANDHAR?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Mountain Packers &amp; Movers is a prominent <strong>packer and mover in Jalandhar</strong> and across the country. Our top-quality assistance is always supposed to
                  deliver excellent packing and moving services to our customers. We at{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>{' '}
                  offer customized services as per the request or requirements of the clients. We
                  entirely personalize our services so that our clients can get benefited from this.
                  We always take care of the consent of the clients so we furnish advantageous
                  services according to give satisfaction &amp; comfort to them.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  As we all know that shifting from one location to another is a tough task. Also,
                  if you are not an expert then it becomes more frustrating and terrible. Thus, to
                  make this procedure easy and smooth you needed professionals to support you in
                  performing the tasks. Hence, if you are looking for the best{' '}
                  <a href="https://www.justdial.com/Jalandhar/Packers-And-Movers/nct-10348289" target="_blank" rel="noopener noreferrer">
                    packer and mover in Jalandhar
                  </a>{' '}
                  then start moving with Mountain packers &amp; movers by{' '}
                  <strong>
                    <Link href="/contact-us">quoting now</Link>
                  </strong>
                  .
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

              {/* Sidebar Services */}
              <div className="mp-sidebar-card sr">
                <div className="mp-sidebar-head">
                  <i className="fa-solid fa-truck-ramp-box" /> Our Services
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
                  <i className="fa-solid fa-award" /> Jalandhar Branch
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
                <h4>Jalandhar Support</h4>
                <p>
                  Relocating within Jalandhar or to another state? Contact our branch manager.
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
                        className={b.href === '/packers-and-movers-in-jalandhar' ? 'active' : ''}
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
              Our Shifting Process
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              Reliable <span className="r">Relocation</span> Standard
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
