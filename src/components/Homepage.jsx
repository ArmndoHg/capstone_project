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
import PriceList from "./PriceList/PriceList";
import Blog from "./Blog/Blog";

const Homepage = () => (
  <div className="home">
    {/* <AboveNavBar /> */}

    <MyNavbar />
    <Jumbotron />

    {/* <AboutMe /> */}
    <Body />
    {/* <Course /> */}

    {/* <Reflexotherapy /> */}
    {/* <FireCupping /> */}
    {/* <FacialAcupuncture /> */}
    {/* <TCMDiet /> */}
    {/* <HerbalMedicine /> */}
    <BodyDetox />

    {/* ******************** need to implement it ******************* */}
    <PriceList />
    {/* ********************************** */}

    <Blog />

    <Footer />
  </div>
);

export default Homepage;
