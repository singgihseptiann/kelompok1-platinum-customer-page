import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; 

import ArrowLeft from '../../assets/images/ArrowLeft.png';
import checklist from '../../assets/images/Check.svg';

function HeaderStepper(props) {
  const { active } = props;
  const { orderID } = props;
  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate('/second-payment'); 
  }; 

  return (
    <div className="payment-header-container">
      <Container>
        <Row>
          <Col sm={4} className="flex align-items-center">
            <div>
              <img
                src={ArrowLeft}
                style={{ marginTop: '-16px', cursor: 'pointer' }}
                alt="BackArrow"
                onClick={handleBack}
              />
            </div>
            <p style={{ marginLeft: '10px' }}>
              Pembayaran
              <br />
              <span style={{ fontSize: '12px', fontWeight: '400' }}>
                Order ID: {orderID}
              </span>
            </p>
          </Col>
          <Col sm={5} style={{ opacity: '0%' }}>
            hello
          </Col>
          <Col sm={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="steps">
              <div className="step">
                <div
                  className="eclips-step"
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  <img src={checklist} alt="" />
                </div>
                <p style={{ marginBottom: '0' }}>Pilih Metode</p>
                <div className="line-step"></div>
              </div>
              <div className="step">
                <div
                  className="eclips-step"
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  <img src={checklist} alt="" />
                </div>
                <p style={{ marginBottom: '0' }}>Bayar</p>
                <div className="line-step"></div>
              </div>
              <div className="step">
                <div 
                  className="eclips-step"
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  3
                </div>
                <p style={{ marginBottom: '0' }}>Tiket</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderStepper;
