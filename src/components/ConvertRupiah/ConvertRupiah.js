import React from "react";

const ConvertRupiah = ({ value }) => {
  const formatToRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
  const rupiah = formatToRupiah(value);

  return (
    <div style={{ marginTop: "16px" }}>
      <p>{rupiah}</p>
    </div>
  );
};

export default ConvertRupiah;
