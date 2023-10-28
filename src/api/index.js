import { handler } from "./handler";

export default {
  loginAdmin: (body, queryParams) =>
    handler.post("/customer/auth/login", body, { params: queryParams }),
  getCars: (queryParams) =>
    handler.get("/customer/v2/car", { params: queryParams }),
  getCarById: (id, queryParams) =>
    handler.get(`/customer/car/${id}`, { params: queryParams }),
  putCarById: (id, body) => handler.put(`/customer/car/${id}`, body),
  putSlip: (orderId, body) => handler.put(`/customer/order/${orderId}/slip`, body),
};
