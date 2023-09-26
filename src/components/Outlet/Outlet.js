import React from "react";
import { Outlet } from "react-router-dom";

import OurServices from "../Content/OurServices";
import WhyUs from "../Content/WhyUs";
import Testimony from "../Content/Testimony";
import Banner from "../Content/Banner";
import Faq from "../Content/Faq";
import HeroSection from "../Content/HeroSection";

function MainOutlet() {
  return (
    <div>
      <div>
        <HeroSection />
        <OurServices />
        <WhyUs />
        <Testimony />
        <Banner />
        <Faq />
        <Outlet />
      </div>
    </div>
  );
}

export default MainOutlet;
