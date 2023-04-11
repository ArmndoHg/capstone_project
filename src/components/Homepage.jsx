import React from "react";
import AboveNavBar from "./AboveNavBar/AboveNavBar";
import Body from "./Body/Body";
import Course from "./Course/Course";
import MyNavbar from "./Navbar/MyNavbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Footer from "./Footer/Footer";
import AboutMe from "./AboutMe/AboutMe";
import Reflexotherapy from "./Reflexotherapy/Reflexotherapy";
import FireCupping from "./FireCupping/FireCupping";

const Homepage = () => (
  <div className="home">
    {/* <AboveNavBar /> */}
    <MyNavbar />
    <Jumbotron />

    <Reflexotherapy />
    <FireCupping />

    {/* <AboutMe /> */}
    {/* <Body /> */}
    {/* <Course /> */}
    <Footer />
  </div>
);

export default Homepage;
