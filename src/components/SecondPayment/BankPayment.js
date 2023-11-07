import { Button, Col, Container, Row } from "react-bootstrap";
import "./bankpayment.css";
import CountDay2 from "../Countdown/CountDay";
import { useRef, useState } from "react";
import { BsClipboard } from "react-icons/bs";
import checklist from "../../assets/images/Check.svg";
import {
  day_name,
  month_name,
  dataBank1,
  dataBank2,
  dataBank3,
} from "./const.js";
import ConfirmUpload from "../ConfirmUpload/ConfirmUpload";
import getMethodsPayment from "./const.js";
import "./bankpayment.css";
import { useNavigate } from "react-router-dom";

const BankPayment = () => {
  let dataBank = [{}];
  const bank = localStorage.getItem("bank");
  const total_price = parseInt(localStorage.getItem("total_harga"));
  const [classState, setClassState] = useState(1);
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const [confirm, setConfirm] = useState(false);
  const payment = getMethodsPayment();
  const id = localStorage.getItem("id_car");
  const order_id = localStorage.getItem("order_id");

  const item = payment.find((item) => item.id === 1);
  const item2 = payment.find((item) => item.id === 2);
  const item3 = payment.find((item) => item.id === 3);
  const item4 = payment.find((item) => item.id === 4);
  const navigate = useNavigate();

  const handleCopy2 = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("berhasil salin teks");
      })
      .catch((err) => {
        console.log("Gagal", err);
      });
  };

  const handleBackPage = () => {
    navigate(`/payment/${id}`);
    localStorage.removeItem("countdown");
    localStorage.removeItem("countdownMinute");
  };

  switch (bank) {
    case "BCA":
      dataBank = dataBank1;

      break;
    case "BNI":
      dataBank = dataBank2;

      break;
    case "Mandiri":
      dataBank = dataBank3;

      break;
    default:
      break;
  }

  const limitPayment = new Date();
  limitPayment.setDate(limitPayment.getDate() + 1);

  const day = limitPayment.getDay();
  const date = limitPayment.getDate();
  const month = limitPayment.getMonth();
  const year = limitPayment.getFullYear();
  const hour = limitPayment.getHours();
  const minute = limitPayment.getMinutes();

  return (
    <>
      <div>
        <Container
          style={{
            maxWidth: "1042px",
            marginBottom: "100px",
            transform: "translateY(-113px)",
          }}
        >
          <Row>
            <div className="payment-header-container">
              <div className="payment-header">
                <i
                  className="bi bi-arrow-left"
                  style={{ cursor: "pointer" }}
                  onClick={handleBackPage}
                ></i>
                <div>
                  <p style={{ margin: "0px" }}> Pembayaran</p>
                  <span style={{ fontSize: "13px" }}>
                    Order ID : {order_id}
                  </span>
                </div>
              </div>
              <div className="steps">
                <div className="step">
                  <div
                    className="eclips-step"
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    <img src={checklist} alt="" />
                  </div>
                  <p>Pilih Metode</p>
                  <div className="line-step"></div>
                </div>
                <div className="step">
                  <div
                    className="eclips-step"
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    2
                  </div>
                  <p>Bayar</p>
                  <div className="line-step"></div>
                </div>
                <div className="step">
                  <div className="eclips-step">3</div>
                  <p>Tiket</p>
                </div>
              </div>
            </div>

            <Col xl="7" md="7" sm="12">
              <div className="time-container">
                <div className="time-box">
                  <h5 className="text-box">Selesaikan Pembayaran sebelum</h5>
                  <p className="text-box2">
                    {day_name[day] +
                      ", " +
                      (date < 10 ? "0" + date : date) +
                      " " +
                      month_name[month] +
                      " " +
                      [year]}{" "}
                    Jam{" "}
                    {(hour < 10 ? "0" + hour : hour) +
                      "." +
                      (minute < 10 ? "0" + minute : minute)}{" "}
                    WIB
                  </p>
                </div>
                <div className="time-countdown">
                  <CountDay2 />
                </div>
              </div>
              <div className="transfer-detail">
                {dataBank.map((item) => (
                  <div key={item.id}>
                    <h3>Lakukan Transfer Ke</h3>
                    <div className="bank-wrapper">
                      <div className="bank-cont">{item.name}</div>
                      <div>
                        <h5>{item.desc}</h5>
                        <h5>a.n Binar Car Rental</h5>
                      </div>
                    </div>
                    <h4 className="text-rekt">Nomor Rekening</h4>
                    <div className="account">
                      <p className="account-number" ref={textRef}>
                        {item.rek}
                      </p>
                      <button
                        onClick={() => handleCopy2(textRef.current.innerText)}
                      >
                        <BsClipboard />
                      </button>
                    </div>
                    <h4 className="text-rekt">Total Bayar</h4>
                    <div className="total-payment">
                      <div className="price-to-pay" ref={textRef2}>
                        Rp {total_price.toLocaleString()}
                      </div>

                      <button
                        onClick={() => handleCopy2(textRef2.current.innerText)}
                      >
                        <BsClipboard />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="payment-instr">
                {dataBank.map((item) => (
                  <div key={item.id}>
                    <h3>Intruksi Pembayaran</h3>
                    <div className="bloc-tabs">
                      <div className="col-3">
                        <div
                          className={
                            classState === 1 ? "tabs active-tabs" : "tabs"
                          }
                          onClick={() => setClassState(1)}
                        >
                          {item.atm}
                        </div>
                      </div>
                      <div className="col-3">
                        <div
                          className={
                            classState === 2 ? "tabs active-tabs" : "tabs"
                          }
                          onClick={() => setClassState(2)}
                        >
                          {item.mb}
                        </div>
                      </div>
                      <div className="col-3">
                        <div
                          className={
                            classState === 3 ? "tabs active-tabs" : "tabs"
                          }
                          onClick={() => setClassState(3)}
                        >
                          {item.klik}
                        </div>
                      </div>
                      <div className="col-3">
                        <div
                          className={
                            classState === 4 ? "tabs active-tabs" : "tabs"
                          }
                          onClick={() => setClassState(4)}
                        >
                          {item.ib}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="content-tabs">
                  <div
                    className={
                      classState === 1 ? "content active-content" : "content"
                    }
                  >
                    <ul>
                      {item.text.map((textItem, index) => (
                        <li key={index}>{textItem}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={
                      classState === 2 ? "content active-content" : "content"
                    }
                  >
                    <ul>
                      {item2.text.map((textItem, index) => (
                        <li key={index}>{textItem}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={
                      classState === 3 ? "content active-content" : "content"
                    }
                  >
                    <ul>
                      {item3.text.map((textItem, index) => (
                        <li key={index}>{textItem}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={
                      classState === 4 ? "content active-content" : "content"
                    }
                  >
                    <ul>
                      {item4.text.map((textItem, index) => (
                        <li key={index}>{textItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>

            <Col xl="5" md="5" sm="12">
              <div className="confirm-payment-container">
                {confirm === false ? (
                  <div>
                    <h5>
                      Klik konfirmasi pembayaran untuk mempercepat proses
                      pengecekan
                    </h5>
                    <Button
                      variant="success"
                      className="confirm-button"
                      onClick={() => setConfirm(true)}
                    >
                      Konfirmasi pembayaran
                    </Button>
                  </div>
                ) : (
                  <ConfirmUpload />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BankPayment;
