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
function Blogdetails() {
    return (
        <>
            {/* ----------------------------banner section--------------- */}
            <section className='page_title blog3'>
                <div class="d-table">
                    <div class="d-table-cell">
                        <h2>Blog Details</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <i class="fa-solid fa-angle-right"></i>
                            <li>Blog Details</li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </section>
            {/* ------------------blog details main section---------- */}
            <section className='spacer_y'>
                <div className="container">
                    <div className="row">
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
                                        <a href="#">Tips &amp; Tricks</a>
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
                                        <a href="#">Tips &amp; Tricks</a>
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
                        {/* ---------------------------- */}
                        <div class="col-lg-8">
                            <div class="blog-dedails-text">
                                <div class="blog-details-img">
                                    <img src={require('./image/blog-details.jpeg')} alt="" />
                                </div>
                                <div class="blog-meta">
                                    <ul>
                                        <li>
                                        <i class="fa-solid fa-user pe-2"></i>
                                            Admin
                                        </li>
                                        <li>
                                        <i class="fa-solid fa-calendar-days pe-2"></i>
                                            01 Jan, 2022
                                        </li>
                                    </ul>
                                </div>
                                <h3 class="post-title">Tips for Making Your Resume Stand Out</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                <div class="row">
                                    <div class="col-sm-6">
                                    <img src={require('./image/blog-details2.jpeg')} alt="" className='details-inner-img pb-4' />
                                    </div>
                                    <div class="col-sm-6">
                                    <img src={require('./image/blog-details3.jpeg')} alt=""  className='details-inner-img pb-4'/>
                                    </div>
                                </div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                <div class="details-tag">
                                    <ul>
                                        <li>Tags:</li>
                                        <li>
                                            <a href="#">Business</a>
                                        </li>
                                        <li>
                                            <a href="#">Resume</a>
                                        </li>
                                        <li>
                                            <a href="#">Develpment</a>
                                        </li>
                                    </ul>
                                </div>
                                <form class="comment-form">
                                    <h3>Leave a Reply</h3>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" class="form-control" placeholder="Your Name"></input>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="email" class="form-control" placeholder="Your Name"></input>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Comment</label>
                                                <textarea class="form-control comment-box" cols="30" rows="6" placeholder="Your Comment"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="comment-btn">
                                        Post a Comment
                                    </button>
                                </form>
                            </div>
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
export default Blogdetails;