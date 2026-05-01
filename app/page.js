import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsBand from '@/components/StatsBand';
import WhyUs from '@/components/WhyUs';
import About from '@/components/About';
import Services from '@/components/Services';
import Promo from '@/components/Promo';
import CTABand from '@/components/CTABand';
import Solutions from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
import Map from '@/components/Map';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <StatsBand />
      <WhyUs />
      <About />
      <Services />
      <Promo />
      <CTABand />
      <Solutions />
      <Testimonials />
      <Map />
      <Locations />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
