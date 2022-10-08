import React from 'react'
import './Routing.css';
import './Footer.css';
import './Top.css';
import './App.css';
import Footer from './Footer';
import Top from './Top';

function Find() {
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title find'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Find A Job</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Find A Job</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* -----------------------find a job button section----------- */}
            <section className='spacer_y'>
                <div className="container">
                    <form class="find_form mt-0">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="form_group">
                                    <input type="text" class="form_control" placeholder="Job Title or Keyword"></input>
                                    <i class="fa-brands fa-searchengin"></i>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="form_group">
                                    <input type="text" class="form_control" placeholder="Location"></input>
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <select class="category nice_select">
                                    <option data-display="Category" className='option selected'>Category</option>
                                    <option value="1" className='option'>Web Development</option>
                                    <option value="2" className='option'>Graphics Design</option>
                                    <option value="4" className='option'>Data Entry</option>
                                    <option value="5" className='option'>Visual Editor</option>
                                    <option value="6" className='option'>Office Assistant</option>
                                </select>
                            </div>
                            <div class="col-lg-3">
                                <a href="/find">
                                    <button type="submit" class="find_btn">
                                        Find A Job
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/* ---------------popular section--------------------- */}
            <section className='p_100 popular'>
                <div className="container">
                    <div class="section_title text_center">
                        <h2>Popular Jobs Category</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_item">
                                    <i class="fa-solid fa-screwdriver-wrench"></i>
                                    <h3>Construction</h3>
                                    <p>6 new Job</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_item">
                                    <i class="fa-solid fa-coins"></i>
                                    <h3>Finance</h3>
                                    <p>8 new Job</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_item">
                                    <i class="fa-solid fa-heart-pulse"></i>
                                    <h3>Healthcare</h3>
                                    <p>9 new Job</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_item">
                                    <i class="fa-solid fa-laptop-code"></i>
                                    <h3>Graphic Design</h3>
                                    <p>6 new Job</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_item">
                                    <i class="fa-brands fa-squarespace"></i>
                                    <h3>Banking Jobs</h3>
                                    <p>5 new Job</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_item">
                                    <i class="fa-solid fa-user-nurse"></i>
                                    <h3>Automotive</h3>
                                    <p>12 new Job</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_item">
                                    <i class="fa-solid fa-graduation-cap"></i>
                                    <h3>Education</h3>
                                    <p>15 new Job</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3  col-sm-6">
                            <a href="job-list.html">
                                <div class="category_item">
                                    <i class="fa-solid fa-computer"></i>
                                    <h3>Data Analysis</h3>
                                    <p>5 new Job</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------------------interest section-------------- */}
            <section className='spacer_y interest'>
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
            </section>
            {/* --------------------notification section-------------- */}
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
            {/* -----------------footer section------------- */}
            <Footer/>
            <Top/>
        </>
    )
}
export default Find;