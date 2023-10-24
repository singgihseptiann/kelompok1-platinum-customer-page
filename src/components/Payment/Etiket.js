import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { useParams } from "react-router-dom";
import { Card, CardBody, Container } from "reactstrap";

import { handler } from "../../api/handler";

import button_download from "../../assets/images/button_download.png";
import icon_success from "../../assets/images/icon_success.png";
// import HeaderStepper from './HeaderStepper';

function Etiket() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [order, setOrder] = useState(null); // Moved this line up

  const { orderId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await handler.get(`/admin/orders/${orderId}`, {
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
      {/* <HeaderStepper /> */}
      <div
        style={{
          height: "130px",
          backgroundColor: "#F1F3FF",
          position: "relative",
          zIndex: "-2",
        }}
      >
        <br />
      </div>
      <br />
      <br />
      <Container>
        <div className="text-center">
          <img src={icon_success} alt="success" />
          <br />
          <br />
          <h3>Pembayaran Berhasil!</h3>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </div>
        <Card style={{ width: "50%", margin: "auto" }}>
          <CardBody>
            <Container
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <h3>Invoice</h3>
                <p>{order?.invoiceNumber}</p>
              </div>
              <div>
                <a href={order?.slip} download="Slip.pdf">
                  <img src={button_download} alt="download" />
                </a>
              </div>
            </Container>
            <div>
              {order?.slip ? (
                <Document
                  file={order.slip}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
              ) : (
                <p>Slip is not available</p>
              )}
              <p>{/* Page {pageNumber} of {numPages} */}</p>
            </div>
          </CardBody>
        </Card>
      </Container>
      <br />
    </div>
  );
}

export default Etiket;
