import React from 'react'
import './Routing.css';
import './Footer.css';
import './News.css';
import './Top.css';
import './Plan.css';
import './Company.css';
import './App.css';
import Footer from './Footer';
import News from './News';
import Top from './Top';
function Blogtwo() {
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title blog2'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Blog Two</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Blog Two</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* -----------------blog two main section------------- */}
            <section className='spacer_y blog2_main'>
                <div className="container">
                    <div class="section-title text-center">
                        <h2>News, Tips &amp; Articles</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div class="col-md-6 col-sm-6">
                                    <div class="blog_card">
                                        <div class="blog_img">
                                            <a href="blog-details.html">
                                                <img src={require('./image/news1.jpeg')} alt="" />
                                            </a>
                                        </div>
                                        <div class="blog_text">
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-user"></i>
                                                    Admin
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-calendar-days"></i>
                                                    01 Jan, 2022
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href="blog-details.html">
                                                    How to Indroduce in Yourself in Job Interview?
                                                </a>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <a href="blog-details.html" class="blog_btn">
                                                Read More
                                                <i class="fa-solid fa-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="blog_card">
                                        <div class="blog_img">
                                            <a href="blog-details.html">
                                                <img src={require('./image/news2.jpeg')} alt="" />
                                            </a>
                                        </div>
                                        <div class="blog_text">
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-user"></i>
                                                    Admin
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-calendar-days"></i>
                                                    01 Jan, 2022
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href="blog-details.html">
                                                    Looking for Highly Motivated Product to Build
                                                </a>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <a href="blog-details.html" class="blog_btn">
                                                Read More
                                                <i class="fa-solid fa-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="blog_card">
                                        <div class="blog_img">
                                            <a href="blog-details.html">
                                                <img src={require('./image/news3.jpeg')} alt="" />
                                            </a>
                                        </div>
                                        <div class="blog_text">
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-user"></i>
                                                    Admin
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-calendar-days"></i>
                                                    01 Jan, 2022
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href="blog-details.html">
                                                    The Reason Why Software Develope is the Best Job
                                                </a>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <a href="blog-details.html" class="blog_btn">
                                                Read More
                                                <i class="fa-solid fa-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="blog_card">
                                        <div class="blog_img">
                                            <a href="blog-details.html">
                                                <img src={require('./image/news4.jpeg')} alt="" />
                                            </a>
                                        </div>
                                        <div class="blog_text">
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-user"></i>
                                                    Admin
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-calendar-days"></i>
                                                    01 Jan, 2022
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href="blog-details.html">
                                                    Economy Growth is Being Increased by IT Sectors
                                                </a>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <a href="blog-details.html" class="blog_btn">
                                                Read More
                                                <i class="fa-solid fa-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="blog_card">
                                        <div class="blog_img">
                                            <a href="blog-details.html">
                                                <img src={require('./image/news5.jpeg')} alt="" />
                                            </a>
                                        </div>
                                        <div class="blog_text">
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-user"></i>
                                                    Admin
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-calendar-days"></i>
                                                    01 Jan, 2022
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href="blog-details.html">
                                                    Tips for Making Your Resume Stand Out
                                                </a>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <a href="blog-details.html" class="blog_btn">
                                                Read More
                                                <i class="fa-solid fa-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="blog_card">
                                        <div class="blog_img">
                                            <a href="blog-details.html">
                                                <img src={require('./image/news6.jpeg')} alt="" />
                                            </a>
                                        </div>
                                        <div class="blog_text">
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-user"></i>
                                                    Admin
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-calendar-days"></i>
                                                    01 Jan, 2022
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href="blog-details.html">
                                                    10 Things You Should Know Before Apply
                                                </a>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <a href="blog-details.html" class="blog_btn">
                                                Read More
                                                <i class="fa-solid fa-plus"></i>
                                            </a>
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
                        </div>
                        {/* ---------------------------- */}
                        <div class="col-lg-4">
                            <div class="blog-widget blog-search">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Search"></input>
                                            <button>
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                            </button>
                                    </div>
                                </form>
                            </div>
                            <div class="blog-widget">
                                <h3>Popular Post</h3>
                                <article class="popular-post">
                                    <a href="blog-details.html" class="blog-thumb">
                                        <img src={require('./image/popular-post1.jpeg')} alt="" />
                                    </a>
                                    <div class="info">
                                        <time datetime="2021-04-08">May 8, 2021</time>
                                        <h4>
                                            <a href="/blogdetails">Looking for Highly Motivated Product to Build</a>
                                        </h4>
                                    </div>
                                </article>
                                <article class="popular-post">
                                    <a href="blog-details.html" class="blog-thumb">
                                    <img src={require('./image/popular-post2.jpeg')} alt="" />
                                    </a>
                                    <div class="info">
                                        <time datetime="2021-04-08">May 5, 2021</time>
                                        <h4>
                                            <a href="/blogdetails">
                                                How to Indroduce in Yourself in Job Interview?
                                            </a>
                                        </h4>
                                    </div>
                                </article>
                                <article class="popular-post">
                                    <a href="blog-details.html" class="blog-thumb">
                                    <img src={require('./image/popular-post3.jpeg')} alt="" />
                                    </a>
                                    <div class="info">
                                        <time datetime="2021-04-08">April 20, 2021</time>
                                        <h4>
                                            <a href="/blogdetails">
                                                Economy Growth is Being Increased by IT Sectors
                                            </a>
                                        </h4>
                                    </div>
                                </article>
                                <article class="popular-post">
                                    <a href="blog-details.html" class="blog-thumb">
                                    <img src={require('./image/popular-post4.jpeg')} alt="" />
                                    </a>
                                    <div class="info">
                                        <time datetime="2021-04-08">April 28, 2021</time>
                                        <h4>
                                            <a href="/blogdetails">
                                                10 Things You Should Know Before Apply
                                            </a>
                                        </h4>
                                    </div>
                                </article>
                            </div>
                            <div class="blog-widget blog-category">
                                <h3>Category</h3>
                                <ul>
                                    <li>
                                        <a href="#">Web Design</a>
                                        <span>(10)</span>
                                    </li>
                                    <li>
                                        <a href="#">Job Tips</a>
                                        <span>(5)</span>
                                    </li>
                                    <li>
                                        <a href="#">UX Design</a>
                                        <span>(8)</span>
                                    </li>
                                    <li>
                                        <a href="#">Tips & Tricks</a>
                                        <span>(4)</span>
                                    </li>
                                    <li>
                                        <a href="#">Writting</a>
                                        <span>(12)</span>
                                    </li>
                                    <li>
                                        <a href="#">Business</a>
                                        <span>(7)</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="blog-widget blog-tags">
                                <h3>Tags</h3>
                                <ul>
                                    <li>
                                        <a href="#">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#">Job Tips</a>
                                    </li>
                                    <li>
                                        <a href="#">UX Design</a>
                                    </li>
                                    <li>
                                        <a href="#">Tips & Tricks</a>
                                    </li>
                                    <li>
                                        <a href="#">Writting</a>
                                    </li>
                                    <li>
                                        <a href="#">Business</a>
                                    </li>
                                    <li>
                                        <a href="#">Resume</a>
                                    </li>
                                </ul>
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
export default Blogtwo;