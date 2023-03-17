import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="relative w-screen overflow-hidden">
        <div className="lg:hidden p-5">
          <input
            className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"
            type="checkbox"
            name=""
            id=""
          />

          <Link to="/">
            <div className="flex items-stretch">
              <img
                className="h-10"
                src={require("../../assets/img/coffee.png")}
                alt="Logo Coffee Shop"
              />
              <h1 className="font-['Rubik'] font-bold text-lg self-center">
                Coffee Shop
              </h1>
            </div>
          </Link>
          <div className="lg:hidden absolute top-6 right-5 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <div className="space-y-2">
              <span className="block w-8 h-1 bg-gray-600" />
              <span className="block w-8 h-1 bg-gray-600" />
              <span className="block w-8 h-1 bg-gray-600" />
            </div>
          </div>
          <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-screen">
            <div className="mt-4">
              <ul className="">
                <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                  <Link to="/">Sign in</Link>
                </li>
                <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                  Product
                </li>
                <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                  Your Chart
                </li>
                <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                  History
                </li>
                <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                  <Link to="/signin">Sign in</Link>
                </li>
                <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-between p-7">
          <Link to="/">
            <div className="flex items-stretch cursor-pointer">
              <img
                className="h-7 self-center"
                src={require("../../assets/img/coffee.png")}
                alt="Logo Coffee Shop
          "
              />
              <h1 className="self-center font-['Rubik'] mx-2">Coffee Shop</h1>
            </div>
          </Link>
          <div className="list-none flex items-stretch">
            <li className="self-center mx-3 font-['Rubik'] text-[#4F5665] cursor-pointer active:text-[#6A4029]">
              Home
            </li>
            <li className="self-center mx-3 font-['Rubik'] text-[#4F5665] cursor-pointer">
              Product
            </li>
            <li className="self-center mx-3 font-['Rubik'] text-[#4F5665] cursor-pointer">
              Your Cart
            </li>
            <li className="self-center mx-3 font-['Rubik'] text-[#4F5665] cursor-pointer">
              History
            </li>
          </div>
          <div>
            <Link to="/signin">
              <button
                type="button"
                className="h-10 mx-2 w-16 font-['Rubik'] text-[#4F5665]"
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                type="button"
                className="h-10 bg-[#FFBA33] rounded-2xl mx-2 w-20 text-white font-['Rubik"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
