"use client";
import React, { useState } from "react";
import Image from "next/image";
import product from "../../../../../public/img/product.jpg";
import jsonData from "../../../services/data.json"; // Import the JSON data
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Productlist = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="product_section">
        <div className="container">
          <div className="section-title">
            <h2>Health Treatments</h2>
          </div>

          <div className="search-filter">
            <div className="search_section">
              <form>
                <label>Search Treatments</label>
                <input type="text" placeholder="Search......" />
              </form>
            </div>
            <div className="filter_section">
              <form>
                <label>Filter Treatments</label>
                <select>
                  <option>--- Select ---</option>
                  <option>Based on Doctors</option>
                  <option>Based on Treatments</option>
                </select>
              </form>
            </div>
          </div>

          <div className="details_card row row-cols-1 row-cols-md-4 g-4">
            {jsonData.productlist.map((item) => (
              <div className="col">
                <div className="card">
                  <Image
                    src={product}
                    className="card-Image-top"
                    width={260}
                    height={150}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item?.title}</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <button className="details-btn" onClick={toggle}>
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}> Product Details</ModalHeader>
          <ModalBody>
            <div className="section-title">
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
              <br />
              <button className="details-btn">Make An Appointment</button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default Productlist;
