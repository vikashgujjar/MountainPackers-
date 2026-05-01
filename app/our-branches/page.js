import React from 'react';
import InnerHero from '@/components/InnerHero';
import BranchSection from '@/components/BranchSection';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata = {
  title: 'Mountain Packers and Movers - Our Branches',
  description: 'Mountain Packers is the best packers and movers services provider company in Chandigarh, Ludhiana, Jalandhar and Shimla. For more information visit on our website.',
  keywords: 'packers and movers in Chandigarh, best packers and movers in Shimla, packers and movers in Chandigarh near me, packing and moving services in Jalandhar, Hire world’s best packers and movers in India, Hire affordable packers and movers in Ludhiana',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/our-branches.html',
  },
  openGraph: {
    type: 'website',
    title: 'Mountain Packers and Movers - Our Branches',
    description: 'Mountain Packers is the best packers and movers services provider company in Chandigarh, Ludhiana, Jalandhar and Shimla. For more information visit on our website.',
    url: 'https://www.mountainpackersmovers.in/our-branches.html',
    siteName: 'Mountain Packers and Movers',
  },
};

export default function OurBranchesPage() {
  return (
    <main>
      <TopBar />
      <Header />
      
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
            }
          })
        }}
      />

      <InnerHero 
        title="Our" 
        subtitle="Branches." 
        eyebrow="Network" 
        bgImage="/img/banner1.jpg" 
      />

      <BranchSection />

      <Footer />
      <FloatingButtons />
    </main>
  );
}
