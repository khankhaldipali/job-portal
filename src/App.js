import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Find from "./Find"
import Post from "./Post"
import Joblist from "./Joblist"
import Jobgrid from "./Jobgrid"
import Jobdetails from './Jobdetails';
import Contact from './Contact';
import Candidate from './Candidate';
import Candidate1 from './Candidate1';
import Pagecompany from './Pagecompany';
import Pagepricing from './Pagepricing';
import Page404 from './Page404';
import Pagetesti from './Pagetesti';
import Faq from './faq';
import Blog from './Blog';
import Blogtwo from './Blogtwo';
import Blogdetails from './Blogdetails';
import Signup from './Signup';
import Signin from './Signin';

// import Contact from "./Contact"

// import { FaAngleDown } from "react-icons/fa";


// https://www.templatemonsterpreview.com/demo/117882.html?_gl=1*6hypsc*_ga*MjAxOTI1MjYxMy4xNjUyMTAzNjk2*_ga_FTPYEGT5LY*MTY2MDM5MjY2MC4xNi4xLjE2NjAzOTM4NTEuNjA.&_ga=2.72135380.617339391.1660392660-2019252613.1652103696

// https://www.templatemonsterpreview.com/demo/252360.html?_gl=1*yz5b5r*_ga*MjAxOTI1MjYxMy4xNjUyMTAzNjk2*_ga_FTPYEGT5LY*MTY2MDM5MjY2MC4xNi4xLjE2NjAzOTMwNTUuMTU.&_ga=2.149197553.617339391.1660392660-2019252613.1652103696

// https://www.templatemonsterpreview.com/demo/223097.html?_gl=1*1euef24*_ga*MjAxOTI1MjYxMy4xNjUyMTAzNjk2*_ga_FTPYEGT5LY*MTY2MDM5MjY2MC4xNi4xLjE2NjAzOTI4MzkuMw..&_ga=2.147642992.617339391.1660392660-2019252613.1652103696
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/find" element={ <Find/> } />
        <Route path="/post" element={ <Post/> } />
        <Route path="/joblist" element={ <Joblist/> } />
        <Route path="/jobgrid" element={ <Jobgrid/> } />
        <Route path="/jobdetails" element={ <Jobdetails/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/candidate" element={ <Candidate/> } />
        <Route path="/candidate1" element={ <Candidate1/> } />
        <Route path="/company" element={ <Pagecompany/> } />
        <Route path="/pricing" element={ <Pagepricing/> } />
        <Route path="/404" element={ <Page404/> } />
        <Route path="/testi" element={ <Pagetesti/> } />
        <Route path="/faq" element={ <Faq/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/blog2" element={ <Blogtwo/> } />
        <Route path="/blogdetails" element={ <Blogdetails/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/signin" element={ <Signin/> } />


      </Routes>
    </>
  );
}

export default App;
