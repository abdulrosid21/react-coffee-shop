import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Signin from "./pages/Auth/signin";
import Signup from "./pages/Auth/signup";
import Forgotpassword from "./pages/Auth/forgotpassword";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
