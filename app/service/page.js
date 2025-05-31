"use client";

import React, { useState } from "react";

const Services = () => {
  // State to track active tab, default is "Commercial"
  const [activeTab, setActiveTab] = useState("ServiceTab-1");

  const tabs = [
    { id: "ServiceTab-1", label: "Commercial" },
    { id: "ServiceTab-2", label: "Residential" },
    { id: "ServiceTab-3", label: "Industrial" },
  ];

  const serviceItems = {
    "ServiceTab-1": [
      {
        img: "img/commercial-1.jpg",
        title: "Brite Spark Services",
        desc:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
      },
      {
        img: "img/commercial-2.jpg",
        title: "Energy Ease Packages",
        desc:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
      },
      {
        img: "img/commercial-3.jpg",
        title: "Electra Care Packages",
        desc:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
      },
    ],
    "ServiceTab-2": [
      {
        img: "img/residential-1.jpg",
        title: "Electrical Services",
        desc:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
      },
      {
        img: "img/residential-2.jpg",
        title: "Security Systems",
        desc:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
      },
      {
        img: "img/residential-3.jpg",
        title: "Air Conditioner",
        desc:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
      },
    ],
    "ServiceTab-3": [
      {
        img: "img/industrial-1.jpg",
        title: "Factory Manufacture",
        desc:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
      },
      {
        img: "img/industrial-2.jpg",
        title: "General Electrical",
        desc:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
      },
      {
        img: "img/industrial-3.jpg",
        title: "Electrical Planing",
        desc:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!",
      },
    ],
  };

  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div
          className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-4 mb-4">The Best Service For You</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            deserunt provident ab voluptates rerum eaque eum magni autem atque
            in minus laboriosam corrupti deleniti voluptatibus rem reiciendis
            modi veniam animi?
          </p>
        </div>

        <div className="row g-5 align-items-center">
          {/* Tabs */}
          <div className="col-lg-3 wow fadeInLeft" data-wow-delay="0.2s">
            <ul className="nav flex-column">
              {tabs.map(({ id, label }) => (
                <li key={id} className="nav-item me-lg-0 mb-4">
                  <button
                    className={`py-3 px-5 nav-link btn ${
                      activeTab === id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(id)}
                    type="button"
                  >
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="col-lg-9 wow fadeInRight" data-wow-delay="0.3s">
            <div className="tab-content">
              <div
                id={activeTab}
                className="tab-pane fade show p-0 active"
              >
                <div className="service-carousel owl-carousel">
                  {serviceItems[activeTab].map(({ img, title, desc }, idx) => (
                    <div className="service-item" key={idx}>
                      <img src={img} className="img-fluid w-100" alt={title} />
                      <div className="border border-top-0 p-4">
                        <h4 className="mb-3">{title}</h4>
                        <p className="mb-4">{desc}</p>
                        <a className="btn btn-primary py-2 px-4" href="#">
                          Read More
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
