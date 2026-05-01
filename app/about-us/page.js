import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Testimonials from '@/components/Testimonials';
import Promo from '@/components/Promo';
import CTABand from '@/components/CTABand';
import InnerHero from '@/components/InnerHero';
import AboutSection from '@/components/AboutSection';
import Features from '@/components/Features';

export const metadata = {
  title: 'Mountain Packers and Movers In India - About us',
  description: 'Welcome to the Mountain Packers. We offer the best moving and packing services in India and provide supreme quality. For more details visit our website.',
  keywords: 'packers and movers in India, best packers and movers, packers and movers, packing moving services, Hire world’s best packers and movers, Hire affordable packers and movers',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/about-us.html',
  },
  openGraph: {
    type: 'website',
    title: 'Mountain Packers and Movers In India - About us',
    description: 'Welcome to the Mountain Packers. We offer the best moving and packing services in India and provide supreme quality. For more details visit our website.',
    url: 'https://mountainpackersmovers.in/about-us.html',
    siteName: 'Mountain Packers and Movers',
  },
};

export default function AboutUsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mountain Packers",
            "image": "https://mountainpackersmovers.in/img/MountainpackersandmoverschandigarhIndia.webp",
            "@id": "",
            "url": "https://www.mountainpackersmovers.in/",
            "telephone": "9317718180",
            "priceRange": "INR",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2248 Madiwala Town, Manimajra",
              "addressLocality": "Chandigarh",
              "postalCode": "160101",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 30.718702,
              "longitude": 76.8310116
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          })
        }}
      />
      <TopBar />
      <Header />

      <InnerHero title="About" subtitle="Us." eyebrow="Company Profile" />

      <AboutSection />

      <Features />

      <Promo />

      <CTABand />
      <Testimonials />

      <Footer />
      <FloatingButtons />
    </main>
  );
}
