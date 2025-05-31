import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faPrint,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer bg-dark py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5 mb-5 align-items-center">
            <div className="col-lg-7">
              <div className="position-relative mx-auto">
                <input
                  className="form-control w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Email address to Subscribe"
                />
                <button
                  type="button"
                  className="btn btn-primary position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
                <a className="btn btn-light btn-md-square me-3" href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="btn btn-light btn-md-square me-3" href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="btn btn-light btn-md-square me-3" href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="btn btn-light btn-md-square me-0" href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h3 className="text-white mb-4">
                  <FontAwesomeIcon icon={faBolt} className="text-primary me-3" />
                  Electra
                </h3>
                <p className="mb-3">
                  Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Quick Links</h4>
                <a href="/"> Home</a>
                <a href="about"> About us</a>
                <a href="service"> Service</a>
                <a href="testimonial"> Testimonial</a>
                <a href="contact"> Contact Us</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Electricity service</h4>
                <a href="service"> Air Conditioning</a>
                <a href="service"> Electrical Panels</a>
                <a href="service"> Security System</a>
                <a href="service"> Indoor Lighting</a>
                <a href="service"> Electrical Services</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href="contact">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />
                  123 Street, New York, USA
                </a>
                <a href="mailto:info@example.com">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary me-2" />
                  info@example.com
                </a>
                <a href="mailto:info@example.com">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary me-2" />
                  info@example.com
                </a>
                <a href="tel:+01234567890">
                  <FontAwesomeIcon icon={faPhone} className="text-primary me-2" />
                  +012 345 67890
                </a>
                <a href="tel:+01234567890" className="mb-3">
                  <FontAwesomeIcon icon={faPrint} className="text-primary me-2" />
                  +012 345 67890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <a href="#" className="border-bottom text-white">
                  <FontAwesomeIcon icon={faArrowUp} className="text-light me-2" />
                  Your Site Name
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
              Designed By{' '}
              <a className="border-bottom text-white" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top */}
      <a href="/" className="btn btn-primary btn-lg-square back-to-top">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </>
  );
};

export default Footer;
