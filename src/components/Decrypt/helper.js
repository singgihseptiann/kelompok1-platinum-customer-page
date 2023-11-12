import CryptoJS from "crypto-js";

// const secretKey = "rahasia";
const encryptionKey = "your-secret-key";

// localStorage.setItem("id_car", id);
// const dataToEncrypt = {
//   id_car: id,
//   start_rent: startDate,
//   end_rent: endDate,
//   // tambahkan data lainnya yang perlu disimpan
// };

// export const encryptData = (data) => {
//   const encryptedData = CryptoJS.AES.encrypt(
//     JSON.stringify(data),
//     encryptionKey
//   ).toString();
//   return encryptedData;
// };

export const encryptData = (token) => {
  const encryptedToken = CryptoJS.AES.encrypt(token, encryptionKey).toString();
  return encryptedToken;
};

// export const decryptData = (encryptedData) => {
//   const bytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
//   const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//   return decryptedData;
// };

export const decryptData = (encryptedToken) => {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedToken, encryptionKey);
  const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedToken;
};
