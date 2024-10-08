import React from "react";
import library from "../../../assets/library.jpg";

const About = () => {
  return (
    <section className="bg-gray-100">
      <section
        className="relative flex flex-col justify-center items-center text-center md:h-[50vh] h-[300px]"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url(${library})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop: "40px",
          marginBottom: "0",
        }}
      >
        <div className="relative z-10">
        <h1 className="text-white font-semibold md:text-[3rem] text-3xl">About /</h1>
        </div>
      </section>
    </section>
  );
};

export default About;
