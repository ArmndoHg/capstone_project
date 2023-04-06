import React from "react";
import AboveNavBar from "./AboveNavBar/AboveNavBar";
import Body from "./Body/Body";
import Course from "./Course/Course";
import MyNavbar from "./Navbar/MyNavbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Footer from "./Footer/Footer";
import AboutMe from "./AboutMe/AboutMe";

const Homepage = () => (
  <div className="home">
    {/* <AboveNavBar /> */}
    <MyNavbar />
    <Jumbotron />

    <Body />
    <AboutMe />
    <Footer />
    {/* <Course /> */}
  </div>
);

export default Homepage;
