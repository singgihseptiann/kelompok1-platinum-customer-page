import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column justify-content-center">
          <div className="mb-4" style={{ height: "34px", width: "80px", backgroundColor: "#CFD4ED" }}></div>
          <h3 className="mb-4" style={{ fontWeight: "bold" }}>
            Sign Up
          </h3>
          <Form>
            <Form.Group controlId="email" className="mb-4">
              <Form.Label>Name*</Form.Label>
              <Form.Control type="email" placeholder="Nama Lengkap" name="fullName" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign In
            </Button>
          </Form>

          <p className="text-center mt-4">
            Already Have an Account? <a href="#">Login Here </a>
          </p>
        </Col>
        <Col className="d-none d-md-block">
          <img src={`${process.env.PUBLIC_URL}/images/login.png`} alt="Login" className="login-img img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};
