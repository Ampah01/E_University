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
import blog4 from "../../../assets/blog4.jpg";
import profile from "../../../assets/profile2.jpg";

const Course = () => {
  return (
    <>
      <section
        className="relative flex flex-col justify-center items-center text-center md:h-[50vh] h-[30vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url(${blog4})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop: "40px",
          marginBottom: "0",
        }}
      >
        <h1 className="text-white font-bold md:text-4xl text-2xl">
          Enroll in App Development Course /
        </h1>
      </section>

      <section className="enroll js-navbar-bg flex flex-col lg:flex-row gap-8 w-4/5 mx-auto py-16">
        <div className="course-preview w-full lg:w-3/4">
          <img
            className="course-image w-full h-[30vw] object-cover shadow-lg rounded-xl mb-8"
            src={blog4}
            alt="App Development Course Preview"
          />
          <div className="course-info flex justify-between items-start w-full">
            <div className="course-head w-3/4">
              <h2 className="text-xl text-[#30303B] font-sans font-semibold">
                App Development Course
              </h2>
              <div className="stars text-[#DFA410] text-lg mt-2">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span className="number text-gray-500"> (199)</span>
              </div>
              <p className="mt-2 text-gray-500 font-sans leading-snug font-normal">
                Modern App Development from the beginning - all the way up to
                App Development expert
              </p>
            </div>
            <div className="course-price">
              <Link
                to="/checkout"
                className="block bg-blue-200 text-blue-900 text-lg font-bold py-4 px-6 rounded-lg"
              >
                $49.99
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
                alt="Instructor Samuel Lynch"
              />
              <div className="instructor-info ml-6">
                <h3 className="text-lg text-[#30303B] font-sans mt-1">
                  Samuel Lynch
                </h3>
                <p className="text-gray-500 text-sm">App Developer at Amazon</p>
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
              At the outset, web designing emerged as an easier and simple way
              of exchanging information. It was a better means of communication
              and had better networking benefits compared to the commercial
              reasons. Later on, the Web became an avenue for making profits,
              and the information space that was prior for providing free
              exchange thus changed to a space for commercial transactions.
              <br />
              <br />
              Development of 'open source' receives very little attention
              especially official concerns by the initial founders for its
              development. The initial organizations to benefit from the open
              licensing systems directly included the Department of Defence
              (DOD), Research Agencies, and the Lab researchers such as National
              Laboratories (Reece et al, 92). These organizations were the most
              viable producers, users and beneficiaries of the licensing
              operation.
              <br />
              <br />
              Although departments such as the DOD or Space Agencies may have
              developed or initiated most of the research into open source, in
              overall, today's beneficiaries include commercial agencies.
              Commercial enterprises such as Netscape, Red Hat, Cygnus, MacAfee
              and Caldera were quick to realize the opportunities offered by
              web-based methodologies and begun to offer the open source
              arrangements.
              <br />
              <br />
              Programmers are becoming smarter to ensure production of the best
              and greatest codes compared to potential competitors. The easiness
              of obtaining the source code is also a great inspiration and a
              guide for many initial code developers especially web designers.
              An author of a code can find feedback such as suggestions or
              criticisms from other users and this is vital for systems
              productivity.
            </p>
          </div>

          <div className="learn mt-8">
            <h3 className="text-lg text-[#30303B] font-sans font-semibold">
              What you will learn
            </h3>
            <ul className="list-none mt-4">
              <li className="flex items-center mb-4">
                <i className="fa fa-check-circle text-blue-900"></i>
                <span className="ml-6 text-gray-500">
                  Introduction to App Development
                </span>
              </li>
              <li className="flex items-center mb-4">
                <i className="fa fa-check-circle text-blue-900"></i>
                <span className="ml-6 text-gray-500">
                  Ten Programming Languages
                </span>
              </li>
              <li className="flex items-center mb-4">
                <i className="fa fa-check-circle text-blue-900"></i>
                <span className="ml-6 text-gray-500">
                  Different Programming Languages Analysis
                </span>
              </li>
              <li className="flex items-center mb-4">
                <i className="fa fa-check-circle text-blue-900"></i>
                <span className="ml-6 text-gray-500">
                  Software System Implementation Process
                </span>
              </li>
              <li className="flex items-center mb-4">
                <i className="fa fa-check-circle text-blue-900"></i>
                <span className="ml-6 text-gray-500">
                  Peer Evaluation of Web-Based Instructional Documents
                </span>
              </li>
              <li className="flex items-center mb-4">
                <i className="fa fa-check-circle text-blue-900"></i>
                <span className="ml-6 text-gray-500">
                  Modern Scripting Languages and Web Transformation
                </span>
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
            { icon: faVideoCamera, text: "57 hour video" },
            { icon: faFileAlt, text: "70 articles" },
            { icon: faCloudDownloadAlt, text: "Downloadable resource" },
            { icon: faInfinity, text: "Full lifetime Access" },
            { icon: faMobileAlt, text: "Access on mobile" },
            { icon: faEdit, text: "Assignment" },
            { icon: faAward, text: "Certificate of completion" },
          ].map((item, index) => (
            <p className="flex items-center mb-4" key={index}>
              <FontAwesomeIcon icon={item.icon} className="text-blue-900 w-6" />
              <span className="ml-4  text-gray-500 text-start">{item.text}</span>{" "}
             
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

export default Course;
