import React from 'react'
import './Routing.css';
import './Footer.css';
import './App.css';
import './Top';
import Footer from './Footer';
import Top from './Top';
function Post() {
    return (
        <>
            {/* -------------banner page----------------- */}
            <section className='page_title post'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Post A Job</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Post A Job</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* -----------job info---------------------------------- */}
            <section className='spacer_y'>
                <div className="container">
                    <form class="job_post_from">
                        <h2>Fill Up Your Job information</h2>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form_group">
                                    <label>Job Title</label>
                                    <input type="text" class="form_control" id="exampleInput1" placeholder="Job Title or Keyword" required=""></input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form_group">
                                    <label>Job Category</label>
                                    <select class="category nice_select">
                                        <option data-display="Category" className='option'>Category</option>
                                        <option value="1" className='option'>Web Development</option>
                                        <option value="2" className='option'>Graphics Design</option>
                                        <option value="4" className='option'>Data Entry</option>
                                        <option value="5" className='option'>Visual Editor</option>
                                        <option value="6" className='option'>Office Assistant</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form_group">
                                    <label>Company Name</label>
                                    <input type="text" class="form_control" id="exampleInput2" placeholder="Company Name" required=""></input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form_group">
                                    <label>Company Email</label>
                                    <input type="email" class="form_control" id="exampleInput3" placeholder="e.g. hello@company.com" required=""></input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form_group">
                                    <label>Company Website (Optional)</label>
                                    <input type="text" class="form_control" id="exampleInput4" placeholder="e.g www.companyname.com"></input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form_group">
                                    <label>Location</label>
                                    <input type="text" className='form_control' id="exampleInput5" placeholder="e.g. London" required=""></input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form_group">
                                    <label>Job Type</label>
                                    <select class="category nice_select">
                                        <option data-display="Job Type" className='option'>Job Type</option>
                                        <option value="1" className='option'>Full Time</option>
                                        <option value="2" className='option'>Part Time</option>
                                        <option value="4" className='option'>Freelancer</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form_group">
                                    <label>Job Tags</label>
                                    <input type="text" class="form_control" id="exampleInput6" placeholder="e.g. web design, graphics design, video editing" required=""></input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form_group">
                                    <label>Salary (Optional)</label>
                                    <input type="number" class="form_control" id="exampleInput7" placeholder="e.g. $20,000"></input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form_group">
                                    <label>Experience</label>
                                    <input type="text" class="form_control" id="exampleInput8" placeholder="e.g. 1 year" required=""></input>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form_group">
                                    <label for="exampleFormControlTextarea1">Job Description</label>
                                    <textarea class="form_control description_area" id="exampleFormControlTextarea1" rows="6" placeholder="Job Description" required=""></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 text_center">
                                <button type="submit" class="post_btn">
                                    Post A Job
                                </button>
                            </div>
                        </div>
                    </form>
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
export default Post;