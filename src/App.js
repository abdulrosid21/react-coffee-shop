import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Signin from "./pages/Auth/signin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
