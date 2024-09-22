import React from 'react';
import Image1 from "../../../assets/blog5.jpg";  
import Image2 from "../../../assets/blog2.jpg";   
import Image3 from "../../../assets/blog8.jpg";   
import Image4 from "../../../assets/blog4.jpg";   
import Image5 from "../../../assets/pic 5.jpg";    
import Image6 from "../../../assets/pic 6.jpg";    
import Image7 from "../../../assets/blog7.jpg";   
import Image8 from "../../../assets/pic 10.jpg";   
import Image9 from "../../../assets/pic 9.jpg";    
import Image10 from "../../../assets/pic 8.jpg";
import { FaStar } from 'react-icons/fa';

const coursesData = [
  {
    title: "Web Development Course",
    image: Image1,
    updated: "21/08/24",
    stars: 5,
    rating: 199,
    price: "$49.99",
    link: "courses/webdevcourse",
  },
  {
    title: "C++ Beginner's Course",
    image: Image6,
    updated: "21/08/24",
    stars: 5,
    rating: 201,
    price: "$49.99",
    link: "courses/cppcourse"
  },
  {
    title: "App Development Course",
    image: Image4,
    updated: "21/08/24",
    stars: 5,
    rating: 103,
    price: "$49.99",
    link: "courses/appdevcourse"
  },
  {
    title: "Node.js Beginner's Course",
    image: Image8,
    updated: "21/08/24",
    stars: 5,
    rating: 103,
    price: "$49.99",
    link: "courses/nodecourse"
  },
  {
    title: "Web Design Course",
    image: Image3,
    updated: "21/08/24",
    stars: 5,
    rating: 239,
    price: "$49.99",
    link: "courses/webdescourse"
  },
  {
    title: "Java Programming Course",
    image: Image9,
    updated: "21/08/24",
    stars: 5,
    rating: 99,
    price: "$49.99",
    link: "courses/javacourse"
  },
  {
    title: "Frontend Web Course",
    image: Image2,
    updated: "21/08/24",
    stars: 4,
    rating: 219,
    price: "$49.99",
    link: "courses/frontendcourse"
  },
  {
    title: "Python Programming",
    image: Image5,
    updated: "21/08/24",
    stars: 5,
    rating: 239,
    price: "$49.99",
    link: "courses/pythoncourse"
  },
  {
    title: "JavaScripts Hacks Course",
    image: Image7,
    updated: "21/08/24",
    stars: 4,
    rating: 222,
    price: "$49.99",
    link: "courses/javahackcourse"
  },
  {
    title: "Data Science Beginner's Course",
    image: Image10,
    updated: "21/08/24",
    stars: 5,
    rating: 103,
    price: "$49.99",
    link: "courses/datasciencecourse"
  }
];

const CourseCard = ({ course }) => (
    <div
      onClick={() => (window.location.href = course.link)}
      className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
    >
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-2">
       
        <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
        <div className="text-xl font-bold text-gray-800 my-1">{course.price}</div>
        <div className="flex items-center ">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-yellow-400 ${i < course.stars ? "" : "text-gray-400"}`}
            />
          ))}
          <span className="ml-2 text-gray-600">({course.rating})</span>
        </div>
        
        <div className="text-gray-500 text-[14px] my-2">Date Updated: {course.updated}</div>
      </div>
    </div>
  );
  
  const CoursesSection = () => (
    <section className="courses-section py-16 px-8">
      <h1 className="text-gray-800 text-center text-3xl font-semibold mb-4">Our Popular Courses</h1>
      <p className="text-center text-gray-600 mb-8">
        Discover our selection of popular courses designed to help you advance your skills and career. Explore the latest updates and offerings.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
  

export default CoursesSection;
