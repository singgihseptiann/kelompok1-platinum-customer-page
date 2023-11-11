import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Accordion,
  Spinner,
  Button,
  Alert,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import { AiOutlineCalendar } from "react-icons/ai";
import "./style.css";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import CryptoJS from "crypto-js";
import { encryptData, decryptData } from "../Decrypt/helper";

const DetailMobil = () => {
  const { id } = useParams();
  const [carData, setCarData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonShow, setButtonShow] = useState(false);
  const navigate = useNavigate();

  const store_decrypt_token = localStorage.getItem("customer token");
  const decryptToken = decryptData(store_decrypt_token);

  useEffect(() => {
    async function fetchCarById() {
      try {
        const carResponse = await api.getCarById(id);
        setCarData(carResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    }

    fetchCarById();
  }, [id]);
  const rowStyle = {
    margin: "0", // Mengatur margin menjadi 0
  };

  //untuk calendar
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isCalendarVisible, setCalendarVisibility] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const toggleCalendar = () => {
    setCalendarVisibility(!isCalendarVisible);
  };

  const handleGoPayment = () => {
    localStorage.setItem("start_rent", startDate);
    localStorage.setItem("end_rent", endDate);

    const encryptedData = encryptData(id);
    localStorage.setItem("id_car", encryptedData);

    navigate(`/payment/${id}`);
  };

  const handleDateChange = (dates) => {
    if (dates[0] && dates[1]) {
      setStartDate(dates[0]);
      setEndDate(dates[1]);

      const formattedStartDate = moment(dates[0]).format("D MMMM YYYY");
      const formattedEndDate = moment(dates[1]).format("D MMMM YYYY");

      setSelectedDateRange(`${formattedStartDate} - ${formattedEndDate}`);

      const daysDiff = moment(dates[1]).diff(moment(dates[0]), "days");

      if (daysDiff > 7) {
        setShowAlert(true);
        setButtonDisabled(true);
      } else {
        setShowAlert(false);
        setButtonDisabled(false);
      }
    }
  };

  const handlePickDate = () => {
    if (startDate && endDate) {
      const token = localStorage.getItem("customer token");
      if (token !== null && token !== undefined) {
        setButtonShow(true);
      } else {
        alert("Anda belum Login : Anda Akan diarahkan ke Halaman Login");
        localStorage.setItem("redirectPath", window.location.pathname);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } else {
      console.log("Pilih rentang tanggal terlebih dahulu.");
    }

    toggleCalendar();
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
              <Card style={{ zIndex: "" }}>
                <Card.Img variant="top" src={carData ? carData.image : ""} />
                <Card.Body>
                  <Card.Title className="fw-bold mb-2">
                    {carData ? carData.name : ""}
                  </Card.Title>
                  <p>Tentukan lama sewa mobil (max. 7 hari)</p>
                  <div
                    className={`input-container ${
                      isCalendarVisible ? "with-calendar" : ""
                    }`}
                  >
                    <div className="input-wrapper mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pilih tanggal mulai dan tanggal akhir sewa"
                        aria-label="Pilih Tanggal"
                        aria-describedby="calendar-icon"
                        onClick={toggleCalendar}
                        value={selectedDateRange}
                        disabled
                      />
                      <AiOutlineCalendar
                        className="calendar-icon"
                        onClick={toggleCalendar}
                      />
                    </div>
                  </div>

                  <Card.Text className="fw-bold d-flex justify-content-between">
                    <span>Total</span>
                    <span>Rp. {carData ? carData.price : ""}</span>
                  </Card.Text>
                  <Card.Text className="fw-bold d-flex justify-content-between">
                    <span>Kategori:</span>
                    <span>{carData ? carData.category : ""}</span>
                  </Card.Text>
                  <Card.Text className="success fw-bold d-flex justify-content-center">
                    {buttonShow === true ? (
                      <Button variant="success" onClick={handleGoPayment}>
                        Lanjutkan Pembayaran{" "}
                      </Button>
                    ) : (
                      <></>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
              {isCalendarVisible && (
                <div
                  className="d-flex flex-column align-items-center shadow-xl mb-3   position-relative"
                  style={{ marginTop: "-97px" }}
                >
                  <div className="d-flex flex-column align-items-center  ">
                    <Calendar
                      className={"border rounded-3 shadow-xl pb-5  w-75"}
                      onChange={handleDateChange}
                      selectRange={true}
                    />
                  </div>
                  <Button
                    onClick={handlePickDate}
                    className=" w-50 "
                    style={{ backgroundColor: " #35B0A7", marginTop: "-50px" }}
                    disabled={isButtonDisabled}
                  >
                    Pilih Tanggal
                  </Button>
                  {showAlert && (
                    <Alert variant="danger" className="mt-3 w-50">
                      Rentang tanggal melebihi 7 hari, maksimal untuk penyewaan
                      mobil hanya 7 hari.
                    </Alert>
                  )}
                </div>
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default DetailMobil;
