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
  title: 'Mountain Packers - Best Packers and Movers in Mohali',
  description:
    'Looking for the best packers and movers in Mohali? then choose Mountain Packers! Our experienced team provides reliable moving & packing services.',
  keywords: 'best packers and movers in Mohali, packers and movers in Mohali, affordable packers and movers in Mohali, packers and movers for shifting in Mohali',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/packers-and-movers-in-mohali.html',
  },
  openGraph: {
    title: 'Mountain Packers - Best Packers and Movers in Mohali',
    description:
      'Looking for the best packers and movers in Mohali? then choose Mountain Packers! Our experienced team provides reliable moving & packing services.',
    url: 'https://www.mountainpackersmovers.in/packers-and-movers-in-mohali.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: "Our timely delivery ensures that you save both time and money, as we value the importance of your time." },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'We prioritize the security of your valuables by placing a high emphasis on careful and secure packing techniques.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of trained specialists is available to offer you confidence and support throughout the entire process.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'To alleviate any concerns about your possessions, we offer SMS alerts and live tracking services.' },
  { icon: 'fa-indian-rupee-sign', title: 'Customer Support', desc: 'Our specialized services are both cost-effective and easily incorporated into your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'Our top-of-the-line vehicles and experienced drivers guarantee safe and dependable transportation.' },
];

const processSteps = [
  { num: '01', title: 'Urban Survey', desc: 'Precision assessment of your Mohali apartment or office to determine the best logistics strategy.' },
  { num: '02', title: 'Custom Packaging', desc: 'High-grade protection for fragile items and IT equipment using industry-standard materials.' },
  { num: '03', title: 'Safe Loading', desc: 'Securely loading your belongings into our verified transport fleet with specialized handling for tech goods.' },
  { num: '04', title: 'Hassle-Free Drop', desc: 'On-time arrival at your new destination with complete unpacking and setup support.' },
];

const sidebarStats = [
  { icon: 'fa-city', n: 'IT Hub Spec', l: 'Urban Shifting Experts' },
  { icon: 'fa-truck-moving', n: 'Fast', l: 'Local & Domestic' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function MohaliBranchPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/BEST-PACKERS-AND-MOVERS-IN-MOHALI.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Top Rated Mohali Movers
            </div>

            <h1 className="mp-hero-title">
              Packers <span className="amber">&amp; Movers</span>
              <br /><span className="outline">Mohali</span>
            </h1>

            <p className="mp-hero-sub">
              Professional, reliable, and affordable shifting in Mohali.
              Our expert team handles IT relocation, household shifting,
              and vehicle transport with 100% safety and precision.
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
            title="Mohali Branch"
            subtitle="Request an on-site survey"
            icon="fa-map-location-dot"
            moveType="Mohali Branch Quote"
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
                  src="/img/about/BEST-PACKERS-AND-MOVERS-IN-MOHALI.webp"
                  alt="Best Packers and Movers in Mohali"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-award" /> Best Choice
                </div>
                <div className="mp-img-tag">✓ 100% Secure Shifting</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Expert Moving Services</div>
                <h1 className="mp-section-title">
                  PACKERS AND <span className="r">MOVERS IN</span>
                  <br /><span className="a">MOHALI</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Are you in search of top-notch{' '}
                  <strong>
                    <Link href="/packers-and-movers-in-mohali">
                      packers and movers in Mohali
                    </Link>
                  </strong>
                  ? Then choose Mountain Packers &amp; Movers! Our experienced team provides reliable
                  moving &amp; packing services. When it comes to relocating, finding the right and
                  best packers and movers in Mohali can be challenging. However, with Mountain
                  Packers &amp; Movers, you can easily identify the benchmark for superior service. We
                  offer best packing and moving services in Mohali to ensure the safety of your
                  belongings during the relocation process.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  We understand that the security of your products is crucial, which is why we
                  prioritize safety and aim to provide a satisfactory moving experience. Our team of
                  specialists provides fully customized services to our clients that suit their
                  budgets and requirements.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  At Mountain Packers &amp; Movers, we employ modern technologies and techniques to
                  make the entire moving process reliable and stress-free. We recommend the most
                  suitable conveyance along with all the services required during the process,
                  making us the best choice for your moving needs.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/PACKERS-AND-MOVERS-For-SHIFTING-IN-MOHALI.webp"
                  alt="packers and movers for shifting in Mohali"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Second content block */}
              <div className="sr">
                <div className="mp-eyebrow">Premium Standards</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  CHOOSE THE BEST PACKERS AND MOVERS IN MOHALI FOR SHIFTING
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Mountain Packers &amp; Movers know that moving is not an easy procedure without
                  expertise. When you search for the best, safest <strong>packers and movers in Mohali</strong> for shifting. The first suggestion or name that you will be
                  suggested is Mountain Packers &amp; Movers. Because we are serving in this packing
                  and moving industry for years and are a prominent one who provides the safest
                  moving experience in Mohali and across the country.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Our specialist &amp; expert team members are highly recommended and can be the best
                  moving partner for you. We exist with amazing packing and moving services and are
                  a certified packer-mover enterprise in Mohali. Our specialists are always here to
                  assist you with their quality packing services.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Additionally, we always employ modern technologies &amp; techniques to conclude the
                  entire moving process reliably without any stress. Also, we again recommend the
                  most suitable conveyance along with all the services that may require during the
                  process. Therefore, choosing a moving partner like{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>{' '}
                  is an advantage in itself!
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packerandmoverinMohali.webp"
                  alt="packer and mover in Mohali"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              <div className="sr" style={{ marginTop: '30px' }}>
                <div className="mp-eyebrow">Shifting Reliability</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  CHOOSING US AS YOUR PACKER AND MOVER IN MOHALI
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Looking for <strong>packer and mover in Mohali</strong>? then avail Mountain
                  Packers &amp; Movers services. It can play a crucial role in moving your house,
                  corporate, or any other business. We have been serving thousands of clients with
                  our satisfactory services and continuously evolving ourselves to provide the best
                  service possible.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  We understand the value of time, which is why we proceed with every task under the
                  assigned duration without compromising on safety. We ensure the safest moving
                  experience for our valuable clients in Mohali.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  If you&apos;re looking for the{' '}
                  <a href="https://dir.indiamart.com/mohali/packer-mover.html" target="_blank" rel="noopener noreferrer">
                    packers and movers in Mohali
                  </a>
                  , start your relocation process with Mountain Packers &amp; Movers now! Feel free to{' '}
                  <strong>
                    <Link href="/contact-us">contact us</Link>
                  </strong>{' '}
                  for further queries and questions at any time.
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

              {/* Quick Links Card */}
              <div className="mp-sidebar-card sr">
                <div className="mp-sidebar-head">
                  <i className="fa-solid fa-link" /> Core Services
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
                  <i className="fa-solid fa-city" /> Mohali Branch
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
                <h4>Urban Support</h4>
                <p>
                  Need a swift sector-to-sector move in Mohali? Our local team is ready for action.
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
                  <i className="fa-solid fa-map-marker-alt" /> National Presence
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        className={b.href === '/packers-and-movers-in-mohali' ? 'active' : ''}
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
              How We Move <span className="r">Mohali</span>
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
