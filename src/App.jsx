import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <HomePage />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
