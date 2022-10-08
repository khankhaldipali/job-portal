import './Feature.css';
import './App.css';
function Feature() {
    return (
        <>
            <section className='feature spacer_y'>
                <div className="container">
                    <div class="section_title text_center">
                        <h2>Featured Candidates</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
                    </div>

                    <div className="owl-carousel owl-theme" id='slider1'>
                        <div class="condidate_item">
                            <div class="candidate_img">
                                <img src={require('./image/testi1.jpeg')} alt="" />
                            </div>
                            <div class="candidate_social">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                            <div class="candidate_text">
                                <h3><a href="#">Quence Joes</a></h3>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-filter pe-2"></i>
                                        Web Developer
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-location-dot pe-2"></i>
                                        Augusta, Maine
                                    </li>
                                </ul>
                                <div class="bottom_text">
                                    <p>
                                        <i class="fa-solid fa-stopwatch pe-2"></i>
                                        8D ago
                                    </p>
                                    <a href="#">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ------- */}

                        <div class="condidate_item">
                            <div class="candidate_img">
                                <img src={require('./image/testi3.jpeg')} alt="" />
                            </div>
                            <div class="candidate_social">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                            <div class="candidate_text">
                                <h3><a href="#">Malisha Patel</a></h3>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-filter pe-2"></i>
                                        Web Developer
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-location-dot pe-2"></i>
                                        Augusta, Maine
                                    </li>
                                </ul>
                                <div class="bottom_text">
                                    <p>
                                        <i class="fa-solid fa-stopwatch pe-2"></i>
                                        1D ago
                                    </p>
                                    <a href="#">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ------- */}

                        <div class="condidate_item">
                            <div class="candidate_img">
                                <img src={require('./image/testi4.jpeg')} alt="" />
                            </div>
                            <div class="candidate_social">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                            <div class="candidate_text">
                                <h3><a href="#">Mibraj Alex</a></h3>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-filter pe-2"></i>
                                        Construction & Property
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-location-dot pe-2"></i>
                                        Botchergate, Carlisle
                                    </li>
                                </ul>
                                <div class="bottom_text">
                                    <p>
                                        <i class="fa-solid fa-stopwatch pe-2"></i>
                                        2D ago
                                    </p>
                                    <a href="#">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* -------- */}

                        <div class="condidate_item">
                            <div class="candidate_img">
                                <img src={require('./image/testi2.jpeg')} alt="" />
                            </div>
                            <div class="candidate_social">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                            <div class="candidate_text">
                                <h3><a href="#">Felica Kareon</a></h3>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-filter pe-2"></i>
                                        SEO Expart
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-location-dot pe-2"></i>
                                        Georgetown, USA
                                    </li>
                                </ul>
                                <div class="bottom_text">
                                    <p>
                                        <i class="fa-solid fa-stopwatch pe-2"></i>
                                        8D ago
                                    </p>
                                    <a href="#">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ---------- */}

                        <div class="condidate_item">
                            <div class="candidate_img">
                                <img src={require('./image/testi3.jpeg')} alt="" />
                            </div>
                            <div class="candidate_social">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                            <div class="candidate_text">
                                <h3><a href="#">Malisha Patel</a></h3>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-filter pe-2"></i>
                                        Project Management
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-location-dot pe-2"></i>
                                        Madison, USA
                                    </li>
                                </ul>
                                <div class="bottom_text">
                                    <p>
                                        <i class="fa-solid fa-stopwatch pe-2"></i>
                                        1D ago
                                    </p>
                                    <a href="#">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ------- */}

                        <div class="condidate_item">
                            <div class="candidate_img">
                                <img src={require('./image/testi1.jpeg')} alt="" />
                            </div>
                            <div class="candidate_social">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                            <div class="candidate_text">
                                <h3><a href="#">Quence Joes</a></h3>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-filter pe-2"></i>
                                        Web Developer
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-location-dot pe-2"></i>
                                        Augusta, Maine
                                    </li>
                                </ul>
                                <div class="bottom_text">
                                    <p>
                                        <i class="fa-solid fa-stopwatch pe-2"></i>
                                        8D ago
                                    </p>
                                    <a href="#">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* -------- */}

                        <div class="condidate_item">
                            <div class="candidate_img">
                                <img src={require('./image/testi4.jpeg')} alt="" />
                            </div>
                            <div class="candidate_social">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                            <div class="candidate_text">
                                <h3><a href="#">Mibraj Alex</a></h3>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-filter pe-2"></i>
                                        Construction & Property
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-location-dot pe-2"></i>
                                        Botchergate, Carlisle
                                    </li>
                                </ul>
                                <div class="bottom_text">
                                    <p>
                                        <i class="fa-solid fa-stopwatch pe-2"></i>
                                        2D ago
                                    </p>
                                    <a href="#">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ------- */}

                        <div class="condidate_item">
                            <div class="candidate_img">
                                <img src={require('./image/testi2.jpeg')} alt="" />
                            </div>
                            <div class="candidate_social">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                            <div class="candidate_text">
                                <h3><a href="#">Felica Kareon</a></h3>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-filter pe-2"></i>
                                        Web Developer
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-location-dot pe-2"></i>
                                        Augusta, Maine
                                    </li>
                                </ul>
                                <div class="bottom_text">
                                    <p>
                                        <i class="fa-solid fa-stopwatch pe-2"></i>
                                        8D ago
                                    </p>
                                    <a href="#">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ---- */}

                    </div>

                </div>
            </section>
        </>
    )
}
export default Feature;