import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero position-relative z-1">
      <Container className="mt-5">
        <Row className="mt-5 align-items-center justify-content-start">
          <Col md={6}>
            <h1>Your improved digital ID to make life easy</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
