import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import body from "./body.css";
import * as Icon from "react-bootstrap-icons";
const Body = () => (
  <Container className="containter-body">
    <Row className="text-center ">
      <Col s={12} sm={12} lg={12}>
        <span>
          <div className="dropper">
            <Icon.Eyedropper size={30} style={{ color: "brown" }} />
          </div>
        </span>
        <h1>What Is Neurotherapy? </h1>
        <p>
          Neurotherapy, also called neurofeedback and electroencephalogram (EEG)
          biofeedback, is a drug-free treatment that helps people improve their
          brain function. It's based on the idea that you can consciously alter
          the way your brain functions using real-time displays of your brain's
          electrical activity (known as brainwaves).
        </p>
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
