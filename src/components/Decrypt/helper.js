import CryptoJS from "crypto-js";

const secretKey = "rahasia";

// localStorage.setItem("id_car", id);
// const dataToEncrypt = {
//   id_car: id,
//   start_rent: startDate,
//   end_rent: endDate,
//   // tambahkan data lainnya yang perlu disimpan
// };

export const encryptData = (data) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretKey
  ).toString();
  return encryptedData;
};

export const decryptData = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
