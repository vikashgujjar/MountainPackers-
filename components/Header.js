'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('mainHeader');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    const handleBurger = () => {
      const nav = document.getElementById('mpNav');
      nav.classList.toggle('open');
    };

    window.addEventListener('scroll', handleScroll);
    const burger = document.getElementById('mpBurger');
    if (burger) {
      burger.addEventListener('click', handleBurger);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (burger) {
        burger.removeEventListener('click', handleBurger);
      }
    };
  }, []);

  return (
    <header className="mp-header" id="mainHeader">
      <div className="container">
        <div className="mp-header-inner">
          <div className="mp-logo">
            <Link href="/">
              <img src="/img/MountainpackersandmoverschandigarhIndia.webp" alt="Mountain packers and movers" />
            </Link>
          </div>

          <ul className="mp-navlist" id="mpNav">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About</Link></li>
            <li>
              <Link href="" style={{ pointerEvents: 'none' }}>Services <i className="fa-solid fa-angle-down"></i></Link>
              <ul className="mp-drop">
                <li><Link href="/Domestic-Shifting-Services">Domestic Shifting</Link></li>
                <li><Link href="/Corporate-Relocation-Services">Corporate Relocation</Link></li>
                <li><Link href="/Local-House-Shifting-Services">Local Shifting</Link></li>
                <li><Link href="/Car-Bike-Transportation">Car &amp; Bike Transport</Link></li>
                <li><Link href="/Packing-Unpacking-Services">Packing Services</Link></li>
                <li><Link href="/Warehouse-Service">Warehouse Service</Link></li>
              </ul>
            </li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/our-branches">Our Branches</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>

          <div className="mp-header-btns">
            <div className="mp-hsearch"><i className="fa-solid fa-search"></i></div>
            <Link href="/contact-us" className="mp-hbtn">
              Get Free Quote <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <button className="mp-burger" id="mpBurger" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
