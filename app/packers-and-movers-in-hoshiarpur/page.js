import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Mountain Packers - Packers and Movers in Hoshiarpur',
  description:
    'Mountain Packers & Movers are leading packers and movers in Hoshiarpur! Our experienced team provides safe and efficient packing and moving services.',
  keywords: 'best packers and movers in Hoshiarpur',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/packers-and-movers-in-hoshiarpur.html',
  },
  openGraph: {
    title: 'Mountain Packers - Packers and Movers in Hoshiarpur',
    description:
      'Mountain Packers & Movers are leading packers and movers in Hoshiarpur! Our experienced team provides safe and efficient packing and moving services.',
    url: 'https://www.mountainpackersmovers.in/packers-and-movers-in-hoshiarpur.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: "Recognizing the importance of your time and the benefits of prompt delivery, we make sure to deliver our packages within the designated timeframe." },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'Our top priority is to ensure the safety of your treasured possessions, which is why we meticulously pack them for maximum security.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of proficient experts is equipped to offer you assurance throughout the entire process, from pre to post implementation.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'Understanding your concerns about your belongings, we offer SMS notifications and real-time tracking to keep you updated.' },
  { icon: 'fa-indian-rupee-sign', title: 'Customer Support', desc: 'Our specialized services are both cost-effective and simple to incorporate into your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'We have the finest vehicles and proficient, experienced drivers at your disposal to guarantee your transportation needs.' },
];

const processSteps = [
  { num: '01', title: 'Free Survey', desc: 'Book a free inspection in Hoshiarpur. We analyze your volume and provide a transparent, no-hidden-cost quote.' },
  { num: '02', title: 'Premium Packing', desc: 'We use industrial-grade bubbles, corrugated sheets, and stretch films to secure your items for the Doaba terrain.' },
  { num: '03', title: 'Safe Loading', desc: 'Our team expertly loads your goods into containerized trucks, ensuring balanced weight and secure placement.' },
  { num: '04', title: 'Timed Delivery', desc: 'We leverage our local Hoshiarpur network to ensure your goods are delivered and unpacked exactly when you need them.' },
];

