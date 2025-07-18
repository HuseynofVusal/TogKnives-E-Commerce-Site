import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const MainLayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayoutPage;
