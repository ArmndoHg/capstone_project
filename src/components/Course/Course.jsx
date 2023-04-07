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
              src="https://scontent.fktw1-1.fna.fbcdn.net/v/t39.30808-6/328607920_587650606168605_6202742407367884539_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BbyV8jjLy4MAX89KfS5&_nc_ht=scontent.fktw1-1.fna&oh=00_AfBuxcMZd0rfvInPVePK0Z1fn7jFHMQNLKOhEWgkih7iOg&oe=642F757D"
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
              src="https://scontent.fktw4-1.fna.fbcdn.net/v/t39.30808-6/328155171_912844756511497_4782936101851217151_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=91lxBAC7WksAX8mcsUo&_nc_ht=scontent.fktw4-1.fna&oh=00_AfDBgegYaWAeP9nsYLptRJS9NG75acodfKs2yxi8h1J_Dg&oe=642F0B5A"
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
              src="https://scontent.fktw1-1.fna.fbcdn.net/v/t39.30808-6/328621846_906502957146494_803115569198274689_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wORvqfoc260AX_hyI7V&_nc_ht=scontent.fktw1-1.fna&oh=00_AfCs0_36u84ssqBGgWEDmyR1IWxtCADSXPnF5bxuOQezmQ&oe=642E4557"
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
