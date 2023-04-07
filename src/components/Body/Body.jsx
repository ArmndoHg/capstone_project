import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./body.css";

// import * as Iconra from "react-icons/fa";
import { TbBrandDrops } from "react-icons/tb";
import Divider from "../Divider/Divider";

const Body = () => (
  <Container className="containter-body">
    <Row>
      <Col s={12} sm={12} lg={12}>
        {/* <h1 className="text-center header-body">What Is Naturotherapy? </h1>
        <div className="text-center divider ">
          <span>
            <Iconra.FaLeaf size={30} className="d-flex leaf-icon" />
          </span>
        </div> */}
        <Divider header="What is Naturotherapy?" />
        <div className="description-homepage">
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
