"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import qonaqabout from "../../public/img/qonaq-about-us.svg";
import Homeservice from "./component/homeservice";
import Count from "./component/homecount";
import Accordian from "./component/accordian";
import Appointment from "./component/appointment";
import jsonData from "./services/data.json"; // Import the JSON data
import { register } from "swiper/element/bundle";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
register();

export default function Home(args) {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  const toggle = () => setModal(!modal);
  const toggle1 = () => setModal1(!modal1);

  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <main className="used">
      <section id="hero" className="d-flex align-items-center">
        {/* <div className="container">
      <h1>Welcome to Qonaq</h1>
      <h3>Transforming Health, Elevating Lives</h3>
    </div> */}
      </section>

      <main id="main mt-5">
        <section id="featured-services" className="featured-services">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="fa fa-heartbeat"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="fa fa-pills"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <i className="fa fa-thermometer"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="icon">
                    <i className="fa fa-dna"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-us" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
              <p>
              Qonaq Health and Wellness is the First and Only platform to offer you holistic healthcare and wellness tourism solutions. Qonaq is the partner in your journey towards complete well-being. 
              We, at Qonaq aim to provide budget-friendly, world-class healthcare and wellness options addressing – medical treatments, relaxation, and healing needs. We firmly believe in a recovery that goes beyond your physical health and encompasses the mental and even spiritual well being. Our goal is to accompany you as you strive for better health and well-being, offering support not only during treatment but throughout your recovery journey.
              {" "}
              </p>
            </div>
    </div>
            
        </section>

        <section id="slider" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
            <h2>Values we propose at Qonaq Health and Wellness: - </h2>

            <Swiper
              ref={swiperElRef}
              navigation={true}
              pagination={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            >
              {jsonData.aboutusdata.map((item) => (
                  <SwiperSlide>
                    <div className="section_slider">
                     <div className="image_slide"> <Image src={item?.image} alt="sddasdasdsad" width={100} height={100}/></div>
                      {item?.content}
                    </div>
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </div>
        </section>

        <Homeservice />

        <Count />

        <div className="faq_stick_button sticky_button" onClick={toggle}>
          <span>
            <i className="fas fa-comments" aria-hidden="true"></i>
          </span>
        </div>

        <div className="contact_stick_button sticky_button" onClick={toggle1}>
          <span>
            <i className="fas fa-info-circle" aria-hidden="true"></i>
          </span>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <Modal isOpen={modal} toggle={toggle} {...args}>
            <ModalHeader toggle={toggle}>
              Frequently Asked Questioins
            </ModalHeader>
            <ModalBody>
              <Accordian />
            </ModalBody>
          </Modal>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <Modal isOpen={modal1} toggle={toggle1} {...args}>
            <ModalHeader toggle={toggle1}>Appointments</ModalHeader>
            <ModalBody>
              <Appointment />
            </ModalBody>
          </Modal>
        </div>
      </main>
    </main>
  );
}


