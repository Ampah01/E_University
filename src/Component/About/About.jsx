import React from "react";
import Header from "./AboutHeader/Header"
import AboutSchool from "./AboutSchool/AboutSchool";
import Features from "../Home/Features/Features"
import Trusted from "./Trusted/Trusted";

const About = () => {
  return (
    <div>
      <Header />
      <AboutSchool />
      <Features />
      <Trusted />
    </div>
  );
};

export default About;
