import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineEco } from "react-icons/md";
import "./divider.css";

const Divider = (props) => (
  <div>
    <h1 className="text-center header-body">{props.header}</h1>
    <div className="text-center divider ">
      <span>
        <MdOutlineEco size={30} className="d-flex leaf-icon" />
      </span>
    </div>
  </div>
);

export default Divider;
