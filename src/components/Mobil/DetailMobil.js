import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Accordion,
  Spinner,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../../api";

const DetailMobil = () => {
  const { id } = useParams();
  const [carData, setCarData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCarById() {
      try {
        const carResponse = await api.getCarById(id);
        setCarData(carResponse.data);
        setIsLoading(false); // Set isLoading menjadi false setelah data berhasil diambil
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    }

    fetchCarById();
  }, [id]);
  const rowStyle = {
    margin: "0", // Mengatur margin menjadi 0
  };
  return (
    <Container className="mb-5 custom-margin-detail-mobil">
      {isLoading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Row className="bg-white  rounded-2 border  mb-4" style={rowStyle}>
            <Col>
              <Form className="d-lg-flex py-4 pt-3 align-items-center justify-content-evenly">
                <Form.Group controlId="input1" className="rounded-5">
                  <Form.Label>Nama Mobil</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ketik Nama/Tipe Mobil"
                    value={carData ? carData.name : ""}
                    disabled
                  />
                </Form.Group>
                <Form.Group controlId="input2">
                  <Form.Label>Kategori</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Kategori"
                    value={carData ? carData.category : ""}
                    disabled
                  />
                </Form.Group>
                <Form.Group controlId="input3">
                  <Form.Label>Harga</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Harga"
                    value={carData ? carData.price : ""}
                    disabled
                  />
                </Form.Group>
                <Form.Group controlId="input4" className="">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Status"
                    value={
                      carData ? (carData.status ? "Available" : "Disewa") : ""
                    }
                    disabled
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className=" font" style={rowStyle}>
            <Col className="border rounded-2 col-md-6 col-12 mb-2">
              <h1 className="fw-bold">Tentang Paket</h1>
              <div>
                <p className="fw-bold">Include</p>
                <ul className="fw-bold">
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
              </div>
              <div>
                <p className="fw-bold">Exclude</p>
                <ul className="fw-bold">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
              <div>
                <p className="fw-bold">Refund, Reschedule, Overtime</p>
                <Accordion defaultActiveKey="0" className="border-0">
                  <Accordion.Item eventKey="0" className="border-0">
                    <Accordion.Header className="border-0"></Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
            <Col className="col-md-6 col-12">
              <Card>
                <Card.Img variant="top" src={carData ? carData.image : ""} />
                <Card.Body>
                  <Card.Title className="fw-bold">
                    {carData ? carData.name : ""}
                  </Card.Title>
                  <Card.Text className="fw-bold d-flex justify-content-between">
                    <span>Total</span>
                    <span>Rp. {carData ? carData.price : ""}</span>
                  </Card.Text>
                  <Card.Text className="fw-bold d-flex justify-content-between">
                    <span>category:</span>
                    <span>{carData ? carData.category : ""}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default DetailMobil;
