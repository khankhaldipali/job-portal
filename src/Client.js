import './Client.css';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Client() {
    useEffect(()=>{
        Aos.init({duration:4000,offset:300});
    },[]);
    return (
        <>
            <section className='client spacer_y'>
                <div className="container">
                    <div class="section_title text_center">
                        <h2>What Client’s Say About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
                    </div>
                    <div className='testi_slider owl-carousel owl-theme' id='slider2'>
                        <div class="testimonial_items">
                            <div class="row align-items-center">
                                <div class="col-lg-5 col-md-6 offset-md-3 offset-lg-0 p-0" data-aos="fade-right">
                                    <div class="testimonial_img">
                                        <img src={require('./image/client1.jpeg')} alt="" />
                                    </div>
                                    <div class="testimonial_img_text text_center">
                                        <h3>Alisa Meair</h3>
                                        <p>CEO of Company</p>
                                    </div>
                                </div>
                                <div class="col-lg-7" data-aos="fade-left">
                                    <div class="testimonial_text">
                                        <i class="fa-solid fa-quote-left"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----- */}
                        <div class="testimonial_items">
                            <div class="row align-items-center">
                                <div class="col-lg-5 col-md-6 offset-md-3 offset-lg-0 p-0">
                                    <div class="testimonial_img">
                                        <img src={require('./image/client2.jpeg')} alt="" />
                                    </div>
                                    <div class="testimonial_img_text text_center">
                                        <h3>John Doe</h3>
                                        <p>Web Designer</p>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="testimonial_text">
                                        <i class="fa-solid fa-quote-left"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Client;