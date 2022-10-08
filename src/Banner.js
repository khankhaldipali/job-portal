import './Banner.css';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Banner() {
    useEffect(()=>{
        Aos.init({duration:5000,offset:300});
    },[]);
    return (
        <>
            <section className='banner'>
                <div className='d-table'>
                    <div className='d-table-cell'>
                        <div className='container'>
                            <div className="banner_text text_center">
                                <p>Find Jobs, Employment &  Career Opportunities</p>
                                <h1>Drop Resume & Get Your Desire Job!</h1>
                                <form class="banner_form" data-aos="fade-up">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form_group" data-aos="fade-up">
                                                <input type="text" class="form_control" id="exampleInputEmail1" placeholder="Job Title"></input>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form_group" data-aos="fade-up">
                                                <input type="text" class="form_control" id="exampleInputEmail2" placeholder="City or State"></input>
                                            </div>
                                        </div>
                                        <div class="col-md-4" data-aos="fade-up">
                                            <button type="submit" class="find_btn">
                                                Find A Job
                                                <i class="bx bx-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <ul class="keyword" data-aos="fade-down">
                                    <li>Trending Keywords:</li>
                                    <li><a href="#">Automotive,</a></li>
                                    <li><a href="#">Education,</a></li>
                                    <li><a href="#">Health,</a></li>
                                    <li><a href="#">Care Engineering</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Banner;