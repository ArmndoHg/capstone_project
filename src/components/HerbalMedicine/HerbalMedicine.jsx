import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../Divider/Divider";
import "./herbalmedicine.css";

const HerbalMedicine = () => (
  <Container fluid className="mb-3">
    <Row>
      <Col lg={12}>
        <Divider header="Herbal medicine" />
      </Col>
    </Row>{" "}
    <Row>
      <Col lg={4}></Col>
      <Col lg={4}>
        <div className="herbal-section">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit laboriosam qui natus et consequuntur cupiditate.
          Obcaecati hic, officia dolores aliquam velit sunt deserunt quod
          reprehenderit consequuntur ullam tempora. Nihil, explicabo!
        </div>
      </Col>
      <Col lg={4}></Col>
    </Row>
    <Row>
      <Col lg={4}>
        <div className="herbal-another-section">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          possimus ipsum error maiores doloremque, eligendi quia modi tempore!
          Saepe obcaecati rerum maxime corporis laborum a tempore non, fugit
          ullam odio!
        </div>
      </Col>
      <Col lg={4}>
        <div className="herbal-image-body">
          <div className="herbal-image">
            <img
              src="https://campuspress.yale.edu/ledger/files/2022/03/medical-blog-umer.jpeg"
              alt="herbal"
              className="herbal-photo"
            />
          </div>
        </div>
      </Col>
      <Col lg={4}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero beatae
        fugit harum accusamus quia officia nostrum, sed dignissimos optio
        inventore veritatis nisi, iusto earum reiciendis aliquid? Ea quo facilis
        earum.
      </Col>
    </Row>
    <Row>
      <Col lg={4}></Col>
      <Col lg={4}>
        <div className="herbal-last-section">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          cupiditate blanditiis velit, porro unde vitae fugiat ipsum error,
          temporibus quidem, cum dolore nobis? Non facere harum vel esse minus
          fugit.
        </div>
      </Col>
      <Col lg={4}></Col>
    </Row>
  </Container>
);

export default HerbalMedicine;
