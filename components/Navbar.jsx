"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSearch, faBars, faGlobeEurope, faMapMarkerAlt, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);

    return (
        <div className="container-fluid header-top">
            <div className="container d-flex align-items-center">
                <div className="d-flex align-items-center h-100">
                    <a href="/" className="navbar-brand" style={{ height: '125px' }}>
                        <h1 className="text-primary mb-0">
                            <FontAwesomeIcon icon={faBolt} /> Electra
                        </h1>
                    </a>
                </div>
                <div className="w-100 h-100">
                    {/* Topbar */}
                    <div className="topbar px-0 py-2 d-none d-lg-block" style={{ height: '45px' }}>
                        <div className="row gx-0 align-items-center">
                            <div className="col-lg-8 text-center text-lg-center mb-lg-0">
                                <div className="d-flex flex-wrap">
                                    <div className="border-end border-primary pe-3">
                                        <a href="#" className="text-muted small">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />
                                            Find A Location
                                        </a>
                                    </div>
                                    <div className="ps-3">
                                        <a href="mailto:example@gmail.com" className="text-muted small">
                                            <FontAwesomeIcon icon={faEnvelope} className="text-primary me-2" />
                                            example@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <div className="d-flex justify-content-end">
                                    <div className="d-flex border-end border-primary pe-3">
                                        <a className="btn p-0 text-primary me-3" href="#">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                        <a className="btn p-0 text-primary me-3" href="#">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a className="btn p-0 text-primary me-3" href="#">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                        <a className="btn p-0 text-primary me-0" href="#">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </div>
                                    <div className="dropdown ms-3">
                                        <a
                                            href="#"
                                            className="dropdown-toggle text-white"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setLanguageOpen(!languageOpen);
                                            }}
                                        >
                                            <small className="text-body">
                                                <FontAwesomeIcon icon={faGlobeEurope} className="text-primary me-2" /> English
                                            </small>
                                        </a>
                                        <div className={`dropdown-menu ${languageOpen ? 'show' : ''}`}>
                                            <a href="#" className="dropdown-item">English</a>
                                            <a href="#" className="dropdown-item">Bangla</a>
                                            <a href="#" className="dropdown-item">French</a>
                                            <a href="#" className="dropdown-item">Spanish</a>
                                            <a href="#" className="dropdown-item">Arabic</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Navbar */}
                    <div className="nav-bar px-0 py-lg-0" style={{ height: '80px' }}>
                        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
                            <a href="/" className="navbar-brand-2">
                                <h1 className="text-primary mb-0">
                                    <FontAwesomeIcon icon={faBolt} /> Electra
                                </h1>
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
                                <div className="navbar-nav mx-0 mx-lg-auto bg-white">
                                    <a href="/" className="nav-item nav-link active">Home</a>
                                    <a href="about" className="nav-item nav-link">About</a>
                                    <a href="service" className="nav-item nav-link">Service</a>
                                    <a href="blog" className="nav-item nav-link">Blog</a>

                                   

                                    <a href="contact" className="nav-item nav-link">Contact</a>
                                    <div className="nav-btn ps-3">
                                        <button
                                            className="btn-search btn btn-primary btn-md-square mt-2 mt-lg-0 mb-4 mb-lg-0 flex-shrink-0"
                                            data-bs-toggle="modal"
                                            data-bs-target="#searchModal"
                                        >
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                        <a href="contact" className="btn btn-primary py-2 px-4 ms-0 ms-lg-3">Get Solution</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;