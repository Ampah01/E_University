import React from "react";
import pic_1 from "../../../assets/pic_1.jpg";
import { Link } from "react-router-dom";
import "./../FirstSection/HomeSection.css";

const HomeSection = () => {
  return (
    <section className="home bg-gray-100">
      <section
        className="relative flex flex-col justify-center items-center text-center md:h-[80vh] h-[90vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url(${pic_1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop: "40px",
          marginBottom: "0",
        }}
      >
        <div className="relative z-10">
          <h1 className="home-title p-1">
          Enhance Your Future With the Best Education
          </h1>
          <p className="home-description py-4 px-6">
            Our university offers a transformative educational experience that
            prepares students for success in a dynamic world. With innovative
            programs and a focus on practical application, we equip you with the
            skills needed to excel in your career. Join our vibrant community
            committed to excellence and discovery.
          </p>
          <div className="buttons gap-4 flex justify-center">
            <Link to="/about" className="learn-more-button md:px-7 py-2.5 px-4">
              Learn More
            </Link>
            <Link to="/courses" className="visit-courses-button  md:px-7 py-2.5 px-4">
              Visit Courses
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeSection;
