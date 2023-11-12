import CryptoJS from "crypto-js";

// Ensure that encryptionKey is defined
const encryptionKey = "your-secret-key";

export const encryptData = (token) => {
  const encryptedToken = CryptoJS.AES.encrypt(token, encryptionKey).toString();
  return encryptedToken;
};

export const decryptData = (encryptedToken) => {
  try {
    // Check if encryptedToken is not empty
    if (!encryptedToken) {
      throw new Error("Encrypted token is empty");
    }

    const decryptedBytes = CryptoJS.AES.decrypt(encryptedToken, encryptionKey);
    const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);

    // Check if decryptedToken is not empty
    if (!decryptedToken) {
      throw new Error("Decryption failed");
    }

    return decryptedToken;
  } catch (error) {
    // console.error("Error decrypting data:", error);
    return null;
  }
};
