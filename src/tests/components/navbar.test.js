import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavigationBar from "../../components/Navbar";

describe("NavigationBar Component", () => {
  it("renders navigation links correctly", () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    );

    expect(screen.getByText("BCR")).toBeInTheDocument();
    expect(screen.getByText("Our Services").closest("a")).toHaveAttribute("href", "/services");
    expect(screen.getByText("Why Us").closest("a")).toHaveAttribute("href", "/why-us");
    expect(screen.getByText("Testimonial").closest("a")).toHaveAttribute("href", "/testimony");
    expect(screen.getByText("FAQ").closest("a")).toHaveAttribute("href", "/faq");
  });

  it("handles logout correctly", async () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    );

    
    const localStorageMock = jest.spyOn(global.localStorage, "removeItem");

    
    fireEvent.click(screen.getByText("Logout"));

    
    await waitFor(() => {
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByRole("status")).toBeNull();
    });

    
    expect(localStorageMock).toHaveBeenCalledWith("customer token");

    
    expect(window.location.pathname).toBe("/home");
  });

  it("renders register button correctly", () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    );

    
    expect(screen.getByText("Register").closest("a")).toHaveAttribute("href", "/signup");
  });
});
