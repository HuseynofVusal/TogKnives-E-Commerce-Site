import React, { createContext, useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const SebetContext = createContext();
const MainLayoutPage = () => {
  const [basket, setBasket] = useState(['1']);

  return (
    <SebetContext value={{ basket, setBasket }}>
      <Header />
      <Outlet />
      <Footer />
    </SebetContext>
  );
};
export default MainLayoutPage;
export { SebetContext };
