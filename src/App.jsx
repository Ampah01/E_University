import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterSection from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/About/About";
import Blog from "./Component/Blog/Blog";
import Webdev from "./Component/Blog/BlogSection/Webdev"; 
import Appdev from "./Component/Blog/BlogSection/Appdev"; 
import Contact from "./Component/Contact/Contact";
import Courses from "./Component/Courses/Courses";
import Login from "./Component/Login/Login";
import ScrollToTop from "./Component/ScrollToTop"; 
import Webdesign from "./Component/Blog/BlogSection/Webdesign";
import Frontend from "./Component/Blog/BlogSection/Frontend";
import Python from "./Component/Blog/BlogSection/Python";
import Javascript from "./Component/Blog/BlogSection/Javascript";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/webdev" element={<Webdev />} /> 
            <Route path="/blog/appdev" element={<Appdev />} /> 
            <Route path="/blog/webdesign" element={<Webdesign />} /> 
            <Route path="/blog/frontend" element={<Frontend />} /> 
            <Route path="/blog/python" element={<Python />} /> 
            <Route path="/blog/javascript" element={<Javascript />} /> 
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
