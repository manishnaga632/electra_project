"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    arrows: true,
  };

  return (
    <div className="header-carousel overflow-hidden">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="header-carousel-item hero-section">
          <div className="hero-bg-half-1"></div>
          <div className="hero-shape-1"></div>
          <div className="carousel-caption">
            <div className="container">
              <div className="row g-4 align-items-center">
                <div className="col-lg-7 animated fadeInLeft">
                  <div className="text-sm-center text-md-start">
                    <h4 className="text-white text-uppercase fw-bold mb-4">
                      Current Electricity Services
                    </h4>
                    <h1 className="display-2 text-white mb-4">
                      Power for Seamless Electricity Solutions
                    </h1>
                    <p className="mb-5 fs-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy...
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                      <a
                        className="btn btn-light py-3 px-4 px-md-5 me-2"
                        href="#"
                      >
                        <i className="fas fa-play-circle me-2"></i> Watch Video
                      </a>
                      <a className="btn btn-primary py-3 px-4 px-md-5 ms-2" href="#">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="header-carousel-item hero-section">
          <div className="hero-bg-half-2"></div>
          <div className="hero-shape-2"></div>
          <div className="carousel-caption">
            <div className="container">
              <div className="row g-4 align-items-center">
                <div className="col-lg-7 animated fadeInLeft">
                  <div className="text-sm-center text-md-start">
                    <h4 className="text-white text-uppercase fw-bold mb-4">
                      Current Electricity Services
                    </h4>
                    <h1 className="display-2 text-white mb-4">
                      Experience the power of professionalism
                    </h1>
                    <p className="mb-5 fs-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy...
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                      <a
                        className="btn btn-light py-3 px-4 px-md-5 me-2"
                        href="#"
                      >
                        <i className="fas fa-play-circle me-2"></i> Watch Video
                      </a>
                      <a className="btn btn-primary py-3 px-4 px-md-5 ms-2" href="#">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
