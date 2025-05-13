import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "./components/Home/Home";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Home/> */}
      <Footer />
    </>
  );
};

export default Layout;
