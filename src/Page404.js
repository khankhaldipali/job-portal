import React from 'react'
import './Routing.css';
import './Footer.css';
import './Top.css';
import './Plan.css';
import './Company.css';
import './App.css';
import Footer from './Footer';
import Top from './Top';
function Page404() {
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title page_pricing'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>404</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>404</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* ------------------image section------------------ */}
            <section className='spacer_y'>
                <div className="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <div class="error-img">
                                <img src={require('./image/404.png')} alt="" />
                                <div class="theme-btn text-center">
                                    <a href="/" class="default-btn">Go To Home</a>
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
            <Footer />
            <Top />
        </>
    )
}
export default Page404;