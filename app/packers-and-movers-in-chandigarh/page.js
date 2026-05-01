import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';

export const metadata = {
  title: 'Best Packers and Movers In Chandigarh - Mountain Packers',
  description:
    'Mountain Packers & Movers are the best packers and movers in Chandigarh. Our experienced team provides a stress-free moving experience.',
  keywords:
    'packers and movers in Chandigarh, best packers and movers in Chandigarh, affordable packers and movers in Chandigarh, hire best packers and movers in Chandigarh',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/packers-and-movers-in-chandigarh.html',
  },
  openGraph: {
    title: 'Best Packers and Movers In Chandigarh - Mountain Packers',
    description:
      'Mountain Packers & Movers are the best packers and movers in Chandigarh. Our experienced team provides a stress-free moving experience.',
    url: 'https://www.mountainpackersmovers.in/packers-and-movers-in-chandigarh.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: 'Recognizing the value of your time and the benefits of prompt delivery, we make sure to deliver your packages within the designated timeframe.' },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'With a strong emphasis on security, we take great care in meticulously packing your valuable items to ensure their safety.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of trained specialists can instill confidence in you both prior to and following implementation.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'Recognizing your concerns about your belongings, we offer SMS alerts and live tracking to keep you informed and at ease.' },
  { icon: 'fa-indian-rupee-sign', title: 'Customer Support', desc: 'Our specialized services are highly cost-effective and can be easily integrated into your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'We provide top-notch transportation services with the help of our well-maintained vehicles and experienced, seasoned drivers.' },
];

const processSteps = [
  { num: '01', title: 'Plan Your Move', desc: 'Book a free consultation and survey. We provide a detailed relocation roadmap for your Chandigarh shift.' },
  { num: '02', title: 'Professional Packing', desc: 'Our experienced team arrives with heavy-duty materials to secure your household or office goods.' },
  { num: '03', title: 'Safe Loading', desc: 'Using specialized ramps and belts, we load your belongings into waterproof containers for maximum security.' },
  { num: '04', title: 'Unpack & Settle', desc: 'We deliver your items on time and help you set up your new space in Chandigarh or any branch city.' },
];

