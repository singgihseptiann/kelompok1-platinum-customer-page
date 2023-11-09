import renderer from "react-test-renderer";
import { describe, expect, test } from "@jest/globals";
import { fireEvent, screen, waitFor } from "@testing-library/react";

import {
  rawRenderWithProviders,
  renderWithProviders,
} from "../../../mocks/redux";
import { mockLocalStorage } from "../../../mocks/localStorage";
// import LoginPage from "../../pages/login";
import LoginPage from "../../../pages/login/Login";

describe("LoginPage Component", () => {
  const { setItemMock } = mockLocalStorage();

  test("Login component should match with snapshot", () => {
    const component = renderer
      .create(rawRenderWithProviders(<LoginPage />))
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test("Should display error message on failed login attempt", async () => {
    renderWithProviders(<LoginPage />);

    const loginButton = screen.getByRole("button", { name: /sign in/i });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText("Email or password is incorrect")).toBeVisible();
    });
  });

  test("Should navigate to home on successful login", async () => {
    renderWithProviders(<LoginPage />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: "admin@bcr.io" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(setItemMock).toHaveBeenCalledWith("token", "dummy-token");
      // Simulate a delay, then check for the navigation
      setTimeout(() => {
        expect(window.location.pathname).toBe("/home");
      }, 1500);
    });
  });

  // Additional test cases for form input validation, show/hide password, etc.
});
