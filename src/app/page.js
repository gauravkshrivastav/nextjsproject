"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { PureIncrement, PureDecrement } from 'pure_counter';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Home() {
  return (
    <main className="used">
      <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <h1>Welcome to Qonaq</h1>
      <h3>Transforming Health, Elevating Lives</h3>
    </div>
  </section>

      <main id="main mt-5" >

<section id="featured-services" className="featured-services">
  <div className="container" data-aos="fade-up">

    <div className="row">
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
          <div className="icon"><i className="fa fa-heartbeat"></i></div>
          <h4 className="title"><a href="">Lorem Ipsum</a></h4>
          <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div className="icon"><i className="fa fa-pills"></i></div>
          <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
          <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
          <div className="icon"><i className="fa fa-thermometer"></i></div>
          <h4 className="title"><a href="">Magni Dolores</a></h4>
          <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
          <div className="icon"><i className="fa fa-dna"></i></div>
          <h4 className="title"><a href="">Nemo Enim</a></h4>
          <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        </div>
      </div>

    </div>

  </div>
</section>

    

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
          <p>Qonaq Health and Wellness Private Ltd. strongly believes that healthcare should be accessible to all people, without boundaries. The company was founded witnessing the difficult time of the COVID-19 pandemic, which exposed weaknesses in accessing healthcare globally. The COVID-19 pandemic also highlighted the lack of effective management and communication networks among medical providers and services worldwide. Qonaq's goal is to create a world where high-quality healthcare and wellness services are available to everyone, no matter their location, socioeconomic status, or any other obstacles that has traditionally limited access to healthcare. </p><br/>
<p>Qonaq is a partner in one's journey towards complete well-being. The disparity in healthcare during the pandemic: limited access to specialized treatments, long wait times, and no affordable options in many areas, motivated Qonaq to break down barriers to healthcare. We aim to provide budget-friendly, world-class healthcare and wellness options tailored to individual needs, addressing treatments, relaxation, and healing needs. We’re on a mission: to offer a path free from constraints and full of prospects for better health outcomes by streamlined patient management services worldwide, rapid response for urgent & critical cases.</p><br/>
<p>We aim to focus on accessible advanced medical care but also wellness treatments, relaxation techniques, and restorative experiences in peaceful surroundings. We firmly believe in a recovery that goes beyond the physical and encompasses the mental and spiritual aspects of the individual. Our mission is to support and guide you on your journey towards improved health and overall well-being, not just limiting our support till the treatment but also during post-recovery.</p>

        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <Image src="/img/about.jpg"  width={1000}
              height={1000} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Values we propose at Qonaq Health and Wellness: - </h3>
            <ul>
          <li>Seamless Healthcare Journey (Use infographics here): We solve your problems, starting from visa acquisition up to helping you recuperate.</li>
          <li> Seamless Wellness (Use infographics here): Qonaq rejuvenates you with customized wellness programs including yoga, meditation, spirituality, tailored to individual needs.</li>
          <li>Affordable, Top-Notch Care (Use infographics here): Stick to affordable medical and wellness care without breaking the bank with Qonaq. You also gain access to financial assistance for exceptional cases through crowdfunding and partnerships with NGOs.</li>
          <li>Clear and Trusting (Use infographics here): We value honesty at Qonaq. Count on us for explicitly stated details and open pricing so that you can focus on getting better while leaving no room for issues.</li>
          
            </ul>
            
          </div>
          <ul>
          <li>Dive into Culture (Use infographics here): Come to India on a healing journey. With Qonaq, you will visit different places, meet new people and become part of their culture.</li>
          <li>Tailored to You (Use infographics here): Your health plan should be as unique as You. At Qonaq, our treatment and wellness plans are tailored just for you.</li>
          <li>Guidance Every Step (Use infographics here): At Qonaq; one never walks alone. Our team of professionals in medicine or traveling spheres will walk with you through every step of your trip making sure that there is an excellent service delivery thus making your experience hassle-free.</li>

          </ul>
        </div>

      </div>
    </section>



  
    <section id="services" className="services services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <h4>Streamline Your Healthcare Experience.</h4>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="fa fa-heartbeat"></i></div>
            <h4 className="title"><a href="">Find a Doctor (Infographic)</a></h4>
            <p className="description">Select your required specialty or procedure, and we will connect you with the best-suited doctors and hospitals.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon"><i className="fa fa-pills"></i></div>
            <h4 className="title"><a href="">View Profile (Infographic)</a></h4>
            <p className="description">Explore detailed profiles of our vetted doctors and hospitals, complete with essential credentials and verified user reviews.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon"><i className="fa fa-hospital-user"></i></div>
            <h4 className="title"><a href="">Send Query (Infographic)</a></h4>
            <p className="description">Confidentially communicate your medical inquiries or share reports with our healthcare providers and receive a comprehensive quick reply.</p>
          </div>
          </div>
          
          <div className="section-title">
            <h4>Streamline Your Wellness  Experience.</h4>
            </div>


          <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="fa fa-dna"></i></div>
            <h4 className="title"><a href="">Find your wellness plan(Infographic)</a></h4>
            <p className="description">Select from Our Spectrum of Wellness: From Yoga to Ayurveda</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon"><i className="fa fa-wheelchair"></i></div>
            <h4 className="title"><a href="">View Retreats (Infographic)</a></h4>
            <p className="description">Browse Our Variety of Retreats to Find Your Perfect Getaway</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon"><i className="fa fa-notes-medical"></i></div>
            <h4 className="title"><a href="">Send a query (Infographic)</a></h4>
            <p className="description">For further details, contact us.</p>
          </div>
        </div>

      </div>
    </section>



    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">

        <div className="row no-gutters">

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fa fa-user-md"></i>
              <PureIncrement start={0} end={500} duration={80} className="purecounter" /> <span className=""> + </span>

              <p><strong>Expert Doctors </strong> : Your Trusted Health Advisors</p>
              <a href="#">Find out more </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fa fa-hospital"></i>
              <PureIncrement start={0} end={300} duration={70} className="purecounter" />
              <p>Access to Premium Hospitals & Multi-Specialty Health Centers</p>
              <a href="#">Find out more </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fa fa-flask"></i>
              <PureIncrement start={0} end={1000} duration={50} className="purecounter" />
              <p><strong>Patients Served</strong></p>
              <a href="#">Find out more </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fa fa-award"></i>
              <PureIncrement start={0} end={500} duration={60} className="purecounter" />
              <p>Choose from Diverse Retreat Packages for Your Healing Journey</p>
              <a href="#">Find out more </a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <div className="faq_stick_button sticky_button" data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        <span><i class="fas fa-comments" aria-hidden="true"></i></span>
    </div>

    <div className="contact_stick_button sticky_button" data-bs-toggle="modal"
        data-bs-target="#exampleModal1">
        <span><i class="fas fa-info-circle" aria-hidden="true"></i></span>
    </div>


    <div className="d-flex justify-content-center align-items-center">

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
              FAQ
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">      <section id="faq" className="faq section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Frequently Asked Questioins</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <ul className="faq-list">
            <li>
              <div
                data-bs-toggle="collapse"
                className="collapsed question"
                href="#faq1"
              >
                Non consectetur a erat nam at lectus urna duis?
                <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </div>
              <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                href="#faq2"
                className="collapsed question"
              >
                Feugiat scelerisque varius morbi enim nunc faucibus a
                pellentesque? <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </div>
              <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                href="#faq3"
                className="collapsed question"
              >
                Dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi? <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </div>
              <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                href="#faq4"
                className="collapsed question"
              >
                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </div>
              <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                href="#faq5"
                className="collapsed question"
              >
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat? <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </div>
              <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                href="#faq6"
                className="collapsed question"
              >
                Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                turpis nunc eget lorem dolor?
                <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </div>
              <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                  vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                  nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                  sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                  Pellentesque diam volutpat commodo sed egestas egestas
                  fringilla phasellus faucibus. Nibh tellus molestie nunc non
                  blandit massa enim nec.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
</div>
          </div>
        </div>
      </div>
    </div>

    <div className="d-flex justify-content-center align-items-center">

      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
              Appointment Details
              </h5>
            </div>
            <div className="contact modal-body">
              <form className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="7"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form></div>
          </div>
        </div>
      </div>
    </div>

    {/* <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
            <div className="icon-box mt-5 mt-lg-0">
              <i className="bx bx-receipt"></i>
              <h4>Est labore ad</h4>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-cube-alt"></i>
              <h4>Harum esse qui</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-images"></i>
              <h4>Aut occaecati</h4>
              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-shield"></i>
              <h4>Beatae veritatis</h4>
              <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
            </div>
          </div>
          <div className="bgimage image col-lg-6 order-1 order-lg-2" data-aos="zoom-in"></div>
        </div>

      </div>
    </section>

   */}
  

</main>
    </main>
  );
}
