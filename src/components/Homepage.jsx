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
import FacialAcupuncture from "./FacialAcupuncture/FacialAcupuncture";
import TCMDiet from "./TCMDiet/TCMDiet";
import HerbalMedicine from "./HerbalMedicine/HerbalMedicine";
import BodyDetox from "./BodyDetox/BodyDetox";

const Homepage = () => (
  <div className="home">
    {/* <AboveNavBar /> */}
    <MyNavbar />
    <Jumbotron />

    <Reflexotherapy />
    <FireCupping />
    <FacialAcupuncture />

    <TCMDiet />

    <HerbalMedicine />

    <BodyDetox />
    {/* <AboutMe /> */}
    {/* <Body /> */}
    {/* <Course /> */}
    <Footer />
  </div>
);

export default Homepage;
