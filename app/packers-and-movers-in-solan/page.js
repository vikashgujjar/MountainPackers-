import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Mountain Packers - Best Packers and Movers in Solan',
  description:
    'Looking for reliable packers and movers in Solan? Then choose Mountain Packers! Our expert team of professionals provides a hassle-free moving experience.',
  keywords: 'best packers and movers in Solan, top packers and movers in Solan, affordable packers and movers in Solan, packers and movers in Solan',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/packers-and-movers-in-solan.html',
  },
  openGraph: {
    title: 'Mountain Packers - Best Packers and Movers in Solan',
    description:
      'Looking for reliable packers and movers in Solan? Then choose Mountain Packers! Our expert team of professionals provides a hassle-free moving experience.',
    url: 'https://www.mountainpackersmovers.in/packers-and-movers-in-solan.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: "We understand the value of your time and the importance of timely delivery. We ensure our packages are delivered within the allotted time." },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'Ensuring the utmost security of your belongings is our top priority, which is why we take special care in packing your priceless valuables.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of trained specialists can provide you with confidence both before and after implementation, ensuring peace of mind.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'To address concerns about safety, we offer SMS alerts and live tracking to keep you informed throughout the moving process.' },
  { icon: 'fa-indian-rupee-sign', title: 'Customer Support', desc: 'Our specialized services are not only affordable but also easy to integrate into your budget, ensuring top-quality without breaking the bank.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'Our transportation services are top-notch, utilizing the best vehicles and employing skilled, seasoned drivers for safety.' },
];

const processSteps = [
  { num: '01', title: 'Logistics Survey', desc: 'Expert assessment of your Solan property to handle the unique industrial or residential shifting requirements.' },
  { num: '02', title: 'Strategic Packing', desc: 'Using high-grade materials and scientific packing techniques to protect fragile and heavy industrial items alike.' },
  { num: '03', title: 'Monitored Transit', desc: 'Secure transportation with live GPS tracking, ensuring your goods navigate the Solan bypass and hill roads safely.' },
  { num: '04', title: 'Hassle-Free Setup', desc: 'Efficient unloading and careful unpacking at your new Solan location, managed by our professional on-site team.' },
];

