
import React from "react";
import { render, screen } from "@testing-library/react";
import MainOutlet from "../../components/Outlet/Outlet";

jest.mock("react-router-dom", () => ({
  Outlet: jest.fn(() => null), 
}));

describe("MainOutlet Component", () => {
  test("renders component correctly", () => {
    render(<MainOutlet />);

    
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("our-services")).toBeInTheDocument();
    expect(screen.getByTestId("why-us")).toBeInTheDocument();
    expect(screen.getByTestId("testimony")).toBeInTheDocument();
    expect(screen.getByTestId("banner")).toBeInTheDocument();
    expect(screen.getByTestId("faq")).toBeInTheDocument();

    
    expect(screen.queryByTestId("outlet")).toBeNull();
  });

  
});
