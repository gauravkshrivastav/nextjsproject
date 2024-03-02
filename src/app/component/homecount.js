
"use client";
import React, { useState } from 'react';
import Image from "next/image";
import viewretreat from "../../../public/img/View-retreats.svg";
import { PureIncrement, PureDecrement } from 'pure_counter';
import doctors from "../../../public/img/500-Doctors.svg";
import hospital from "../../../public/img/300-hospitals.svg";
import patients from "../../../public/img/1000-patients.svg";
import retreatpackage from "../../../public/img/500-retreat-packages.svg";




const Count = ()=>{

    return (

        <>
            <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">

        <div className="row no-gutters">

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <Image src={doctors} alt="sadasd"/>
              <PureIncrement start={0} end={500} duration={80} className="purecounter" /> <span className=""> + </span>

              <p><strong>Expert Doctors </strong> : Your Trusted Health Advisors</p>
              <a href="#">Find out more </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
            <Image src={hospital} alt="sadasd"/>
            <PureIncrement start={0} end={300} duration={70} className="purecounter" /> <span className=""> + </span>
              <p>Access to Premium Hospitals & Multi-Specialty Health Centers</p>
              <a href="#">Find out more </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
            <Image src={patients} alt="sadasd"/>
              <PureIncrement start={0} end={1000} duration={50} className="purecounter" /> <span className=""> + </span>
              <p><strong>Patients Served</strong></p>
              <a href="#">Find out more </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
            <Image src={retreatpackage} alt="sadasd"/>
              <PureIncrement start={0} end={500} duration={60} className="purecounter" /> <span className=""> + </span>
              <p>Choose from Diverse Retreat Packages for Your Healing Journey</p>
              <a href="#">Find out more </a>
            </div>
          </div>

        </div>

      </div>
    </section>


        </>
    )
}

export default Count;