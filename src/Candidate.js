import React from 'react'
import './Routing.css';
import './Footer.css';
import './Top.css';
import './App.css';
import Footer from './Footer';
import Top from './Top';
function Candidate() {
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title candidate'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Candidates</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Candidates</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* -------------------candidate section------------ */}
            <section className='spacer_y'>
                <div className="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="candidate-card">
                                <div class="candidate-img">
                                    <img src={require('./image/testi1.jpeg')} alt="" />
                                </div>
                                <div class="candidate-text">
                                    <h3>
                                        <a href="candidate-details.html">Mibraj Alex</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            Web Developer
                                        </li>
                                    </ul>
                                </div>
                                <div class="candidate-social">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter ms-1 me-1"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="candidate-card">
                                <div class="candidate-img">
                                    <img src={require('./image/testi2.jpeg')} alt="" />
                                </div>
                                <div class="candidate-text">
                                    <h3>
                                        <a href="candidate-details.html">Felica Kareon</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            PHP Developer
                                        </li>
                                    </ul>
                                </div>
                                <div class="candidate-social">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter ms-1 me-1"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="candidate-card">
                                <div class="candidate-img">
                                    <img src={require('./image/testi3.jpeg')} alt="" />
                                </div>
                                <div class="candidate-text">
                                    <h3>
                                        <a href="candidate-details.html">Malisa Petel</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            Business Consultant
                                        </li>
                                    </ul>
                                </div>
                                <div class="candidate-social">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter ms-1 me-1"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="candidate-card">
                                <div class="candidate-img">
                                    <img src={require('./image/testi4.jpeg')} alt="" />
                                </div>
                                <div class="candidate-text">
                                    <h3>
                                        <a href="candidate-details.html">Quence Joes</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            Graphics Designer
                                        </li>
                                    </ul>
                                </div>
                                <div class="candidate-social">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter ms-1 me-1"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="candidate-card">
                                <div class="candidate-img">
                                    <img src={require('./image/testi5.jpeg')} alt="" />
                                </div>
                                <div class="candidate-text">
                                    <h3>
                                        <a href="candidate-details.html">Mary Mainor</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            Technical Writter
                                        </li>
                                    </ul>
                                </div>
                                <div class="candidate-social">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter ms-1 me-1"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="candidate-card">
                                <div class="candidate-img">
                                    <img src={require('./image/testi6.jpeg')} alt="" />
                                </div>
                                <div class="candidate-text">
                                    <h3>
                                        <a href="candidate-details.html">Jack Hallock</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            Marketing Expert
                                        </li>
                                    </ul>
                                </div>
                                <div class="candidate-social">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter ms-1 me-1"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="candidate-card">
                                <div class="candidate-img">
                                    <img src={require('./image/testi7.jpeg')} alt="" />
                                </div>
                                <div class="candidate-text">
                                    <h3>
                                        <a href="candidate-details.html">Lucas Mason</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            UX Designer
                                        </li>
                                    </ul>
                                </div>
                                <div class="candidate-social">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter ms-1 me-1"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="candidate-card">
                                <div class="candidate-img">
                                    <img src={require('./image/testi8.jpeg')} alt="" />
                                </div>
                                <div class="candidate-text">
                                    <h3>
                                        <a href="candidate-details.html">Jerry Hudson</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            Video Editor
                                        </li>
                                    </ul>
                                </div>
                                <div class="candidate-social">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter ms-1 me-1"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
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
export default Candidate;