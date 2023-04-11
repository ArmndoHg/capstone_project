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

        {/* <li className="list-body d-flex">
          <span className="list-icon d-flex">
            <Fire size={35} style={{ color: "#322d2dd9" }} />
          </span>
          <span className="list-icon-description">Increase energy.</span>
        </li>
        <li className="list-body d-flex">
          <span className="list-icon d-flex">
            <Fire size={35} style={{ color: "#322d2dd9" }} />
          </span>
          <span className="list-icon-description">Boost circulation.</span>
        </li>
        <li className="list-body d-flex">
          <span className="list-icon d-flex">
            <Fire size={35} style={{ color: "#322d2dd9" }} />
          </span>
          <span className="list-icon-description">
            Induce a deep state of relaxation.
          </span>
        </li>
        <li className="list-body d-flex">
          <span className="list-icon d-flex">
            <Fire size={35} style={{ color: "#322d2dd9" }} />
          </span>
          <span className="list-icon-description">Eliminate toxins.</span>
        </li>
        <li className="list-body d-flex">
          <span className="list-icon d-flex">
            <Fire size={35} style={{ color: "#322d2dd9" }} />
          </span>
          <span className="mb-0 list-icon-description">
            Stimulate the central nervous system.
          </span>
        </li> */}
      </ul>
      {/* <div className="reflexo-price d-flex justify-content-center">
        <div className="mr-3 d-flex duration-div ">
          <h3 className=" duration">Duration: 50min</h3>
        </div>
        <div className="book-btn">
          <Button className="book" variant="outline-success">
            PLN 100
          </Button>
        </div>
      </div> */}
    </div>
  </>
);

export default Benefits;
