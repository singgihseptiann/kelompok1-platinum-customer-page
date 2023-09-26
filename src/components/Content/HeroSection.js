import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Mercedes from "../../assets/images/img_car.png";
import { Link } from "react-router-dom"; // Import Link
function HeroSection() {
  return (
    <Container fluid className="custom-navbar custom-margin-hero">
      <Row className="justify-content-lg-end  ">
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
              {" "}
              {/* Use Link to navigate */}
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
    </Container>
  );
}

export default HeroSection;
