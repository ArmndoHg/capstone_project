import React from "react";
import { Button } from "react-bootstrap";
import "./button-book.css";

const ButtonBook = (props) => (
  <div className="button-price d-flex justify-content-center">
    <div className="mr-3 d-flex duration-div ">
      <h3 className=" duration">Duration: {props.duration}</h3>
    </div>
    <div className="book-btn">
      <Button className="book" variant="outline-success">
        PLN {props.price}
      </Button>
    </div>
  </div>
);

export default ButtonBook;
