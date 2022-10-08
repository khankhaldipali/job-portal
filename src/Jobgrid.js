import React from 'react'
import './Routing.css';
import './Footer.css';
import './App.css';
import './Top.css';
import Footer from './Footer';
import Top from './Top';
function Jobgrid() {
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title grid'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Job Grid</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Job Grid</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* -------------------------interest section------------ */}
            <section className='spacer_y grid_text'>
                <div className="container">
                    <div class="section_title text_center">
                        <h2>Jobs You May Be Interested In</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="job_card">
                                <div class="row align-items-center">
                                    <div class="col-lg-3">
                                        <div class="thumb_img">
                                            <a href="job-details.html">
                                                <img src={require('./image/find1.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="job_info">
                                            <h3>
                                                <a href="job-details.html">Post-Room Operate</a>
                                            </h3>
                                            <ul>
                                                <li>Via <a href="#">Tourt Design LTD</a></li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    Wellesley Rd, London
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-filter"></i>
                                                    Accountancy
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Freelance
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="job_save">
                                            <span>Full Time</span>
                                            <a href="#">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <p>
                                                <i class="fa-solid fa-stopwatch"></i>
                                                1 Hr Ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="job_card">
                                <div class="row align-items-center">
                                    <div class="col-lg-3">
                                        <div class="thumb_img">
                                            <a href="job-details.html">
                                                <img src={require('./image/find2.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="job_info">
                                            <h3>
                                                <a href="job-details.html">Data Entry</a>
                                            </h3>
                                            <ul>
                                                <li>Via <a href="#">Techno Inc.</a></li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    Street 40/A, London
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-filter"></i>
                                                    Data Entry
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Freelance
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="job_save">
                                            <span>Part Time</span>
                                            <a href="#">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <p>
                                                <i class="fa-solid fa-stopwatch"></i>
                                                3 Hr Ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="job_card">
                                <div class="row align-items-center">
                                    <div class="col-lg-3">
                                        <div class="thumb_img">
                                            <a href="job-details.html">
                                                <img src={require('./image/find3.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="job_info">
                                            <h3>
                                                <a href="job-details.html">Graphic Designer</a>
                                            </h3>
                                            <ul>
                                                <li>Via <a href="#">Devon Design</a></li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    West Sight, USA
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-filter"></i>
                                                    Graphics
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Freelance
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="job_save">
                                            <span>Part Time</span>
                                            <a href="#">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <p>
                                                <i class="fa-solid fa-stopwatch"></i>
                                                4 Hr Ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="job_card">
                                <div class="row align-items-center">
                                    <div class="col-lg-3">
                                        <div class="thumb_img">
                                            <a href="job-details.html">
                                                <img src={require('./image/find4.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="job_info">
                                            <h3>
                                                <a href="job-details.html">Web Developer</a>
                                            </h3>
                                            <ul>
                                                <li>Via <a href="#">MegaNews</a></li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    San Francisco, California
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-filter"></i>
                                                    Development
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Freelance
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="job_save">
                                            <span>Full Time</span>
                                            <a href="#">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <p>
                                                <i class="fa-solid fa-stopwatch"></i>
                                                5 Hr Ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="job_card">
                                <div class="row align-items-center">
                                    <div class="col-lg-3">
                                        <div class="thumb_img">
                                            <a href="job-details.html">
                                                <img src={require('./image/find5.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="job_info">
                                            <h3>
                                                <a href="job-details.html">Digital Marketor</a>
                                            </h3>
                                            <ul>
                                                <li>Via <a href="#">AB Marketer LTD</a></li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    Wellesley Rd, London
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-filter"></i>
                                                    Marketing
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Freelance
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="job_save">
                                            <span>Full Time</span>
                                            <a href="#">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <p>
                                                <i class="fa-solid fa-stopwatch"></i>
                                                6 Hr Ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="job_card">
                                <div class="row align-items-center">
                                    <div class="col-lg-3">
                                        <div class="thumb_img">
                                            <a href="job-details.html">
                                                <img src={require('./image/find6.png')} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="job_info">
                                            <h3>
                                                <a href="job-details.html">UI/UX Designer</a>
                                            </h3>
                                            <ul>
                                                <li>Via <a href="#">Design Hunter</a></li>
                                                <li>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    Zoo Rd, London
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-filter"></i>
                                                    Accountancy
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-briefcase"></i>
                                                    Freelance
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="job_save">
                                            <span>Part Time</span>
                                            <a href="#">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <p>
                                                <i class="fa-solid fa-stopwatch"></i>
                                                8 Hr Ago
                                            </p>
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
export default Jobgrid;