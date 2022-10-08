import './Choose.css';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Choose() {
    useEffect(()=>{
        Aos.init({duration:4000,offset:300});
    },[]);
    return (
        <>
            <section className='choose' data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div class="col-lg-7 p-0">
                            <div class="why_choose_text spacer_y">
                                <div class="section_title text_center">
                                    <h2>Why You Choose Chakri?</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolorei.</p>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <i class="fa-solid fa-people-line align-self-center"></i>
                                            <div class="media_body">
                                                <h5 class="mt-0">Best Talented People</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="media">
                                        <i class="fa-brands fa-nfc-directional align-self-center"></i>
                                            <div class="media_body">
                                                <h5 class="mt-0">Easy To Find Canditate</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <i class="fa-solid fa-boxes-packing align-self-center"></i>
                                            <div class="media_body">
                                                <h5 class="mt-0">Easy To Communicate</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="media">
                                            <i class="fa-solid fa-bridge-circle-xmark align-self-center"></i>
                                            <div class="media_body">
                                                <h5 class="mt-0">Global Recruitment Option</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 col-6">
                                        <div class="counter_text">
                                            <h2><span>127</span></h2>
                                            <p>Job Posted</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-6">
                                        <div class="counter_text">
                                            <h2><span>137</span></h2>
                                            <p>Job Filed</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-6">
                                        <div class="counter_text">
                                            <h2><span>180</span></h2>
                                            <p>Company</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-6">
                                        <div class="counter_text">
                                            <h2><span>144</span></h2>
                                            <p>Members</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 p-0">
                            <div class="why_choose_img">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Choose;