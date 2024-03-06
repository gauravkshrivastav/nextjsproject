import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) { // Adjust this value as needed
            setSticky(true);
          } else {
            setSticky(false);
          }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

    return (
        <>
<div className={`header ${isSticky ? 'sticky' : ''}`}>
  <header id="header" className='fixed-top' >
    <div className="container d-flex align-items-center">

      <a href="index.html" className="logo me-auto"><img src="/img/logo.png" alt=""/></a>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
        <li><Link href="/">Home</Link></li>
          <li><Link href="/">Health</Link></li>
          <li><a className="nav-link scrollto">Wellness</a></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a className="appointment-btn scrollto">
      <span className="d-none d-md-inline">Make an</span> Appointment</a>

    </div>
  </header>
  </div>
        </>
    )
}

export default Navbar;

