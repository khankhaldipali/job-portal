import './Use.css';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Use() {
    useEffect(()=>{
        Aos.init({duration:3500,offset:300});
    },[]);
    return (
        <>
            <section className='use spacer_y'>
                <div className="container">
                    <div className="section_title text_center" data-aos="fade-up-right">
                        <h2>Easiest Way To Use</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="use_text" data-aos="fade-right">
                                <span>1</span>
                                <i class="fa-solid fa-laptop-code"></i>
                                <h3>Browse Job</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="use_text" data-aos="fade-up">
                                <span>2</span>
                                <i class="fa-solid fa-people-group"></i>
                                <h3>Find Your Vaccancy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 offset-sm-3 offset-md-0">
                            <div class="use_text" data-aos="fade-left">
                                <span>3</span>
                                <i class="fa-solid fa-clipboard-list"></i>
                                <h3>Submit Resume</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Use;