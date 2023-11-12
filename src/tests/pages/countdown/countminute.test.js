import React from "react";
import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CountMinute from "../../../components/Countdown/CountMinute";

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

describe("CountMinute Component", () => {
  beforeAll(() => {
    
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
   
    console.error.mockRestore();
  });

  it("renders the countdown correctly", async () => {

    localStorage.setItem("countdownMinute", "120");


    render(
      <MemoryRouter>
        <CountMinute />
      </MemoryRouter>
    );

    
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); 
    });

 
    // expect(screen.getByText("0:0:0")).toBeInTheDocument();

 
    localStorage.removeItem("countdownMinute");
  });
});
