import React from 'react'
import './Routing.css';
import './Footer.css';
import './App.css';
import './Top.css';
import Footer from './Footer';
import Top from './Top';
function Joblist() {
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title joblist'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Job List</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Job List</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* -----------------job interested area-------------- */}
            <section className='spacer_y job_style'>
                <div className="container">
                    <div class="section_title text_center">
                        <h2>Jobs You May Be Interested In</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-6">
                            <div class="job-card-two">
                                <div class="row align-items-center">
                                    <div class="col-md-1">
                                        <div class="company-logo">
                                            <a href="job-details.html"></a>
                                            <img src={require('./image/find1.png')} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="job-info">
                                            <h3>
                                                <a href="job-details.html">Web Designer, Graphic Designer, UI/UX Designer</a>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Graphics Designer
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    $35000-$38000
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    Wellesley Rd, London
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-stopwatch"></i>
                                                    9 days ago
                                                </li>
                                            </ul>
                                            <span>Full Time</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="theme-btn text-end">
                                            <a href="/jobdetails" class="default-btn">
                                                Browse Job
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6">
                            <div class="job-card-two">
                                <div class="row align-items-center">
                                    <div class="col-md-1">
                                        <div class="company-logo">
                                            <a href="job-details.html">
                                                <img src={require('./image/find2.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="job-info">
                                            <h3>
                                                <a href="job-details.html">Website Developer &amp; Software Developer</a>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Web Developer
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    $3000-$8000
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    Garden Road, UK
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-stopwatch"></i>
                                                    5 days ago
                                                </li>
                                            </ul>
                                            <span>Full Time</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="theme-btn text-end">
                                            <a href="/jobdetails" class="default-btn">
                                                Browse Job
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="job-card-two">
                                <div class="row align-items-center">
                                    <div class="col-md-1">
                                        <div class="company-logo">
                                            <a href="job-details.html">
                                                <img src={require('./image/find3.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="job-info">
                                            <h3>
                                                <a href="job-details.html">Application Developer &amp; Web Designer</a>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    App Developer
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    $3000-$4000
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    State City, USA
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-stopwatch"></i>
                                                    8 days ago
                                                </li>
                                            </ul>
                                            <span>Part-Time</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="theme-btn text-end">
                                            <a href="/jobdetails" class="default-btn">
                                                Browse Job
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="job-card-two">
                                <div class="row align-items-center">
                                    <div class="col-md-1">
                                        <div class="company-logo">
                                            <a href="job-details.html">
                                                <img src={require('./image/find4.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="job-info">
                                            <h3>
                                                <a href="job-details.html">Frontend &amp; Backend Developer</a>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Web Developer
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    $5000-$8000
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-stopwatch"></i>
                                                    1 days ago
                                                </li>
                                            </ul>
                                            <span>Full Time</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="theme-btn text-end">
                                            <a href="/jobdetails" class="default-btn">
                                                Browse Job
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="job-card-two">
                                <div class="row align-items-center">
                                    <div class="col-md-1">
                                        <div class="company-logo">
                                            <a href="job-details.html">
                                                <img src={require('./image/find5.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="job-info">
                                            <h3>
                                                <a href="job-details.html">IT Department &amp; Manager</a>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Manager
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    $35000-$38000
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    Wellesley Rd, London
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-stopwatch"></i>
                                                    7 days ago
                                                </li>
                                            </ul>
                                            <span>Full Time</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="theme-btn text-end">
                                            <a href="/jobdetails" class="default-btn">
                                                Browse Job
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="job-card-two">
                                <div class="row align-items-center">
                                    <div class="col-md-1">
                                        <div class="company-logo">
                                            <a href="job-details.html">
                                                <img src={require('./image/find6.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="job-info">
                                            <h3>
                                                <a href="job-details.html">Office Assistant</a>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Manager
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    $10000-$12000
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    Wellesley Rd, London
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-stopwatch"></i>
                                                    9 days ago
                                                </li>
                                            </ul>
                                            <span>Full Time</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="theme-btn text-end">
                                            <a href="/jobdetails" class="default-btn">
                                                Browse Job
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="job-card-two">
                                <div class="row align-items-center">
                                    <div class="col-md-1">
                                        <div class="company-logo">
                                            <a href="job-details.html">
                                                <img src={require('./image/find1.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="job-info">
                                            <h3>
                                                <a href="job-details.html">Accountants</a>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Finance
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    $5000-$8000
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    Green View, Australia
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-stopwatch"></i>
                                                    2 days ago
                                                </li>
                                            </ul>
                                            <span>Full Time</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="theme-btn text-end">
                                            <a href="/jobdetails" class="default-btn">
                                                Browse Job
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="job-card-two">
                                <div class="row align-items-center">
                                    <div class="col-md-1">
                                        <div class="company-logo">
                                            <a href="job-details.html">
                                                <img src={require('./image/find2.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="job-info">
                                            <h3>
                                                <a href="job-details.html">Budget Analysts</a>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Data Science
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    $3000-$8000
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    Park Road, UK
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-stopwatch"></i>
                                                    3 days ago
                                                </li>
                                            </ul>
                                            <span>Full Time</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="theme-btn text-end">
                                            <a href="/jobdetails" class="default-btn">
                                                Browse Job
                                            </a>
                                        </div>
                                    </div>
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
export default Joblist;