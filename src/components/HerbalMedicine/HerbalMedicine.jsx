import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../Divider/Divider";
import "./herbalmedicine.css";
import SingleBenefit from "../SingleBenefit/SingleBenefit";
import { GiHerbsBundle } from "react-icons/gi";
import ButtonBook from "../ButtonBook/ButtonBook";

const HerbalMedicine = () => (
  <Container>
    <Row className="mr-3 ml-3">
      <Col lg={12}>
        <Divider header="Herbal Medicine" />
      </Col>
    </Row>{" "}
    <Row className="background-media mr-3 ml-3">
      <Col lg={4}>
        <div className="herbal-top-section1">
          <div className="top-section2">
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Mitigated risk of side effects."
            />
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="herbal-top-section2">
          <div className="herbal-benefits">
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Boosting your immune system."
            />
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="herbal-top-section3">
          <div className="top-section3">
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Natural healing."
            />
          </div>
        </div>
      </Col>
    </Row>
    <Row className="background-media mr-3 ml-3">
      <Col lg={4}>
        <div className="herbal-middle-section1">
          <div className="middle-senction1">
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Migraines."
            />
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Chronic fatigue."
            />
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Asthma."
            />
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Eczema (irritated skin)."
            />
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Irritable Bowel Syndrome."
            />
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Arthritis."
            />
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Immune system support."
            />
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="herbal-middle-section2 ">
          <div className="middle-section2 text-center mb-4">
            <img
              src="https://campuspress.yale.edu/ledger/files/2022/03/medical-blog-umer.jpeg"
              alt="herbal-medicine"
              className="middle-photo"
            />
          </div>
          <div className="middle-section2-price">
            <ButtonBook price="300" duration="two weeks" />
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="herbal-middle-section3">
          <div className="middle-section3">
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Menopause symptoms."
            />
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Period pain."
            />
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Used to reduce blood pressure and cholesterol levels."
            />
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Safely test and try different herbs."
            />
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit=" Boosted circulation."
            />
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Sharper memory"
            />
          </div>
        </div>
      </Col>
    </Row>
    <Row className=" background-media mr-3 ml-3">
      <Col lg={4}>
        <div className="herbal-bottom-section1">
          <div className="bottom-section1">
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Premenstrual syndrome"
            />
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="herbal-bottom-section2">
          <div className="bottom-section2">
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Cost effective and accessible."
            />
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="herbal-bottom-section3">
          <div className="bottom-section3">
            <SingleBenefit
              singleDot={
                <GiHerbsBundle size={35} style={{ color: "#322d2dd9" }} />
              }
              singleBenefit="Menopausal symptoms"
            />
          </div>
        </div>
      </Col>
      <Col className="herbal-price-hidden mb-3">
        <ButtonBook price="300" duration="two weeks" />
      </Col>
    </Row>
  </Container>
);

export default HerbalMedicine;
