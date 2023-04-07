import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutMe.css";

const AboutMe = () => (
  <Container className="about-me">
    <Row>
      <Col lg={4}>
        <div className="about-me-body-photo">
          <div className="about-me-img">
            <img
              src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTlFppQFm4VCK-UlCGwBXMWBW1BSM0v_KDxVwXZgEO-4slA_Bq23-4OUg_Lg2ONXc2D"
              alt="this-is-me"
              className="about-me-photo"
            />
          </div>
        </div>
      </Col>
      <Col lg={8}>
        <div className="about-me-body-resume">
          <div className="about-me-resume">
            <div className="about-me-header">
              <h1>Hello!</h1>
            </div>
            <div className="about-me-text">
              <p>
                I am a professional, certified naturopath, Detox Specialist,
                Iridologist and Sound Therapist, a nurse by education. My
                passion and mission is to help in healing, which stems from the
                understanding that each of us has a huge healing power that
                allows you to overcome even the greatest dysfunctions and
                symptoms of the body.
              </p>
              <p>
                I direct my charges to discover their own power, cleanse the
                body and regain full health, vitality and satisfaction with
                life. For this purpose, I use natural tools that I have learned
                over 10 years of my own research, practicing and testing them on
                myself and implementing them in the healing protocols of my
                patients.
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default AboutMe;
