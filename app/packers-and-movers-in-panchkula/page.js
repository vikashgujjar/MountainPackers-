import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Mountain Packers - Best Packers and Movers in Panchkula',
  description:
    'Looking for reliable packers and movers in Panchkula? Look no further than Mountain Packers and Movers! Our top-notch services make us a top choice.',
  keywords: 'best packers and movers in Panchkula, affordable packers and movers in Panchkula, packer and mover in Panchkula',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/packers-and-movers-in-panchkula.html',
  },
  openGraph: {
    title: 'Mountain Packers - Best Packers and Movers in Panchkula',
    description:
      'Looking for reliable packers and movers in Panchkula? Look no further than Mountain Packers and Movers! Our top-notch services make us a top choice.',
    url: 'https://www.mountainpackersmovers.in/packers-and-movers-in-panchkula.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: "We understand the importance of your time and how timely delivery can be advantageous. We ensure delivery within the designated timeframe." },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'We give utmost priority to the security of your priceless valuables and take great care in packing them for safety.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of proficient specialists can assure you with confidence before and after the implementation process.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'We offer SMS alerts and live tracking to keep you updated on the status of your possessions.' },
  { icon: 'fa-indian-rupee-sign', title: 'Customer Support', desc: 'The services we offer are highly specialized and affordable, easily incorporated into your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'We guarantee reliable transportation by utilizing the finest vehicles and highly skilled, experienced drivers.' },
];

const processSteps = [
  { num: '01', title: 'Home Survey', desc: 'A thorough walkthrough of your Panchkula residence to document inventory and plan the optimal packing strategy.' },
  { num: '02', title: 'Secure Packing', desc: 'Using specialized materials for local Panchkula moves to ensure zero damage to furniture and electronics.' },
  { num: '03', title: 'Safe Transit', desc: 'Efficient movement through the Tricity network with real-time tracking for peace of mind.' },
  { num: '04', title: 'Smooth Setup', desc: 'Expert unloading and unpacking at your new Panchkula sector, helping you settle in quickly.' },
];

