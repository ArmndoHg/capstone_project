import React from "react";
import AboveNavBar from "./AboveNavBar/AboveNavBar";
import Body from "./Body/Body";
import Course from "./Course/Course";
import MyNavbar from "./Navbar/MyNavbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Footer from "./Footer/Footer";

const Homepage = () => (
  <div className="home">
    {/* <AboveNavBar /> */}
    <MyNavbar />
    <Jumbotron />

    <Body />
    <Footer />
    {/* <Course /> */}
  </div>
);

export default Homepage;
