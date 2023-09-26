import React from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import Girl from "../../assets/images/img_service.png";
import Check from "../../assets/images/Check.png";
import "animate.css/animate.min.css";

function OurServices() {
  return (
    <Container
      id="services-section"
      style={{ paddingTop: "10px", paddingBottom: "10px" }}
      className="my-5 animate__animated animate__bounce"
    >
      <Row className=" justify-content-center ">
        <Col className="col-lg-6 text-center" style={{}}>
          <Image src={Girl} className="happy-girl  cursor-pointer" />
        </Col>
        <Col style={{}} className="col-lg-6 ">
          <div className="mt-4 pt-2">
            <h1 className="fw-bold fs-3 judul">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h1>
            <p className="fw-bold fs-6 desc">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
          </div>
          <div className="">
            <ListGroup className="list-group-flush fw-bold  ">
              <ListGroup.Item className="p-0 pb-2 border-0 ">
                <Image
                  src={Check}
                  className="happy-girl me-2 animate__animated animate__fadeIn"
                  style={{ width: "24px", height: "24px" }}
                />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </ListGroup.Item>
              <ListGroup.Item className="p-0 pb-2 border-0 ">
                <Image
                  src={Check}
                  className="happy-girl me-2"
                  style={{ width: "24px", height: "24px" }}
                />
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 pb-2">
                <Image
                  src={Check}
                  className="happy-girl me-2 "
                  style={{ width: "24px", height: "24px" }}
                />
                Sewa Mobil Jangka Panjang Bulanan
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 pb-2">
                <Image
                  src={Check}
                  className="happy-girl  me-1"
                  style={{ width: "24px", height: "24px" }}
                />{" "}
                Gratis Antar - Jemput Mobil di Bandara
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-0 pb-2">
                <Image
                  src={Check}
                  className="happy-girl me-2"
                  style={{ width: "24px", height: "24px" }}
                />
                Layanan Airport Transfer / Drop In Out
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default OurServices;
