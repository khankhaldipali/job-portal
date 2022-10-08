import React from 'react'
import './Routing.css';
import './Use.css';
import Use from './Use';
import './App.css';
import News from './News';
import './News.css';
import './Copy.css';
import './Footer.css';
import './Top.css';
import Footer from './Footer';
import Copy from './Copy';
import Top from './Top';
function About() {
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>About Us</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* -------------------------------about area----------- */}
            <section className="about spacer_y">
                <div className="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="about_text">
                                <div class="section_title">
                                    <h2>How We Started</h2>
                                </div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about_img">
                                <img src={require('./image/we-start.jpeg')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------use section-------------- */}
            <Use/>
            {/* ---------------why choose ---------------------- */}
            <section className='spacer_y why'>
                <div className="container">
                    <div class="section_title text_center">
                        <h2>Why You Choose Us Among Other Job Site?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-sm-6">
                            <div class="choose_card">
                                <i class="fa-solid fa-file"></i>
                                <h3>Advertise Job</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="choose_card">
                                <i class="fa-solid fa-receipt"></i>
                                <h3>Recruiter Profiles</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div class="choose_card">
                                <i class="fa-solid fa-user-large"></i>
                                <h3>Find Your Dream Job</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ----------------------grow business--------------- */}
            <section className='spacer_y'>
                <div className="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="grow_text">
                                <div class="section_title">
                                    <h2>Grow Your Business Faster With Premium Advertising</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit.
                                </p>
                                <div class="theme_btn">
                                    <a href="#" class="default_btn">Checkout More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="grow_img">
                                <img src={require('./image/grow-img.jpeg')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -----------------------numbering------------------ */}
            <section className='spacer_y number'>
                <div className="container">
                    <div class="row counter_area">
                        <div class="col-lg-3 col-6">
                            <div class="counter_text">
                                <i class="fa-solid fa-file"></i>
                                <h2><span>1225</span></h2>
                                <p>Job Posted</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-6">
                            <div class="counter_text">
                                <i class="fa-solid fa-receipt"></i>
                                <h2><span>145</span></h2>
                                <p>Job Filed</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-6">
                            <div class="counter_text">
                                <i class="fa-solid fa-warehouse"></i>
                                <h2><span>170</span></h2>
                                <p>Company</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-6">
                            <div class="counter_text">
                                <i class="fa-solid fa-user-large"></i>
                                <h2><span>125</span></h2>
                                <p>Members</p>
                            </div>
                        </div>
                    </div>
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
            {/* -------------------news section-------- */}
            <News/>
            {/* ----------------------footer---------- */}
            <Footer/>
            {/* ---------------copy------------ */}
            <Copy/>
            {/* ----------------top---------- */}
            <Top/>
        </>
    )
}
export default About