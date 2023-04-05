import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import navBar from "./navBar.css";
import * as Icon from "react-bootstrap-icons";
import logo from "../../assets/logo.jpg";

const MyNavbar = () => (
  <Navbar
    className="padding-0"
    collapseOnSelect
    expand="md"
    bg="navbar-white"
    variant="light"
    sticky="top"
  >
    <Navbar.Brand href="/">
      <img src={logo} alt="logo" className="logo-img" />
    </Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse className="text-center">
      <Nav className="mr-auto">
        <Nav.Link href="#deets" className="letter-navbar">
          About me
        </Nav.Link>
        <Nav.Link eventKey={2} href="#memes" className="letter-navbar">
          Blog
        </Nav.Link>
        <Nav.Link eventKey={2} href="#memes" className="letter-navbar">
          Price list
        </Nav.Link>
        <Nav.Link eventKey={2} href="#memes" className="letter-navbar">
          Courses
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link
          eventKey={2}
          href="https://www.facebook.com/profile.php?id=100089495943931"
          target="_blank"
          rel="noopener"
          className="color-icons facebook-icon"
        >
          <Icon.Facebook size={35} />
        </Nav.Link>
        <Nav.Link
          eventKey={2}
          href="https://wa.me/+48721716323"
          target="_blank"
          rel="noopener"
          className="color-icons whatsapp-icon"
        >
          <Icon.Whatsapp size={35} />
        </Nav.Link>
        <Nav.Link
          eventKey={2}
          href="tel:721716323"
          rel="noopener"
          className="color-icons phone-icon"
        >
          <Icon.Phone size={35} />
        </Nav.Link>
        <Nav.Link
          eventKey={2}
          href="mailto:naturoterapiadobrucka@gmail.com"
          target="_blank"
          rel="noopener"
          className="color-icons e-mail-icon"
        >
          <Icon.EnvelopeAt size={35} />
        </Nav.Link>
        <Nav.Link
          eventKey={2}
          href="https://www.google.com/maps/place/1+Maja+9,+46-020+Opole/@50.663327,17.9258614,17z/data=!3m1!4b1!4m6!3m5!1s0x4710530ff0b2afcb:0x1de26e6680f04a28!8m2!3d50.6633247!4d17.9273634!16s%2Fg%2F11csm9q57t"
          target="_blank"
          rel="noopener"
          className="color-icons maps-icon"
        >
          <Icon.GeoAlt size={35} />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;
