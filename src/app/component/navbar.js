import React from 'react'
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
        <div id="topbar" className="d-flex align-items-center fixed-top">
<div className="container d-flex align-items-center justify-content-center justify-content-md-between">
  <div className="align-items-center d-none d-md-flex">
    <i className="bi bi-clock"></i> Monday - Saturday, 8AM to 10PM
  </div>
  <div className="d-flex align-items-center">
    <i className="bi bi-phone"></i> Call us now +1 5589 55488 55
  </div>
</div>
</div>


  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <a href="index.html" className="logo me-auto"><img src="/img/logo.png" alt=""/></a>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
        <li><Link href="/">Home</Link></li>
          <li><a className="nav-link scrollto">About</a></li>
          <li><a className="nav-link scrollto">Services</a></li>
          <li><Link href="/pages/productlist">Departments</Link></li>
          <li><Link href="/pages/contact">Contact</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>

    </div>
  </header>
        </>
    )
}

export default Navbar;

