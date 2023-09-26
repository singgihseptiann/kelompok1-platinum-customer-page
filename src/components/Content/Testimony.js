import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import img1 from "../../assets/images/img_photo.png";
import img2 from "../../assets/images/img_photo2.png";

function Testimony() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      stars: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      nama: "John Dee 32, Bromo",
      image: img1,
    },
    {
      stars: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      nama: "John Dee 32, Bromo",
      image: img2,
    },
    {
      stars: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      nama: "John Dee 32, Bromo",
      image: img1,
    },
  ];

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="#F9CC00"
          style={{ marginRight: "2px" }} // Mengatur margin antara bintang
        >
          <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
        </svg>
      );
    }
    return stars;
  };

  const getTestimonialsToDisplay = () => {
    const displayedTestimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length;
      displayedTestimonials.push(testimonials[index]);
    }
    return displayedTestimonials;
  };

  return (
    <Container
      fluid
      className="my-5 animate__animated animate__bounce"
      id="testimony-section"
    >
      <Row>
        <Col>
          <div className="text-center mb-5">
            <h1 className="fw-bold">Testimonial</h1>
            <p className="fw-bold">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        {getTestimonialsToDisplay().map((testimonial, index) => (
          <Col key={index} xs={12} md={4} className="mb-2">
            <div
              className="text-black pb-4 rounded-2"
              style={{ background: "#F1F3FF" }}
            >
              <div className="d-flex align-items-center ">
                {testimonial.image && (
                  <div
                    className="text-center me-3"
                    style={{ flex: "0 0 70px" }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.nama}
                      width="70"
                    />
                  </div>
                )}
                <div>
                  <div className="fw-bold fs-2 ">
                    {getStars(testimonial.stars)}
                  </div>
                  <p className=" fw-bold">{testimonial.content}</p>
                  <p className=" fw-bold">{testimonial.nama}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-2">
        <Button
          variant="outline-success rounded-circle mx-2"
          onClick={prevTestimonial}
        >
          <BsChevronLeft className="text-black" />
        </Button>
        <Button
          variant="outline-success rounded-circle mx-2"
          onClick={nextTestimonial}
        >
          <BsChevronRight className="text-black" />
        </Button>
      </div>
    </Container>
  );
}

export default Testimony;
