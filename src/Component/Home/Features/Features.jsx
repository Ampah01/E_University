import React from "react";
import { FaGraduationCap, FaFileAlt, FaAward } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Awesome Feature</h1>
        <p className="text-lg text-gray-700">
          Replenish man have thing gathering lights yielding shall you
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <FaGraduationCap className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Scholarship Facility</h3>
          <p className="text-gray-600">
            Our scholarship programs provide financial support to help you
            achieve your academic goals. We offer various types of scholarships
            based on merit, need, and special achievements to ensure that you
            have access to quality education without financial barriers.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <FaFileAlt className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dell Online Course</h3>
          <p className="text-gray-600">
            Our comprehensive online courses are designed to fit around your
            schedule, providing flexible learning options. With expert
            instructors and a range of subjects, you can enhance your skills and
            advance your education from anywhere in the world.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <FaAward className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Global Certification</h3>
          <p className="text-gray-600">
            Our university offers globally recognized certifications that open
            doors to international opportunities. With our accredited programs,
            students gain credentials that are respected and valued worldwide,
            enhancing their career prospects and academic growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
