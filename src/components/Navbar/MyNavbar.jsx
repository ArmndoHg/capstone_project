import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import navBar from "./navBar.css";
import * as Icon from "react-bootstrap-icons";

const MyNavbar = () => (
  <div>
    <Navbar
      className="padding-0"
      collapseOnSelect
      expand="md"
      bg="navbar-white"
      sticky="top"
    >
      <Navbar.Brand href="/">
        <img
          src="https://img.freepik.com/vector-premium/mujer-arbol-postura-yoga-vector-linea-dibujo-ilustracion_149225-275.jpg?w=2000"
          alt="logo"
          className="logo-img"
        />
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="text-center">
        <Nav className="mr-auto">
          <Nav.Link href="#deets" className="letter-navbar">
            About me
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className="letter-navbar">
            Tips
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className="letter-navbar">
            Price
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className="letter-navbar">
            Courses
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            eventKey={2}
            href="https://www.facebook.com/profile.php?id=100089495943931"
          >
            <Icon.Facebook size={35} />
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <Icon.Phone size={35} />
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <Icon.EnvelopeFill size={35} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default MyNavbar;
