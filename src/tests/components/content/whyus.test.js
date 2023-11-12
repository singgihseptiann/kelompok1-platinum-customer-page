import React from "react";
import { render, screen } from "@testing-library/react";
import WhyUs from "../../../components/Content/WhyUs";

describe("WhyUs Component", () => {
  test("renders component correctly", () => {
    render(<WhyUs />);

    
    expect(screen.getByText("Why Us?")).toBeInTheDocument();
    expect(
      screen.getByText("Mengapa harus pilih Binar Car Rental?")
    ).toBeInTheDocument();

    
    const cardTitles = [
      "Mobil Lengkap",
      "Harga Murah",
      "Layanan 24 Jam",
      "Sopir Profesional",
    ];

    const cardTexts = [
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    ];

    for (let i = 0; i < cardTitles.length; i++) {
      expect(screen.getByText(cardTitles[i])).toBeInTheDocument();
      expect(screen.getByText(cardTexts[i])).toBeInTheDocument();
    }
  });

  
});