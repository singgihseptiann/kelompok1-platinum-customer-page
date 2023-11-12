import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import SignupPage from "../../../pages/Signup/Signup";

// Mock axios
jest.mock("axios");

describe("SignupPage Component", () => {
  it("renders the signup form and handles successful registration", async () => {
    // Mock a successful registration response
    axios.post.mockResolvedValueOnce({
      status: 201,
    });

    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    );

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "password123" } });

    // Submit the form
    fireEvent.click(screen.getByText(/daftar/i));

    // Wait for the success message
    await waitFor(() => expect(screen.getByText(/registration successfully/i)).toBeInTheDocument());
  });

  it("handles registration failure and displays error message", async () => {
    // Mock a failed registration response
    axios.post.mockRejectedValueOnce({
      response: {
        status: 400,
        data: "Email Already Exists. Please check your account",
      },
    });

    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    );

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "password123" } });

    // Submit the form
    fireEvent.click(screen.getByText(/daftar/i));

    // Wait for the error message
    await waitFor(() => expect(screen.getByText(/email sudah terdaftar/i)).toBeInTheDocument());
  });
});
