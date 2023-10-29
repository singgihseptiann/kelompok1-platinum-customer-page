import React from "react";
import check from "../../assets/images/Checklist1.svg";
import updown from "../../assets/images/updown.svg";
import "./payment.css";
import { useState } from "react";
import moment from "moment/moment";
import { style } from "@mui/system";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";

function Payment() {
  const [data, setData] = useState({});
  const [selected, setSelected] = useState();
  const selectClick = (index) => {
    setSelected(index);
  };
  const [isToggle, setIsToggle] = useState(true);
  const styleToggle = {
    transform: isToggle ? "rotate(180deg)" : "",
    transition: "transform 500ms ease",
    cursor: "pointer",
  };
  const { id } = useParams();
  const navigate = useNavigate();

  //ini masih belum aktif karena akan error, jadi tunggu bagian detail car menyimpan tanggal mulai dan selesai sewa ke local storage
  const start = localStorage.getItem("start_rent");
  // const start1 = moment(start);
  const end = localStorage.getItem("end_rent");
  // const end1 = moment(end);
  const start_rent = moment(start).format("YYYMMDD");
  const end_rent = moment(end).format("YYYYMMDD");
  // const day_total_rent = end_rent.diff(start_rent, "days");

  const token = localStorage.getItem("token");

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
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePayment = async () => {
    const apiCustomer =
      "https://api-car-rental.binaracademy.org/customer/order";
    const id_car = localStorage.getItem("id_car");

    const sendCustomer = {
      start_rent_at: start,
      finish_rent_at: end,
      car_id: id_car,
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
      console.log(responses);
      console.log(responses.data.id);
      localStorage.setItem("order_id", responses.data.id);
      navigate(`/`);
      // localStorage.setItem("order_id", responses.id);
      // localStorage.setItem("Total_Harga", "totalPembayaran");
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
            <i class="bi bi-arrow-left" style={{ cursor: "pointer" }}></i>
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

        <div className="payment-detail">
          <p>Detail Pesananmu</p>
          <div>
            <div>
              <p className="detail-header">Nama/Tipe Mobil</p>
              <p className="detail-">
                {data != null && data.length ? data.name : "Innova"}
              </p>
            </div>
            <div>
              <p className="detail-header">Kategori</p>
              <p className="detail-">
                {data.length && data != null
                  ? handleCategory(data.category)
                  : "6-8 orang"}
              </p>
            </div>
            <div>
              <p className="detail-header">Tanggal Mulai Sewa</p>
              <p className="detail-">
                {start != null && start.length ? start : "2 Juni 2022"}
              </p>
            </div>
            <div>
              <p className="detail-header">Tanggal Akhir Sewa</p>
              <p className="detail-">
                {end != null && end.length ? end : "8 Juni 2022"}
              </p>
            </div>
          </div>
        </div>

        <div className="pembayaran-wrapper">
          <div className="pilihan-bank-container">
            <h6>Pilih Bank Transfer</h6>
            <p>
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
              atau Mobile Banking
            </p>
            <div>
              <ul style={{ listStyle: "none" }}>
                <li
                  onClick={() => {
                    selectClick(1);
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
                        <img src={check} />{" "}
                      </div>
                    ) : null}
                  </div>
                </li>
                <li
                  onClick={() => {
                    selectClick(2);
                    localStorage.setItem("bank", "BNI");
                  }}
                >
                  <div className="bank-wrapper">
                    <div className="bank-container">BNI</div>
                    <h5 className="bank-box">BNI Transfer</h5>
                    <div className="endpoint-icon">
                      {selected === 2 ? <img src={check} /> : null}
                    </div>
                  </div>
                </li>
                <li
                  onClick={() => {
                    selectClick(3);
                    localStorage.setItem("bank", "Mandiri");
                  }}
                >
                  <div className="bank-wrapper">
                    <div className="bank-container">Mandiri</div>
                    <h5 className="bank-box">Mandiri Transfer</h5>
                    <div className="endpoint-icon">
                      {selected === 3 ? <img src={check} /> : null}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="detail-container">
            <p className="detail-bold">Innova</p>
            <div className="detail-kapasitas">
              <i class="bi bi-people"></i>
              <p>6 - 8 orang</p>
            </div>
            <div className="total-container">
              <div>
                <p className="detail-thin" style={{ paddingTop: "15px" }}>
                  Total
                </p>
                <img
                  src={updown}
                  style={styleToggle}
                  onClick={() => {
                    setIsToggle(!isToggle);
                  }}
                />
                {/* <i class="bi bi-chevron-up"></i> */}
              </div>
              <p className="detail-bold">Rp 3.500.000</p>
            </div>
            {isToggle ? (
              <>
                <div className="detail-pembelian-container">
                  <p className="detail-bold">Harga</p>
                  <ul>
                    <li>
                      <div className="list-flex">
                        <p className="detail-thin">
                          Sewa Mobil Rp.500.000 x 7 Hari
                        </p>
                        <p className="detail-thin">Rp 3.500.000</p>
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
              <p className="detail-bold">Rp 3.500.000</p>
            </div>

            <button>Bayar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
