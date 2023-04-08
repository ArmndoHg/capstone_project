import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./reflexotherapy.css";
import Divider from "../Divider/Divider";
import { GiFootprint } from "react-icons/gi";

const Reflexotherapy = () => (
  <Container fluid>
    <Row className="ml-5 mr-5">
      <Col lg={12}>
        {" "}
        <Divider header="Reflexotherapy" />
      </Col>
      <Col lg={6} className="reflexo-descrption">
        <div className="reflexo-body">
          <div className="reflexo-section1">
            <ul className="ul-dots">
              <li className="list-body d-flex">
                <span className="list-icon d-flex">
                  <GiFootprint size={35} style={{ color: "#322d2dd9" }} />
                </span>
                <span className="list-icon-description">
                  Ability to stimulate nerve function.
                </span>
              </li>
              <li className="list-body d-flex">
                <span className="list-icon d-flex">
                  <GiFootprint size={35} style={{ color: "#322d2dd9" }} />
                </span>
                <span className="list-icon-description">Increase energy.</span>
              </li>
              <li className="list-body d-flex">
                <span className="list-icon d-flex">
                  <GiFootprint size={35} style={{ color: "#322d2dd9" }} />
                </span>
                <span className="list-icon-description">
                  Boost circulation.
                </span>
              </li>
              <li className="list-body d-flex">
                <span className="list-icon d-flex">
                  <GiFootprint size={35} style={{ color: "#322d2dd9" }} />
                </span>
                <span className="list-icon-description">
                  Induce a deep state of relaxation.
                </span>
              </li>
              <li className="list-body d-flex">
                <span className="list-icon d-flex">
                  <GiFootprint size={35} style={{ color: "#322d2dd9" }} />
                </span>
                <span className="list-icon-description">Eliminate toxins.</span>
              </li>
              <li className="list-body d-flex">
                <span className="list-icon d-flex">
                  <GiFootprint size={35} style={{ color: "#322d2dd9" }} />
                </span>
                <span className="list-icon-description">
                  Stimulate the central nervous system.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="reflexo-body">
          <div className="  reflexo-section2">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1086849572.jpg?crop=0.668xw:1.00xh;0.282xw,0&resize=480:*"
              alt=""
              className="reflexo-photo"
            />
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="reflexo-body">
          <div className="reflexo-section3"></div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="reflexo-body">
          <div className="reflexo-section4"></div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Reflexotherapy;
