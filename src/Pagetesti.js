import React from 'react'
import './Routing.css';
import './Footer.css';
import './Top.css';
import './Plan.css';
import './Company.css';
import './App.css';
import Footer from './Footer';
import Top from './Top';
function Pagetesti()
{
    return(
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title page_testi'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Testimonial</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Testimonial</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* --------------------testimonial-------------------- */}
            <section className='testimonial spacer_y'>
                <div className="container">
                    <div class="section_title text-center">
                        <h2>What Client’s Say About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className='owl-carousel owl-theme' id='slider3'>
                        <div class="testimonial_items">
                            <div class="testimonial_text">
                                <i class="fa-solid fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            </div>
                            <div class="testimonial_info_text">
                                <h3>Alisa Meair</h3>
                                <p>CEO of Company</p>
                            </div>
                        </div>
                        {/* --- */}
                        <div class="testimonial_items">
                            <div class="testimonial_text">
                                <i class="fa-solid fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            </div>
                            <div class="testimonial_info_text">
                                <h3>Adam Smith</h3>
                                <p>Web Developer</p>
                            </div>
                        </div>
                        {/* --- */}
                        <div class="testimonial_items">
                            <div class="testimonial_text">
                                <i class="fa-solid fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            </div>
                            <div class="testimonial_info_text">
                                <h3>Alisa Meair</h3>
                                <p>CEO of Company</p>
                            </div>
                        </div>
                        {/* --- */}
                        <div class="testimonial_items">
                            <div class="testimonial_text">
                                <i class="fa-solid fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            </div>
                            <div class="testimonial_info_text">
                                <h3>Adam Smith</h3>
                                <p>Web Developer</p>
                            </div>
                        </div>
                        {/* --- */}
                        <div class="testimonial_items">
                            <div class="testimonial_text">
                                <i class="fa-solid fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            </div>
                            <div class="testimonial_info_text">
                                <h3>Alisa Meair</h3>
                                <p>CEO of Company</p>
                            </div>
                        </div>
                        {/* --- */}
                        <div class="testimonial_items">
                            <div class="testimonial_text">
                                <i class="fa-solid fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            </div>
                            <div class="testimonial_info_text">
                                <h3>Adam Smith</h3>
                                <p>Web Developer</p>
                            </div>
                        </div>
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
            <Footer/>
            <Top/>
        </>
    )
}
export default Pagetesti;