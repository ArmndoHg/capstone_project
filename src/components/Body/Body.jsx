import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./body.css";
import { TbBrandDrops } from "react-icons/tb";
import Divider from "../Divider/Divider";
import Benefits from "../Benefits/Benefits";

const Body = () => (
  <Container className="containter-body">
    <Row>
      <Col s={12} sm={12} lg={12}>
        <Divider header="What is Naturotherapy?" />

        <div className="description-homepage">
          <Benefits
            dot={<TbBrandDrops size={35} />}
            benefit1="Helps to restore proper health in a natural way."
            benefit2="Naturopaths use traditional medical systems from around the
                world."
            benefit3="Primarily the composition of natural plant ingredients with
                  each other in such a way that they show a specific synergistic
                  healing effect."
            benefit4="The unique properties of certain plants enable effective action
                showing analgesic, bactericidal, anti-inflammatory or calming
                properties."
            benefit5="Psychological aspect of the patient it is often the key that
                underlies many diseases and is the cause of many different
                physical ailments."
            benefit6="Helps to restore proper health in a natural way."
          />
        </div>
      </Col>
    </Row>

    <Row>
      <Col s={12} sm={12} lg={3}>
        <div className="therapy-section">
          <div className="therapy-img">
            <div className="therapy-photo1">
              <div className="filter-photos"></div>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={3}>
        <div className="therapy-section">
          <div className="therapy-img">
            <div className="therapy-photo2">
              <div className="filter-photos"></div>
            </div>
          </div>
        </div>
      </Col>{" "}
      <Col lg={3}>
        <div className="therapy-section">
          <div className="therapy-img">
            <div className="therapy-photo3">
              <div className="filter-photos"></div>
            </div>
          </div>
        </div>
      </Col>{" "}
      <Col lg={3}>
        <div className="therapy-section">
          <div className="therapy-img">
            <div className="therapy-photo4">
              <div className="filter-photos"></div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Body;
