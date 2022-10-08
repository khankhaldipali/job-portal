import './Category.css';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Category() {
    useEffect(()=>{
        Aos.init({duration:4000,offset:300});
    },[]);
    return (
        <>
            <section className='category spacer_y'>
                <div className='container'>
                    <div className="section_title text_center">
                        <h2>Choose Your Category</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                    </div>
                    {/*-------------------------------------  */}
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <a href="#">
                                <div class="category_card" data-aos="fade-up">
                                    <i class="fa-solid fa-receipt"></i>
                                    <h3>Accountancy</h3>
                                    <p>301 open position</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_card" data-aos="fade-up">
                                    <i class="fa-solid fa-graduation-cap"></i>
                                    <h3>Education</h3>
                                    <p>210 open position</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_card" data-aos="fade-up">
                                    <i class="fa-solid fa-screwdriver-wrench"></i>
                                    <h3>Automotive Jobs</h3>
                                    <p>281 open position</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_card" data-aos="fade-up">
                                    <i class="fa-solid fa-person-chalkboard"></i>
                                    <h3>Business</h3>
                                    <p>122 open position</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_card" data-aos="fade-up-right">
                                    <i class="fa-solid fa-heart"></i>
                                    <h3>Health Care</h3>
                                    <p>335 open position</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3  col-md-4 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_card" data-aos="fade-up-right">
                                    <i class="fa-solid fa-desktop"></i>
                                    <h3>IT &amp; Agency</h3>
                                    <p>401 open position</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3  col-md-4 col-sm-6 offset-md-2 offset-lg-0">
                            <a href="job-list.html">
                                <div class="category_card" data-aos="fade-up-left">
                                    <i class="fa-solid fa-user-doctor"></i>
                                    <h3>Engineering</h3>
                                    <p>100 open position</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <a href="job-list.html">
                                <div class="category_card" data-aos="fade-up-left">
                                    <i class="fa-solid fa-hammer"></i>
                                    <h3>Legal</h3>
                                    <p>201 open position</p>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Category;