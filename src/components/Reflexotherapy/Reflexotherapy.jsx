import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./reflexotherapy.css";
import Divider from "../Divider/Divider";
import { TbBrandDrops } from "react-icons/tb";

const Reflexotherapy = () => (
  <Row>
    <Col lg={12}>
      {" "}
      <Divider header="Reflexotherapy" />
    </Col>
    <Col lg={6}>
      <div className="reflexo-body">
        <div className="reflexo-section1">
          <ul className="ul-dots">
            <li className="list-body d-flex">
              <span className="list-icon d-flex">
                <TbBrandDrops size={35} />
              </span>
              <span className="list-icon-description">
                Helps to restore proper health in a natural way.
              </span>
            </li>
            <li className="list-body d-flex">
              <span className="list-icon d-flex">
                <TbBrandDrops size={35} />
              </span>
              <span className="list-icon-description">
                Naturopaths use traditional medical systems from around the
                world.
              </span>
            </li>
            <li className="list-body d-flex">
              <span className="list-icon d-flex">
                <TbBrandDrops size={35} />
              </span>
              <span className="list-icon-description">
                <font>
                  Primarily the composition of natural plant ingredients with
                  each other in such a way that they show a specific synergistic
                  healing effect.
                </font>
              </span>
            </li>
            <li className="list-body d-flex">
              <span className="list-icon d-flex">
                <TbBrandDrops size={35} />
              </span>
              <span className="list-icon-description">
                The unique properties of certain plants enable effective action
                showing analgesic, bactericidal, anti-inflammatory or calming
                properties.
              </span>
            </li>
            <li className="list-body d-flex">
              <span className="list-icon d-flex">
                <TbBrandDrops size={35} />
              </span>
              <span className="list-icon-description">
                Psychological aspect of the patient it is often the key that
                underlies many diseases and is the cause of many different
                physical ailments.
              </span>
            </li>
            <li className="list-body d-flex">
              <span className="list-icon d-flex">
                <TbBrandDrops size={35} />
              </span>
              <span className="list-icon-description">
                Helps to restore proper health in a natural way.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Col>
    <Col lg={6}>
      <div className="reflexo-body">
        <div className="reflexo-section1">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1086849572.jpg?crop=0.668xw:1.00xh;0.282xw,0&resize=480:*"
            alt=""
          />
        </div>
      </div>
    </Col>
    <Col lg={6}>
      <div className="reflexo-body">
        <div className="reflexo-section1"></div>
      </div>
    </Col>
    <Col lg={6}>
      <div className="reflexo-body">
        <div className="reflexo-section1"></div>
      </div>
    </Col>
  </Row>
);

export default Reflexotherapy;
