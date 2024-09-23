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
import Javascript from "./Component/Blog/BlogSection/Javascript";";
import Webdevcourse from "./Component/Courses/CourseSection/Webdevcourse";
import Nodecourse from "./Component/Courses/CourseSection/Nodecourse";
import Webdescourse from "./Component/Courses/CourseSection/Webdescourse";
import Cppcourse from "./Component/Courses/CourseSection/Cppcourse";
import Datasciencecourse from "./Component/Courses/CourseSection/Datasciencecourse";
import Javacourse from "./Component/Courses/CourseSection/Javacourse";
import Javahackcourse from "./Component/Courses/CourseSection/Javahackcourse";
import Frontendcourse from "./Component/Courses/CourseSection/Frontendcourse";
import Pythoncourse from "./Component/Courses/CourseSection/Pythoncourse";
import AppdevCourse from "./Component/Courses/CourseSection/AppdevCourse";

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
            <Route path="/courses/appdevcourse" element={<AppdevCourse />} />
            <Route path="/courses/webdevcourse" element={<Webdevcourse />} />
            <Route path="/courses/nodecourse" element={<Nodecourse />} />
            <Route path="/courses/webdescourse" element={<Webdescourse />} />
            <Route path="/courses/cppcourse" element={<Cppcourse />} />
            <Route path="/courses/pythoncourse" element={<Pythoncourse />} />
            <Route
              path="/courses/frontendcourse"
              element={<Frontendcourse />}
            />
            <Route
              path="/courses/datasciencecourse"
              element={<Datasciencecourse />}
            />
            <Route path="/courses/javacourse" element={<Javacourse />} />
            <Route
              path="/courses/javahackcourse"
              element={<Javahackcourse />}
            />
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
