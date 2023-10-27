import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { useParams } from "react-router-dom";
import { Card, CardBody, Container } from "reactstrap";
import { handler } from "../../api/handler";
import button_download from "../../assets/images/button_download.png";
import icon_success from "../../assets/images/icon_success.png";
import HeaderStepper from "./HeadStepper"; 

function Etiket() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [order, setOrder] = useState(null);

  const { orderId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await handler.get(`/customer/order/${orderId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response);
        setOrder(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [orderId]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(0);
  };

  return (
    <div>
      <HeaderStepper active={3} orderID={orderId} />
      <div className="text-center">
        <img src={icon_success} alt="success" />
        <br />
        <br />
        <h3>Pembayaran Berhasil!</h3>
        <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>

        <Card style={{ width: "50%", margin: "auto" }}>
          <CardBody>
            <Container style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h3>Invoice</h3>
                <p>{order?.invoiceNumber}</p>
              </div>
              <div>
                <a href={order?.slip} download="Slip.pdf">
                  <img 
                  src={button_download} 
                  alt="Download" 
                  title="Download Slip"
                  style={{ cursor: 'pointer' }} />
                </a>
              </div>
            </Container>
            <div>
              {order?.slip ? (
                <Document file={order.slip} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document>
              ) : (
                <p>Slip is not available</p>
              )}
            </div>
          </CardBody>
        </Card>
        <br />
      </div>
    </div>
  );
}

export default Etiket;
