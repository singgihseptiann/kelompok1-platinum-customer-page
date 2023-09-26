// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NavigationBar from "./components/Navbar";
// import MainOutlet from "./components/Outlet/Outlet"; // Menggunakan komponen MainOutlet
// import Footer from "./components/Footer";
// import CariMobil from "./components/Mobil/CariMobil";
// import HasilPencarian from "./components/Mobil/HasilPencarian";
// import DetailMobil from "./components/Mobil/DetailMobil";
// import "./styles/style.css";

// import HeroSection from "./components/Content/HeroSection";
// function App() {
//   return (
//     <Router>
//       <div>
//         <div className="custom-navbar font">
//           <NavigationBar />
//           <HeroSection />
//         </div>
//         <Routes>
//           <Route path="" element={<MainOutlet />} />
//           {/* <Route path="/services" element={<MainOutlet />} />
//           <Route path="/why-us" element={<MainOutlet />} />
//           <Route path="/testimony" element={<MainOutlet />} />
//           <Route path="/faq" element={<MainOutlet />} /> */}
//           <Route path="/cari-mobil" element={<CariMobil />} />
//           <Route path="/hasil-cari" element={<HasilPencarian />} />
//           <Route path="/detail-mobil" element={<DetailMobil />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainOutlet from "./components/Outlet/Outlet"; // Menggunakan komponen MainOutlet
import CariMobil from "./components/Mobil/CariMobil";
import HasilPencarian from "./components/Mobil/HasilPencarian";
import DetailMobil from "./components/Mobil/DetailMobil";
import Services from "./components/Content/OurServices";
import WhyUsPage from "./components/Content/WhyUs";
import Testimony from "./components/Content/Testimony";
import Faq from "./components/Content/Faq";
import "./styles/style.css";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MainOutlet />} />
          <Route path="/home" element={<MainOutlet />} />
          <Route path="/cari-mobil" element={<CariMobil />} />
          <Route path="/hasil-cari" element={<HasilPencarian />} />
          <Route path="/detail-mobil/:id" element={<DetailMobil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
