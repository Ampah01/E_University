import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../../assets/blog5.jpg";

const Webdev = () => {
  return (
    <div className="md:p-24 p-10 mt-10 md:mt-0 bg-white shadow-lg rounded-lg">
      <img
        className="w-full h-64 object-cover rounded-lg mb-6"
        src={Image1}
        alt="Web Development course banner"
      />
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Learn Web Development In The Easiest Way
      </h3>
      <p className="text-gray-700 text-base mb-6">
        Web development has become a critical skill in today's tech-driven
        world. Understanding how to build websites is key to success for
        developers. In this guide, we'll break down the essentials of web
        development, making it easy for anyone to follow. <br />
        <br />
        Master key technologies like HTML, CSS, and JavaScript to create
        stunning, functional websites. Learn how to use popular frameworks and
        libraries to speed up development and improve your workflow. Whether
        you're starting from scratch or looking to polish your skills, this
        course covers everything you need. <br />
        <br />
        Dive into responsive design, ensuring your websites look great on all
        devices. We'll walk you through how to structure your code and implement
        best practices for web development. You'll be building dynamic websites
        in no time! <br />
        <br />
        Want to learn how to make websites more interactive? Explore JavaScript
        frameworks that help bring your ideas to life. By the end of the course,
        you'll have a portfolio of projects to showcase your abilities. <br />
        <br />
        Plus, get access to our advanced modules on web hosting and deployment.
        Learn how to take your site from a local environment to a live server,
        ensuring it's optimized for performance and search engine rankings.{" "}
        <br />
        <br />
        Don't miss out on learning web development in the simplest and most
        effective way. This course is designed to help you succeed, whether
        you're looking to build websites for clients or start your own web-based
        business. <br />
        <br />
        Get started today, and take the first step towards becoming a web
        development expert.
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

export default Webdev;
