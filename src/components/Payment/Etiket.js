import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, Container } from "reactstrap";
import button_download from "../../assets/images/button_download.png";
import icon_success from "../../assets/images/icon_success.png";
import HeaderStepper from "./HeadStepper";
import axios from "axios";
import { Spinner } from "reactstrap"; // Perubahan pada impor

function Etiket() {
  const { id } = useParams();
  const orderID = localStorage.getItem("order_id");
  const token = localStorage.getItem("token");
  const [order, setOrder] = useState({});
  const [uploadedSlip, setUploadedSlip] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          access_token: token,
        };
        const response = await axios.get(
          `https://api-car-rental.binaracademy.org/customer/order/${orderID}`,
          {
            headers: headers,
          }
        );

        // Simulasi penundaan selama 2 detik
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setOrder(response.data);

        // Assuming the slip information is in a field called 'slip' in the response
        const storedSlip = response.data.slip;

        if (storedSlip) {
          setUploadedSlip(storedSlip);

          // Menghapus local storage
          localStorage.removeItem("countdown");
          localStorage.removeItem("countdownMinute");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Setelah selesai fetching data, loading diubah menjadi false
      }
    };
    fetchData();
  }, [orderID, token]);

  const handleDownload = () => {
    if (uploadedSlip) {
      const link = document.createElement("a");
      link.href = uploadedSlip;
      link.download = "slip.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
              <button
                onClick={handleDownload}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <img
                  src={button_download}
                  alt="Download"
                  title="Download Slip"
                  style={{ width: "auto", height: "auto" }}
                />
              </button>
              </div>
            </Container>
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              uploadedSlip && (
                <img src={uploadedSlip} alt="Slip" style={{ width: "100%" }} />
              )
            )}
          </CardBody>
        </Card>
        <br />
      </div>
    </div>
  );
}

export default Etiket;
