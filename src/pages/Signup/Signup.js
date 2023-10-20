import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [form, setForm] = useState({ fullName: "", emailAddress: "", password: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const res = await axios.post("https://api-car-rental.binaracademy.org/customer/auth/register", {
        email: form.emailAddress,
        password: form.password,
        role: "Customer",
      });

      if (res.status === 201) {
        setSuccess("Registration Successful");
        setTimeout(() => {
          navigate("/login");
          setSuccess("");
        }, 1500);
      }

      setLoad(false);
    } catch (err) {
      if (err.response && err.response.status === 400 && err.response.data === "Email Already Exists.") {
        setError("Email sudah terdaftar. Silakan gunakan email lain.");
      } else {
        setError("Pendaftaran gagal. Silakan periksa informasi Anda.");
      }

      setTimeout(() => setError(""), 1500);
      setLoad(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex flex-column justify-content-center">
          <div className="mb-4" style={{ height: "34px", width: "80px", backgroundColor: "#CFD4ED" }}></div>
          <h3 className="mb-4" style={{ fontWeight: "bold" }}>
            Sign Up
          </h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicPassword" className="mb-4">
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" placeholder="Nama Lengkap" name="fullName" value={form.fullName} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mb-4">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" placeholder="Contoh: fandhy@gmail.com" name="emailAddress" value={form.emailAddress} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-4">
              <Form.Label>Password*</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100" disabled={load}>
              {load ? "Sedang Mendaftar..." : "Daftar"}
            </Button>
          </Form>

          {success && <p className="text-success mt-3">{success}</p>}
          {error && <p className="text-danger mt-3">{error}</p>}

          <p className="text-center mt-4">
            Sudah punya akun? <a href="/login">Login di sini</a>
          </p>
        </Col>
        <Col className="d-none d-md-block">
          <img src={`${process.env.PUBLIC_URL}/images/login.png`} alt="Login" className="login-img img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
