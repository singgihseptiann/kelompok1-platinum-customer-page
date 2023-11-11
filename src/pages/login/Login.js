import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { registerAuth } from "../../store/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        const redirectPath = localStorage.getItem("redirectPath");
        if (redirectPath) {
          // Arahkan pengguna kembali ke lokasi sebelumnya
          localStorage.removeItem("redirectPath"); // Hapus nilai redirectPath setelah digunakan
          setTimeout(() => {
            navigate(redirectPath);
            setSuccess("");
          }, 1500);
        } else {
          // Jika tidak ada redirectPath, arahkan pengguna ke halaman beranda atau halaman default setelah login
          setTimeout(() => {
            navigate("/home");
            setSuccess("");
          }, 1500);
          // Ganti dengan rute halaman beranda atau halaman default
        }
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <section>
        <Container fluid>
          <Row>
            <Col className="col-md-6 d-flex flex-column justify-content-center">
              <div className="mx-auto">
                <div
                  className="mb-4 "
                  style={{
                    height: "34px",
                    width: "80px",
                    backgroundColor: "#CFD4ED",
                  }}
                ></div>
                <h3 className="mb-4" style={{ fontWeight: "bold" }}>
                  Welcome Back!
                </h3>
                <div>
                  <Form onSubmit={handleSubmit} method="post" className="">
                    {/* controlId="email" */}
                    <Form.Group className="mb-4">
                      <Form.Label as="label" htmlFor="email">
                        Email
                      </Form.Label>
                      <Form.Control type="email" placeholder="Example: johndee@gmail.com" name="email" value={form.email} onChange={handleChange} />
                    </Form.Group>
                    {/* controlId="password" */}
                    <Form.Group className="mb-4">
                      <Form.Label as="label" htmlFor="password">
                        Password
                      </Form.Label>
                      <Form.Control type={showPassword ? "text" : "password"} placeholder="6+ characters" name="password" value={form.password} onChange={handleChange} />
                      <div className="d-flex flex-row justify-space-between align-items-center">
                        <Button variant="link" className="password-toggle" onClick={togglePasswordVisibility}>
                          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </Button>
                        <div>Show Password</div>
                      </div>
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
              </div>
            </Col>
            <Col className="col-md-6 d-none d-md-block">
              <img src={`${process.env.PUBLIC_URL}/images/login.png`} alt="Login" className="login-img img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default LoginPage;
