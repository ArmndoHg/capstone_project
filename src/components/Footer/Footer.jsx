import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import footer from "./footer.css";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="footer-body">
            <span className="rights">
              {" "}
              All rights reserved Naturalne Terapie© {new Date().getFullYear()}
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
