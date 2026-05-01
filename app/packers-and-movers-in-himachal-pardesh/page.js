import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Mountain Packers - Packers and Movers in Himachal Pardesh',
  description:
    "Looking for reliable packers and movers in Himachal Pradesh? Mountain Packer's expert team offers safe and efficient moving services tailored to your needs.",
  keywords: 'best packers and movers in Himachal Pardesh',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/packers-and-movers-in-himachal-pardesh.html',
  },
  openGraph: {
    title: 'Mountain Packers - Packers and Movers in Himachal Pardesh',
    description:
      "Looking for reliable packers and movers in Himachal Pradesh? Mountain Packer's expert team offers safe and efficient moving services tailored to your needs.",
    url: 'https://www.mountainpackersmovers.in/packers-and-movers-in-himachal-pardesh.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: "We understand the importance of your time and how receiving your packages promptly can benefit you. That's why we ensure the timely delivery of our packages within the designated timeframe." },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'With a strong emphasis on security, we take great care in packing your invaluable possessions to ensure their safety during transit.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of trained specialists can offer you assurance throughout the entire implementation process and beyond.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'Recognizing your concerns about your belongings, we offer SMS alerts and real-time tracking to keep you updated throughout the process.' },
  { icon: 'fa-indian-rupee-sign', title: 'Customer Support', desc: 'Our specialized services are both cost-effective and seamlessly integrated into your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'We guarantee reliable transportation with our top-of-the-line vehicles and highly experienced drivers.' },
];

const processSteps = [
  { num: '01', title: 'Statewide Planning', desc: 'We coordinate shifts across all districts of Himachal Pradesh with specialized logistics for hill terrain.' },
  { num: '02', title: 'Climate-Safe Packing', desc: 'Using moisture-resistant materials to protect your goods from Himachal diverse weather conditions.' },
  { num: '03', title: 'Safe Transit', desc: 'Our certified drivers navigate mountain passes and winding roads with 100% focus on item safety.' },
  { num: '04', title: 'Hassle-Free Setup', desc: 'We handle the heavy lifting, unpacking and arranging your items so you can enjoy your new home immediately.' },
];

const sidebarStats = [
  { icon: 'fa-mountain', n: 'Statewide', l: 'All Himachal Districts' },
  { icon: 'fa-truck-moving', n: 'Verified', l: 'Secure Fleet Transit' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function HimachalBranchPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/packers-and-movers-in-Himachal-Pradesh.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Certified Packers In Himachal
            </div>

            <h1 className="mp-hero-title">
              Himachal <span className="amber">Packers</span>
              <span className="outline">&amp; Movers</span>
            </h1>

            <p className="mp-hero-sub">
              Providing safe and efficient moving services tailored to the unique 
              topography of Himachal Pradesh. Trust our expert team for your 
              next household or office shift.
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
              <i className="fa-solid fa-map-marked-alt" />
              <div>
                <h3>Himachal Quote</h3>
                <p>Customized shifting plans</p>
              </div>
            </div>
            <div className="mp-qcard-body">
              <div className="mp-field">
                <label>Full Name</label>
                <input type="text" placeholder="Enter name" />
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Contact No.</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>
                <div className="mp-field">
                  <label>District</label>
                  <select defaultValue="">
                    <option value="" disabled>Select District</option>
                    <option>Shimla</option>
                    <option>Dharamshala / Kangra</option>
                    <option>Mandi</option>
                    <option>Solan</option>
                    <option>Kullu / Manali</option>
                    <option>Hamirpur</option>
                  </select>
                </div>
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Current Location</label>
                  <input type="text" placeholder="City/Village" />
                </div>
                <div className="mp-field">
                  <label>Destination</label>
                  <input type="text" placeholder="Target City" />
                </div>
              </div>

              <div className="mp-field">
                <label>Tentative Date</label>
                <input type="date" />
              </div>

              <button className="mp-submit-btn">
                <i className="fa-solid fa-truck-fast" style={{ marginRight: '8px' }} />
                Plan My Himachal Shift
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
                  src="/img/about/packers-and-movers-in-Himachal-Pradesh.webp"
                  alt="packers and movers in Himachal Pradesh"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-certificate" /> Expert Team
                </div>
                <div className="mp-img-tag">✓ 100% Transit Safety</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Statewide Excellence</div>
                <h1 className="mp-section-title">
                  PACKERS AND <span className="r">MOVERS IN</span>
                  <br /><span className="a">HIMACHAL PRADESH</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Looking for reliable{' '}
                  <strong>
                    <Link href="/packers-and-movers-in-himachal-pardesh">
                      packers and movers in Himachal Pradesh
                    </Link>
                  </strong>
                  ? Our expert team offers safe and efficient moving services tailored to your needs.
                  Mountains Packers &amp; Movers in Himachal Pradesh is one of the eminent
                  packers-movers. We are serving in this packing and moving industry for a long time
                  and have contributed a great deal in this packing and moving industry. We have
                  conveyed services to various clients with the best differentiae and have safely
                  conveyed their resources.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  We generally play out the moving errand with extraordinary consideration. When you
                  start your moving with us you must be guaranteed that your assets are in the most
                  secure hand and will be conveyed safely. We have a group of significantly capable
                  gathering serving for quite a long time with their expertise and experience.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Mountain Packers &amp; Movers is conceivable one of the most dependable packers and
                  movers. We have a gathering of specialists and are certified packers-movers in this
                  packing and moving industry in Himachal Pradesh. We have set a norm for the entire
                  Packing and Moving over the nation. We generally endeavour to protect clearness with
                  our clients to gain their trust. Consequently, by giving total fulfilment and
                  solace during moving.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/best-packers-and-movers-in-Himachal-Pradesh.webp"
                  alt="best packers and movers in Himachal Pradesh"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Why Choose section */}
              <div className="sr">
                <div className="mp-eyebrow">The Mountain Leader</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  MOUNTAIN PACKERS AND MOVERS - THE BEST PACKERS AND MOVERS IN HIMACHAL PRADESH
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Mountain Packers &amp; Movers is the{' '}
                  <strong>best packers and movers in Himachal Pradesh</strong> that conveys complete
                  packing and moving services for its clients. We generally endeavour to give an
                  amazing moving experience to our important clients. Additionally, we use
                  world-class and extended packing methods to finish the moving cycle safely without
                  a single damage at a reasonable cost.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Moreover, we likewise give the most exhaustive and savvy moving arrangements.
                  Whether your item is monstrous or supportive, serious or fragile, we favour the
                  most ideal way of conveying them. Thus, if you are thinking to start your move with
                  us, you can directly approach us by quoting.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  As you probably are aware, moving to start with one area and then onto the next can
                  be a disappointing errand, on the off chance that you are not an expert. Thus, to
                  produce it simpler and smoother you really need a specialist. Subsequently, for
                  this purpose Mountain packers &amp; mover can be the ideal choice for you in Himachal
                  Pradesh. You can easily start your Moving with us to experience the best moving
                  experience.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packer-and-mover-in-Himchal-Pradesh.webp"
                  alt="packer and mover in Himachal Pradesh"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              <div className="sr" style={{ marginTop: '30px' }}>
                <div className="mp-eyebrow">Customer Commitment</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  WHY CHOOSE US AS YOUR PACKER AND MOVER IN HIMACHAL PRADESH?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  We at{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>{' '}
                  offer a total moving arrangement who can meet all your moving necessities and also
                  we are certified packers movers. Furthermore, we offer various types of assistance
                  and our master services have made us the best{' '}
                  <a href="https://www.justdial.com/Hamirpur-Himachal-Pradesh/Packers-And-Movers/nct-10348289" target="_blank" rel="noopener noreferrer">
                    packer and mover in Himachal Pradesh
                  </a>{' '}
                  and across the country. In addition to this, we can guarantee you that we offer
                  master assistance and are accessible with start-to-finish services. Moreover. we
                  offer one of the most satisfactory packing and moving services.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  We are the reliable one for conveying the best packing and moving goals. We have
                  an enthusiastic group of gifted and experienced labour force, who are devoted and
                  responsible in their separate work. We endeavour to convey the task within the
                  given period without ditherings.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  After beginning your move with us you can be assured that the security of your
                  assets is our priority. Thus, to ensure their security, we always take your assets
                  or resources as a priority without any hesitation. Since being an expert it turns
                  into our need to guarantee the security of your belongings without solitary harm.
                  If you want to make your moving a dependable and smooth cycle then pick Mountain
                  Packers &amp; Movers in Himachal Pradesh.{' '}
                  <strong>
                    <Link href="/contact-us">Contact us</Link>
                  </strong>{' '}
                  today for a hassle-free move!
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

              {/* Main Services */}
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
                  <i className="fa-solid fa-mountain" /> HP Network
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
                <h4>Hill Hotline</h4>
                <p>
                  Relocating to a high-altitude area? We have specialized low-gear vehicles.
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
                  <i className="fa-solid fa-network-wired" /> State Branches
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        className={b.href === '/packers-and-movers-in-himachal-pardesh' ? 'active' : ''}
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
              HP Relocation Strategy
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              How we handle <span className="r">Himachal Terrain</span>
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
