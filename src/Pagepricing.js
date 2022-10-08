import React from 'react'
import './Routing.css';
import './Footer.css';
import './Top.css';
import './Plan.css';
import './Company.css';
import './App.css';
import Footer from './Footer';
import Top from './Top';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Pagepricing()
{
    useEffect(()=>{
        Aos.init({duration:4000,offset:300});
    },[]);
    return(
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title page_pricing'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Pricing</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* -----------------------pricing /plan  section----------*/}
            <section className='plan spacer_y'>
                <div className="container">
                    <div class="section_title text_center">
                        <h2>Buy Our Plans & Packages</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4  col-sm-6">
                            <div className='p_card_main' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div className='p_card'>
                                    <div className="p_card_top text_center">
                                        <i class="fa-solid fa-hands-holding-circle"></i>
                                        <h3>Standard</h3>
                                        <p>
                                            These are the management services we provide the IT support and maintenance.
                                        </p>
                                    </div>
                                    <div className='p_card_mid'>
                                        <ul>
                                            <li>5 job posting</li>
                                            <li>Urgent job</li>
                                            <li>Featured job</li>
                                            <li>Job displayed for 10 days</li>
                                            <li>Premium Support 24/7</li>
                                        </ul>
                                    </div>
                                    <div className='p_card_bot text_center'>
                                        <button className='send'>
                                            Send Request!
                                        </button>
                                    </div>
                                </div>
                                <div className="p_card_back text_center">
                                    <h1>STANDERD</h1>
                                    <h3>$180</h3>
                                    <button className='job'>Find A Job</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className='p_card_main'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <div className='p_card'>
                                    <div className="p_card_top text_center">
                                        <i class="fa-solid fa-medal"></i>
                                        <h3>Premium</h3>
                                        <p>
                                            It is the process of configuring virtual cloud systems that businesses need.
                                        </p>
                                    </div>
                                    <div className='p_card_mid'>
                                        <ul>
                                            <li>20 job posting</li>
                                            <li>Urgent job</li>
                                            <li>Featured job</li>
                                            <li>Job displayed for 30 days</li>
                                            <li>Premium Support 24/7</li>
                                        </ul>
                                    </div>
                                    <div className='p_card_bot text_center'>
                                        <button className='send'>
                                            Send Request!
                                        </button>
                                    </div>
                                </div>
                                <div className="p_card_back text_center">
                                    <h1>PREMIUM</h1>
                                    <h3>$250</h3>
                                    <button className='job'>Find A Job</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className='p_card_main last'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <div className='p_card'>
                                    <div className="p_card_top text_center">
                                    <i class="fa-solid fa-ribbon"></i>
                                        <h3>Enterprise</h3>
                                        <p>
                                            These are the management services we provide the IT support and maintenance.
                                        </p>
                                    </div>
                                    <div className='p_card_mid'>
                                        <ul>
                                            <li>50 job posting</li>
                                            <li>Urgent job</li>
                                            <li>Featured job</li>
                                            <li>Job displayed for 60 days</li>
                                            <li>Premium Support 24/7</li>
                                        </ul>
                                    </div>
                                    <div className='p_card_bot text_center'>
                                        <button className='send'>
                                            Send Request!
                                        </button>
                                    </div>
                                </div>
                                <div className="p_card_back text_center">
                                    <h1>ENTERPRISE</h1>
                                    <h3>$480</h3>
                                    <button className='job'>Find A Job</button>
                                </div>
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
export default Pagepricing;