import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Signin from "./pages/Auth/signin";
import Signup from "./pages/Auth/signup";
import Forgotpassword from "./pages/Auth/forgotpassword";
import Products from "./pages/Products";
import ProductsDetails from "./pages/Products/details";
import Profile from "./pages/Users";
import EditPassword from "./pages/Users/editPassword";
import ResetPassword from "./pages/Auth/resetpassword";
import HistoryOrder from "./pages/Order/historyOrder";
import Notfound from "./pages/notfound";
import Order from "./pages/Order";
import DetailOrder from "./pages/Order/detailOrder";
import Dashboard from "./pages/Admin";
import CreateMenus from "./pages/Admin/createMenus";
import CreatePromo from "./pages/Admin/createPromo";
import PublicRoute from "./utils/route/publicRoute";
import PrivateRoute from "./utils/route/privateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password/:id" element={<ResetPassword />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-password" element={<EditPassword />} />
          <Route path="/cart" element={<Order />} />
          <Route path="/your-order" element={<HistoryOrder />} />
          <Route path="/your-order/:id" element={<DetailOrder />} />
        </Route>
        <Route element={<PrivateRoute isAdmin />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/create-menu" element={<CreateMenus />} />
          <Route path="/admin/create-promo" element={<CreatePromo />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
