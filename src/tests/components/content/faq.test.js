import React from "react";
import { render, screen } from "@testing-library/react";
import Faq from "../../../components/Content/Faq";

describe("Faq Component", () => {
  it("renders FAQ content correctly", () => {
    render(<Faq />);

    
    expect(screen.getByText("Frequently Asked Question")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing")).toBeInTheDocument();

    
    expect(screen.getByText("Apa saja syarat yang dibutuhkan?")).toBeInTheDocument();
    expect(screen.getByText("Berapa hari minimal sewa mobil lepas kunci?")).toBeInTheDocument();
    expect(screen.getByText("Berapa hari sebelumnya sabaiknya booking sewa mobil?")).toBeInTheDocument();
    expect(screen.getByText("Apakah Ada biaya antar-jemput?")).toBeInTheDocument();
    expect(screen.getByText("Bagaimana jika terjadi kecelakaan")).toBeInTheDocument();
  });

  
});
