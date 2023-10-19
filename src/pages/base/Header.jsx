import React from "react";
import NavigationBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";
const Header = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Header;
