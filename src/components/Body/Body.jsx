import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import body from "./body.css";
import * as Icon from "react-bootstrap-icons";
import * as Iconra from "react-icons/fa";
const Body = () => (
  <Container className="containter-body">
    <Row>
      <Col s={12} sm={12} lg={12}>
        <h1 className="text-center header-body">What Is Naturotherapy? </h1>
        <div className="text-center divider ">
          <span>
            <Iconra.FaLeaf size={30} className="d-flex leaf-icon" />
          </span>
        </div>
        <div className="description-homepage">
          <ul className="ul-dots">
            <li className="list-body d-flex">
              <span className="list-icon d-flex">
                <Icon.Fire size={35} />
              </span>
              <span className="list-icon-description">
                Helps to restore proper health in a natural way
              </span>
            </li>
            <li className="list-body d-flex">
              <span className="list-icon d-flex">
                <Icon.Fire size={35} />
              </span>
              <span className="list-icon-description">
                Naturopaths use traditional medical systems from around the
                world.
              </span>
            </li>
            <li className="list-body d-flex">
              <span className="list-icon d-flex">
                <Icon.Fire size={35} />
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
                <Icon.Fire size={35} />
              </span>
              <span className="list-icon-description">
                The unique properties of certain plants enable effective action
                showing analgesic, bactericidal, anti-inflammatory or calming
                properties.
              </span>
            </li>
            <li className="list-body d-flex">
              <span className="list-icon d-flex">
                <Icon.Fire size={35} />
              </span>
              <span className="list-icon-description">
                Psychological aspect of the patient it is often the key that
                underlies many diseases and is the cause of many different
                physical ailments.
              </span>
            </li>
            <li className="list-body d-flex">
              <span className="list-icon d-flex">
                <Icon.Fire size={35} />
              </span>
              <span className="list-icon-description">
                helps to restore proper health in a natural way
              </span>
            </li>
          </ul>
        </div>
      </Col>

      <Col s={12} sm={12} lg={12}>
        <h1>What Neurotherapy Can Help With</h1>
        <p>
          Neurotherapy addresses brain dysregulation. A variety of conditions
          and symptoms are related to brain dysregulation, so there are many
          applications for neurotherapy. Some of the most common conditions
          treated with neurotherapy include:
        </p>
        <div className="list-body">
          <ul className="list-can-help">
            <li>Anxiety disorders</li>
            <li>Attention-deficit/hyperactivity disorder (ADHD)</li>
            <li>Autism spectrum disorders (ASD)</li>
            <li>Bipolar disorder</li>
            <li>Chronic pain</li>
            <li>Depression</li>
            <li>Fatigue</li>
            <li>Learning disabilities</li>
            <li>Migraines</li>
            <li>Obsessive-compulsive disorder (OCD)</li>
            <li>Post-traumatic stress disorder (PTSD)</li>
            <li>Sleep disorders</li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Body;
