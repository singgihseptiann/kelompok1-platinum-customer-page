import React from "react";
import check from "../../assets/images/Checklist1.svg";
import updown from "../../assets/images/updown.svg";
import "./payment.css";
import { useState } from "react";
import moment from "moment/moment";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import CryptoJS from "crypto-js";

function Payment() {
  const [data, setData] = useState({});
  const [selected, setSelected] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isToggle, setIsToggle] = useState(true);
  const styleToggle = {
    transform: isToggle ? "rotate(180deg)" : "",
    transition: "transform 500ms ease",
    cursor: "pointer",
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  //ini masih belum aktif karena akan error, jadi tunggu bagian detail car menyimpan tanggal mulai dan selesai sewa ke local storage
  const start = localStorage.getItem("start_rent");
  const end = localStorage.getItem("end_rent");

  const start_rent = moment(start).format("DD MMM YYYY"); // Untuk Tanggal Akhir sewa
  const start_rent2 = moment(start).format("YYYY-MM-DD"); //TGL format Full angka dan Send API
  const start_rent3 = moment(start_rent); // data tanggal yg akan di lakukan pengurangan
  const end_rent = moment(end).format("DD MMM YYYY"); // Untuk Tanggal akhir sewa
  const end_rent2 = moment(end).format("YYYY-MM-DD"); //TGL format Full angka dan Send API
  const end_rent3 = moment(end_rent); //data tanggal yg akan di lakukan pengurangan

  const total_rent = end_rent3.diff(start_rent3, "days"); //Pengurangan tanggal sewa
  const day_total_rent = total_rent + 1; //Total Hari Sewa

  const start_price = parseInt(data.price); //mengubah nilai string menjadi INT
  const total_price = start_price * day_total_rent;

  const handleCategory = (e) => {
    switch (e) {
      case "small":
        return "2-4 orang";
      case "medium":
        return "4-6 orang";
      case "large":
        return "6-8 orang";
      default:
        return "-";
    }
  };

  const getData = () => {
    const api = `https://api-car-rental.binaracademy.org/customer/car/${id}`;

    const configData = {
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    };

    axios
      .get(api, configData)
      .then((res) => {
        // console.log(res);
        setData(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBackPage = () => {
    navigate(`/detail-mobil/${id}`);
  };

  const handlePayment = async () => {
    const secretKey = "";
    const decryptToken = () => {
      const ciphertext = localStorage.getItem("idCar");
      if (ciphertext) {
        const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
        const originalToken = bytes.toString(CryptoJS.enc.Utf8);
        return originalToken;
      }
      return null;
    };

    const decryptedToken = decryptToken();

    const apiCustomer =
      "https://api-car-rental.binaracademy.org/customer/order";
    // const id_car = localStorage.getItem("id_car");

    const sendCustomer = {
      start_rent_at: start_rent2,
      finish_rent_at: end_rent2,
      car_id: decryptedToken,
    };
    const configCustomer = {
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    };

    try {
      const responses = await axios.post(
        apiCustomer,
        sendCustomer,
        configCustomer
      );
      // console.log(responses);
      // console.log(responses.data.id);
      localStorage.setItem("order_id", responses.data.id);
      localStorage.setItem("total_harga", total_price);
      navigate("/second-payment");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="payment-wrapper">
      <div className="payment-container">
        <div className="payment-header-container">
          <div className="payment-header">
            {/* <Link to={-1}> */}
            <i
              onClick={handleBackPage}
              className="bi bi-arrow-left"
              style={{ cursor: "pointer" }}
            ></i>
            {/* </Link> */}
            <p>Pembayaran</p>
          </div>

          <div className="steps">
            <div className="step">
              <div
                className="eclips-step"
                style={{ backgroundColor: "blue", color: "white" }}
              >
                1
              </div>
              <p>Pilih Metode</p>
              <div className="line-step"></div>
            </div>
            <div className="step">
              <div className="eclips-step">2</div>
              <p>Bayar</p>
              <div className="line-step"></div>
            </div>
            <div className="step">
              <div className="eclips-step">3</div>
              <p>Tiket</p>
            </div>
          </div>
        </div>

        {isLoading ? (
          <>
            <div className="text-center mt-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          </>
        ) : (
          <>
            <div className="payment-detail">
              <p>Detail Pesananmu</p>
              <div>
                <div>
                  <p className="detail-header">Nama/Tipe Mobil</p>
                  <p className="detail-">{data.name}</p>
                </div>
                <div>
                  <p className="detail-header">Kategori</p>
                  <p className="detail-">{handleCategory(data.category)}</p>
                </div>
                <div>
                  <p className="detail-header">Tanggal Mulai Sewa</p>
                  <p className="detail-">
                    {start != null && start.length ? start_rent : "-"}
                  </p>
                </div>
                <div>
                  <p className="detail-header">Tanggal Akhir Sewa</p>
                  <p className="detail-">
                    {end != null && end.length ? end_rent : "-"}
                  </p>
                </div>
              </div>
            </div>

            <div className="pembayaran-wrapper">
              <div className="pilihan-bank-container">
                <h6>Pilih Bank Transfer</h6>
                <p>
                  Kamu bisa membayar dengan transfer melalui ATM, Internet
                  Banking atau Mobile Banking
                </p>
                <div>
                  <ul style={{ listStyle: "none" }}>
                    <li
                      onClick={() => {
                        setSelected(1);
                        localStorage.setItem("bank", "BCA");
                      }}
                    >
                      <div className="bank-wrapper">
                        <div className="bank-container">BCA</div>
                        <div className="bank-box">
                          <h5>BCA Transfer</h5>
                        </div>
                        {selected === 1 ? (
                          <div className="endpoint-icon">
                            <img alt="cheklist" src={check} />{" "}
                          </div>
                        ) : null}
                      </div>
                    </li>
                    <li
                      onClick={() => {
                        setSelected(2);
                        localStorage.setItem("bank", "BNI");
                      }}
                    >
                      <div className="bank-wrapper">
                        <div className="bank-container">BNI</div>
                        <h5 className="bank-box">BNI Transfer</h5>
                        <div className="endpoint-icon">
                          {selected === 2 ? (
                            <img alt="cheklist" src={check} />
                          ) : null}
                        </div>
                      </div>
                    </li>
                    <li
                      onClick={() => {
                        setSelected(3);
                        localStorage.setItem("bank", "Mandiri");
                      }}
                    >
                      <div className="bank-wrapper">
                        <div className="bank-container">Mandiri</div>
                        <h5 className="bank-box">Mandiri Transfer</h5>
                        <div className="endpoint-icon">
                          {selected === 3 ? (
                            <img alt="checklist" src={check} />
                          ) : null}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="detail-container">
                <p className="detail-bold">Innova</p>
                <div className="detail-kapasitas">
                  <i className="bi bi-people"></i>
                  <p>6 - 8 orang</p>
                </div>
                <div className="total-container">
                  <div>
                    <p className="detail-thin" style={{ paddingTop: "15px" }}>
                      Total
                    </p>
                    <img
                      alt="updown"
                      src={updown}
                      style={styleToggle}
                      onClick={() => {
                        setIsToggle(!isToggle);
                      }}
                    />
                  </div>
                  <p className="detail-bold">
                    Rp {total_price.toLocaleString()}
                  </p>
                </div>
                {isToggle ? (
                  <>
                    <div className="detail-pembelian-container">
                      <p className="detail-bold">Harga</p>
                      <ul>
                        <li>
                          <div className="list-flex">
                            <p className="detail-thin">
                              Sewa Mobil Rp.{start_price.toLocaleString()} x{" "}
                              {day_total_rent} Hari
                            </p>
                            <p className="detail-thin">
                              Rp.{total_price.toLocaleString()}
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="detail-pembelian-container">
                      <p className="detail-bold">Biaya Lainnya</p>
                      <ul>
                        <li>
                          <div className="list-flex">
                            <p className="detail-thin">Pajak</p>
                            <p className="termasuk">Termasuk</p>
                          </div>
                        </li>
                        <li>
                          <div className="list-flex">
                            <p className="detail-thin">Biaya Makan Supir</p>
                            <p className="termasuk">Termasuk</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="detail-pembelian-container">
                      <p className="detail-bold">Belum Termasuk</p>
                      <ul>
                        <li>
                          <div className="list-flex">
                            <p className="detail-thin">Bensin</p>
                          </div>
                        </li>
                        <li>
                          <div className="list-flex">
                            <p className="detail-thin">Tol dan Parkir</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : null}
                <div className="detail-border-bottom"></div>
                <div className="total-akhir-container">
                  <p className="detail-bold">Harga</p>
                  <p className="detail-bold">
                    Rp {total_price.toLocaleString()}
                  </p>
                </div>
                {selected !== null && selected !== undefined ? (
                  <button onClick={handlePayment}>Bayar</button>
                ) : (
                  <button onClick={() => alert("Silahkan pilih Bank Transfer")}>
                    Bayar
                  </button>
                )}
                {/* <button onClick={handlePayment}>Bayar</button> */}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Payment;
