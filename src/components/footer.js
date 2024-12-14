import React from "react";
import { UNSAFE_decodeViaTurboStream } from "react-router-dom";

function Footer () {
    return (
        <div className="footer pt-5 pb-5 text-white-50 text-md-start" style={{backgroundColor: '#333'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="info mb-5">
                            <img src="images/logo.png"></img>
                            <p className="mb-5 mt-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui sapiente sit distinctio fuga quia aliquam dicta dolores quis delectus
                            </p>
                            <div className="copyright">
                                Created By <span>Shahm</span>
                                <div>@ 2024 - <span>Bondi Inc</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <div className="container">
                            <h4 className="text-light">Links</h4>
                            <ul className="list-unstyled lh-lg">
                                <li>Home</li>
                                <li>Our Services</li>
                                <li>Portfolio</li>
                                <li>About</li>
                                <li>Our Work</li>
                                <li>Our Blog</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <div className="about">
                            <h5 className="text-light">About Us</h5>
                            <ul className="list-unstyled lh-lg">
                                <li>Sign In</li>
                                <li>Rejister</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="contact">
                            <h5 className="text-light">Conact Us</h5>
                            <p className="lh-lg mt-3 mb-5">
                                Get in Touch With Us Via Mail Or Phone. We are Waiting For You Call Or Message
                            </p>
                            <a className="btn rounded-pill main-btn w-100" href="mailto:ahmadshahmsardini@gmail.com">ahmadshahmsardini@gmail.com</a>
                            <ul className="d-flex mt-5 list-unstyled gap-5">
                                <li>
                                    <a className="d-block text-light facebook" href="#">
                                        <i className="fa-brands fa-facebook fa-lg"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-block text-light twitter" href="#">
                                        <i className="fa-brands fa-twitter fa-lg"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-block text-light linkedin" href="#">
                                        <i className="fa-brands fa-linkedin fa-lg"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-block text-light youtube" href="#">
                                        <i className="fa-brands fa-youtube fa-lg"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer