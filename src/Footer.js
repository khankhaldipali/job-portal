import './Footer.css';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Footer() {
    useEffect(()=>{
        Aos.init({duration:4000,offset:300});
    },[]);
    return (
        <>
            <div className="foot spacer_y">
                <div className="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6" data-aos="fade-up-right">
                            <div class="footer_widget">
                                <div class="footer_logo">
                                    <a href="index.html">
                                        <img src={require('./image/logo1.png')} alt="" />
                                    </a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna. Sed eiusmod tempor incididunt ut.</p>
                                <div class="footer_social">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6" data-aos="fade-up-right">
                            <div class="footer_widget pl-60">
                                <h3>For Candidate</h3>
                                <ul>
                                    <li>
                                        <a href="job-grid.html">
                                            <i class="fa-solid fa-angles-right"></i>
                                            Browse Jobs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="account.html">
                                            <i class="fa-solid fa-angles-right"></i>
                                            Account
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catagories.html">
                                            <i class="fa-solid fa-angles-right"></i>
                                            Browse Categories
                                        </a>
                                    </li>
                                    <li>
                                        <a href="resume.html">
                                            <i class="fa-solid fa-angles-right"></i>
                                            Resume
                                        </a>
                                    </li>
                                    <li>
                                        <a href="job-list.html">
                                            <i class="fa-solid fa-angles-right"></i>
                                            Job List
                                        </a>
                                    </li>
                                    <li>
                                        <a href="sign-up.html">
                                            <i class="fa-solid fa-angles-right"></i>
                                            Sign Up
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6" data-aos="fade-up-left">
                            <div class="footer_widget pl-60">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            <i class="fa-solid fa-angles-right"></i>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                            <i class="fa-solid fa-angles-right"></i>
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="faq.html">
                                            <i class="fa-solid fa-angles-right"></i>
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="pricing.html">
                                            <i class="fa-solid fa-angles-right"></i>
                                            Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="privacy.html">
                                            <i class="fa-solid fa-angles-right"></i>
                                            Privacy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                        <i class="fa-solid fa-angles-right"></i>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6" data-aos="fade-up-left">
                            <div class="footer_widget footer_info">
                                <h3>Information</h3>
                                <ul>
                                    <li>
                                        <span>
                                            <i class="fa-solid fa-phone"></i>
                                            Phone:
                                        </span>
                                        <a href="tel:0900800900">
                                            0900 800 900
                                        </a>
                                    </li>
                                    <li>
                                        <span>
                                            <i class="fa-solid fa-envelope"></i>
                                            Email:
                                        </span>
                                        <a href="mailto:example@domain.com">example@domain.com</a>
                                    </li>
                                    <li>
                                        <span>
                                            <i class="fa-solid fa-location-dot"></i>
                                            Address:
                                        </span>
                                        <a href="#">Mulberry St, New York, USA</a> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;