import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faVideoCamera,
  faFileAlt,
  faCloudDownloadAlt,
  faInfinity,
  faMobileAlt,
  faEdit,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import javaImage from "../../../assets/pic 9.jpg"; 
import profile from "../../../assets/profile2.jpg"; 

const JavaCourse = () => {
  return (
    <>
      <section
        className="relative flex flex-col justify-center items-center text-center md:h-[50vh] h-[90vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url(${javaImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop: "40px",
          marginBottom: "0",
        }}
      >
        <h1 className="text-white font-bold text-4xl">
          Enroll in Java Programming Course /
        </h1>
      </section>

      <section className="enroll js-navbar-bg flex flex-col lg:flex-row gap-8 w-4/5 mx-auto py-16">
        <div className="course-preview w-full lg:w-3/4">
          <img
            className="course-image w-full h-[30vw] object-cover shadow-lg rounded-xl mb-8"
            src={javaImage}
            alt="Java Programming Course Preview"
          />
          <div className="course-info flex justify-between items-start w-full">
            <div className="course-head w-3/4">
              <h2 className="text-xl text-[#30303B] font-sans font-semibold">
                Java Programming Course
              </h2>
              <div className="stars text-[#DFA410] text-lg mt-2">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span className="number text-gray-500"> (300)</span>
              </div>
              <p className="mt-2 text-gray-500 font-sans leading-snug font-normal">
                Learn Java programming from basics to advanced concepts.
              </p>
            </div>
            <div className="course-price">
              <Link
                to="/checkout"
                className="block bg-blue-200 text-blue-900 text-lg font-bold py-4 px-6 rounded-lg"
              >
                $59.99
              </Link>
            </div>
          </div>

          <div className="instructor mt-8">
            <h3 className="text-lg text-[#30303B] font-sans font-semibold">
              Instructor
            </h3>
            <div className="instructor-profile flex items-start mt-8">
              <img
                className="w-16 h-16 rounded-full"
                src={profile}
                alt="Instructor John Smith"
              />
              <div className="instructor-info ml-6">
                <h3 className="text-lg text-[#30303B] font-sans mt-1">
                  John Smith
                </h3>
                <p className="text-gray-500 text-sm">Senior Developer at TechSolutions</p>
              </div>
            </div>
          </div>

          <div className="horizontal-line mt-8">
            <hr className="border-gray-300" />
          </div>

          <div className="course-overview mt-8">
            <h3 className="text-lg text-[#30303B] font-sans font-semibold">
              Course Overview
            </h3>
            <p className="mt-6 text-gray-500 text-sm leading-relaxed text-justify">
              This Java Programming course covers fundamental concepts of Java,
              object-oriented programming, and best practices for writing clean code. 
              By the end of the course, you'll be able to develop Java applications
              and understand advanced topics such as multithreading and networking.
            </p>
          </div>

          <div className="learn mt-8">
            <h3 className="text-lg text-[#30303B] font-sans font-semibold">
              What you will learn
            </h3>
            <ul className="list-none mt-4">
              <li className="flex items-center mb-4">
                <i className="fa fa-check-circle text-blue-900"></i>
                <span className="ml-6 text-gray-500">Java Basics and Syntax</span>
              </li>
              <li className="flex items-center mb-4">
                <i className="fa fa-check-circle text-blue-900"></i>
                <span className="ml-6 text-gray-500">Object-Oriented Programming</span>
              </li>
              <li className="flex items-center mb-4">
                <i className="fa fa-check-circle text-blue-900"></i>
                <span className="ml-6 text-gray-500">Error Handling and Exceptions</span>
              </li>
              <li className="flex items-center mb-4">
                <i className="fa fa-check-circle text-blue-900"></i>
                <span className="ml-6 text-gray-500">Java Collections Framework</span>
              </li>
              <li className="flex items-center mb-4">
                <i className="fa fa-check-circle text-blue-900"></i>
                <span className="ml-6 text-gray-500">Java Streams and Lambda Expressions</span>
              </li>
              <li className="flex items-center mb-4">
                <i className="fa fa-check-circle text-blue-900"></i>
                <span className="ml-6 text-gray-500">Building Java Applications</span>
              </li>
            </ul>
            <Link
              to="/courses"
              className="inline-block py-3 px-6 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 mt-6"
            >
              Back
            </Link>
          </div>
        </div>

        <div className="enroll-info w-full lg:w-[350px] p-6 border border-white shadow-lg h-[500px] mx-auto">
          <h3 className="text-lg text-[#30303B] font-sans mt-8 mb-6 font-semibold">
            This course includes:
          </h3>
          {[
            { icon: faVideoCamera, text: "60 hour video" },
            { icon: faFileAlt, text: "75 articles" },
            { icon: faCloudDownloadAlt, text: "Downloadable resources" },
            { icon: faInfinity, text: "Full lifetime Access" },
            { icon: faMobileAlt, text: "Access on mobile" },
            { icon: faEdit, text: "Assignments" },
            { icon: faAward, text: "Certificate of completion" },
          ].map((item, index) => (
            <p className="flex items-center mb-4" key={index}>
              <FontAwesomeIcon icon={item.icon} className="text-blue-900 w-6" />
              <span className="ml-4 text-gray-500 text-start">{item.text}</span>
            </p>
          ))}
          <Link
            to="/enroll"
            className="block text-center py-3 px-6 bg-blue-900 text-white rounded-md font-medium hover:bg-blue-800 mt-6 mx-auto"
          >
            Enroll Course
          </Link>
        </div>
      </section>
    </>
  );
};

export default JavaCourse;
