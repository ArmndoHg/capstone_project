import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./blog-card.css";

const BlogCard = (props) => (
  <div className="blogcard-card mb-3">
    <Card className="blogcard-width-card">
      <a className="decoration-none" href="/seemore">
        <Card.Img className="blogcard-img" variant="top" src={props.img} />{" "}
      </a>

      <Card.Body>
        <Card.Title className="blogcard-header text-center">
          {props.header}
        </Card.Title>
        <Card.Text className="blogcard-description">
          {props.description}
        </Card.Text>
        <div className="see-more-section">
          <a href="/seemore" className="see-more">
            See more <AiOutlineArrowRight />
          </a>
        </div>
      </Card.Body>
    </Card>
  </div>
);

export default BlogCard;
