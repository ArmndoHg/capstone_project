import React from "react";
import AboveNavBar from "./AboveNavBar/AboveNavBar";
import Body from "./Body/Body";
import Course from "./Course/Course";
import MyNavbar from "./Navbar/MyNavbar";

const Homepage = () => (
  <div className="home">
    <AboveNavBar />
    <MyNavbar />
    <Course />
    <Body />
  </div>
);

export default Homepage;
