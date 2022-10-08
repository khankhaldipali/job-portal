import './Header.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/all.min.css';
import { Link } from 'react-router-dom';
// import { FaAngleDown } from "react-icons/fa";
function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='nav'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={require('./image/logo.png')} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-5">
                            <ul className='main d-flex'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li>
                                    <Link to="/job">Job<i class="fa-solid fa-angle-down"></i></Link>
                                    <ul className='sub'>
                                        <li><a href="/find">Find A Job</a></li>
                                        <li><a href="/post">Post A Job</a></li>
                                        <li><a href="/joblist">Job List</a></li>
                                        <li><a href="/jobgrid">Job Grid</a></li>
                                        <li><a href="/jobdetails">Job Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Candidates<i class="fa-solid fa-angle-down"></i></a>
                                    <ul className='sub'>
                                        <li><a href="/candidate">Candidates</a></li>
                                        <li><a href="/candidate1">Candidates Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Pages<i class="fa-solid fa-angle-down"></i></a>
                                    <ul className='sub'>
                                        <li><a href="/company">Company</a></li>
                                        <li><a href="/pricing">Pricing</a></li>
                                        <li><a href="/404">404 Page</a></li>
                                        <li><a href="/testi">Testimonials</a></li>
                                        <li><a href="/faq">FAQ</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Blog<i class="fa-solid fa-angle-down"></i></a>
                                    <ul className='sub'>
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/blog2">Blog Two</a></li>
                                        <li><a href="/blogdetails">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </Nav>
                        <Nav>
                            <a href="/signup">
                            <button className='btn1'>Sign Up</button>
                            </a>
                            <a href='/signin'>
                            <button className='btn2'>Sign In</button>
                            </a>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;