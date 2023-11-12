import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import CountDay from "../../../components/Countdown/CountDay";

// Mock localStorage
const localStorageMock = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("CountDay Component", () => {
  beforeAll(() => {
    
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    
    console.error.mockRestore();
  });

  it("renders the countdown and navigates after countdown reaches 0", async () => {
    render(
      <MemoryRouter>
        <CountDay />
      </MemoryRouter>
    );

    
    expect(screen.getByText(/^\d+:\d+:\d+$/)).toBeInTheDocument();

    
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
    });

   
    expect(localStorage.getItem("countdown")).toBeNull();

    
    expect(screen.getByText("masuk clear")).toBeInTheDocument();
  });

  it("handles localStorage value from previous session", async () => {
    
    localStorage.setItem("countdown", "120");

    render(
      <MemoryRouter>
        <CountDay />
      </MemoryRouter>
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); 
    });


    expect(screen.getByText("0:0:0")).toBeInTheDocument();


    localStorage.removeItem("countdown");

    
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 120000)); 
    });

    
    expect(localStorage.getItem("countdown")).toBeNull();

    
    expect(screen.getByText("masuk clear")).toBeInTheDocument();
  });
});
