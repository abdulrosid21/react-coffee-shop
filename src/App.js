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
import HistoryOrder from "./pages/Users/historyOrder";
import Notfound from "./pages/notfound";
import Order from "./pages/Order";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-password" element={<EditPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-history" element={<HistoryOrder />} />
          <Route path="/*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
