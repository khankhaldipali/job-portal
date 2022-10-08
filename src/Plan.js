import './Plan.css';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Plan() {
    useEffect(() => {
        Aos.init({ duration: 4000, offset: 300 });
    }, []);
    return (
        <>
            <section className='plan spacer_y'>
                <div className="container">
                    <div class="section_title text_center">
                        <h2>Buy Our Plans & Packages</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4  col-sm-6">
                            <div className='p_card_main' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div className='p_card'>
                                    <div className="p_card_top text_center">
                                        <i class="fa-solid fa-hands-holding-circle"></i>
                                        <h3>Standard</h3>
                                        <p>
                                            These are the management services we provide the IT support and maintenance.
                                        </p>
                                    </div>
                                    <div className='p_card_mid'>
                                        <ul>
                                            <li>5 job posting</li>
                                            <li>Urgent job</li>
                                            <li>Featured job</li>
                                            <li>Job displayed for 10 days</li>
                                            <li>Premium Support 24/7</li>
                                        </ul>
                                    </div>
                                    <div className='p_card_bot text_center'>
                                        <button className='send'>
                                            Send Request!
                                        </button>
                                    </div>
                                </div>
                                <div className="p_card_back text_center">
                                    <h1>STANDERD</h1>
                                    <h3>$180</h3>
                                    <button className='job'>Find A Job</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className='p_card_main' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div className='p_card'>
                                    <div className="p_card_top text_center">
                                        <i class="fa-solid fa-medal"></i>
                                        <h3>Premium</h3>
                                        <p>
                                            It is the process of configuring virtual cloud systems that businesses need.
                                        </p>
                                    </div>
                                    <div className='p_card_mid'>
                                        <ul>
                                            <li>20 job posting</li>
                                            <li>Urgent job</li>
                                            <li>Featured job</li>
                                            <li>Job displayed for 30 days</li>
                                            <li>Premium Support 24/7</li>
                                        </ul>
                                    </div>
                                    <div className='p_card_bot text_center'>
                                        <button className='send'>
                                            Send Request!
                                        </button>
                                    </div>
                                </div>
                                <div className="p_card_back text_center">
                                    <h1>PREMIUM</h1>
                                    <h3>$250</h3>
                                    <button className='job'>Find A Job</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className='p_card_main last' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div className='p_card'>
                                    <div className="p_card_top text_center">
                                        <i class="fa-solid fa-ribbon"></i>
                                        <h3>Enterprise</h3>
                                        <p>
                                            These are the management services we provide the IT support and maintenance.
                                        </p>
                                    </div>
                                    <div className='p_card_mid'>
                                        <ul>
                                            <li>50 job posting</li>
                                            <li>Urgent job</li>
                                            <li>Featured job</li>
                                            <li>Job displayed for 60 days</li>
                                            <li>Premium Support 24/7</li>
                                        </ul>
                                    </div>
                                    <div className='p_card_bot text_center'>
                                        <button className='send'>
                                            Send Request!
                                        </button>
                                    </div>
                                </div>
                                <div className="p_card_back text_center">
                                    <h1>ENTERPRISE</h1>
                                    <h3>$480</h3>
                                    <button className='job'>Find A Job</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Plan;