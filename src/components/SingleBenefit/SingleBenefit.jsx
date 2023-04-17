import React from "react";
import { Gi3DHammer } from "react-icons/gi";
import "./single-benefit.css";
const SingleBenefit = (props) => (
  <>
    <div className="benefit-body">
      <ul className="ul-single-benefit">
        <il className="list-benefit d-flex">
          <span className="single-benefit-icon d-flex">{props.singleDot}</span>
          <span className="single-benefit-description">
            {props.singleBenefit}
          </span>
        </il>
      </ul>
    </div>
  </>
);

export default SingleBenefit;
