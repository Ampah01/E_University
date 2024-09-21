import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const FooterSection = () => {
  return (
    <section className=" bg-[#0a1725] md:text-start text-center py-[6vw] w-full">
      <div className="mt-[40px] flex flex-wrap md:text-start text-center px-10 gap-5">
        <div className="w-full md:w-1/5 ">
          <h2 className="text-white opacity-98 text-[1.3rem] font-[Arial, Helvetica, sans-serif]">
            Top Products
          </h2>
          <ul className="space-y-2">
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Manage Reputation
            </li>
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Power Tools
            </li>
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Manages Website
            </li>
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Marketing Service
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/5">
          <h2 className="text-white opacity-98 text-[1.3rem] font-[Arial, Helvetica, sans-serif]">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Jobs
            </li>
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Brand Assets
            </li>
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Investor Relations
            </li>
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/5">
          <h2 className="text-white opacity-98 text-[1.3rem] font-[Arial, Helvetica, sans-serif]">
            Features
          </h2>
          <ul className="space-y-2">
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Manage Reputation
            </li>
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Power Tools
            </li>
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Manages Website
            </li>
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Marketing Service
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/5">
          <h2 className="text-white opacity-98 text-[1.3rem] font-[Arial, Helvetica, sans-serif]">
            Resources
          </h2>
          <ul className="space-y-2">
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Guides
            </li>
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Marketing Service
            </li>
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Experts
            </li>
            <li className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[1rem] hover:text-white cursor-pointer">
              Research
            </li>
          </ul>
        </div>

        <div className="w-full">
          <h2 className="text-white opacity-98 text-[1.3rem] font-[Arial, Helvetica, sans-serif]">
            Newsletter
          </h2>
          <p className="text-[#808080] opacity-70 font-[Roboto, Arial, Helvetica, sans-serif] text-[0.9rem] font-medium">
            You can trust us we only send promo offers
          </p>

          <div className="mt-2 w-full flex flex-col md:flex-row justify-center md:justify-start items-center md:w-auto">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="p-3 w-[90%] md:w-[300px] text-gray-400 bg-[#223f5e] rounded-md placeholder:text-gray-400 text-sm mb-2 md:mb-0 md:mr-2 outline-none"
            />
            <a
              href="#"
              className="flex justify-center items-center py-2.5 w-[90%] md:w-auto px-5 text-center text-[#0c366e] bg-[#dfa81f] border border-[#dfa81f] rounded-md transition hover:bg-white hover:text-[#05042e] font-sans text-sm"
            >
              SUBSCRIBE
            </a>
          </div>
        </div>
      </div>

      <div className="mt-[50px] flex justify-between items-center gap-4 flex-wrap px-10 text-center md:flex-row flex-col">
        <h2 className="text-gray-500 text-sm opacity-92">
          Copyright @2024 All rights reserved | This template is made by Sam.
        </h2>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-white bg-[#375474] p-2 rounded-md text-[1.1rem] hover:bg-[#dfa81f] hover:text-[#909396] transition duration-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white bg-[#375474] p-2 rounded-md text-[1.1rem] hover:bg-[#dfa81f] hover:text-[#0c366e] transition duration-200"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white bg-[#375474] p-2 rounded-md text-[1.1rem] hover:bg-[#dfa81f] hover:text-[#0c366e] transition duration-200"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
