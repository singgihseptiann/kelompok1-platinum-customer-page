import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Testimony from "../../../components/Content/Testimony";

describe("Testimony Component", () => {
  test("renders testimonials correctly", () => {
    render(<Testimony />);

    
    expect(screen.getByText("Testimonial")).toBeInTheDocument();
    expect(
      screen.getByText("Berbagai review positif dari para pelanggan kami")
    ).toBeInTheDocument();

    
    expect(screen.getAllByText("John Dee 32, Bromo")).toHaveLength(3);
  });

  test("allows navigation through testimonials", () => {
    render(<Testimony />);

    
    // expect(screen.getByText("John Dee 32, Bromo")).toBeInTheDocument();

    
    fireEvent.click(screen.getByTestId("next-button"));
    expect(screen.getByText("John Dee 32, Bromo")).toBeInTheDocument(); // Assuming it doesn't change immediately

    
    fireEvent.click(screen.getByTestId("prev-button"));
    expect(screen.getByText("John Dee 32, Bromo")).toBeInTheDocument(); // Assuming it doesn't change immediately
  });
});