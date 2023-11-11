// CariMobil.test.js
import { renderWithProviders } from "../../mocks/redux";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import CariMobil from "../../components/Mobil/CariMobil";

const server = setupServer(
  rest.get(
    "https://api-car-rental.binaracademy.org/customer/v2/car",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            cars: [
              { id: 1, name: "Car 1", category: "small", price: 100 },
              { id: 2, name: "Car 2", category: "medium", price: 150 },
            ],
          },
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetches data successfully from API", async () => {
  renderWithProviders(<CariMobil />);

  await waitFor(() => {
    expect(screen.getByText(/Car 1/i)).toBeInTheDocument();
  });
});
