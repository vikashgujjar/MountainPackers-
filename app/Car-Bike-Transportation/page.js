import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CTABand from '@/components/CTABand';
import VehicleQuoteForm from '@/components/VehicleQuoteForm';

export const metadata = {
  title: 'Car & Bike Transportation Services In Chandigarh',
  description:
    'Mountain Packers provide the best car & bike transportation services in Chandigarh at very cheap & affordable prices. We offer secure transportation services.',
  keywords:
    'car bike transportation services in Chandigarh, best car bike transport services in Chandigarh, affordable car & bike transport services in Chandigarh, car transport Chandigarh, bike transport service Chandigarh, transportation in Chandigarh',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/Car-Bike-Transportation.html',
  },
  openGraph: {
    title: 'Car & Bike Transportation Services In Chandigarh',
    description:
      'Mountain Packers provide the best car & bike transportation services in Chandigarh at very cheap & affordable prices. We offer secure transportation services.',
    url: 'https://www.mountainpackersmovers.in/Car-Bike-Transportation.html',
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

const heroStats = [
  { n: '50K+', l: 'Happy Clients' },
  { n: '17+', l: 'Years Experience' },
  { n: '100%', l: 'Safe Delivery' },
  { n: '24/7', l: 'Support' },
];

const whyCards = [
  { icon: 'fa-truck-fast', title: 'Quick Delivery', desc: 'We understand the importance of your time and the benefits of timely delivery. Hence, we ensure the consignment is delivered within the agreed timeframe.' },
  { icon: 'fa-box-archive', title: 'Quality Packing', desc: 'We ensure your items are packed properly and securely to withstand the entire moving procedure.' },
  { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team of trained specialists is dedicated to providing you with satisfactory packing and moving assistance.' },
  { icon: 'fa-map-location-dot', title: 'SMS Alert & GPS Facility', desc: 'We understand your concerns about the safety of your possessions. To keep you informed and at ease, we provide SMS alerts and live tracking throughout the transportation process.' },
  { icon: 'fa-indian-rupee-sign', title: 'AFFORDABLE SERVICES', desc: 'Our specialized services are not only affordable but also easily adaptable to your budget.' },
  { icon: 'fa-shield-halved', title: 'Secure Transportation', desc: 'Our well-trained drivers and experts are capable of completing your entire moving cycle without any damage to your belongings.' },
];

const features = [
  { num: '01', icon: 'fa-truck-fast', title: 'Quick Delivery', desc: 'Timely delivery is not a promise — it\'s our standard. Every consignment leaves and arrives on schedule.' },
  { num: '02', icon: 'fa-box-archive', title: 'Quality Packing', desc: 'Multi-layer protective packaging ensures your vehicle is wrapped, secured, and shielded throughout transit.' },
  { num: '03', icon: 'fa-headset', title: 'Expert Support', desc: 'Trained specialists are available 24/7 with answers, updates, and solutions at every step of your move.' },
  { num: '04', icon: 'fa-map-location-dot', title: 'Live GPS Tracking', desc: 'Monitor your vehicle in real-time via SMS alerts and live GPS — complete transparency from door to door.' },
  { num: '05', icon: 'fa-indian-rupee-sign', title: 'Affordable Rates', desc: 'Premium service at budget-friendly pricing. We customize every plan to fit your exact requirements.' },
  { num: '06', icon: 'fa-shield-halved', title: 'Secure Transport', desc: 'Fully insured, damage-free transportation by certified drivers with years of specialized experience.' },
];

const processSteps = [
  { num: '01', title: 'Request Quote', desc: 'Fill out our quick form or call us to get a free, no-obligation quote tailored to your vehicle and route.' },
  { num: '02', title: 'Schedule Pickup', desc: 'Choose a date and time that works for you. Our team arrives on time with all necessary equipment.' },
  { num: '03', title: 'Safe Transit', desc: 'Your vehicle is loaded, secured, and transported with live GPS tracking and regular SMS updates.' },
  { num: '04', title: 'Safe Delivery', desc: 'Your vehicle is delivered to your doorstep, inspected, and handed over in perfect condition.' },
];

const sidebarStats = [
  { icon: 'fa-users', n: '50K+', l: 'Happy Clients' },
  { icon: 'fa-calendar', n: '17+', l: 'Years Experience' },
  { icon: 'fa-star', n: '4.9★', l: 'Google Rating' },
  { icon: 'fa-car', n: '35K+', l: 'Vehicles Moved' },
];

/* ─── Page Component ─────────────────────────────── */

export default function CarBikeTransportationPage() {
  return (
    <main className="bg-white overflow-hidden">
      <TopBar />
      <Header />

      {/* ══════════════ HERO ══════════════ */}
      <section className="mp-service-hero">
        {/* Bg layers */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: "url('/img/service/Car-and-Bike-transportation-Services-in-Chandigarh.webp')" }}
        />
        <div className="mp-hero-mesh" />
        <div className="mp-dot-grid" />

        <div className="mp-hero-inner">
          {/* Left — Text */}
          <div className="mp-hero-left">
            <div className="mp-hpill">
              <span className="dot" />
              Trusted Vehicle Transport
            </div>

            <h1 className="mp-hero-title">
              Car &amp; <span className="amber">Bike</span>
              <span className="outline">Transport</span>
            </h1>

            <p className="mp-hero-sub">
              Mountain Packers provides India&apos;s most secure car &amp; bike
              transportation in Chandigarh — with real-time GPS tracking, expert
              handling, and guaranteed on-time delivery.
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
          <VehicleQuoteForm />
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
                  src="/img/service/Car-and-Bike-transportation-Services-in-Chandigarh.webp"
                  alt="Car and Bike Transportation Services in Chandigarh"
                  width={860}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '420px' }}
                  priority
                />
                <div className="mp-img-badge">
                  <i className="fa-solid fa-map-marker-alt" /> Chandigarh &amp; All India
                </div>
                <div className="mp-img-tag">✓ GPS Tracked</div>
              </div>

              {/* Intro heading */}
              <div className="sr d1">
                <div className="mp-eyebrow">Professional Excellence</div>
                <h1 className="mp-section-title">
                  Car and <span className="r">Bike Transportation</span>
                  <br />Services in <span className="a">Chandigarh</span>
                </h1>
              </div>

              <div className="mp-article sr d2">
                <p style={{ textAlign: 'justify' }}>
                  Mountain Packers provide the best{' '}
                  <strong>
                    <Link href="/Car-Bike-Transportation">
                      car and bike transportation services in Chandigarh
                    </Link>
                  </strong>{' '}
                  at very cheap &amp; affordable prices. We offer secure transportation
                  services. If you are searching for the most affordable{' '}
                  <strong>Car Transportation Services in Chandigarh</strong> or any other
                  transportation services? Then, start your moving with Mountain Packers
                  &amp; Movers because we provide the best bike transport services in
                  Chandigarh. Our top-notch transportation services can ease the stress of
                  your moving process. As a prominent Packers and Movers company, we have
                  successfully served thousands of clients by securely transporting their
                  cars, bikes, and other vehicles without any complaints. Trust us to meet
                  all your transportation needs with utmost security and reliability.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  With our reliable and trustworthy services, we are your go-to Packers
                  and Movers for a hassle-free move. We specialize in providing the{' '}
                  <strong>best Car and Bike transportation services in Chandigarh</strong>,
                  ensuring a seamless and stress-free transportation experience. We have a
                  team of experts who always serve clients with positive gratitude. Our
                  packing and moving services are tailor-made to meet your unique requirements,
                  ensuring a personalized and hassle-free moving experience. With a track record
                  of serving numerous satisfied clients, we take pride in delivering a memorable
                  and satisfactory moving experience.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  We always prioritize convenient and efficient methods to pack and move your
                  car and bike, ensuring a seamless transportation experience. To meet the utmost
                  customer satisfaction, we are avail with the most suitable carrier that entirely
                  ensures security during transportation. We strive to exceed the expectations of
                  our valuable clients with our high-quality packing and moving services, ensuring
                  their complete satisfaction.
                </p>
              </div>

              <div className="mp-article sr d2" style={{ marginTop: '30px' }}>
                <Image
                  src="/img/service/Car-and-Bike-transportation-in-Chandigarh.webp"
                  alt="Car and Bike transportation in Chandigarh"
                  width={860}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: '400px', borderRadius: '15px' }}
                />
              </div>

              {/* Divider */}
              <div className="mp-divider sr" />

              {/* Why Choose section */}
              <div className="sr">
                <div className="mp-eyebrow">Why Trust Us</div>
                <h2 className="mp-section-title" style={{ textTransform: 'uppercase' }}>
                  WHY CHOOSE US FOR CAR AND BIKE TRANSPORTATION SERVICES IN CHANDIGARH?
                </h2>
              </div>

              <div className="mp-article sr d1">
                <p style={{ textAlign: 'justify' }}>
                  We offer a variety of containers or carriers for{' '}
                  <strong>
                    <a
                      href="https://dir.indiamart.com/chandigarh/bike-transport-service.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      bike and car transportation services in Chandigarh
                    </a>
                  </strong>
                  . Our extensive collection of containers plays a crucial role in ensuring
                  a seamless and effortless transportation process for you. We offer one of the
                  best packing and moving services in your area. Our decency towards our assignment
                  has established us as one of the best packers and movers in this packing and moving industry.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  We have groups of well-experienced and impressive skilled workforce who have made
                  Mountain packers one of the prominent packers &amp; movers. We offer top to bottom
                  packing and moving services and have made a group of loyal clients.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  Especially, for bike and car transportation services there is not a single packer
                  and mover available who can compete with us. We deliver exceptional services that
                  can be customized according to your requirements and budget. Our flexible bike and
                  car transportation services enable you to move your vehicles with complete reliability
                  and peace of mind. In short, we furnish one of the best and most secure{' '}
                  <strong>bike and car transportation services in Chandigarh</strong>. Thus, if are
                  also looking for the most reliable packers and movers then{' '}
                  <Link href="/contact-us"><b>get in touch</b></Link> with Mountain Packers &amp; Movers
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

              {/* All Services */}
              <div className="mp-sidebar-card sr">
                <div className="mp-sidebar-head">
                  <i className="fa-solid fa-th-list" /> All Services
                </div>
                <ul className="mp-service-list">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={link.href === '/Car-Bike-Transportation' ? 'active' : ''}
                      >
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
                  <i className="fa-solid fa-chart-bar" /> Our Numbers
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
                <h4>Need Help?</h4>
                <p>
                  Speak directly with our experts. We&apos;re available around the clock
                  to answer your questions.
                </p>
                <a href="tel:+919317718180" className="mp-contact-link">
                  <div className="mp-contact-icon"><i className="fa-solid fa-phone" /></div>
                  +91-9317718180
                </a>
                <a href="mailto:info@mountainpackersmovers.in" className="mp-contact-link">
                  <div className="mp-contact-icon"><i className="fa-solid fa-envelope" /></div>
                  info@mountainpackersmovers.in
                </a>
              </div>

              {/* Branches */}
              <div className="mp-sidebar-card sr d3">
                <div className="mp-sidebar-head">
                  <i className="fa-solid fa-map-marker-alt" /> Our Branches
                </div>
                <ul className="mp-branch-list">
                  {branchLinks.map((b) => (
                    <li key={b.href}>
                      <Link href={b.href}>
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
              How It Works
            </div>
            <h2 className="mp-section-title" style={{ textAlign: 'center' }}>
              Our Simple <span className="r">4-Step Process</span>
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