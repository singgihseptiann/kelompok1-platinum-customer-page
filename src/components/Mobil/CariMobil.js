import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HeroSection from "../Content/HeroSection";
import api from "../../api";
import { Link } from "react-router-dom";

const CariMobil = () => {
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await api.loginAdmin({
        email: "admin@bcr.io",
        password: "123456",
      });

      localStorage.setItem("token", response.data.access_token);

      const carResponse = await api.getCars({ page: 1, pageSize: 10 });

      console.log("cars", carResponse);
    } catch (error) {
      console.log("err", error);
    }
  };

  const [formData, setFormData] = useState({
    namaMobil: "",
    kategori: "",
    harga: "",
    status: "Disewa",
  });

  const kategoriOptions = [
    { value: "small", label: "2 - 4 orang" },
    { value: "medium", label: "4 - 6 orang" },
    { value: "large", label: "6 - 8 orang" },
  ];

  const hargaOptions = [
    { value: "400000", label: "< Rp. 400.000" },
    { value: "400000-600000", label: "Rp. 400.000 - Rp. 600.000" },
    { value: "600000", label: "> Rp. 600.000" },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Tambahkan useEffect untuk memeriksa validitas form setiap kali formData berubah
  useEffect(() => {
    if (
      formData.namaMobil !== "" &&
      formData.kategori !== "" &&
      formData.harga !== "" &&
      formData.status !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formData]);
  console.log(formData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValid) {
      const carResponse1 = await api.getCars({
        name: formData.namaMobil,
        category: formData.kategori,
        price: formData.harga,
        status: formData.status,
      });
      console.log(carResponse1);
      const cars = carResponse1.data.cars;
      console.log(cars);
      const path = `/hasil-cari?namaMobil=${formData.namaMobil}&kategori=${formData.kategori}&harga=${formData.harga}&status=${formData.status}`;
      navigate(path, { state: cars });
    } else {
      console.log("Form tidak valid. Harap isi semua field.");
    }
  };
  const rowStyle = {
    margin: "0", // Mengatur margin menjadi 0
  };
  return (
    <div>
      <HeroSection />
      <Container className="mb-5 custom-margin-cari-mobil">
        <Row
          className="bg-white shadow border rounded-2 cari-mobil-container"
          style={rowStyle}
        >
          <Col>
            <Form
              className="d-lg-flex py-4 pt-3 align-items-center justify-content-evenly"
              onSubmit={handleSubmit}
            >
              <Form.Group controlId="input1" className="rounded-5">
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ketik Nama/Tipe Mobil"
                  name="namaMobil"
                  value={formData.namaMobil}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="input2">
                <Form.Label>Kategori</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleInputChange}
                >
                  <option value="">Masukkan Kapasitas Mobil</option>
                  {kategoriOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="input3">
                <Form.Label>Harga</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="harga"
                  value={formData.harga}
                  onChange={handleInputChange}
                >
                  <option value="">Masukan Harga Sewa Per Hari</option>
                  {hargaOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="input4" className="">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="disewa">Disewa</option>
                  <option value="avalible">Available</option>
                </Form.Select>
              </Form.Group>
              {/* <Link
                className=""
                to={`/hasil-cari?namaMobil=${formData.namaMobil}&kategori=${formData.kategori}&harga=${formData.harga}&status=${formData.status}`}
              > */}
              <button
                type="submit"
                className="btn text-white "
                style={{ marginTop: "30px", backgroundColor: "#5CB85F" }}
                onClick={login}
                disabled={!formValid}
              >
                Cari Mobil
              </button>
              {/* </Link> */}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CariMobil;
