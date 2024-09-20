import React from "react";
import universityImage from "../../../assets/university.jpg"; 
import courseImage1 from "../../../assets/course1.jpg"; 
import accessImage from "../../../assets/access1.png"; 

const AboutSchool = () => {
  return (
    <section className="about-school js-navbar-bg flex flex-col md:flex-row justify-center items-center gap-6 py-12 px-4">
      <div className="picture">
        <img
          className="student-image w-full max-w-md rounded-lg shadow-md"
          src={universityImage}
          alt="University"
        />
      </div>

      <div className="about-course max-w-2xl">
        <div className="free-course mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Education University,
            Enhance your skill with the best Online Courses
          </h2>
          <p className="text-gray-600 text-lg">
            You can start and finish one of these popular courses under a week - for free!
            Check out the list below. Take the course for free for 7 days.
          </p>
        </div>

        {/* Course 1 */}
        <div className="free-one flex items-center mb-6">
          <div className="course-icon mr-4">
            <img
              className="icon w-16 h-16 object-cover rounded-full"
              src={courseImage1}
              alt="Course 1"
            />
          </div>
          <div className="info-courses">
            <h2 className="text-2xl font-semibold text-gray-800">
              400+ courses
            </h2>
            <p className="text-gray-600">
              You can start and finish one of these popular courses under a week - for free!
            </p>
          </div>
        </div>

        {/* Lifetime Access */}
        <div className="free-one flex items-center">
          <div className="course-icon mr-4">
            <img
              className="icon w-16 h-16 object-cover rounded-full"
              src={accessImage}
              alt="Lifetime Access"
            />
          </div>
          <div className="info-courses">
            <h2 className="text-2xl font-semibold text-gray-800">
              Lifetime Access
            </h2>
            <p className="text-gray-600">
              You can start and finish one of these popular courses under a week - for free!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSchool;
