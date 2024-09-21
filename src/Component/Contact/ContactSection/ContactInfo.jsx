import React from "react";
import { FaHome, FaPhone, FaEnvelopeOpen, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactDetail = ({ title, icon, children }) => (
  <div className="mb-4">
    <h3 className="text-lg text-start font-semibold text-gray-700">{title}</h3>
    <div className="flex items-center mb-5 mt-2">
    <div className={`text-gray-700 text-2xl mr-2 ${title === "Phone" ? "rotate-90" : ""}`}>
        {icon}
      </div>
      <div className="text-gray-700 text-start">{children}</div>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2 text-gray-700 text-start">Get in touch</h2>
      <p className="text-gray-600 mb-4 text-start">
        Looking for help? Fill this form and start a new adventure.
      </p>
      <hr className="my-4" />

      <ContactDetail title="Headquarters" icon={<FaHome />}>
        <p className="text-start">744 New York Ave, Brooklyn, Kings, New York, 24</p>
      </ContactDetail>

      <ContactDetail title="Phone" icon={<FaPhone />}>
        <p>+233 (0200484457)</p>
        <p>+233 (0504899927)</p>
      </ContactDetail>

      <ContactDetail title="Support" icon={<FaEnvelopeOpen />}>
        <p>euniversity@gmail.org</p>
        <p>samampah01@gmail.com</p>
      </ContactDetail>

      <div className="mb-4 text-start">
        <h3 className="text-lg font-semibold text-gray-700">Follow us</h3>
        <div className="flex space-x-4 justify-start mt-2">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
