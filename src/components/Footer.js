import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="col-lg-5 col-12">
          <h1 className="fs-4 fw-bold">
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
          </h1>
          <p className="fw-bold">binarcarrental@gmail.com</p>
          <p className="fw-bold">081-233-334-808</p>
        </Col>
        <Col className="col-lg-2 col-12">
          <ListGroup className="list-group-flush fw-bold">
            <ListGroup.Item className="p-0 border-0">
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Our services
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="p-0 pb-2 border-0">
              <Link
                to="/why-us"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Why Us
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="p-0 pb-2 border-0">
              <Link
                to="/testimony"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Testimonial
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="p-0 pb-2 border-0">
              <Link
                to="/faq"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                FAQ
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className=" col-lg-3 col-12  ">
          <h1 className="fw-bold fs-5">Connect with us</h1>
          <div>
            <a
              href="https://www.instagram.com/singgihseptiann/"
              target="blank"
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#0D28A6",
                marginRight: "10px", // Menambahkan spasi horizontal di sini
              }}
            >
              <i className="bi bi-facebook text-white"></i>
            </a>
            <a
              href="https://www.instagram.com/singgihseptiann/"
              target="blank"
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#0D28A6",
                marginRight: "10px", // Menambahkan spasi horizontal di sini
              }}
            >
              <i className="bi bi-instagram text-white"></i>
            </a>
            <a
              href="https://twitter.com/Imgoingback5O5"
              target="blank"
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#0D28A6",
                marginRight: "10px", // Menambahkan spasi horizontal di sini
              }}
            >
              <i className="bi bi-twitter text-white"></i>
            </a>
            <a
              href="https://www.instagram.com/singgihseptiann/"
              target="blank"
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#0D28A6",
                marginRight: "10px", // Menambahkan spasi horizontal di sini
              }}
            >
              <i className="bi bi-award text-white"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/singgihseptian/"
              target="blank"
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#0D28A6",
              }}
            >
              <i className="bi bi-linkedin text-white"></i>
            </a>
          </div>
        </Col>
        <Col className="  col-lg-2 col-12">
          <p className="fw-bold">Copyright Binar 2022</p>
          <Link to="/home">
            <div
              style={{
                backgroundColor: "#0D28A6",
                width: "100px",
                height: "34px",
              }}
            ></div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