const sidebarStats = [
  { icon: 'fa-industry', n: 'Industrial Hub', l: 'Top Solan Shifters' },
  { icon: 'fa-truck-ramp-box', n: 'Fast', l: 'Doorstep Service' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function SolanBranchPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/best-packers-and-movers-in-Solan.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Solan&apos;s Most Trusted Team
            </div>

            <h1 className="mp-hero-title">
              Packers <span className="amber">&amp; Movers</span>
              <br /><span className="outline">Solan</span>
            </h1>

            <p className="mp-hero-sub">
              Professional, authorized, and hassle-free moving experience in Solan. 
              Our expert team provides customized plans for safe and secure 
              transportation of your valuables at affordable prices.
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
                <h3>Solan Estimate</h3>
                <p>Swift & secure relocation</p>
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
                  <label>Service Type</label>
                  <select defaultValue="">
                    <option value="" disabled>Select Service</option>
                    <option>House Shifting</option>
                    <option>Office Relocation</option>
                    <option>Industrial Shifting</option>
                    <option>Vehicle Transit</option>
                  </select>
                </div>
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Current Area</label>
                  <input type="text" placeholder="Solan Locality" />
                </div>
                <div className="mp-field">
                  <label>Target City</label>
                  <input type="text" placeholder="Destination" />
                </div>
              </div>

              <div className="mp-field">
                <label>Moving Date</label>
                <input type="date" />
              </div>

              <button className="mp-submit-btn">
                <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }} />
                Get Solan Quote
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
                  src="/img/about/best-packers-and-movers-in-Solan.webp"
                  alt="Best Packers and Movers in Solan"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-award" /> Best Choice
                </div>
                <div className="mp-img-tag">✓ Safe Mountain Shifting</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Expert Shifters in Solan</div>
                <h1 className="mp-section-title">
                  BEST PACKERS AND <span className="r">MOVERS IN</span>
                  <br /><span className="a">SOLAN</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Moving to a new place can be a daunting task, especially if you&apos;re not an expert
                  in the field. If you&apos;re looking for the{' '}
                  <strong>
                    <Link href="/packers-and-movers-in-solan">
                      best packers and movers in Solan
                    </Link>
                  </strong>
                  , There is no need to look any further than Mountain Packers &amp; Movers. We are an
                  authorized and experienced team of professionals dedicated to making your moving
                  process hassle-free and enjoyable.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Finding the right packer-mover can be a daunting task, but it&apos;s not impossible.
                  By setting standards, you can easily choose the best one. At{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>
                  , we offer exceptional packing and moving services at affordable prices. Our team
                  works closely with our clients to provide a customized plan that caters to their
                  individual needs.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  We understand the importance of safe and secure transportation of your
                  belongings, and we take all necessary precautions to ensure that everything
                  arrives at your destination in pristine condition. Our team of experts uses
                  high-quality packing materials to ensure that your items are well-protected during
                  the move.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packers and movers for shifting in Solan.png"
                  alt="packers and movers for shifting in Solan"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Section 2 */}
              <div className="sr">
                <div className="mp-eyebrow">Reliability Standards</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  CHOOSE PACKERS AND MOVERS IN SOLAN FOR SHIFTING
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  If you&apos;re planning to move to a new place, you need a reliable and experienced
                  team. we have expert <strong>packers and movers in Solan</strong> for shifting to
                  ensure a hassle-free experience. Our team of experts delivers joyful and expert
                  moving services, offering a complete solution for your shifting needs.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  With years of experience in the industry, we have established ourselves as the
                  most trustworthy and demanding top <strong>packers and movers in Solan</strong>. We
                  deliver judicious packaging and moving services with the help of our experienced
                  and expert team members.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  It&apos;s crucial to find a reliable and trustworthy{' '}
                  <strong>packer and mover in Solan</strong> to meet all your moving needs smoothly.
                  That&apos;s why we offer the most reliable packing and moving experiences in Solan.
                  We understand the importance of safe and secure transportation of your belongings
                  and take all necessary precautions to ensure that everything arrives at your
                  destination in pristine condition.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packer-and-mover-in-Solan.webp"
                  alt="packer and mover in Solan"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              <div className="sr" style={{ marginTop: '30px' }}>
                <div className="mp-eyebrow">Hassle-Free Commitment</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  CHOOSING US AS YOUR PACKER AND MOVER IN SOLAN
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  When it comes to moving, you want a reliable{' '}
                  <a href="https://www.justdial.com/Solan/Packers-And-Movers/nct-10348289" target="_blank" rel="noopener noreferrer">
                    packer and mover in Solan
                  </a>{' '}
                  to make the process simple and stress-free. That&apos;s where Mountain Packers &amp;
                  Movers come in.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Our team members are experts in the field and believe in putting in the effort to
                  make your move a hassle-free and reliable process. They use reliable approaches
                  and strategies to ensure a smooth moving experience, and they know their
                  responsibilities well, executing all tasks with complete care.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  At Mountain Packers &amp; Movers, we offer a comprehensive solution for all your
                  moving needs, providing a wide range of services under single surveillance. We&apos;ve
                  been serving in the industry for years without any complaints or objections,
                  making us the most trustworthy, reliable, and affordable packers and movers.{' '}
                  <strong>
                    <Link href="/contact-us">Contact us</Link>
                  </strong>{' '}
                  today to learn more about our services and receive a customized quote.
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

              {/* Menu Card */}
              <div className="mp-sidebar-card sr">
                <div className="mp-sidebar-head">
                  <i className="fa-solid fa-list-ul" /> Key Services
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
                  <i className="fa-solid fa-industry" /> Solan Branch
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
                <h4>Local Solan Support</h4>
                <p>
                  Planning a move in the Mushroom City? Our dedicated Solan team is here to help.
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
                  <i className="fa-solid fa-location-crosshairs" /> Branch Network
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        className={b.href === '/packers-and-movers-in-solan' ? 'active' : ''}
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
              Moving Protocol
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              Our 4-Step <span className="r">Workflow</span>
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
