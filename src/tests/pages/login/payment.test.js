import axios from "axios";
import renderer from "react-test-renderer";
import { describe, expect, test } from "@jest/globals";
import { fireEvent, screen, waitFor } from "@testing-library/react";

import {
  rawRenderWithProviders,
  renderWithProviders,
} from "../../../mocks/redux";
import { mockLocalStorage } from "../../../mocks/localStorage";
import Payment from "../../../components/FirstPayment/Payment";

jest.mock("axios");

test("fetches data successfully from API", async () => {
  const mockedData = { name: "Innova", category: "medium", price: 200 };
  axios.get.mockResolvedValueOnce({ data: mockedData });

  renderWithProviders(<Payment />);
  await waitFor(() => {
    expect(screen.getByText(/Innova/i)).toBeInTheDocument();
  });
});

test("calls handlePayment function when payment button is clicked", () => {
  renderWithProviders(<Payment />);
  const handlePaymentMock = jest.fn();
  jest
    .spyOn(Payment.prototype, "handlePayment")
    .mockImplementation(handlePaymentMock);

  const paymentButton = screen.getByText(/Bayar/i);
  fireEvent.click(paymentButton);

  expect(handlePaymentMock).toHaveBeenCalled();
});

test("selects BCA bank option and updates state", () => {
  renderWithProviders(<Payment />);
  const bcaBankOption = screen.getByText(/BCA Transfer/i);
  fireEvent.click(bcaBankOption);
  expect(localStorage.getItem("bank")).toBe("BCA");
});

test("renders car name correctly", () => {
  renderWithProviders(<Payment />);
  const carNameElement = screen.getByText(/Nama\/Tipe Mobil/i);
  expect(carNameElement).toBeInTheDocument();
});
