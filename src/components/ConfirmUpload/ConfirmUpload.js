import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import blankimage from "../../assets/images/blankpict.svg";
import CountMinute from "../Countdown/CountMinute";
import "./confirmupload.css";
import axios from "axios";
import { Button } from "react-bootstrap";

const ConfirmUpload = () => {
  const [image, setImage] = useState(blankimage);
  const [photo, setPhoto] = useState("");
  const [isUpload, setIsUpload] = useState(false);
  const navigate = useNavigate();

  const handleImage = (e) => {
    setIsUpload(true);
    setImage(e.target.files[0]);
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleUploadPayment = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const order_id = localStorage.getItem("order_id");

    const formData = new FormData();
    formData.append("slip", image);

    // console.log(token);
    const api = `https://api-car-rental.binaracademy.org/customer/order/${order_id}/slip`;

    const configUploadPayment = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        access_token: token,
      },
    };

    try {
      const responses = await axios.put(api, formData, configUploadPayment);
      // console.log(responses);
      navigate(`/etiket`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="confirm-upload">
        <div className="confirm-count">
          <h3>Konfirmasi Pembayaran</h3>
          <CountMinute />
        </div>
        <p>
          Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan
          segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan
          konfirmasi.
        </p>
        <h4>Upload Bukti Pembayaran</h4>
        <p>
          Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload
          bukti bayarmu
        </p>
        <div className="upload-img">
          <div className="img">
            {isUpload ? (
              <img src={photo} alt="upload-img" />
            ) : (
              <img src={image} alt="upload-img" />
            )}
          </div>
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={handleImage}
          />
        </div>
        {image === blankimage ? (
          <button>
            <label htmlFor="input">Upload</label>
          </button>
        ) : (
          <button onClick={handleUploadPayment}>
            <label>Konfirmasi</label>
          </button>
        )}
      </div>
    </>
  );
};

export default ConfirmUpload;
