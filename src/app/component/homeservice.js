"use client";
import React, { useState } from 'react';
import Image from "next/image";
import viewretreat from "../../../public/img/View-retreats.svg";
import viewprofile from "../../../public/img/View-Profile.svg";
import findadoc from "../../../public/img/Find-doc.svg";
import sendusquery from "../../../public/img/Send-us-query.svg";
const Homeservice = ()=>{

    return (

        <>
        
<section id="services" className="services services">
<div className="container" data-aos="fade-up">

  <div className="section-title">
    <h2>Services</h2>
    <h4>Streamline Your Healthcare Experience.</h4>
  </div>

  <div className="row">
    <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
      <div className="icon"><Image src={findadoc} alt="asdasdasd"/></div>
      <h4 className="title"><a href="">Find a Doctor (Infographic)</a></h4>
      <p className="description">Select your required specialty or procedure, and we will connect you with the best-suited doctors and hospitals.</p>
    </div>
    <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
      <div className="icon"><Image src={viewprofile} alt="asdasdasd"/></div>
      <h4 className="title"><a href="">View Profile (Infographic)</a></h4>
      <p className="description">Explore detailed profiles of our vetted doctors and hospitals, complete with essential credentials and verified user reviews.</p>
    </div>
    <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
      <div className="icon"><Image src={sendusquery} alt="asdasdasd"/></div>
      <h4 className="title"><a href="">Send Query (Infographic)</a></h4>
      <p className="description">Confidentially communicate your medical inquiries or share reports with our healthcare providers and receive a comprehensive quick reply.</p>
    </div>
    </div>
    
    <div className="section-title">
      <h4>Streamline Your Wellness  Experience.</h4>
      </div>


    <div className="row">
    <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
      <div className="icon"><Image src={viewretreat} alt="asdasd" /></div>
      <h4 className="title"><a href="">Find your wellness plan(Infographic)</a></h4>
      <p className="description">Select from Our Spectrum of Wellness: From Yoga to Ayurveda</p>
    </div>
    <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
      <div className="icon"><Image src={viewretreat} alt="asdasd" /></div>
      <h4 className="title"><a href="">View Retreats (Infographic)</a></h4>
      <p className="description">Browse Our Variety of Retreats to Find Your Perfect Getaway</p>
    </div>
    <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
      <div className="icon"><Image src={sendusquery} alt="asdasd" /></div>
      <h4 className="title"><a href="">Send a query (Infographic)</a></h4>
      <p className="description">For further details, contact us.</p>
    </div>
  </div>

</div>
</section>

        
        </>
    )
}

export default Homeservice;
