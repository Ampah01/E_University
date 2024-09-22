import React from "react";
import { FaStar } from "react-icons/fa";
import blog5 from "../../../assets/blog5.jpg";
import blog4 from "../../../assets/blog4.jpg";
import blog8 from "../../../assets/blog8.jpg";
import blog2 from "../../../assets/blog2.jpg";
import blog7 from "../../../assets/blog7.jpg";
import pic_5 from "../../../assets/pic 5.jpg";
import "./../HomeCourse/HomeCourse.css";

const coursesData = [
  {
    id: 1,
    image: blog5,
    date: "Updated 21/08/24",
    title: "Web Development Course",
    rating: 4,
    reviews: 199,
    price: "$49.99",
    link: "courses/webdevcourse",
  },
  {
    id: 2,
    image: blog4,
    date: "Updated 21/08/24",
    title: "App Development Course",
    rating: 5,
    reviews: 103,
    price: "$49.99",
    link: "courses/appdevcourse",
  },
  {
    id: 3,
    image: blog8,
    date: "Updated 21/08/24",
    title: "Web Design Course",
    rating: 5,
    reviews: 239,
    price: "$49.99",
    link: "courses/webdescourse",
  },
  {
    id: 4,
    image: blog2,
    date: "Updated 21/08/24",
    title: "Frontend Web Course",
    rating: 4,
    reviews: 219,
    price: "$49.99",
    link: "courses/frontendcourse",
  },
  {
    id: 5,
    image: pic_5,
    date: "Updated 21/08/24",
    title: "Python Programming",
    rating: 5,
    reviews: 239,
    price: "$49.99",
    link: "courses/pythoncourse",
  },
  {
    id: 6,
    image: blog7,
    date: "Updated 21/08/24",
    title: "JavaScripts Hacks Course",
    rating: 4,
    reviews: 222,
    price: "$49.99",
    link: "courses/javahackcourse",
  },
];

const CourseCard = ({ course }) => (
  <div
    onClick={() => (window.location.href = course.link)}
    className="course-card"
  >
    <img src={course.image} alt={course.title} />
    <div className="overlay"></div>
    <div className="content">
      <div>
        <p className="date">{course.date}</p>
        <h3 className="title">{course.title}</h3>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-yellow-400 ${
                i < course.rating ? "" : "text-gray-400"
              }`}
            />
          ))}
          <span>({course.reviews})</span>
        </div>
      </div>
      <div className="price">{course.price}</div>
    </div>
  </div>
);

const Courses = () => (
  <section className="courses-section py-16 px-8 rounded-xl">
    <h1 className="text-gray-800 text-center text-3xl">Our Popular Courses</h1>
    <p className="text-center">
      Discover our selection of popular courses designed to help you advance
      your skills and career. Explore the latest updates and offerings.
    </p>
    <div className="grid">
      {coursesData.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </section>
);

export default Courses;
