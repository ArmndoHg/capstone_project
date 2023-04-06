import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutMe from "./aboutMe.css";

const AboutMe = () => (
  <Container>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt perspiciatis excepturi iusto nesciunt illum, ducimus
                laborum, itaque vero numquam temporibus suscipit laboriosam
                natus alias mollitia aliquam cum nostrum, dicta reprehenderit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                tempore quaerat similique, ipsum corrupti iusto illum in,
                dolorum aut id placeat ea delectus ducimus laborum quod fugiat
                iste velit! Velit!
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default AboutMe;
