import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

function Faq() {
  return (
    <Container
      className="my-5  animate__animated animate__bounce"
      id="faq-section"
    >
      <Row className="  ">
        <Col className="col-lg-6  col-12 ">
          <div className="Faq">
            <h1 className="fw-bold fs-3 mb-3   ">Frequently Asked Question</h1>
            <p className=" fw-bold  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
        </Col>
        <Col className="col-lg-6   ">
          {" "}
          <Accordion defaultActiveKey="0">
            <div className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Apa saja syarat yang dibutuhkan?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="mb-3">
              <Accordion.Item eventKey="1" className="mb">
                <Accordion.Header>
                  Berapa hari minimal sewa mobil lepas kunci?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="mb-3">
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="mb-3">
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Apakah Ada biaya antar-jemput?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="mb-3">
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Bagaimana jika terjadi kecelakaan
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Faq;
