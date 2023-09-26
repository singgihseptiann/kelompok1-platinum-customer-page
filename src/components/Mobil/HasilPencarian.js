import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Spinner,
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
} from "react-bootstrap"; // Pastikan Anda mengimpor Spinner dan komponen-komponen yang Anda gunakan dengan benar
import api from "../../api";
import { Link } from "react-router-dom";

const HasilPencarian = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const namaMobil = searchParams.get("namaMobil") || "";
  const kategori = searchParams.get("kategori") || "";
  const harga = searchParams.get("harga") || "";
  const status = searchParams.get("status") || "Disewakan";
  const [carList, setCarList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const carResponse = await api.getCars({
          name: namaMobil,
          category: kategori,
          price: harga,
          status: status,
        });
        setCarList(carResponse.data.cars);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }

    fetchCars();
  }, [namaMobil, kategori, harga, status]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };
  const rowStyle = {
    margin: "0", // Mengatur margin menjadi 0
  };
  return (
    <Container
      className="mb-5 custom-margin-hasil-cari"
      style={{ zIndex: 100 }}
    >
      {isLoading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Row
            className="bg-white border shadow-sm rounded-2 mb-5"
            style={rowStyle}
          >
            <Col>
              <Form className="d-lg-flex py-4 pt-3 align-items-center justify-content-evenly">
                <Form.Group controlId="input1" className="rounded-5">
                  <Form.Label>Nama Mobil</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ketik Nama/Tipe Mobil"
                    value={namaMobil || ""}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group controlId="input2">
                  <Form.Label>Kategori</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={kategori || ""}
                    disabled={!isEditing}
                  >
                    <option>Masukkan Kapasitas Mobil</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="input3">
                  <Form.Label>Harga</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={harga || ""}
                    disabled={!isEditing}
                  >
                    <option>Masukan Harga Sewa Per Hari</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="input4" className="">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={status || ""}
                    disabled={!isEditing}
                  >
                    <option>Disewa</option>
                    <option>Available</option>
                  </Form.Select>
                </Form.Group>
                <Button
                  className="bg-white text-black border-black"
                  style={{ marginTop: "30px" }}
                  onClick={isEditing ? handleSaveClick : handleEditClick}
                >
                  {isEditing ? "Save" : "Edit"}
                </Button>
              </Form>
            </Col>
          </Row>
          <Row className="rounded-2">
            {carList.map((car) => (
              <Col xs={12} md={6} lg={3} key={car.id}>
                <div className="d-lg-flex align-content-center justify-content-between">
                  <Card className="mx-auto mb-3">
                    <Card.Img
                      variant="top"
                      src={car.image}
                      style={{ height: "" }}
                    />
                    <Card.Body>
                      <Card.Title>{car.name}</Card.Title>
                      <Card.Text>
                        Kategori: {car.category}
                        <br />
                        Rp. {car.price} / Hari
                        <br />
                        Status: {car.status ? "Available" : "Disewa"}
                      </Card.Text>
                      <div className="text-center">
                        <Link to={`/detail-mobil/${car.id}`}>
                          <Button
                            style={{ backgroundColor: "#5CB85F" }}
                            className="w-100"
                          >
                            Pilih Mobil
                          </Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default HasilPencarian;
