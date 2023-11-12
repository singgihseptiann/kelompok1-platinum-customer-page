import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Banner from "../../../components/Content/Banner";

describe("Banner Component", () => {
  it("renders banner content correctly", () => {
    render(
      <MemoryRouter>
        <Banner />
      </MemoryRouter>
    );

    
    expect(screen.getByText("Sewa Mobil di (Lokasimu) Sekarang")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();

    
    const button = screen.getByRole("link", { name: /mulai sewa mobil/i });
    expect(button).toBeInTheDocument();
    expect(button.getAttribute("href")).toBe("/cari-mobil");
  });

  
});