const sidebarStats = [
  { icon: 'fa-location-dot', n: '50+', l: 'Sectors Served' },
  { icon: 'fa-truck-moving', n: '15+', l: 'Trucks Ready' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function ChandigarhBranchPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/BESTPACKERSANDMOVERSINCHANDIGARH.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              #1 Rated Packers in Chandigarh
            </div>

            <h1 className="mp-hero-title">
              Best <span className="amber">Packers</span>
              <span className="outline">&amp; Movers</span>
              <br />In Chandigarh
            </h1>

            <p className="mp-hero-sub">
              Experience the gold standard of relocation services in Chandigarh. 
              Mountain Packers &amp; Movers provides stress-free, insured, and 
              safe shifting solutions for homes and offices.
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
              <i className="fa-solid fa-map-location-dot" />
              <div>
                <h3>Chandigarh Branch</h3>
                <p>Request an on-site survey</p>
              </div>
            </div>
            <div className="mp-qcard-body">
              <div className="mp-field">
                <label>Your Name</label>
                <input type="text" placeholder="Full Name" />
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Mobile Number</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>
                <div className="mp-field">
                  <label>Moving Type</label>
                  <select defaultValue="">
                    <option value="" disabled>Select Type</option>
                    <option>Within Chandigarh</option>
                    <option>Chandigarh to Outstation</option>
                    <option>Office Relocation</option>
                    <option>Vehicle Transport</option>
                  </select>
                </div>
              </div>

              <div className="mp-row2">
                <div className="mp-field">
                  <label>Sector / Area</label>
                  <input type="text" placeholder="Current Location" />
                </div>
                <div className="mp-field">
                  <label>Destination City</label>
                  <input type="text" placeholder="Drop Location" />
                </div>
              </div>

              <div className="mp-field">
                <label>Preferred Date</label>
                <input type="date" />
              </div>

              <button className="mp-submit-btn">
                <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }} />
                Get Estimate
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
                  src="/img/about/BESTPACKERSANDMOVERSINCHANDIGARH.webp"
                  alt="best Packers and Movers in Chandigarh"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-award" /> Top Rated
                </div>
                <div className="mp-img-tag">✓ Licensed &amp; Insured</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">The Trusted Choice</div>
                <h1 className="mp-section-title">
                  PACKERS AND <span className="r">MOVERS IN</span>
                  <br /><span className="a">CHANDIGARH</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Mountain Packers are the best{' '}
                  <strong>
                    <Link href="/packers-and-movers-in-chandigarh">
                      packers and movers in Chandigarh
                    </Link>
                  </strong>
                  . Our experienced team provides a stress-free moving experience. Our team of
                  experienced packing and moving experts ensures the timely delivery of your
                  consignment. They have acquired years of expertise in the industry. Book now the
                  affordable <strong>packers and movers in Chandigarh</strong>. They have learned
                  and experienced multiple moving circumstances and have served people across the
                  country with their top-notch packing and moving services.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Being renowned and top packers and movers across the country, we have developed our
                  moving services into miscellaneous modules. To accomplish the moving cycle safely
                  and make it more reliable, we provide one of the best moving services.
                  Furthermore, we have developed our services proficiently to satisfy all the
                  requirements of the clients and to give complete satisfaction.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Our assistance has excellent prestige in this packing and moving industry. In
                  addition to this, we generally endeavor to improve your moving experience by
                  releasing all the stress from you by furnishing a stress-free moving in
                  Chandigarh. We are a famous mover and packer firm, who carry out smart ways of
                  dealing with your belongings safely.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/PACKERS-AND-MOVERS-FOR-SHIFTING-IN-CHANDIGARH.webp"
                  alt="PACKERS AND MOVERS FOR SHIFTING IN CHANDIGARH"
                  width={860}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: '400px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Why Choose section */}
              <div className="sr">
                <div className="mp-eyebrow">Local Expertise</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  CHOOSE PACKERS AND MOVERS IN CHANDIGARH
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  Our influenced facilities are designed in such a way that can reach the
                  satisfaction of the client. For all your packing and moving needs,{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>{' '}
                  can serve as a one-stop destination. Being top-notch{' '}
                  <a href="https://www.justdial.com/Chandigarh/Packers-And-Movers/nct-10348289" target="_blank" rel="noopener noreferrer">
                    packers and movers in Chandigarh
                  </a>
                  , we deliver favorably safe moving services to our valuable clients with the help
                  of our esteemed &amp; properly planned moving.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Additionally, with the help of our experts and their years of research, we have
                  designed a wonderful packing &amp; moving service that can meet all your moving
                  requirements easily. Furthermore, we deliver the best moving arrangements
                  utilizing the most reliable &amp; modern technology. Also with help of modern
                  technologies and techniques, we have served thousands of clients across Chandigarh
                  by guaranteeing bother-free moving services.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Therefore, if you are looking for the{' '}
                  <strong>best packers and movers in Chandigarh</strong> then Mountain Packers &amp;
                  movers can always be an ideal choice for you. Because we have years of experience
                  and are one of the most reliable packers movers in your area. Especially, our
                  customized services can always be very helpful to you and can save time and money.{' '}
                  <strong>
                    <Link href="/contact-us">Get in touch</Link>
                  </strong>{' '}
                  for more information.
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
                  <i className="fa-solid fa-chart-line" /> Local Advantage
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

              {/* Contact Card */}
              <div className="mp-help-card sr d2">
                <h4>Chandigarh HQ</h4>
                <p>
                  2248 Madiwala Town, Manimajra, Chandigarh - 160101
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

              {/* Other Branches */}
              <div className="mp-sidebar-card sr d3">
                <div className="mp-sidebar-head">
                  <i className="fa-solid fa-network-wired" /> Other Branches
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        className={b.href === '/packers-and-movers-in-chandigarh' ? 'active' : ''}
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
              The Mountain <span className="r">Shifting Standard</span>
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
