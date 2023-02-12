import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const RootLayout = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default RootLayout;