const sidebarStats = [
  { icon: 'fa-city', n: 'Residential Spec', l: 'Panchkula Sector Experts' },
  { icon: 'fa-truck-fast', n: 'Fast', l: 'Tricity Network' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function PanchkulaBranchPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/best-packers-and-movers-in-Panchkula.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Top Choice In Panchkula
            </div>

            <h1 className="mp-hero-title">
              Movers <span className="amber">&amp; Packers</span>
              <span className="outline">Panchkula</span>
            </h1>

            <p className="mp-hero-sub">
              Trusted, reliable, and safest choice for shifting in Panchkula. 
              Our expert team provides top-notch residential and corporate 
              relocation services across all sectors.
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
                <h3>Panchkula Quote</h3>
                <p>Relocate with confidence</p>
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
                    <option>Home Shifting</option>
                    <option>Office Relocation</option>
                    <option>Vehicle Transit</option>
                    <option>Storage Services</option>
                  </select>
                </div>
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Current Sector</label>
                  <input type="text" placeholder="Panchkula Sector" />
                </div>
                <div className="mp-field">
                  <label>Target Area</label>
                  <input type="text" placeholder="Destination" />
                </div>
              </div>

              <div className="mp-field">
                <label>Shifting Date</label>
                <input type="date" />
              </div>

              <button className="mp-submit-btn">
                <i className="fa-solid fa-calculator" style={{ marginRight: '8px' }} />
                Calculate Panchkula Price
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
                  src="/img/about/best-packers-and-movers-in-Panchkula.webp"
                  alt="best packers and movers in Panchkula"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-shield-check" /> Verified Safety
                </div>
                <div className="mp-img-tag">✓ Best Panchkula Shifters</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Excellence in Panchkula</div>
                <h1 className="mp-section-title">
                  PACKERS AND <span className="r">MOVERS IN</span>
                  <br /><span className="a">PANCHKULA</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Looking for reliable{' '}
                  <strong>
                    <Link href="/packers-and-movers-in-panchkula">
                      packers and movers in Panchkula
                    </Link>
                  </strong>{' '}
                  ? Then choose us! Our top-notch services make us a top choice. Our team of highly
                  skilled professionals provides reliable and affordable packing and moving services
                  in Panchkula for local, domestic, and corporate relocations, office shifting, car
                  transportation, packing, unpacking, and warehouse services.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  We take great care to ensure the safety of your assets during the moving process
                  and provide all of our services at a reasonable cost. Our team of experts is
                  dedicated to ensuring that your move is stress-free and done with extreme care to
                  prevent any damage.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  At Mountain Packers &amp; Movers, we strive to make our moving process efficient and
                  reliable. We have become a recognized name in the industry and set a benchmark for
                  other <strong>packers and movers in Panchkula</strong>. We provide top-to-bottom
                  packing and moving services, putting additional effort and care into safety.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packers-and-movers-for-shifting-in-Panchkula.webp"
                  alt="packers and movers for shifting in Panchkula"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Section 2 */}
              <div className="sr">
                <div className="mp-eyebrow">The Standard of Choice</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  CHOOSE PACKERS AND MOVERS IN PANCHKULA FOR SHIFTING
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  When it comes to <strong>packers and movers in Panchkula</strong> for shifting,
                  then Mountain Packers &amp; Movers is the most reliable, expert, and safest choice
                  you can make. Our team is constantly striving to improve the efficiency and
                  reliability of our moving process, making us a recognized name in the industry and
                  setting the benchmark for others to follow.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  We provide comprehensive packing and moving services in Panchkula, with extra care
                  taken during packing and transportation to ensure your belongings are safe and
                  secure. As India&apos;s leading packing and moving company, we offer a wide range of
                  capacities to meet all of your moving needs, while still providing the most
                  economical shifting facility available.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  If you want the best and safest moving experience in Panchkula, Choose{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>
                  . We have designed our services to exceed your expectations and provide you with
                  complete peace of mind during the entire process.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packer-and-mover-in-Panchkula.webp"
                  alt="packer and mover in Panchkula"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              <div className="sr" style={{ marginTop: '30px' }}>
                <div className="mp-eyebrow">Proven Reliability</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  CHOOSING US AS YOUR PACKER AND MOVER IN PANCHKULA
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Finding trustworthy and safe <strong>packer and mover in Panchkula</strong> can be
                  a challenging task, given the plethora of options available in the market.
                  However, Mountain Packers and Movers can provide you with a wide range of packing
                  and moving capabilities, setting the industry benchmark.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  We assure you that we can meet all your packing and moving requirements, offering
                  completely protected and cost-effective moving solutions. We are your one-stop
                  solution in Panchkula for all your relocation needs.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  If you are searching for the ideal top{' '}
                  <a href="https://www.justdial.com/Chandigarh/Packers-And-Movers-in-Panchkula/nct-10348289" target="_blank" rel="noopener noreferrer">
                    packers and movers in Panchkula
                  </a>
                  , we can be your top choice for top-notch packing and moving services. Do not
                  hesitate to{' '}
                  <strong>
                    <Link href="/contact-us">contact us</Link>
                  </strong>{' '}
                  if you have any doubts and queries.
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
                  <i className="fa-solid fa-list-check" /> Core Offerings
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
                  <i className="fa-solid fa-city" /> Panchkula Stats
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
                <h4>Panchkula Expert</h4>
                <p>
                  Relocating to a new sector in Panchkula? Get in touch with our local specialists.
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
                  <i className="fa-solid fa-map-location-dot" /> Our Branch Network
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        className={b.href === '/packers-and-movers-in-panchkula' ? 'active' : ''}
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
              Panchkula Shifting Workflow
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              Standardized <span className="r">Process</span>
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
