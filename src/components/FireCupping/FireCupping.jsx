import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./fire-cupping.css";
import Divider from "../Divider/Divider";
import { Fire } from "react-bootstrap-icons";
import Benefits from "../Benefits/Benefits";
import ButtonBook from "../ButtonBook/ButtonBook";

const FireCupping = () => (
  <Container>
    <Row className="ml-5 mr-5 margin-fire-0">
      <Col lg={12}>
        {" "}
        <Divider header="Fire Cupping" />
      </Col>
      <Col lg={6} className="mt-2">
        <div className="fire-photo-body">
          <div className="fire-photo-section">
            <img
              src="https://img.freepik.com/foto-gratis/proceso-ventosa-vista-superior_23-2148824060.jpg?w=360&t=st=1681215607~exp=1681216207~hmac=62606fa06d0b8b0b63e7f02eead0eddd2832c05df9510fbecf10348db950a50c"
              alt="fire-cupping"
              className="fire-photo"
            />
          </div>
        </div>
      </Col>

      <Col lg={6}>
        <div className="fire-benefits-section2">
          <div className="fire-cupping-benefits">
            <Benefits
              dot={<Fire size={35} style={{ color: "#322d2dd9" }} />}
              benefit1="Non-invasive treatment technique."
              benefit2="Encourage blood flow to damaged areas."
              benefit3="Clear congestion and help treat asthma."
              benefit4="Clear colon blockages and aid digestion."
              benefit5="Increases circulation."
              benefit6="Encourages tissues to release toxins."
            />
            <div className="fire-price">
              <ButtonBook duration="1h" price="200" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default FireCupping;
