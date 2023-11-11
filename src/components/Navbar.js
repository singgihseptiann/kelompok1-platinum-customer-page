import React from "react";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
// import { useSelector } from "react-redux";
// import { registerAuth } from "../../src/store/auth";
import { useDispatch } from "react-redux";

function NavigationBar() {
  const expand = "md";
  const token = localStorage.getItem("customer token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/home");
      localStorage.removeItem("customer token");
    }, 1000);
  };

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
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>BCR</Offcanvas.Title>
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
              {token != null && token !== undefined ? (
                <>
                  {" "}
                  {/* Use Link to navigate */}
                  <button type="button" className="btn text-white btn-mobile" style={{ backgroundColor: "#5CB85F" }} onClick={handleLogout}>
                    {isLoading ? (
                      <>
                        <Spinner animation="border" size="sm" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        <span> Logout</span>
                      </>
                    ) : (
                      <>
                        <span>Logout</span>
                      </>
                    )}
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signup">
                    {" "}
                    {/* Use Link to navigate */}
                    <button type="button" className="btn text-white btn-mobile" style={{ backgroundColor: "#5CB85F" }}>
                      Register
                    </button>
                  </Link>
                </>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
