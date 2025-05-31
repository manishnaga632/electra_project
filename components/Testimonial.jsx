

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';


const Testimonial = () => {
  return (
    // Testimonial Start
    <div className="container-fluid testimonial bg-dark py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 col-xl-5 wow fadeInUp" data-wow-delay="0.2s">
            <h4 className="text-primary">Testimonial</h4>
            <h1 className="display-4 text-white mb-4">Powerfull Praise Heare From Our Customers</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic aspernatur unde magnam
              necessitatibus provident iusto maxime nobis esse eligendi.
            </p>
            <a className="btn btn-light py-3 px-5" href="#">
              View All Reviews
            </a>
          </div>
          <div className="col-lg-6 col-xl-7 wow fadeInUp" data-wow-delay="0.4s">
            <div className="owl-carousel testimonial-carousel">
              {[1, 2, 3].map((num) => (
                <div key={num} className="testimonial-item">
                  <div className="testimonial-quote">
                    <FontAwesomeIcon icon={faQuoteRight} size="2x" />
                  </div>
                  <div className="testimonial-inner p-4 d-flex">
                    <img src={`img/testimonial-${num}.jpg`} className="img-fluid" alt={`Person ${num}`} />
                    <div className="ms-4">
                      <h4>Person Name</h4>
                      <p>Profession</p>
                      <div className="d-flex text-primary">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} className="text-body" />
                      </div>
                    </div>
                  </div>
                  <div className="customer-text p-4">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae
                      reprehenderit ipsum eos cumque esse repellendus impedit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    // Testimonial End
  );
};

export default Testimonial;
