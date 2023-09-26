import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <Container className="text-center my-5  bg-banner ">
      <Row className="d-flex py-5 justify-content-center">
        <Col className="col-lg-10">
          <div className="text-white text-center pb-4 ">
            <h1 className="fw-bold fs-2 pt-4">
              Sewa Mobil di (Lokasimu) Sekarang
            </h1>
            <p className="w-50 mx-auto text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              to="/cari-mobil"
              className="btn text-white btn-mobile mt-3"
              style={{ backgroundColor: "#5CB85F" }}
            >
              Mulai Sewa Mobil
            </Link>
          </div>
        </Col>
      </Row>
      {/* <div class="container bg-banner text-center py-5 d-flex justify-content-center align-items-center flex-column">
        <h1 class="fw-bold">Sewa Mobil di (Lokasimu) Sekarang</h1>
        <p class="w-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <button class="btn btn-success">Mulai Sewa Mobil</button>
      </div> */}
    </Container>
  );
}

export default Banner;
