import { rest } from "msw";

const baseUrl = "https://api-car-rental.binaracademy.org";

export const handlers = [
  // Existing handler for login endpoint
  rest.post(`${baseUrl}/customer/auth/login`, async (req, res, ctx) => {
    const { email } = await req.json();
    if (email === "customer@bcr.io") {
      return res(
        ctx.status(201),
        ctx.json({
          email: "customer@bcr.io",
          role: "Customer",
          access_token: "dummy-token",
        })
      );
    }
    return res(
      ctx.status(400),
      ctx.json({ code: 400, message: "Email or password is incorrect" })
    );
  }),

  // New handler for getCars endpoint
  rest.get(`${baseUrl}/customer/v2/car`, async (req, res, ctx) => {
    // You can customize the response based on your test case
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          cars: [
            // Add sample car data here
            { id: 1, name: "Car 1", category: "small", price: 100 },
            { id: 2, name: "Car 2", category: "medium", price: 150 },
            // Add more cars as needed
          ],
        },
      })
    );
  }),
];
