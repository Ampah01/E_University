import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../../assets/blog4.jpg";

const Appdev = () => {
  return (
    <div className="md:p-24 p-10 mt-10 md:mt-0 bg-white shadow-lg rounded-lg">
      <img
        className="w-full h-64 object-cover rounded-lg mb-6"
        src={Image1}
        alt="App Development"
      />
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Learn App Development In The Easiest Way
      </h3>
      <p className="text-gray-700 text-base mb-6">
        App development is an exciting and highly in-demand field that allows you to create software applications for mobile devices and beyond. Whether you're new to coding or looking to expand your skills, learning app development can open doors to numerous opportunities.
        <br />
        <br />
        In this course, you'll start with the basics of app development, including understanding how mobile apps work and the tools required to build them. You’ll also explore popular development frameworks like React Native and Flutter, which allow you to create cross-platform apps efficiently.
        <br />
        <br />
        By the end of this course, you’ll have the knowledge to build functional mobile apps and deploy them to app stores. Plus, you’ll learn best practices for UI/UX design to ensure your apps are user-friendly and visually appealing.
        <br />
        <br />
        Don't miss out on the chance to gain skills in a fast-growing industry. This course will take you from a beginner to a confident app developer ready to build and publish your own apps.
      </p>
      <div className="flex justify-between items-center mt-4">
        <Link to="/blog" className="text-indigo-600 hover:underline">
          Back
        </Link>
        <Link
          to="/courses/app-dev"
          className="text-indigo-600 hover:underline font-semibold"
        >
          Get Course
        </Link>
      </div>
    </div>
  );
};

export default Appdev;
