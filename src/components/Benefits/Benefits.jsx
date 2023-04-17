import React from "react";
import "./benefits.css";

const Benefits = (props) => (
  <>
    <div className="benefits-body ">
      <ul className="ul-benefits">
        <li className="benefits-list d-flex">
          <span className="benefits-icon d-flex">{props.dot}</span>
          <span className="benefits-icon-description">{props.benefit1}</span>
        </li>
        <li className="benefits-list d-flex">
          <span className="benefits-icon d-flex">{props.dot}</span>
          <span className="benefits-icon-description">{props.benefit2}</span>
        </li>
        <li className="benefits-list d-flex">
          <span className="benefits-icon d-flex">{props.dot}</span>

          <span className="benefits-icon-description">{props.benefit3}</span>
        </li>
        <li className="benefits-list d-flex">
          <span className="benefits-icon d-flex">{props.dot}</span>
          <span className="benefits-icon-description">{props.benefit4}</span>
        </li>
        <li className="benefits-list d-flex">
          <span className="benefits-icon d-flex">{props.dot}</span>
          <span className="benefits-icon-description">{props.benefit5}</span>
        </li>
        <li className="benefits-list d-flex">
          <span className="benefits-icon d-flex">{props.dot}</span>
          <span className="benefits-icon-description">{props.benefit6}</span>
        </li>
      </ul>
    </div>
  </>
);

export default Benefits;
