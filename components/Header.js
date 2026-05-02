'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('mainHeader');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  
  const toggleDropdown = (e) => {
    // Only toggle on mobile screens
    if (window.innerWidth <= 960) {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const closeNav = () => {
    setIsNavOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="mp-header" id="mainHeader">
      <div className="container">
        <div className="mp-header-inner">
          <div className="mp-logo">
            <Link href="/">
              <img src="/img/MountainpackersandmoverschandigarhIndia.webp" alt="Mountain packers and movers" />
            </Link>
          </div>

          <ul className={`mp-navlist ${isNavOpen ? 'open' : ''}`} id="mpNav">
            <li><Link href="/" onClick={closeNav}>Home</Link></li>
            <li><Link href="/about-us" onClick={closeNav}>About</Link></li>
            <li className={isDropdownOpen ? 'open' : ''}>
              <Link href="#" onClick={toggleDropdown} className="mp-dropdown-trigger">
                Services <i className={`fa-solid fa-angle-down ${isDropdownOpen ? 'rotate' : ''}`}></i>
              </Link>
              <ul className="mp-drop">
                <li><Link href="/Domestic-Shifting-Services" onClick={closeNav}>Domestic Shifting</Link></li>
                <li><Link href="/Corporate-Relocation-Services" onClick={closeNav}>Corporate Relocation</Link></li>
                <li><Link href="/Local-House-Shifting-Services" onClick={closeNav}>Local Shifting</Link></li>
                <li><Link href="/Car-Bike-Transportation" onClick={closeNav}>Car &amp; Bike Transport</Link></li>
                <li><Link href="/Packing-Unpacking-Services" onClick={closeNav}>Packing Services</Link></li>
                <li><Link href="/Warehouse-Service" onClick={closeNav}>Warehouse Service</Link></li>
              </ul>
            </li>
            <li><Link href="/blog" onClick={closeNav}>Blog</Link></li>
            <li><Link href="/our-branches" onClick={closeNav}>Our Branches</Link></li>
            <li><Link href="/contact-us" onClick={closeNav}>Contact Us</Link></li>
          </ul>

          <div className="mp-header-btns">
            <Link href="/contact-us" className="mp-hbtn mp-mobile-hide">
              Get Free Quote <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <button className="mp-burger" id="mpBurger" onClick={toggleNav} aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
