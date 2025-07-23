import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import MainLayoutPage from "../layout/MainLayoutPage";
import Home from "../pages/Home";
import About from "../pages/About";
import CategoriesPages from "../pages/CategoriesPages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayoutPage />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/category" element={<CategoriesPages />} />
      
    </Route>
  )
);
