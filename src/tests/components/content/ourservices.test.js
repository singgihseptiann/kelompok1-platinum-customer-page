import React from "react";
import { render, screen } from "@testing-library/react";
import OurServices from "../../../components/Content/OurServices";

describe("OurServices Component", () => {
  it("renders services content correctly", () => {
    render(<OurServices />);

    
    expect(screen.getByText("Best Car Rental for any kind of trip in (Lokasimu)!")).toBeInTheDocument();
    expect(screen.getByText("Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.")).toBeInTheDocument();

    
    expect(screen.getByText("Sewa Mobil Dengan Supir di Bali 12 Jam")).toBeInTheDocument();
    expect(screen.getByText("Sewa Mobil Lepas Kunci di Bali 24 Jam")).toBeInTheDocument();
    expect(screen.getByText("Sewa Mobil Jangka Panjang Bulanan")).toBeInTheDocument();
    expect(screen.getByText("Gratis Antar - Jemput Mobil di Bandara")).toBeInTheDocument();
    expect(screen.getByText("Layanan Airport Transfer / Drop In Out")).toBeInTheDocument();
  });

  
});
