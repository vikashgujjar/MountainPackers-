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
  title: 'Mountain Packers - Best Packers and Movers in Kurukshetra',
  description:
    'Are you looking for the best packers and movers in Kurukshetra? Mountain Packers and Movers offer top-quality moving & packing services for all your needs.',
  keywords: 'best packers and movers in Kurukshetra',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/packers-and-movers-in-kurukshetra.html',
  },
  openGraph: {
    title: 'Mountain Packers - Best Packers and Movers in Kurukshetra',
    description:
      'Are you looking for the best packers and movers in Kurukshetra? Mountain Packers and Movers offer top-quality moving & packing services for all your needs.',
    url: 'https://www.mountainpackersmovers.in/packers-and-movers-in-kurukshetra.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: "We comprehend the significance of your time and the advantages of punctual delivery. We ensure that our packages are delivered within the designated time frame." },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'Our top priority is ensuring the safety of your valuable belongings, which is why we take great care in securely packing them.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of skilled experts can offer you assurance throughout the entire process, from planning to execution.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'To alleviate your concerns about your belongings, we offer SMS alerts and real-time tracking, keeping you informed.' },
  { icon: 'fa-indian-rupee-sign', title: 'Customer Support', desc: 'Our specialized services are cost-effective and can be easily incorporated into your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'We guarantee your transportation with our top-notch vehicles and experienced drivers.' },
];

const processSteps = [
  { num: '01', title: 'Route Survey', desc: 'Detailed assessment of your inventory and Kurukshetra location to plan the most efficient shifting route.' },
  { num: '02', title: 'Safe Packaging', desc: 'Using reinforced boxes and premium cushioning materials to protect your items from transit vibrations.' },
  { num: '03', title: 'Expert Loading', desc: 'Careful placement of all packed items into our secure transport vehicles by our trained professionals.' },
  { num: '04', title: 'Success Delivery', desc: 'On-time arrival at your new destination with complete assistance in unpacking and arranging your home.' },
];

const sidebarStats = [
  { icon: 'fa-dharmachakra', n: 'Top Rated', l: 'Kurukshetra Specialists' },
  { icon: 'fa-shield-halved', n: '100%', l: 'Secure Transit' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function KurukshetraBranchPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/best-packers-and-movers-in-Kurukshetra.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Top Rated Kurukshetra Movers
            </div>

            <h1 className="mp-hero-title">
              Best <span className="amber">Packers</span>
              <span className="outline">&amp; Movers</span>
              <br /> Kurukshetra
            </h1>

            <p className="mp-hero-sub">
              Trusted shifting experts in Kurukshetra. We provide top-quality
              moving and packing services at affordable prices, ensuring a
              completely stress-free relocation for your home or office.
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
            title="Kurukshetra Branch"
            subtitle="Request an on-site survey"
            icon="fa-map-location-dot"
            moveType="Kurukshetra Branch Quote"
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
                  src="/img/about/best-packers-and-movers-in-Kurukshetra.webp"
                  alt="best packers and movers in Kurukshetra"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-crown" /> Top Quality
                </div>
                <div className="mp-img-tag">✓ 100% Reliable Shifting</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Excellence in Haryana</div>
                <h1 className="mp-section-title">
                  BEST PACKERS AND <span className="r">MOVERS IN</span>
                  <br /><span className="a">KURUKSHETRA</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Are you searching for the{' '}
                  <strong>
                    <Link href="/packers-and-movers-in-kurukshetra">
                      best packers and movers in Kurukshetra
                    </Link>
                  </strong>
                  ? Mountain Packers &amp; Movers offer top-quality moving &amp; packing services for
                  all your needs. Moving can feel overwhelming, especially when you lack expertise in
                  the process. But, with the right specialist, you can make the process hassle-free
                  and enjoyable.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Finding a trustworthy packer and mover can be challenging, but we&apos;re here to help.
                  At Mountain Packers and Movers, we offer exceptional packing and moving services at
                  affordable prices. We collaborate closely with our customers to comprehend their
                  distinct requirements and deliver personalized solutions.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Don&apos;t stress over moving, let the experts at Mountain Packers and Movers handle it
                  for you. We are dedicated to providing you with a hassle-free and joyful moving
                  experience. Our team of experts delivers reliable and expert moving services that
                  will meet all your shifting needs.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/top-packers-and-movers-in-Kurukshetra.webp"
                  alt="top packers and movers in Kurukshetra"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Top Section */}
              <div className="sr">
                <div className="mp-eyebrow">Local Trust</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  TOP PACKERS AND MOVERS IN KURUKSHETRA
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  With years of experience in the industry, we have established ourselves as the top{' '}
                  <strong>packers and movers in Kurukshetra</strong>. Our organization is known for
                  providing the most trustworthy and demanding packing and moving services in the
                  area.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  We understand the importance of judicious packaging and moving services, which is
                  why we work with experienced and expert team members to ensure the safety of your
                  belongings. We strive to provide the most reliable and trustworthy packing and
                  moving experiences in Kurukshetra, Haryana.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Do not allow the anxiety of moving to overwhelm you. Trust the experts at{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>{' '}
                  to provide you with a seamless and stress-free moving experience.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packer-and-mover-in-Kurukshetra.webp"
                  alt="packer and mover in Kurukshetra"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              <div className="sr" style={{ marginTop: '30px' }}>
                <div className="mp-eyebrow">Customer Commitment</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  Why Choose Us As Your Packer and Mover In Kurukshetra?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  If you&apos;re looking for reliable{' '}
                  <a href="https://www.justdial.com/Kurukshetra/Packers-And-Movers/nct-10348289" target="_blank" rel="noopener noreferrer">
                    packer and mover in Kurukshetra
                  </a>
                  , Mountain Packers &amp; Movers is the right choice for you. Our experienced team
                  members believe in putting in their best effort to make your move a simple and
                  reliable process. With their expert assistance, they can meet all your packing and
                  moving essentials and execute all tasks with complete care.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  We apply reliable approaches and strategies for smooth moving, and we know our
                  responsibilities very well. By choosing us, you can acquire a wide range of moving
                  services under single surveillance. We have been serving in this industry for
                  years without any assertions or objections, making us a trustworthy and dependable
                  choice for your moving needs.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  So, if you want to have the best moving experience, start your moving journey with
                  Mountain Packers &amp; Movers in Kurukshetra.{' '}
                  <strong>
                    <Link href="/contact-us">Get in touch</Link>
                  </strong>{' '}
                  with us today to enjoy a smooth and hassle-free moving experience.
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

              {/* Sidebar Links */}
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
                  <i className="fa-solid fa-dharmachakra" /> Branch Expertise
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
                <h4>Kurukshetra Support</h4>
                <p>
                  Moving home within Kurukshetra? Our local team provides same-day shifting.
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
                  <i className="fa-solid fa-network-wired" /> Branch Network
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        className={b.href === '/packers-and-movers-in-kurukshetra' ? 'active' : ''}
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
              Relocation Standard
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              How we move <span className="r">Kurukshetra</span>
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
