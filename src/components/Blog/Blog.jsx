import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../Divider/Divider";
import BlogCard from "../BlogCard/BlogCard";

const Blog = () => (
  <Container>
    <Row>
      <Col xl={12}>
        <Divider header="Blog" />
      </Col>
    </Row>
    <Row>
      <Col md={6} lg={4} xl={3}>
        <BlogCard
          img="https://studioholistyki.pl/images/7150bf67a9cf.jpeg"
          header="Meditation"
          description="Meditation is a practice in which an individual uses a technique such
          as mindfulness, or focusing the mind on a particular object, thought,
          or activity to train attention and awareness, and achieve a mentally
          clear and emotionally calm and stable state."
        />
      </Col>
      <Col md={6} lg={4} xl={3}>
        <BlogCard
          img="https://images-prod.healthline.com/hlcmsresource/images/AN_images/vegetarian-diet-plan-1296x728-feature.jpg"
          header="Vegetarian Diet"
          description="A vegetarian diet focuses on plants for food. These include fruits, vegetables, dried beans and peas, grains, seeds and nuts. There is no single type of vegetarian diet."
        />
      </Col>
      <Col md={6} lg={4} xl={3}>
        <BlogCard
          img="https://www.houseofwellness.com.au/wp-content/uploads/2020/05/HOW-natural-defences.jpg"
          header="Natural Methods"
          description="The immune system functions properly with a properly composed diet. There are specific foods that stimulate the body's immunity by increasing the production of antibodies and leukocytes. They stimulate cells to annihilate foreign bodies, while acting as antioxidants."
        />
      </Col>
      <Col md={6} lg={4} xl={3}>
        <BlogCard
          img="https://img.huffingtonpost.com/asset/5b4e14ef1900002800c65ef2.jpeg?cache=r22dMPTyPz&ops=scalefit_720_noupscale"
          header=" Food as medicine"
          description="Traditional Chinese Medicine attributes 70% to dietetics. the power of healing - confirming that what we eat every day has a significant impact on our: vitality, immunity, condition, beauty, fitness and overall physical and mental health. The way we eat even affects the decisions we make."
        />
      </Col>
    </Row>
  </Container>
);

export default Blog;
