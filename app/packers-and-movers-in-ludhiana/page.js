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
  title: 'Mountain Packers - Best Packers and Movers in Ludhiana',
  description:
    'Looking for the best packers and movers in Ludhiana? Mountain Packers provides seamless & affordable services with a team of experienced professionals.',
  keywords: 'best packers and movers in Ludhiana',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/packers-and-movers-in-ludhiana.html',
  },
  openGraph: {
    title: 'Mountain Packers - Best Packers and Movers in Ludhiana',
    description:
      'Looking for the best packers and movers in Ludhiana? Mountain Packers provides seamless & affordable services with a team of experienced professionals.',
    url: 'https://www.mountainpackersmovers.in/packers-and-movers-in-ludhiana.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: "Recognizing the value of your time and how timely delivery can be beneficial, we ensure to deliver our packages within the given timeframe." },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'With a strong emphasis on safety, we meticulously pack your precious belongings to ensure their security and protection.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of skilled experts can offer you assurance both pre and post-implementation.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'Understanding your concerns regarding your belongings, we offer SMS alerts and live tracking to keep you informed.' },
  { icon: 'fa-indian-rupee-sign', title: 'Customer Support', desc: 'Our specialized services are highly affordable and can be easily integrated into your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'For ensuring your transportation needs, we have the best vehicles and highly skilled and experienced drivers.' },
];

const processSteps = [
  { num: '01', title: 'Industrial Survey', desc: 'As Ludhiana is an industrial hub, we offer specialized surveys for both heavy machinery and delicate household goods.' },
  { num: '02', title: 'Multi-Layer Packing', desc: 'Using 5-ply corrugated boxes and moisture-resistant sheets to safeguard items against long-distance transit wear.' },
  { num: '03', title: 'Verified Fleet', desc: 'Your goods are transported in containerized vehicles driven by professionals with 10+ years of highway experience.' },
  { num: '04', title: 'On-Time Unpacking', desc: 'Efficient delivery at your doorstep with our dedicated local team helping you set up your new space immediately.' },
];

const sidebarStats = [
  { icon: 'fa-industry', n: 'Ludhiana Hub', l: 'Industrial Specialists' },
  { icon: 'fa-truck-moving', n: 'Large Fleet', l: 'Punjab-Wide Network' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function LudhianaBranchPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/best-packers-and-movers-in-Ludhiana.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Ludhiana&apos;s Shifting Choice
            </div>

            <h1 className="mp-hero-title">
              Movers <span className="amber">&amp; Packers</span>
              <span className="outline">Ludhiana</span>
            </h1>

            <p className="mp-hero-sub">
              Professional, affordable, and seamless shifting services in Ludhiana.
              Our experienced team handles everything from industrial relocation
              to household shifting with maximum care and precision.
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
            title="Ludhiana Branch"
            subtitle="Request an on-site survey"
            icon="fa-map-location-dot"
            moveType="Ludhiana Branch Quote"
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
                  src="/img/about/best-packers-and-movers-in-Ludhiana.webp"
                  alt="Best Packers and Movers in Ludhiana"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-industry" /> Ludhiana Expert
                </div>
                <div className="mp-img-tag">✓ Smooth Relocation</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Reliable Logistics Partners</div>
                <h1 className="mp-section-title">
                  ARE YOU LOOKING FOR THE <span className="r">BEST PACKERS</span>
                  <br />AND <span className="a">MOVERS IN LUDHIANA?</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Looking for reliable and best{' '}
                  <strong>
                    <Link href="/packers-and-movers-in-ludhiana">
                      packers and movers in Ludhiana
                    </Link>
                  </strong>
                  ? Mountain Packers provides seamless &amp; affordable services with a team of
                  experienced professionals. As you presumably are aware moving can&apos;t be a simple
                  cycle and in the event that you are not a specialist, then it may cause the most
                  baffling errands for you.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Consequently, to defeat what is going on and to make this interaction happy and
                  bother-free you want a specialist. Nevertheless, selecting the perfect one is once
                  again a daunting task. However, you need not worry about your assignments anymore,
                  as we are here to assist you.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Without a doubt, understanding or recognizing the best and solid packer-mover can
                  be a troublesome system yet not feasible. Therefore, by acknowledging the
                  standards, you can easily choose the superior one. We at Mountain packers and
                  movers in Ludhiana offer extraordinary packing and moving services at sensible
                  costs. Our development participation personally with the clients to give a changed
                  plan considering their necessities.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/best-packers-and-movers-services-in-Ludhiana.webp"
                  alt="best packers and movers services in Ludhiana"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Section 2 */}
              <div className="sr">
                <div className="mp-eyebrow">The Leading Standard</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  MOUNTAIN PACKERS AND MOVERS - THE BEST PACKERS AND MOVERS SERVICES IN LUDHIANA
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  We at{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>{' '}
                  offer the <strong>best packers and movers services in Ludhiana</strong> and
                  hassle-free moving experience. Additionally, we have a team of experts who deliver
                  the most joyful and expert moving movements. We offer the entire solution for your
                  shifting and are the most adequate one for your purpose.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Mountain packers and movers is working in this industry for years. Hence, with the
                  help of our years of experience and expertise, we have established our
                  organization as the top in this packing and moving industry. We have made
                  ourselves one of the most trustworthy and demanding{' '}
                  <strong>packers &amp; movers in Ludhiana.</strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Furthermore, we deliver judicious packaging and moving services with the help of
                  experienced and expert team members. It is also very crucial to get the most
                  reliable &amp; trustworthy packer &amp; movers to meet all the moving necessities
                  smoothly. Hence, We at Mountain Packers and Movers offer the most reliable packing
                  and moving experiences in Ludhiana Haryana.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packer-and-mover-in-Ludhiana.webp"
                  alt="packer and mover in Ludhiana"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              <div className="sr" style={{ marginTop: '30px' }}>
                <div className="mp-eyebrow">Proven Methodology</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  WHY CHOOSE US AS YOUR PACKER AND MOVER IN LUDHIANA?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  We are recognized{' '}
                  <a href="https://dir.indiamart.com/ludhiana/packer-mover.html" target="_blank" rel="noopener noreferrer">
                    Packer and Mover in Ludhiana
                  </a>{' '}
                  where you can get a comprehensive solution for your moving needs. Our experienced
                  team members believe in putting the entire effort to make your move a simple and
                  reliable process.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  They assist you with their expert assistance and can meet all packing-moving
                  essentials. They apply reliable approaches and strategies for smooth moving.
                  Additionally, they know their responsibilities very well hence they execute all
                  the tasks with complete care.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Moreover, by hiring us, you can obtain a comprehensive moving setup under one
                  supervision. We are invariably serving in this enterprise for years without any
                  assertions or objections. Therefore, if you want to have the best moving
                  experience then start your moving with Mountain Packers &amp; Movers.
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
                  <i className="fa-solid fa-truck-ramp-box" /> Services
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
                  <i className="fa-solid fa-industry" /> Ludhiana Stats
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
                <h4>Ludhiana Hub</h4>
                <p>
                  Industrial or household move in Ludhiana? Get in touch with our experts.
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
                  <i className="fa-solid fa-map-location-dot" /> Our Presence
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        className={b.href === '/packers-and-movers-in-ludhiana' ? 'active' : ''}
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
              Our Shifting <span className="r">Protocol</span>
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
