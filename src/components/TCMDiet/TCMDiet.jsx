import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../Divider/Divider";
import Benefits from "../Benefits/Benefits";
import { GiFruitBowl } from "react-icons/gi";
import SingleBenefit from "../SingleBenefit/SingleBenefit";
import "./tcm-diet.css";
import ButtonBook from "../ButtonBook/ButtonBook";

const TCMDiet = () => (
  <Container>
    <Row>
      {" "}
      <Col lg={12}>
        {" "}
        <Divider header="Traditional Chinese Medicine Diet" />
      </Col>
    </Row>
    <Row>
      <Col lg={12}>
        <div className="diet-body">
          <div className="diet-benefits d-flex">
            <div className="benefits-section1">
              <SingleBenefit
                singleDot={
                  <GiFruitBowl size={35} style={{ color: "#322d2dd9" }} />
                }
                singleBenefit="Decreased pain and inflammation."
              />
              <SingleBenefit
                singleDot={
                  <GiFruitBowl size={35} style={{ color: "#322d2dd9" }} />
                }
                singleBenefit="Hormonal balance and improved fertility."
              />
            </div>

            <div className="benefits-section2">
              <SingleBenefit
                singleDot={
                  <GiFruitBowl size={35} style={{ color: "#322d2dd9" }} />
                }
                singleBenefit="Reduces the body's stress response."
              />
              <SingleBenefit
                singleDot={
                  <GiFruitBowl size={35} style={{ color: "#322d2dd9" }} />
                }
                singleBenefit="Promotes body flexibility and balance."
              />
            </div>

            <div className="benefits-section3">
              <SingleBenefit
                singleDot={
                  <GiFruitBowl size={35} style={{ color: "#322d2dd9" }} />
                }
                singleBenefit="Aids in the recovery process after injury."
              />
              <SingleBenefit
                singleDot={
                  <GiFruitBowl size={35} style={{ color: "#322d2dd9" }} />
                }
                singleBenefit="Managing stress."
              />
            </div>
          </div>
          {/*                        */}
          <div className="benefits-section-hidden ">
            <Benefits
              dot={<GiFruitBowl size={35} style={{ color: "#322d2dd9" }} />}
              benefit1="Decreased pain and inflammation."
              benefit2="Hormonal balance and improved fertility."
              benefit3="Reduces the body's stress response."
              benefit4="Promotes body flexibility and balance."
              benefit5="Aids in the recovery process after injury."
              benefit6="Managing stress."
            />
            <div className="mb-2">
              <ButtonBook price="300" duration="30min" />
            </div>
          </div>
          {/*                  */}
        </div>
      </Col>
      <Col lg={12}>
        <div className="diet-image-body">
          <div className="diet-image text-center">
            <img
              src="https://www.tcmshanghai.ae/wp-content/uploads/2019/04/tcm-food-dubai.jpg"
              alt="tcm-diet"
              className="diet-photo"
            />
          </div>
        </div>
      </Col>
      <Col lg={12}>
        <div className="diet-price">
          <ButtonBook price="300" duration="30min" />
        </div>
      </Col>
    </Row>
  </Container>
);

export default TCMDiet;
