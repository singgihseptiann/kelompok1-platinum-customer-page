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
              <Link to="/cari-mobil">
                {" "}
                {/* Use Link to navigate */}
                <button
                  type="button"
                  className="btn text-white btn-mobile"
                  style={{ backgroundColor: "#5CB85F" }}
                >
                  Register
                </button>
              </Link>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
