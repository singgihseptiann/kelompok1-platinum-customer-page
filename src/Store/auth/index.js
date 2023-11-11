import { createSlice } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";

const initialState = {
  email: localStorage.getItem("email") || "",
  role: localStorage.getItem("role") || "",
  token: localStorage.getItem("token") || "",
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerAuth: (state, action) => {
      // Fetch the encryption key securely from the server or use a secure mechanism
      const encryptionKey = "your-secret-key";

      // Encrypt the token before storing it in local storage
      const encryptedToken = CryptoJS.AES.encrypt(action.payload.access_token, encryptionKey).toString();

      state.token = encryptedToken;
      state.email = action.payload.email;
      state.role = action.payload.role;

      localStorage.setItem("customer token", encryptedToken);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("role", action.payload.role);
    },

    remakeToken: (state, action) => {
      // Handle remakeToken if needed
    },
  },
});

export const { registerAuth } = auth.actions;
export default auth.reducer;
