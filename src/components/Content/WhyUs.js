import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap-icons/bootstrap-icons.css";

function WhyUs() {
  return (
    <Container
      className="my-5  animate__animated animate__bounce"
      id="why-us-section"
    >
      <Row className="d-flex justify-content-center">
        <Col>
          <h1 className="fw-bold Why-us">Why Us?</h1>
          <p className="fw-bold car-rental">
            Mengapa harus pilih Binar Car Rental?
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={6} lg={3} className="my-2">
          <Card
            style={{
              height: "13rem",
              margin: "0 10px",
              transition: "transform 0.3s ease-in-out",
            }}
            className="yellow hover-3d"
          >
            <Card.Body className="">
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#F9CC00",
                }}
              >
                <i className="bi bi-hand-thumbs-up text-white"></i>
              </span>
              <Card.Title className="fw-bold">Mobil Lengkap</Card.Title>
              <Card.Text className="fw-bold">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3} className="my-2">
          <Card
            style={{
              height: "13rem",
              margin: "0 10px",
              transition: "transform 0.3s ease-in-out",
            }}
            className="red hover-3d"
          >
            <Card.Body>
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#FA2C5A",
                }}
              >
                <i className="bi bi-tag text-white"></i>
              </span>
              <Card.Title className="fw-bold">Harga Murah</Card.Title>
              <Card.Text className="fw-bold">
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3} className="my-2">
          {" "}
          <Card
            style={{
              height: "13rem",
              margin: "0 10px",
              transition: "transform 0.3s ease-in-out",
            }}
            className="blue hover-3d"
          >
            <Card.Body>
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#0D28A6",
                }}
              >
                <i className="bi bi-clock text-white"></i>
              </span>
              <Card.Title className="fw-bold">Layanan 24 Jam</Card.Title>
              <Card.Text className="fw-bold">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3} className="my-2">
          {" "}
          <Card
            style={{
              height: "13rem",
              margin: "0 10px",
              transition: "transform 0.3s ease-in-out",
            }}
            className="green hover-3d"
          >
            <Card.Body>
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#5CB85F",
                }}
              >
                <i className="bi bi-award text-white"></i>
              </span>
              <Card.Title className="fw-bold">Sopir Profesional</Card.Title>
              <Card.Text className="fw-bold">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WhyUs;
