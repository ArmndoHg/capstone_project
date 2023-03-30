import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import course from "./course.css";

const Course = () => (
  <Container>
    <Row className="justify-content-center mt-3 mb-3">
      <Col xs={12} md={12} className="text-center">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 courseImg"
              src="https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/331765245_928501758172521_8799845159811795185_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=340051&_nc_ohc=iTJE7u2w3hYAX-_Mr5O&_nc_ht=scontent-frt3-2.xx&oh=00_AfBnshCFvrpLUMvewzOyghnRDV6nM8YFem7azHu2uKn57w&oe=64282E4B"
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
              src="https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/328607920_587650606168605_6202742407367884539_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=phiEBpTvJUAAX9A3eEC&_nc_ht=scontent-fra5-1.xx&oh=00_AfCXlQe7PHTBCMTgbFeH6RmMOzX9YkLDkHmhMVPATkf_8Q&oe=642986BD"
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
              src="https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/328155171_912844756511497_4782936101851217151_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=q2iINK_oiBkAX-2hC97&_nc_ht=scontent-frt3-2.xx&oh=00_AfAO16bFL6DJ4ksVhJyd8OHUFNOdAWMpeHUnJqkFhyfawA&oe=64291C9A"
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
