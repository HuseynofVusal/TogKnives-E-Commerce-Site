import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import MainLayoutPage from "../layout/MainLayoutPage";
import Home from "../pages/Home";
import About from "../pages/About";
import CategoriesPages from "../pages/CategoriesPages";
import ProductDetails from "../pages/Details/ProductDetails";
import Basket from "../pages/Basket";
import LoginLayoutPage from "../layout/LoginLayoutPage";
import Login from "../components/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/main" element={<MainLayoutPage />}>
        <Route path="/main" element={<Home />} />
        <Route path="/main/about" element={<About />} />
        <Route path="/main/category" element={<CategoriesPages />} />
        <Route path="/main/product" element={<ProductDetails />} />
        <Route path="/main/basket" element={<Basket />} />
      </Route>
      <Route path="/" element={<LoginLayoutPage />}>
        <Route path="/" element={<Login />} />
      </Route>
    </>
  )
);
