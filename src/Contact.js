import React from 'react'
import './Routing.css';
import './Footer.css';
import './App.css';
import './Top.css';
import Footer from './Footer';
import Top from './Top';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Contact() {
    useEffect(()=>{
        Aos.init({duration:4000,offset:300});
    },[]);
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title contact'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Contact us</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* -----------------contact card section---------- */}
            <section className='spacer_y contact-card'>
                <div className="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="row">
                                <div class="col-md-4 col-sm-6">
                                    <div class="contact-card"
                                    data-aos="fade-up-right">
                                        <i class="fa-solid fa-phone"></i>
                                        <ul>
                                            <li>
                                                <a href="tel:0900800900">
                                                    0900 800 900
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:0900800900">
                                                    0900 800 900
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="contact-card" data-aos="fade-up">
                                        <i class="fa-solid fa-envelopes-bulk"></i>
                                        <ul>
                                            <li>
                                                <a href="mailto:example@domain.com">
                                                    example@domain.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:example@domain.com">
                                                    example@domain.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6 offset-sm-3 offset-md-0">
                                    <div class="contact-card" data-aos="fade-up-left">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <ul>
                                            <li>
                                                Mulberry St, New York
                                            </li>
                                            <li>
                                                NY 10012, USA
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ----------------------contact-form-------------- */}
            <section className='spacer_y contact-form-section'>
                <div className="container">
                    <div class="contact-area">
                        <h3>Lets' Talk With Us</h3>
                        <form id="contactForm" class="contact__form" method="post" action="assets/php/mail.php" novalidate="true">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="name" class="form-control" required="" data-error="Please enter your name" placeholder="Your Name"></input>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" name="email" id="email" class="form-control" required="" data-error="Please enter your email" placeholder="Your Email"></input>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="number" name="phone" id="number" class="form-control" required="" data-error="Please enter your number" placeholder="Phone Number"></input>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="subject" id="subject" class="form-control" required="" data-error="Please enter your subject" placeholder="Your Subject"></input>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <textarea name="message" class="form-control message-field" id="message" cols="30" rows="7" required="" data-error="Please type your message" placeholder="Write Message"></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 text-center">
                                    <button name="submit" type="submit" class="default-btn contact-btn disabled">
                                        Send Message
                                    </button>
                                    <div id="msgSubmit" class="h3 alert-text text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* ---------------------------notification section------------- */}
            <section className='noti'>
                <div className="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="section_title noti1">
                                <h2>Get New Job Notifications</h2>
                                <p>Subscribe & get all related jobs notification</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <form class="newsletter_form" novalidate="true">
                                <input type="email" class="form_control" placeholder="Enter your email"></input>
                                <button class="sub_btn disabled" type="submit">
                                    Subscribe
                                </button>
                                <div id="validator-newsletter" class="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* -------footer------ */}
            <Footer />
            <Top />
        </>
    )
}
export default Contact;