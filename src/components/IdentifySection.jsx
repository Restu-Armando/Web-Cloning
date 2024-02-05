import React, { useState } from "react";
import { Collapse, Container, Row, Col } from "react-bootstrap";

const IdentifySection = () => {
  const [open, setOpen] = useState(false);

  const togglePanel = () => {
    setOpen(!open);
  };

  return (
    <div className="identify position-relative z-2 m-0">
      <Container>
        <div
          className="accordion m-0"
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <p className="mb-0">
            A Singapore Government Agency Website{" "}
            <span
              className="text-decoration-underline text-primary"
              onClick={togglePanel}
              style={{ cursor: "pointer" }}
            >
              How to identify
              <i
                className={`fa ${
                  open ? "fa-chevron-up" : "fa-chevron-down"
                } ml-2 chevron-icon`}
              />
            </span>
          </p>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text" className="panel">
            <Row className="mt-5">
              <Col md={6}>
                <div className="d-flex align-items-start">
                  <i className="fa-solid fa-building-columns"></i>
                  <div>
                    <strong>TITLE</strong>
                  </div>
                </div>
                <Col className="mt-2">
                  <div>DESCRIPTION</div>
                </Col>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-start">
                  <i className="fa-solid fa-lock"></i>
                  <div>
                    <strong>TITLE</strong>
                  </div>
                </div>
                <Col className="mt-2">
                  <div>DESCRIPTION</div>
                </Col>
              </Col>
            </Row>
          </div>
        </Collapse>
      </Container>
    </div>
  );
};

export default IdentifySection;
