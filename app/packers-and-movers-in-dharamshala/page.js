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
  title: 'Mountain Packers - Packers and Movers in Dharamshala',
  description:
    'Looking for reliable packers and movers in Dharamshala? Mountain Packers & Movers provides hassle-free moving services. Contact us for a stress-free move!',
  keywords:
    'best packers and movers in Dharamshala. packers and movers in Dharamshala, packing and moving services in Dharamshala',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/packers-and-movers-in-dharamshala.html',
  },
  openGraph: {
    title: 'Mountain Packers - Packers and Movers in Dharamshala',
    description:
      'Looking for reliable packers and movers in Dharamshala? Mountain Packers & Movers provides hassle-free moving services. Contact us for a stress-free move!',
    url: 'https://www.mountainpackersmovers.in/packers-and-movers-in-dharamshala.html',
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
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: "We understand the importance of your time and the potential benefits of timely delivery. That's why we make sure to deliver our packages within the designated timeframe." },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'To ensure the safety and security of your valuable possessions, we take great care in packing them with utmost caution and attention.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of trained specialists is equipped to provide you with confidence both prior to and after implementation.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'We understand your concerns about your belongings, and to address them, we offer SMS alerts and real-time tracking to keep you updated.' },
  { icon: 'fa-indian-rupee-sign', title: 'Customer Support', desc: 'Our specialized services are priced affordably and can be easily integrated into your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'We guarantee reliable transportation by providing the finest vehicles and employing skilled, experienced drivers.' },
];

const processSteps = [
  { num: '01', title: 'Hill-Route Planning', desc: 'Relocating in Dharamshala requires expertise in mountain routes. We plan your shift to avoid traffic and ensure safe turns.' },
  { num: '02', title: 'Waterproof Packing', desc: 'Given the hill weather, we use heavy-duty waterproof layering for all your belongings and furniture.' },
  { num: '03', title: 'Steep-Incline Transit', desc: 'Our drivers are specialists in navigating Dharamshala steep inclines with heavily loaded shifting vehicles.' },
  { num: '04', title: 'Doorstep Delivery', desc: 'We deliver and unpack at your new home or office, even in the most remote areas of the Kangra Valley.' },
];

