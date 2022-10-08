import React from 'react'
import './Routing.css';
import './Footer.css';
import './Top.css';
import './App.css';
import Footer from './Footer';
import Top from './Top';
function Signup() {
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title signup'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Sign Up</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Sign Up</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* ---------------sign up main section------------- */}
            <section className='spacer_y'>
                <div className="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                            <form class="signup-form">
                                <div class="form-group">
                                    <label>Enter Username</label>
                                    <input type="text" class="form-control" placeholder="Enter Username" required=""></input>
                                </div>
                                <div class="form-group">
                                    <label>Enter Email</label>
                                    <input type="email" class="form-control" placeholder="Enter Your Email" required=""></input>
                                </div>
                                <div class="form-group">
                                    <label>Enter Password</label>
                                    <input type="password" class="form-control" placeholder="Enter Your Password" required=""></input>
                                </div>
                                <div class="signup-btn text-center">
                                    <button type="submit">Sign Up</button>
                                </div>
                                <div class="other-signup text-center">
                                    <span>Or sign up with</span>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i class="fa-brands fa-google"></i>
                                            </a>
                                        </li>
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
                                                <i class="fa-brands fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="create-btn text-center">
                                    <p>
                                        Have an Account?
                                        <a href="/signin">
                                            Sign In
                                            <i class="fa-solid fa-angles-right"></i>
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* /* ---------------------------notification section------------- */}
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
export default Signup;