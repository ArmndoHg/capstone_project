import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./reflexotherapy.css";
import Divider from "../Divider/Divider";
import { GiFootprint } from "react-icons/gi";
import Benefits from "../Benefits/Benefits";
import ButtonBook from "../ButtonBook/ButtonBook";

const Reflexotherapy = () => (
  <Container>
    <Row className="ml-5 mr-5 reflexo-row">
      <Col lg={12}>
        {" "}
        <Divider header="Reflexotherapy" />
      </Col>
      <Col lg={6} className="reflexo-descrption mb-3">
        <div className="reflexo-body">
          <div className="reflexo-section1">
            <Benefits
              dot={<GiFootprint size={35} style={{ color: "#322d2dd9" }} />}
              benefit1="Ability to stimulate nerve function."
              benefit2="Increase energy."
              benefit3="Boost circulation."
              benefit4="Induce a deep state of relaxation."
              benefit5="Eliminate toxins."
              benefit6="Stimulate the central nervous system."
            />

            <div className="reflexo-price">
              <ButtonBook duration="50min" price="150" />
            </div>
          </div>
        </div>
      </Col>

      <Col lg={6}>
        <div className="reflexo-body-section2">
          <div className="reflexo-section2">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1086849572.jpg?crop=0.668xw:1.00xh;0.282xw,0&resize=480:*"
              alt=""
              className="reflexo-photo"
            />
          </div>
        </div>
      </Col>
      {/* <Col lg={6}>
        <div className="reflexo-body">
          <div className="reflexo-section3"></div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="reflexo-body">
          <div className="reflexo-section4"></div>
        </div>
      </Col> */}
    </Row>
  </Container>
);

export default Reflexotherapy;