const sidebarStats = [
  { icon: 'fa-mountain-city', n: 'Top Rated', l: 'Hill Shifting Experts' },
  { icon: 'fa-truck-ramp-box', n: '100%', l: 'Safe Mountain Transit' },
  { icon: 'fa-calendar-check', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
];

/* ─── Page Component ─────────────────────────────── */

export default function DharamshalaBranchPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/about/packers-and-movers -in-Dharamshala.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Trusted Hill Shifting Experts
            </div>

            <h1 className="mp-hero-title">
              Packers <span className="amber">&amp; Movers</span>
              <span className="outline">Dharamshala</span>
            </h1>

            <p className="mp-hero-sub">
              Experience a stress-free mountain relocation with Mountain Packers.
              We are specialists in navigating the Kangra Valley with guaranteed
              safety and real-time tracking.
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
            title="Dharamshala Branch"
            subtitle="Request an on-site survey"
            icon="fa-map-location-dot"
            moveType="Dharamshala Branch Quote"
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
                  src="/img/about/packers-and-movers -in-Dharamshala.webp"
                  alt="Packers and Movers in Dharamshala"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-mountain" /> Hill Specialist
                </div>
                <div className="mp-img-tag">✓ Safe Mountain Transit</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Expert Valley Shifting</div>
                <h1 className="mp-section-title">
                  PACKERS AND <span className="r">MOVERS IN</span>
                  <br /><span className="a">DHARAMSHALA</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Looking for reliable{' '}
                  <strong>
                    <Link href="/packers-and-movers-in-dharamshala">
                      packers and movers in Dharamshala
                    </Link>
                  </strong>
                  ? Mountain Packers &amp; Movers provides hassle-free moving services. Contact us for a
                  stress-free move! If you are planning to move to or from Dharamshala, then you need
                  reliable and professional packers and movers that can make your move smooth and
                  stress-free. At Mountain Packers and Movers, we are committed to providing the
                  best packers and movers service.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  We understand that moving can be a daunting task, and that&apos;s why we offer a wide
                  range of services to help you with every aspect of your move. From packing and
                  loading to transportation and unloading, we are here to take care of everything for
                  you. Our team of experienced professionals has the expertise and knowledge to
                  handle all your belongings with care and ensure that they reach their destination
                  safely and securely. We use the latest equipment and techniques to pack and
                  transport your belongings, making sure that they are protected from damage.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  At Mountain Packers and Movers, we take pride in our customer service, and we
                  strive to make sure that our clients are satisfied with our services. We tailor
                  our solutions to meet our client&apos;s specific requirements by working closely with
                  them. As the <strong>best packers and movers in Dharamshala</strong>, we offer
                  affordable rates and timely delivery of your belongings. We also provide storage
                  solutions if you need to store your items for a short or long period.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/best-packers-and-movers-for-shifting-in-Dharamshala.webp"
                  alt="best packers and movers for shifting in Dharamshala"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Why Choose section */}
              <div className="sr">
                <div className="mp-eyebrow">Why We are the Best</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  CHOOSE THE BEST PACKERS AND MOVERS IN DHARAMSHALA FOR SHIFTING
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  When it comes to shifting to or from Dharamshala, choosing the right and{' '}
                  <strong>best packers and movers in Dharamshala</strong> for shifting is crucial for
                  a hassle-free move. At Mountain Packers and Movers, we understand that moving can
                  be a stressful experience, and that&apos;s why we are committed to providing the best
                  packing and moving service in Dharamshala.
                </p>

                <div className="mp-why-bullets">
                  <p><strong>Here are a few reasons why you should choose Mountain Packers and Movers for your next move:</strong></p>
                  <ul className="mp-custom-list">
                    <li><strong>Experienced Professionals</strong>: Our team of experienced professionals has the expertise and knowledge to handle all your moving needs. We have successfully helped thousands of clients with their moves, and we strive to make every move a stress-free experience.</li>
                    <li><strong>Comprehensive Services</strong>: We offer a wide range of services to help you with every aspect of your move, including packing, loading, transportation, unloading, and even storage solutions. Our services are customized to meet your specific needs, ensuring that your move is personalized and efficient.</li>
                    <li><strong>Quality Equipment and Techniques</strong>: We use the latest equipment and techniques to pack and transport your belongings, ensuring that they are protected from damage during the move. Our team of professionals is trained to handle your belongings with care and attention, ensuring that your move is smooth and hassle-free.</li>
                    <li><strong>Affordable Rates</strong>: We understand that moving can be expensive, and that&apos;s why we offer affordable rates for our packers and movers service. We believe that everyone deserves to have access to quality moving services without breaking the bank.</li>
                    <li><strong>Excellent Customer Service</strong>: We take pride in our excellent customer service, and we strive to ensure that our clients are satisfied with our services.</li>
                  </ul>
                </div>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/about/packer and mover in Dharamshala.webp"
                  alt="packer and mover in Dharamshala"
                  width={860}
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px', borderRadius: '15px' }}
                />
              </div>

              <div className="sr" style={{ marginTop: '30px' }}>
                <div className="mp-eyebrow">Local Trust</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  WHY CHOOSE US AS YOUR PACKER AND MOVER IN DHARAMSHALA?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  When it comes to moving, we know that the process can be stressful and
                  overwhelming. At{' '}
                  <strong>
                    <Link href="/">Mountain Packers &amp; Movers</Link>
                  </strong>
                  , we strive to make your move as smooth and stress-free as possible. Our
                  experienced team of <strong>packer and mover in Dharamshala</strong> are equipped
                  with the knowledge and skills to handle all aspects of your move, from packing to
                  transportation to unpacking. We prioritize safety and security, ensuring that your
                  belongings are handled with care and transported securely to their new location.
                  With us, you can rest assured that your move will be completed efficiently and
                  with the utmost professionalism. Additionally, we offer affordable rates and
                  customizable packages to meet your specific moving needs. Choose Mountain Packers
                  &amp; Movers for a hassle-free and seamless moving experience in Dharamshala.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  So if you are planning to shift to or from Dharamshala and need a reliable{' '}
                  <a href="https://www.justdial.com/Dharamshala/Packers-And-Movers/nct-10348289" target="_blank" rel="noopener noreferrer">
                    packers and movers in Dharamshala
                  </a>
                  , look no further than Mountain Packers and Movers.{' '}
                  <strong>
                    <Link href="/contact-us">Contact us</Link>
                  </strong>{' '}
                  today to learn more and how we can help you with your move.
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
                  <i className="fa-solid fa-mountain" /> Hill Advantage
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
                <h4>Kangra Support</h4>
                <p>
                  Planning a move within the valley? Our local team knows every shortcut.
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
                  <i className="fa-solid fa-network-wired" /> All Branches
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        className={b.href === '/packers-and-movers-in-dharamshala' ? 'active' : ''}
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
              Hill Shifting Process
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              Relocating in the <span className="r">Kangra Valley</span>
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
