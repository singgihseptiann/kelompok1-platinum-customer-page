import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, Container } from "reactstrap";
import button_download from "../../assets/images/button_download.png";
import icon_success from "../../assets/images/icon_success.png";
import HeaderStepper from "./HeadStepper";
import axios from "axios";

function Etiket() {
  const { id } = useParams();
  const orderID = localStorage.getItem("order_id");
  const token = localStorage.getItem("token");
  const [order, setOrder] = useState({});
  const [uploadedSlip, setUploadedSlip] = useState(""); // Ganti URL dengan URL gambar yang sesuai

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          access_token: token,
        };
        console.log(orderID);
        const response = await axios.get(
          `https://api-car-rental.binaracademy.org/customer/order/${orderID}`,
          {
            headers: headers,
          }
        );
        console.log("Response from API:", response.data);
        setOrder(response.data);
        const storedSlip = JSON.parse(localStorage.getItem("slip")); // Perbaikan disini
        console.log("Stored slip:", storedSlip);
        if (storedSlip) {
          setUploadedSlip(storedSlip);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDownload = async () => {
    if (uploadedSlip) {
      try {
        const response = await fetch(uploadedSlip);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "slip.png"); // Menggunakan ekstensi .png untuk gambar PNG
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error downloading:", error);
      }
    }
  };

  return (
    <div style={{ marginTop: "-100px" }}>
      <HeaderStepper active={2} orderID={orderID} />
      <div className="text-center" style={{ marginTop: "50px" }}>
        <img src={icon_success} alt="success" />
        <br />
        <br />
        <h3>Pembayaran Berhasil!</h3>
        <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>

        <Card style={{ width: "50%", margin: "auto" }}>
          <CardBody>
            <Container
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <h3>Invoice</h3>
                <p>{orderID}</p>
              </div>
              <div>
                <button onClick={handleDownload}>
                  <img
                    src={button_download}
                    alt="Download"
                    title="Download Slip"
                    style={{ cursor: "pointer" }}
                  />
                </button>
              </div>
            </Container>
            {uploadedSlip && (
              <img src={uploadedSlip} alt="Slip" style={{ width: "100%" }} />
            )}
          </CardBody>
        </Card>
        <br />
      </div>
    </div>
  );
}

export default Etiket;
