import React from "react";
import Features from "./Features/Features";
import HomeSection from "./firstSection/HomeSection";
import HomeCourse from "./HomeCourse/HomeCourse";
import Registration from "./Registration/Registration";
import Profile from "./Profile/Profile";

const Home = () => {
  return (
    <div>
      <HomeSection />
      <Features />
      <HomeCourse />
      <Registration />
      <Profile />
    </div>
  );
};

export default Home;
