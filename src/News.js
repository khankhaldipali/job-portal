import './News.css';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function News() {
    useEffect(() => {
        Aos.init({ duration: 4000, offset: 300 });
    }, []);
    return (
        <>
            <section className=' new spacer_y'>
                <div className="container">
                    <div class="section_title text_center">
                        <h2>News, Tips &amp; Articles</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-sm-6">
                            <div class="blog_card" data-aos="fade-right">
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
                        <div class="col-lg-4 col-sm-6">
                            <div class="blog_card" data-aos="fade-up">
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
                        <div class="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div class="blog_card" data-aos="fade-left">
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
                    </div>
                </div>
            </section>
        </>
    )

}
export default News;