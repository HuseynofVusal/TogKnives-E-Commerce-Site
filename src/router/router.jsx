import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import MainLayoutPage from "../layout/MainLayoutPage";
import Home from "../pages/Home";
import CheckoutPage from "../pages/CheckoutPage";
import About from "../pages/About";
import CategoriesPages from "../pages/CategoriesPages";
import ProductDetails from "../pages/Details/ProductDetails";
import Basket from "../pages/Basket";
import Search from "../pages/Search";
import AdminLayoutPage from "../layout/AdminLayoutPage";
import AdminPanel from "../components/Admin/AdminPanel";
import AdminLogin from "../components/Admin/AdminLogin";
import Login from "../pages/Login";
import Contact from "../pages/Contact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/main" element={<MainLayoutPage />}>
        <Route path="/main" element={<Home />} />
        <Route path="/main/about" element={<About />} />
        <Route path="/main/category" element={<CategoriesPages />} />
        <Route path="/main/product" element={<ProductDetails />} />
        <Route path="/main/basket" element={<Basket />} />
        <Route path="/main/search" element={<Search />} />
        <Route path="/main/checkout" element={<CheckoutPage />} />
        <Route path="/main/login" element={<Login />} />
        <Route path="/main/contact" element={<Contact />} />
      </Route>

      <Route path="/" element={<AdminLayoutPage />}>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/" element={<AdminLogin />} />
      </Route>
    </>
  )
);
