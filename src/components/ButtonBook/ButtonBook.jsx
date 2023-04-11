import React from "react";
import { Button } from "react-bootstrap";

const ButtonBook = () => (
  <div className="reflexo-price d-flex justify-content-center">
    <div className="mr-3 d-flex duration-div ">
      <h3 className=" duration">Duration: 50min</h3>
    </div>
    <div className="book-btn">
      <Button className="book" variant="outline-success">
        PLN 100
      </Button>
    </div>
  </div>
);

export default ButtonBook;
