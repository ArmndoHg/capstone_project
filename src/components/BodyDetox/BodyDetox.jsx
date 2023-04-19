import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../Divider/Divider";
import "./body-detox.css";
import SingleBenefit from "../SingleBenefit/SingleBenefit";
import { FaBacteria } from "react-icons/fa";
import ButtonBook from "../ButtonBook/ButtonBook";

const BodyDetox = () => (
  <Container fluid>
    <Row>
      <Col lg={12}>
        <div className="detox-header">
          <Divider header="Body Detox" />
        </div>
      </Col>
    </Row>
    <Row className="background-img mr-3 ml-3">
      <Col lg={6}>
        <div className="detox-section1-top">
          <div className="detox-section1-beneftis">
            {" "}
            <div className="detox-section1-new-benefit">
              <div>
                <SingleBenefit
                  // singleDot={
                  //   <FaBacteria size={35} style={{ color: "#322d2dd9" }} />
                  // }
                  singleBenefit="Purify your blood."
                />
              </div>
              <span className="padding-l">
                <FaBacteria size={35} style={{ color: "#322d2dd9" }} />{" "}
              </span>
            </div>
            <div className="detox-section1-new-benefit">
              <SingleBenefit
                // singleDot={
                //   <FaBacteria size={35} style={{ color: "#322d2dd9" }} />
                // }
                singleBenefit="Promotes weight loss. "
              />{" "}
              <span className="padding-l">
                <FaBacteria size={35} style={{ color: "#322d2dd9" }} />{" "}
              </span>
            </div>
            <div className="detox-section1-new-benefit">
              <SingleBenefit
                // singleDot={
                //   <FaBacteria size={35} style={{ color: "#322d2dd9" }} />
                // }
                singleBenefit="Sleep better."
              />{" "}
              <span className="padding-l">
                <FaBacteria size={35} style={{ color: "#322d2dd9" }} />{" "}
              </span>
            </div>
            <div className="detox-section1-new-benefit">
              <SingleBenefit
                // singleDot={
                //   <FaBacteria size={35} style={{ color: "#322d2dd9" }} />
                // }
                singleBenefit="Sharpens your mind and thinking"
              />{" "}
              <span className="padding-l">
                <FaBacteria size={35} style={{ color: "#322d2dd9" }} />{" "}
              </span>
            </div>
            <div className="detox-section1-new-benefit">
              <SingleBenefit
                // singleDot={
                //   <FaBacteria size={35} style={{ color: "#322d2dd9" }} />
                // }
                singleBenefit="Healthy hair."
              />{" "}
              <span className="padding-l">
                <FaBacteria size={35} style={{ color: "#322d2dd9" }} />{" "}
              </span>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="detox-section2-top">
          <div className="detox-section2-benefits">
            <SingleBenefit
              singleDot={
                <FaBacteria size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Boost your circulation."
            />{" "}
            <SingleBenefit
              singleDot={
                <FaBacteria size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Improves your energy levels."
            />{" "}
            <SingleBenefit
              singleDot={
                <FaBacteria size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Drives away bad breath."
            />
            <SingleBenefit
              singleDot={
                <FaBacteria size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Balances the pH of your body."
            />
            <SingleBenefit
              singleDot={
                <FaBacteria size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Improves your sense of well-being"
            />
          </div>
          <div className="detox-price-section-top mb-3">
            <ButtonBook price="350" duration="3 weeks" />
          </div>
        </div>
      </Col>
    </Row>{" "}
    <Row className="mr-3 ml-3 mb-3">
      <Col lg={12}>
        <div className="detox-section-bottom text-center">
          <div className="detox-section-image">
            <img
              src="https://theayurstore.in/blog/wp-content/uploads/2020/04/Detox-Feature-Image.jpg"
              alt="detox"
              className="detox-photo"
            />
          </div>
        </div>
        <div className="detox-price-section mt-3">
          <ButtonBook price="350" duration="3 weeks" />
        </div>
      </Col>
    </Row>
  </Container>
);

export default BodyDetox;
