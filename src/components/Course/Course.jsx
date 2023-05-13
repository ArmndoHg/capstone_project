import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./course.css";

const Course = () => (
  <Container>
    <Row className="justify-content-center mt-3 mb-3">
      <Col xs={12} md={12} className="text-center">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 courseImg"
              src="https://www.archwayshealingcollege.com/images/2017-reflex-class-Chiro-space.PNG"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 courseImg"
              src="https://images.squarespace-cdn.com/content/v1/5d2e1b1f4973fc0001feed14/1568844803385-WRPGHFXDRU9QUUPLKDZM/Screen+Shot+2019-08-13+at+3.50.42+PM.png?format=500w"
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 courseImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VPKbJARn7XtgpfruzVxOQTWsjBJnfNFhpQ&usqp=CAU"
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default Course;
