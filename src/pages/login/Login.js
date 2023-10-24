import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const res = await axios.post("https://api-car-rental.binaracademy.org/customer/auth/login", {
        email: form.email,
        password: form.password,
      });

      if (res.status === 201) {
        setSuccess("Login Successfully");
        localStorage.setItem("token", res.data.access_token);
        setTimeout(() => {
          navigate("/cari-mobil");
          setSuccess("");
        }, 2500);
      }

      setLoad(false);
    } catch (error) {
      setError("Email or password is incorrect");
      setTimeout(() => setError(""), 2500);
      setLoad(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column justify-content-center">
          <div className="mb-4" style={{ height: "34px", width: "80px", backgroundColor: "#CFD4ED" }}></div>
          <h3 className="mb-4" style={{ fontWeight: "bold" }}>
            Welcome Back!
          </h3>
          <Form onSubmit={handleSubmit} method="post">
            <Form.Group controlId="email" className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Example: johndee@gmail.com" name="email" value={form.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="password" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="6+ characters" name="password" value={form.password} onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign In
            </Button>
          </Form>
          {success && <p className="text-success">{success}</p>}
          {error && <p className="text-danger">{error}</p>}
          <p className="text-center mt-4">
            Don’t have an account? <a href="#">Sign Up For Free</a>
          </p>
        </Col>
        <Col className="d-none d-md-block">
          <img src={`${process.env.PUBLIC_URL}/images/login.png`} alt="Login" className="login-img img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
