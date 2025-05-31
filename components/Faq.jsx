// components/FAQSection.jsx

import React from "react";

const FAQSection = () => {
  return (
    // FAQ Start
    <div className="container-fluid faq-section bg-light py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <h4 className="text-primary">Some Important FAQ's</h4>
            <h1 className="display-4 mb-4">Common Frequently Asked Questions?</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              pariatur sapiente, modi perspiciatis earum ab inventore vitae
              consequatur tempore quibusdam?
            </p>
            <a className="btn btn-primary py-3 px-5" href="#">
              Have Any Questions
            </a>
          </div>
          <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
            <div className="h-100">
              <div className="accordion" id="accordionExample">
                {[
                  {
                    id: "One",
                    question: "Q: How Do I Sing Up For Your Electricity Services?",
                    answer:
                      "A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
                    show: true,
                  },
                  {
                    id: "Two",
                    question: "Q: What Types Of Electricity Plans Do You Offer?",
                    answer:
                      "A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
                  },
                  {
                    id: "Three",
                    question: "Q: What Are Your Billing And Payment Options?",
                    answer:
                      "A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
                  },
                  {
                    id: "Four",
                    question:
                      "Q: How Can I Track My Energy Usage With Your Services?",
                    answer:
                      "A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
                  },
                ].map(({ id, question, answer, show }) => (
                  <div className="accordion-item" key={id}>
                    <h2 className="accordion-header" id={`heading${id}`}>
                      <button
                        className={`accordion-button ${
                          !show ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${id}`}
                        aria-expanded={show ? "true" : "false"}
                        aria-controls={`collapse${id}`}
                      >
                        {question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${id}`}
                      className={`accordion-collapse collapse ${
                        show ? "show active" : ""
                      }`}
                      aria-labelledby={`heading${id}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">{answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // FAQ End
  );
};

export default FAQSection;
