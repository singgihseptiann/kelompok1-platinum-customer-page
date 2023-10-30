import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./countdown.css";

const CountMinute = () => {
  const [countdown, setCountdown] = useState(
    parseInt(localStorage.getItem("countdownMinute")) || 600
  );

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountDown = prevCountdown - 1;

        localStorage.setItem("countdownMinute", newCountDown);

        if (newCountDown <= 0) {
          clearInterval(interval);
          console.log("masuk clear");
          localStorage.removeItem("countdown");
          navigate("/payment-desc");
        }
        return newCountDown;
      });
    }, 1000); // Perbarui setiap 1 detik

    return () => {
      clearInterval(interval); // Bersihkan interval saat komponen tidak lagi digunakan
    };
  }, []);

  const seconds = countdown % 60;
  const minutes = Math.floor((countdown / 60) % 60);
  const hours = Math.floor(countdown / 3600);
  return (
    <>
      <div>
        <div>
          <section className="count1day">
            <div className="clock1">
              <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CountMinute;
