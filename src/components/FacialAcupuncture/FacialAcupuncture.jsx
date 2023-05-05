import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../Divider/Divider";
import "./facial-acupuncture.css";
import Benefits from "../Benefits/Benefits";
import { TbNeedle } from "react-icons/tb";
import ButtonBook from "../ButtonBook/ButtonBook";

const FacialAcupuncture = () => (
  <Container>
    <Row>
      <Col lg={12}>
        <Divider header="Facial Acupuncture" />
      </Col>
    </Row>{" "}
    <Row className="full-background">
      <Col lg={4}>
        <div className="facial-benefits-section1">
          <div className="facial-benefits-body1">
            <Benefits
              dot={<TbNeedle size={35} style={{ color: "#322d2dd9" }} />}
              benefit1="Brightened complexion."
              benefit2="Reduced acne."
              benefit3="Minimized pores."
              benefit4="Improved facial muscle tone."
              benefit5="Stimulating the production of collagen."
              benefit6="Help make the skin look younger"
            />
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="facial-photo-section text-center mt-2">
          <div className="facial-photo-body">
            <div className="facial-photo">
              <img
                src="https://www.wellme.es/site/article/61833/52067/para-que-sirve-la-acupuntura-9-beneficios-de-la-acupuntura-0_ai1.jpg"
                alt="facial_acupuncture_image"
                className="facial-photo-img"
              />
              <div className="facial-price1">
                <ButtonBook duration="1h 30min" price="250" />
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="facial-benefits-section2">
          <div className="facial-benefits-body2">
            <Benefits
              dot={<TbNeedle size={35} style={{ color: "#322d2dd9" }} />}
              benefit1="Reduced appearance of wrinkles."
              benefit2="Reduced puffiness and facial swelling."
              benefit3="Reduces skin sagging"
              benefit4="Improved skin texture."
              benefit5="Better than botox"
              benefit6="Minimize dark circles"
            />
            <div className="facial-price2">
              <ButtonBook duration="1h 30min" price="250" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default FacialAcupuncture;
