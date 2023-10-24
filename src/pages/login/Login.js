import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { registerAuth } from "../../store/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const res = await axios.post(
        "https://api-car-rental.binaracademy.org/customer/auth/login",
        {
          email: form.email,
          password: form.password,
        }
      );

      if (res.status === 201) {
        setSuccess("Login Successfully");
        setTimeout(() => {
          navigate("/home");
          setSuccess("");
        }, 1500);
        dispatch(registerAuth(res.data));
        localStorage.removeItem("email");
        localStorage.removeItem("role");
      }
      setLoad(false);
    } catch (error) {
      setError("Email or password is incorrect");
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
      <Row className>
        <Col className="col-md-6 d-flex flex-column justify-content-center">
          <div className="mb-4" style={{ height: "34px", width: "80px", backgroundColor: "#CFD4ED" }}></div>
          <h3 className="mb-4" style={{ fontWeight: "bold" }}>
            Welcome Back!
          </h3>
          <div>
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
          </div>
          {success && <p className="text-success">{success}</p>}
          {error && <p className="text-danger">{error}</p>}
          <p className="text-center mt-4">
            Don’t have an account? <Link to="/signup">Sign Up For Free</Link>
          </p>
        </Col>
        <Col className="col-md-6 d-none d-md-block">
          <img src={`${process.env.PUBLIC_URL}/images/login.png`} alt="Login" className="login-img img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
