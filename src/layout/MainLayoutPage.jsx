import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { useGetBasketQuery } from "../store/api";

const MainLayoutPage = () => {
  const [basket, setBasket] = useState([]);

  const { data: basketProducts } = useGetBasketQuery();
  useEffect(() => {
    if (basketProducts) {
      setBasket(basketProducts.items);
    }
  }, [basketProducts]);
  return (
    <>
      <Header basket={basket} />
      <Outlet context={[basket]} />
      <Footer />
    </>
  );
};
export default MainLayoutPage;
