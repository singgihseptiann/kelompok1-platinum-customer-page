import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function NavigationBar() {
  const expand = "md";

  return (
    <div className=" heigh-custom custom-navbar font" style={{ zIndex: 100 }}>
      <Navbar expand={expand} className="bg-custom-color fw-bold ">
        <Container>
          <Navbar.Brand className="">
            <Link to="/home">
              <div
                style={{
                  backgroundColor: "#0D28A6",
                  width: "100px",
                  height: "34px",
                }}
              ></div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                BCR
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/services">
                  Our Services
                </Nav.Link>
                <Nav.Link as={Link} to="/why-us">
                  Why Us
                </Nav.Link>
                <Nav.Link as={Link} to="/testimony">
                  Testimonial
                </Nav.Link>
                <Nav.Link as={Link} to="/faq">
                  FAQ
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* <Container fluid className="mb-5">
        <Row className="justify-content-lg-end  mt-4">
          <Col className="col-lg-5  col-10 ">
            <div className="mt-lg-5">
              <h1 className="fw-bold fs-2  judul">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <p className="desc fw-bold">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link to="/cari-mobil">
                <button
                  type="button"
                  className="btn text-white btn-mobile"
                  style={{ backgroundColor: "#5CB85F" }}
                >
                  Mulai Sewa Mobil
                </button>
              </Link>
            </div>
          </Col>

          <Col className="col-lg-6   gx-0 ">
            <Image src={Mercedes} className="float-end car-mercedes " />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default NavigationBar;
