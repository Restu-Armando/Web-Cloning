import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IdentifySection from "./components/IdentifySection";
import NavbarComp from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <IdentifySection />
          </Col>
        </Row>
      </Container>
      <NavbarComp />
      <Hero />
    </>
  );
}

export default App;
