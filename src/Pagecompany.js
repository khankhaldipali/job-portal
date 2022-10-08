import React from 'react'
import './Routing.css';
import './Footer.css';
import './Top.css';
import './Company.css';
import './App.css';
import Footer from './Footer';
import Top from './Top';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Pagecompany() {
    useEffect(()=>{
        Aos.init({duration:4000,offset:300});
    },[]);
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title page_company'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Company</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Company</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* ---------------------top company----------------- */}
            <section className=' company spacer_y'>
                <div className="container">
                    <div className="section_title text_center">
                        <h2>Top Companies</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="company_card" data-aos="fade-right">
                                <div class="company_logo">
                                    <a href="job-grid.html">
                                        <img src={require('./image/3.png')} alt="company logo"></img>
                                    </a>
                                </div>
                                <div class="company_text">
                                    <h3>Trophy &amp; Sans</h3>
                                    <p>
                                        <i class="fa-solid fa-location-dot"></i>
                                        Green Lanes, London
                                    </p>
                                    <a href="job-grid.html" class="company_btn">
                                        25 Open Position
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="company_card" data-aos="fade-right">
                                <div class="company_logo">
                                    <img src={require('./image/4.png')} alt="company logo"></img>
                                </div>
                                <div class="company_text">
                                    <h3>Trout Design</h3>
                                    <p>
                                        <i class="fa-solid fa-location-dot"></i>
                                        Park Avenue, Mumbai
                                    </p>
                                    <a href="job-grid.html" class="company_btn">
                                        35 Open Position
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="company_card" data-aos="fade-left">
                                <div class="company_logo">
                                    <img src={require('./image/5.png')} alt="company logo"></img>
                                </div>
                                <div class="company_text">
                                    <h3>Resland LTD</h3>
                                    <p>
                                        <i class="fa-solid fa-location-dot"></i>
                                        Betas Quence, London
                                    </p>
                                    <a href="job-grid.html" class="company_btn">
                                        20 Open Position
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="company_card"
                            data-aos="fade-left">
                                <div class="company_logo">
                                    <img src={require('./image/6.png')} alt="company logo"></img>
                                </div>
                                <div class="company_text">
                                    <h3>Lawn Hopper</h3>
                                    <p>
                                        <i class="fa-solid fa-location-dot"></i>
                                        Wellesley Rd, London
                                    </p>
                                    <a href="job-grid.html" class="company_btn">
                                        45 Open Position
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="company_card"
                            data-aos="fade-up-right">
                                <div class="company_logo">
                                    <a href="job-list.html">
                                    <img src={require('./image/7.png')} alt="company logo"></img>
                                    </a>
                                </div>
                                <div class="company_text">
                                    <h3>Barkleys</h3>
                                    <p>
                                    <i class="fa-solid fa-location-dot"></i>
                                        Hill Street, USA
                                    </p>
                                    <a href="job-list.html" class="company_btn">
                                        18 Open Position
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="company_card"
                            data-aos="fade-up-right">
                                <div class="company_logo">
                                    <a href="job-list.html">
                                    <img src={require('./image/8.png')} alt="company logo"></img>
                                    </a>
                                </div>
                                <div class="company_text">
                                    <h3>Benetton</h3>
                                    <p>
                                    <i class="fa-solid fa-location-dot"></i>
                                        View Point, USA
                                    </p>
                                    <a href="job-list.html" class="company_btn">
                                        12 Open Position
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="company_card"
                            data-aos="fade-up-left">
                                <div class="company_logo">
                                    <a href="job-list.html">
                                    <img src={require('./image/9.png')} alt="company logo"></img>
                                    </a>
                                </div>
                                <div class="company_text">
                                    <h3>Walmesh LTD</h3>
                                    <p>
                                    <i class="fa-solid fa-location-dot"></i>
                                        Belfast, UK
                                    </p>
                                    <a href="job-list.html" class="company_btn">
                                        20 Open Position
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="company_card"
                            data-aos="fade-up-left">
                                <div class="company_logo">
                                    <a href="job-list.html">
                                    <img src={require('./image/10.png')} alt="company logo"></img>
                                    </a>
                                </div>
                                <div class="company_text">
                                    <h3>Relnet Industry</h3>
                                    <p>
                                    <i class="fa-solid fa-location-dot"></i>
                                        Bristol, London
                                    </p>
                                    <a href="job-list.html" class="company_btn">
                                        21 Open Position
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* -----------------page navigation section------------------------------ */}
            <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                            <i class="fa-solid fa-angles-left fade-left"></i>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link active" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                            <i class="fa-solid fa-angles-right fade-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
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
export default Pagecompany;