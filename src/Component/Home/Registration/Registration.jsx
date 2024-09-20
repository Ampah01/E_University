import React, { useEffect, useState } from "react";
import bg_image from "../../../assets/pic_13.jpg";

const Registration = () => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countDownDate = new Date("May 1, 2025 00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({
        days: days < 10 ? "0" + days : days,
        hours: hours < 10 ? "0" + hours : hours,
        minutes: minutes < 10 ? "0" + minutes : minutes,
        seconds: seconds < 10 ? "0" + seconds : seconds,
      });
    };

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative mt-[8vw] p-[7vw] md:p-[6vw] lg:p-[10vw] flex gap-8 justify-between items-center bg-cover bg-center h-full w-full md:flex-row flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(99,115,168,0.5),rgba(81,91,233,0.5)), url(${bg_image})`,
      }}
    >
      <div className="flex flex-col text-center md:text-start">
        <p className="text-white text-lg font-medium px-2 pb-2">
          Get 100 Online Courses for Free
        </p>
        <h1 className="text-white text-2xl font-extrabold px-2 mb-0">
          Register To Get It
        </h1>
        <div className="flex flex-wrap mt-5 text-center justify-center md:justify-normal">
          <div className="flex flex-col items-center justify-center w-[100px] h-[80px] text-white bg-white/25 rounded-lg m-1">
            <span className="text-[35px]">{time.days}</span>
            <span>Days</span>
          </div>
          <div className="flex flex-col items-center justify-center w-[100px] h-[80px] text-white bg-white/25 rounded-lg m-1">
            <span className="text-[35px]">{time.hours}</span>
            <span>Hour</span>
          </div>
          <div className="flex flex-col items-center justify-center w-[100px] h-[80px] text-white bg-white/25 rounded-lg m-1">
            <span className="text-[35px]">{time.minutes}</span>
            <span>Min</span>
          </div>
          <div className="flex flex-col items-center justify-center w-[100px] h-[80px] text-white bg-white/25 rounded-lg m-1">
            <span className="text-[35px]">{time.seconds}</span>
            <span>Sec</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center py-10 px-2 bg-white shadow-lg rounded-lg w-[90%] max-w-md ">
        <h2 className="text-xl font-semibold text-black mb-4">
          Create Free Account NOW!
        </h2>
        <form className="flex flex-col items-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full md:w-[270px] p-2 mb-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#0c366e]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full md:w-[270px] p-2 mb-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#0c366e]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full md:w-[270px] p-2 mb-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#0c366e]"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full md:w-[270px] p-3 mb-6 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#0c366e]"
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#0c366e] text-white font-semibold rounded-lg hover:bg-[#0a2c56] transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Registration;
