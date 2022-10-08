import React from 'react'
import './Routing.css';
import './Footer.css';
import './Top.css';
import './App.css';
import Footer from './Footer';
import Top from './Top';
function Candidate1() {
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title candidate1'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Candidates Details</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Candidates Details</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* -----------------candidate details section------- */}
            <section className='spacer_y'>
                <div className="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="candidate-profile">
                                <img src={require('./image/client-1.png')} alt="" />
                                <h3>John Smith</h3>
                                <p>Web Developer</p>
                                <ul>
                                    <li>
                                        <a href="tel:0900800900">
                                            <i class="fa-solid fa-phone"></i>
                                            0900 800 900
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:example@domain.com">
                                            <i class="fa-solid fa-location-dot"></i>
                                            example@domain.com
                                        </a>
                                    </li>
                                </ul>
                                <div class="candidate-social">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="candidate-info-text">
                                <h3>About Me</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            <div class="candidate-info-text candidate-education">
                                <h3>Education</h3>
                                <div class="education-info">
                                    <h4>School</h4>
                                    <p>Amherst School, USA</p>
                                    <span>2000-2010</span>
                                </div>
                                <div class="education-info">
                                    <h4>College</h4>
                                    <p>Swarthmore College, USA</p>
                                    <span>2010-2012</span>
                                </div>
                                <div class="education-info">
                                    <h4>University</h4>
                                    <p>Princeton University, USA</p>
                                    <span>2012-2016</span>
                                </div>
                            </div>
                            <div class="candidate-info-text candidate-experience">
                                <h3>Experience</h3>
                                <ul>
                                    <li>Proficient in HTML, CSS, Server-Scripting, C/C++, and Oracle</li>
                                    <li>Experience with SEO</li>
                                    <li>Experience Teaching Web Development</li>
                                    <li>Knowledgeable in Online Advertising</li>
                                    <li>Expert in LAMP Web Service Stacks</li>
                                </ul>
                            </div>
                            <div class="candidate-info-text candidate-skill">
                                <h3>Skills</h3>
                                <ul>
                                    <li>HTMl</li>
                                    <li>CSS</li>
                                    <li>JS</li>
                                    <li>PHP</li>
                                    <li>Oracle</li>
                                    <li>C/C++</li>
                                    <li>SQL</li>
                                    <li>Ruby</li>
                                </ul>
                            </div>
                            <div class="candidate-info-text text-center">
                                <div class="theme-btn">
                                    <a href="#" class="default-btn">Hire Me</a>
                                    <a href="#" class="default-btn">Download CV</a>
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
export default Candidate1;