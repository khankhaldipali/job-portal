import React from 'react'
import './Routing.css';
import './Footer.css';
import './Top.css';
import './App.css';
import Footer from './Footer';
import Top from './Top';
function Jobdetails() {
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title jobdetails'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Job Details</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Job Details</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* -----------------------job-details section---------- */}
            <section className='spacer_y'>
                <div className="container">
                    <div className="row">
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="job-details-text">
                                        <div class="job-card">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <div class="company-logo">
                                                        <img src={require('./image/find1.png')} alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="job-info">
                                                        <h3>Web Designer, Graphic Designer, UI/UX Designer</h3>
                                                        <ul>
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
                                                        <span>
                                                            <i class="fa-solid fa-paper-plane"></i>
                                                            Apply Before: June 01,2021
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="details-text">
                                            <h3>Description</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into essentially unchanged.</p>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                        </div>
                                        <div class="details-text">
                                            <h3>Requirements</h3>
                                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-check"></i>
                                                    Work experience
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-check"></i>
                                                    Skills (soft skills and/or technical skills)
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-check"></i>
                                                    WPersonal qualities and attributes.
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-check"></i>
                                                    Support software roll-outs to production.
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-check"></i>
                                                    Guide and mentor junior engineers. Serve as team lead if appropriate.
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="details-text">
                                            <h3>Job Details</h3>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <table class="table">
                                                        <tbody>
                                                            <tr>
                                                                <td><span>Company</span></td>
                                                                <td>Tourt Design LTD</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Location</span></td>
                                                                <td>Wellesley Rd, London</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Job Type</span></td>
                                                                <td>Full Time</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Email</span></td>
                                                                <td><a href="mailto:example@domain.com">example@domain.com</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="col-md-6">
                                                    <table class="table">
                                                        <tbody>
                                                            <tr>
                                                                <td><span>Experince</span></td>
                                                                <td>2 Years</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Language</span></td>
                                                                <td>English</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Salary</span></td>
                                                                <td>$10,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>Website</span></td>
                                                                <td><a href="#">www.company.com</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="theme-btn">
                                            <a href="#" class="default-btn">
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="job-sidebar">
                                <h3>Posted By</h3>
                                <div class="posted-by">
                                    <img src={require('./image/client-1.png')} alt="" />
                                    <h4>John Doe</h4>
                                    <span>CEO of Tourt Design LTD</span>
                                </div>
                            </div>
                            <div class="job-sidebar">
                                <h3>Location</h3>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991517034!2d-74.25987556253516!3d40.697670063539654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1588772651198!5m2!1sen!2sbd" frameborder="0"></iframe>
                            </div>
                            <div class="job-sidebar">
                                <h3>Keywords</h3>
                                <ul>
                                    <li>
                                        <a href="#">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#">Data Sceince</a>
                                    </li>
                                    <li>
                                        <a href="#">SEO</a>
                                    </li>
                                    <li>
                                        <a href="#">Content Writter</a>
                                    </li>
                                    <li>
                                        <a href="#">Finance</a>
                                    </li>
                                    <li>
                                        <a href="#">Business</a>
                                    </li>
                                    <li>
                                        <a href="#">Education</a>
                                    </li>
                                    <li>
                                        <a href="#">Graphics</a>
                                    </li>
                                    <li>
                                        <a href="#">Video</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="job-sidebar social-share">
                                <h3>Share In</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa-brands fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
                        <div class="col-lg-12">
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
export default Jobdetails;