import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";
import { MemoryRouter } from "react-router-dom";

describe("Footer Component", () => {
  it("renders contact information correctly", () => {
    render(<Footer />);

    expect(screen.getByText("Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000")).toBeInTheDocument();
    expect(screen.getByText("binarcarrental@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("081-233-334-808")).toBeInTheDocument();
  });

  it("renders navigation links correctly", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText("Our services").closest("a")).toHaveAttribute("href", "/services");
    expect(screen.getByText("Why Us").closest("a")).toHaveAttribute("href", "/why-us");
    expect(screen.getByText("Testimonial").closest("a")).toHaveAttribute("href", "/testimony");
    expect(screen.getByText("FAQ").closest("a")).toHaveAttribute("href", "/faq");
  });

  it("renders social media links correctly", () => {
    render(<Footer />);

    expect(screen.getByTestId("facebook-link")).toHaveAttribute("href", "https://www.instagram.com/singgihseptiann/");
    expect(screen.getByTestId("instagram-link")).toHaveAttribute("href", "https://www.instagram.com/singgihseptiann/");
    expect(screen.getByTestId("twitter-link")).toHaveAttribute("href", "https://twitter.com/Imgoingback5O5");
    expect(screen.getByTestId("award-link")).toHaveAttribute("href", "https://www.instagram.com/singgihseptiann/");
    expect(screen.getByTestId("linkedin-link")).toHaveAttribute("href", "https://www.linkedin.com/in/singgihseptian/");
  });

  it("renders copyright and home link correctly", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText("Copyright Binar 2022")).toBeInTheDocument();
    expect(screen.getByTestId("home-link")).toHaveAttribute("href", "/home");
  });
});
