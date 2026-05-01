import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import InnerHero from '@/components/InnerHero';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Mountain Packers - Contact us',
  description: 'For more information and any query feel free to contact us',
  keywords: 'contact us mountain packers',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/contact-us.html',
  },
  openGraph: {
    type: 'website',
    title: 'Mountain Packers - Contact us',
    description: 'For more information and any query feel free to contact us',
    url: 'https://www.mountainpackersmovers.in/contact-us.html',
    siteName: 'Mountain Packers and Movers',
  },
};

export default function ContactUsPage() {
  return (
    <main>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mountain Packers",
            "image": "https://mountainpackersmovers.in/img/MountainpackersandmoverschandigarhIndia.webp",
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
            }
          })
        }}
      />

      <TopBar />
      <Header />

      <InnerHero 
        title="Contact" 
        subtitle="Us." 
        eyebrow="Get In Touch" 
        bgImage="/img/banner1.jpg" 
      />

      <ContactSection />

      <Footer />
      <FloatingButtons />
    </main>
  );
}
