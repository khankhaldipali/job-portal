import './Company.css';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Company() {
    useEffect(()=>{
        Aos.init({duration:4000,offset:300});
    },[]);
    return (
        <>
            <section className=' company spacer_y'>
                <div className="container">
                    <div className="section_title text_center">
                        <h2>Top Companies</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="company_card" data-aos="fade-up-right">
                                <div class="company_logo">
                                    <a href="job-grid.html">
                                        <img src={require('./image/3.png')} alt="company logo"></img>
                                    </a>
                                </div>
                                <div class="company_text">
                                    <h3>Trophy &amp; Sans</h3>
                                    <p>
                                        <i class="fa-solid fa-location-dot"></i>
                                        Green Lanes, London
                                    </p>
                                    <a href="job-grid.html" class="company_btn">
                                        25 Open Position
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="company_card" data-aos="fade-up-right">
                                <div class="company_logo">
                                    <img src={require('./image/4.png')} alt="company logo"></img>
                                </div>
                                <div class="company_text">
                                    <h3>Trout Design</h3>
                                    <p>
                                        <i class="fa-solid fa-location-dot"></i>
                                        Park Avenue, Mumbai
                                    </p>
                                    <a href="job-grid.html" class="company_btn">
                                        35 Open Position
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="company_card" data-aos="fade-up-left">
                                <div class="company_logo">
                                    <img src={require('./image/5.png')} alt="company logo"></img>
                                </div>
                                <div class="company_text">
                                    <h3>Resland LTD</h3>
                                    <p>
                                        <i class="fa-solid fa-location-dot"></i>
                                        Betas Quence, London
                                    </p>
                                    <a href="job-grid.html" class="company_btn">
                                        20 Open Position
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="company_card" data-aos="fade-up-left">
                                <div class="company_logo">
                                    <img src={require('./image/6.png')} alt="company logo"></img>
                                </div>
                                <div class="company_text">
                                    <h3>Lawn Hopper</h3>
                                    <p>
                                        <i class="fa-solid fa-location-dot"></i>
                                        Wellesley Rd, London
                                    </p>
                                    <a href="job-grid.html" class="company_btn">
                                        45 Open Position
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
export default Company;