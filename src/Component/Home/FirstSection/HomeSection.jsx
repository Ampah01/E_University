import React from "react";
import pic_1 from "../../../assets/pic_1.jpg";
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
        <div className="relative z-10 ">
          <h1 className="home-title">
            Enhance Your Future With the Best Education
          </h1>
          <p className="home-description p-4">
            At our university, we are dedicated to providing a transformative
            educational experience that prepares students for success in a
            rapidly changing world. Our innovative programs and diverse academic
            offerings are designed to foster critical thinking, creativity, and
            leadership skills. With a focus on both theoretical knowledge and
            practical application, we equip our students with the tools they
            need to excel in their chosen fields. Join us and become part of a
            vibrant academic community committed to excellence and discovery.
          </p>
          <div className="buttons">
            <a className="learn-more-button mr-2" href="about.html">
              Learn More
            </a>
            <a className="visit-courses-button ml-2" href="courses.html">
              Visit Courses
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeSection;
