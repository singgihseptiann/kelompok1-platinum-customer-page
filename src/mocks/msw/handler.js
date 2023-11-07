import { rest } from "msw";

const baseUrl = "https://api-car-rental.binaracademy.org";

export const handler = [
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
    return res(ctx.status(400), ctx.json({ code: 400, message: "Email or password is incorrect" }));
  }),
];
