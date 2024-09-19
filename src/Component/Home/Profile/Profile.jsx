import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import profile1 from '../../../assets/profile5.jpg';
import profile2 from '../../../assets/profile2.jpg';
import profile3 from '../../../assets/profile3.jpg';
import profile4 from '../../../assets/profile4.jpg';

const profiles = [
  {
    name: "John Stones",
    title: "Javascript and Design Expert",
    imgSrc: profile1,
  },
  {
    name: "Samuel Kork",
    title: "Python & Algorithm Expert",
    imgSrc: profile2,
  },
  {
    name: "Nicholas Cage Snr",
    title: "C++ & Design Expert",
    imgSrc: profile3,
  },
  {
    name: "Simons Robben",
    title: "Data Science Expert",
    imgSrc: profile4,
  },
];

const ProfileSection = () => {
  return (
    <section className="py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-4 text-[#0c366e]">Community Experts</h1>
      <p className="text-center mb-8 text-gray-600">
        Replenish man have thing gathering lights yielding shall you
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {profiles.map((profile, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 max-w-xs text-center">
            <img
              src={profile.imgSrc}
              alt={profile.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
            <p className="text-gray-600 mb-4">{profile.title}</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileSection;