const sidebarStats = [
  { icon: 'fa-shield-heart', n: '10+ Years', l: 'Trusted in Doaba' },
  { icon: 'fa-truck-moving', n: 'Fast', l: 'Local Coverage' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function HoshiarpurBranchPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/PACKERS-AND-MOVERS-IN-HOSHIARPUR.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Leading Movers In Hoshiarpur
            </div>

            <h1 className="mp-hero-title">
              Movers <span className="amber">&amp; Packers</span>
              <span className="outline">Hoshiarpur</span>
            </h1>

            <p className="mp-hero-sub">
              Your search for reliable packers in Hoshiarpur ends here. 
              Mountain Packers &amp; Movers provides safe, efficient, and 
              stress-free shifting solutions tailored to your budget.
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
              <i className="fa-solid fa-truck-pickup" />
              <div>
                <h3>Hoshiarpur Branch</h3>
                <p>Book your secure shift today</p>
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
                    <option>Bike / Car Transport</option>
                    <option>Storage Solutions</option>
                  </select>
                </div>
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Pickup Location</label>
                  <input type="text" placeholder="Hoshiarpur Area" />
                </div>
                <div className="mp-field">
                  <label>Destination</label>
                  <input type="text" placeholder="Target City" />
                </div>
              </div>

              <div className="mp-field">
                <label>Moving Date</label>
                <input type="date" />
              </div>

              <button className="mp-submit-btn">
                <i className="fa-solid fa-truck-fast" style={{ marginRight: '8px' }} />
                Get Hoshiarpur Estimate
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
                  src="/img/about/PACKERS-AND-MOVERS-IN-HOSHIARPUR.webp"
                  alt="Packers and Movers in Hoshiarpur"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-medal" /> Leading Service
                </div>
                <div className="mp-img-tag">✓ Safe &amp; Efficient</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Expert Shifting Solutions</div>
                <h1 className="mp-section-title">
                  WELCOME TO <span className="r">MOUNTAIN PACKERS &amp; MOVERS</span>
                  <br />THE LEADING <span className="a">PACKERS AND MOVERS IN HOSHIARPUR</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Welcome to Mountain Packers &amp; Movers ! We are reliable and leading{' '}
                  <strong>
                    <Link href="/packers-and-movers-in-hoshiarpur">
                      packers and movers in Hoshiarpur
                    </Link>
                  </strong>
                  . We are a team of experienced professionals who understand the stress of
                  relocation and are committed to providing you with hassle-free packing and moving
                  services. Our comprehensive services cover everything from packing, loading,
                  transportation, unloading, and unpacking, making your move smooth and stress-free.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  At Mountain Packers &amp; Movers, we pride ourselves on our attention to detail and
                  our commitment to customer satisfaction. We use only the highest quality packing
                  materials to ensure that your belongings are well-protected during transportation.
                  Our team of trained and experienced movers will handle your possessions with care
                  and respect, ensuring that everything arrives at your new location in the same
                  condition it was in when it left your old one.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packer-and-mover-in-Hoshiarpur.webp"
                  alt="packer and mover in Hoshiarpur"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Why Choose section */}
              <div className="sr">
                <div className="mp-eyebrow">The Doaba Choice</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  WHY CHOOSE US AS YOUR PACKER AND MOVER IN HOSHIARPUR?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  When it comes to choosing a{' '}
                  <a href="https://www.google.com/maps/place/Mountain+Packers+%26+Movers/@29.2884391,73.7950867,7z/data=!3m1!4b1!4m6!3m5!1s0x60b1f1f343ce58bd:0x38bb425863c41234!8m2!3d29.3071942!4d76.0389249!16s%2Fg%2F11rv1fq2h_" target="_blank" rel="noopener noreferrer">
                    packer and mover in Hoshiarpur
                  </a>
                  , trust{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>{' '}
                  for a hassle-free move. With over a decade of experience in the industry, we have
                  established ourselves as a reliable and trustworthy name in the market. Our team
                  of experienced professionals is dedicated to providing you with the best possible
                  service at an affordable price. We understand the value of your belongings and
                  take utmost care in handling them. Our services cover everything from packing,
                  loading, transportation, unloading, and unpacking, making your move smooth and
                  stress-free.
                </p>

                <div className="mp-why-bullets">
                  <ul className="mp-custom-list">
                    <li><strong>Experience</strong>: With over a decade of experience in the industry, we have established ourselves as a reliable and trustworthy name in the market. Our team has the expertise to handle any type of move, whether it&apos;s a local or long-distance move.</li>
                    <li><strong>Affordable</strong>: we understand the importance of budget-friendly moving services that don&apos;t compromise on quality. That&apos;s why we provide transparent pricing with no hidden charges, so you can be sure that you&apos;re getting the best value for your money. With our affordable rates and top-quality moving services, we are the ideal choice for your relocation needs.</li>
                    <li><strong>Safety</strong>: We understand the value of your belongings and take utmost care in handling them. Our team is equipped with the latest tools and equipment to ensure that your belongings are safe and secure throughout the move.</li>
                    <li><strong>Customer Service</strong>: We believe in providing the best customer service to our clients. Our team is available 24/7 to answer any queries you may have and ensure that your move is a hassle-free experience.</li>
                  </ul>
                </div>
              </div>

              {/* Our Services Section */}
              <div className="sr" style={{ marginTop: '40px' }}>
                <div className="mp-eyebrow">Comprehensive Coverage</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  OUR PACKERS AND MOVERS SERVICES :
                </h2>
              </div>

              <div className="mp-article sr d1">
                <div className="mp-why-bullets">
                  <ul className="mp-custom-list">
                    <li><strong>Packing and Moving</strong>: we employ premium quality packing materials to guarantee the safety of your belongings while in transit. Our team carefully packs and labels each item to make the unpacking process hassle-free.</li>
                    <li><strong>Local and Long-Distance Moving</strong>: Whether you are moving locally or across the country, we have the expertise to handle your move.</li>
                    <li><strong>Vehicle Transportation</strong>: We provide safe and secure transportation for your vehicles, including cars, bikes, and scooters.</li>
                    <li><strong>Office Relocation</strong>: We understand the importance of a seamless office move, and we work with you to ensure that your office is up and running in no time.</li>
                    <li><strong>Storage and Warehousing</strong>: We provide secure and affordable storage solutions for your belongings.</li>
                  </ul>
                </div>
                <p style={{ textAlign: 'justify', marginTop: '20px' }}>
                  <strong>
                    <Link href="/contact-us">Get in touch with us</Link>
                  </strong>{' '}
                  today to get a quote for your move! Our team will be happy to assist you with any
                  questions and queries you may have. Trust Mountain Packers &amp; Movers for your next
                  relocation.
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

              {/* Quick Links */}
              <div className="mp-sidebar-card sr">
                <div className="mp-sidebar-head">
                  <i className="fa-solid fa-link" /> Quick Links
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
                  <i className="fa-solid fa-shield-halved" /> Branch Stats
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
                <h4>Local Support</h4>
                <p>
                  Need a move within Hoshiarpur? Our local crew can complete it within 24 hours.
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
                  <i className="fa-solid fa-map-marker-alt" /> Presence
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        className={b.href === '/packers-and-movers-in-hoshiarpur' ? 'active' : ''}
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
              Relocation Roadmap
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              Our 4-Stage <span className="r">Shifting Standard</span>
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
