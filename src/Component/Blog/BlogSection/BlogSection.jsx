import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../../assets/blog5.jpg";
import Image2 from "../../../assets/blog4.jpg";
import Image3 from "../../../assets/blog8.jpg";
import Image4 from "../../../assets/blog2.jpg";
import Image5 from "../../../assets/pic 5.jpg";
import Image6 from "../../../assets/blog7.jpg";

const BlogSection = () => {
  const blogs = [
    {
      image: Image1,
      title: "Learn Web Development In The Easiest Way",
      description:
        "Master web development quickly with our easy-to-follow tutorials. Whether you're a beginner or looking to refine your skills, this guide covers everything you need to build modern, responsive websites.",
      link: "/blog/webdev",
    },
    {
      image: Image2,
      title: "Learn App Development In The Easiest Way",
      description:
        "Dive into app development with our step-by-step guide. Learn how to create powerful, user-friendly mobile applications that work across multiple platforms.",
      link: "/blogs/app-development",
    },
    {
      image: Image3,
      title: "Learn Web Design In The Easiest Way",
      description:
        "Understand the principles of web design and how to create visually appealing websites. Our tutorials cover everything from layout design to color theory, helping you build engaging user experiences.",
      link: "/blogs/web-design",
    },
    {
      image: Image4,
      title: "Learn Frontend Web In The Easiest Way",
      description:
        "Get hands-on experience in frontend development. Learn how to use HTML, CSS, and JavaScript to create dynamic, interactive websites that work seamlessly on any device.",
      link: "/blogs/frontend-web",
    },
    {
      image: Image5,
      title: "Learn Python Programming In The Easiest Way",
      description:
        "Python is one of the most versatile programming languages. Learn how to write clean, efficient code with our beginner-friendly Python tutorials, perfect for those looking to get into web or software development.",
      link: "/blogs/python-programming",
    },
    {
      image: Image6,
      title: "Learn JavaScripts Hacks In The Easiest Way",
      description:
        "Discover the hidden powers of JavaScript with our collection of useful tips and tricks. From speeding up development to solving complex problems, these hacks will make your code smarter.",
      link: "/blogs/JavaScript",
    },
  ];

  const categories = [
    { name: "Web Development", link: "/blogs/web-development" },
    { name: "App Development", link: "/blogs/app-development" },
    { name: "Web Design", link: "/blogs/web-design" },
    { name: "Frontend Web", link: "/blogs/frontend-web" },
    { name: "Python Programming", link: "/blogs/python-programming" },
    { name: "JavaScripts Hacks", link: "/blogs/JavaScript" },
  ];

  return (
    <section className="all-containers bg-gray-100 py-12 px-4">
      <div className="blog-containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="blog-cont bg-white shadow-md rounded-lg p-6"
          >
            <img
              className="blog-image w-full h-48 object-cover rounded-lg mb-4"
              src={blog.image}
              alt={blog.title}
            />
            <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
            <Link
              to={blog.link}
              className="text-indigo-600 hover:underline font-semibold"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>

      <div className="categories mt-12">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <hr />
        {categories.map((category, index) => (
          <div key={index}>
            <Link
              to={category.link}
              className="text-indigo-600 hover:underline font-medium"
            >
              {category.name}
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
