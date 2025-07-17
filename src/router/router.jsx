import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import MainLayoutPage from "../layout/MainLayoutPage";
import Home from "../pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayoutPage />}>
      <Route index element={<Home />} />
    </Route>
  )
);
