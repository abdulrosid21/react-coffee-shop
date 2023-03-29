import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

function Navbar({ handleInputForm }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);

  const logout = async () => {
    try {
      await axios.post("users/logout");

      localStorage.clear();
      navigate("/");
      toast.info("Success logout from your account", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("Can't logout from your account", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <nav className="relative w-screen z-50">
        <ToastContainer />
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
          <div className="bg-white  overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-screen">
            <div className="mt-4">
              <ul className="">
                {token ? (
                  <>
                    <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                      <Link to="/admin"> Dashboard</Link>
                    </li>
                  </>
                ) : null}
                <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                  <Link to="/products">Product</Link>
                </li>
                <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                  <Link to="/cart"> Your Cart</Link>
                </li>
                <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                  <Link to="/your-order">History</Link>
                </li>
                {token ? (
                  <li
                    onClick={logout}
                    className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer"
                  >
                    Logout
                  </li>
                ) : (
                  <>
                    <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                      <Link to="/signin">Sign in</Link>
                    </li>
                    <li className="font-['Rubik'] text-xl font-semibold text-center my-2 text-[#4F5665] cursor-pointer">
                      <Link to="/signup">Sign Up</Link>
                    </li>
                  </>
                )}
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
              <Link to="/">Home</Link>
            </li>
            <li className="self-center mx-3 font-['Rubik'] text-[#4F5665] cursor-pointer">
              <Link to="/products">Product</Link>
            </li>
            <li className="self-center mx-3 font-['Rubik'] text-[#4F5665] cursor-pointer">
              <Link to="/cart">Your Cart</Link>
            </li>
            <li className="self-center mx-3 font-['Rubik'] text-[#4F5665] cursor-pointer">
              <Link to="/your-order"> History</Link>
            </li>
          </div>
          <div className="flex list-none">
            {token ? (
              <>
                <li className="self-center cursor-pointer mx-3 font-['Rubik'] text-[#4F5665]">
                  <div className="bg-[#EFEEEE] rounded-full flex">
                    <iconify-icon
                      icon="material-symbols:search"
                      style={{
                        fontSize: "30px",
                        justifyContent: " center",
                        margin: "auto auto auto 5px",
                      }}
                    />
                    <input
                      name="keyword"
                      onChange={handleInputForm}
                      className="border-transparent bg-transparent focus:border-transparent focus:ring-0 focus:border-0"
                    />
                  </div>
                </li>
                <li className="self-center cursor-pointer mx-3 font-['Rubik'] text-[#4F5665]">
                  <img
                    className="h-7"
                    src={require("../../assets/img/chat.png")}
                    alt="chat message"
                  />
                </li>
                <li className="self-center cursor-pointer mx-3 font-['Rubik'] text-[#4F5665]">
                  <img
                    onClick={() => setOpen(!open)}
                    className="h-10 w-10 rounded-full object-cover"
                    src={
                      user.image
                        ? process.env.REACT_APP_URL_CLOUDINARY + user.image
                        : `${process.env.REACT_APP_URL_CLOUDINARY}Coffee%20Shop/Basic_Ui__186_rcq7oe.jpg`
                    }
                    alt="Profile people"
                  />
                  {open && (
                    <div className="absolute bg-white top-28 p-3 rounded-xl right-0 lg:w-36">
                      <ul className="grid gap-2">
                        <Link to="/admin">
                          <li
                            onClick={() => setOpen(false)}
                            className="cursor-pointer hover:bg-brown hover:text-white font-['Rubik'] w-full"
                          >
                            Dashboard
                          </li>
                        </Link>
                        <Link to="/profile">
                          <li
                            onClick={() => setOpen(false)}
                            className="cursor-pointer hover:bg-brown hover:text-white font-['Rubik'] w-full"
                          >
                            Profile
                          </li>
                        </Link>
                        <Link to="/products">
                          <li
                            onClick={() => setOpen(false)}
                            className="cursor-pointer lg:hidden hover:bg-brown hover:text-white font-['Rubik'] w-full"
                          >
                            Product
                          </li>
                        </Link>
                        <Link to="/cart">
                          <li
                            onClick={() => setOpen(false)}
                            className="cursor-pointer lg:hidden hover:bg-brown hover:text-white font-['Rubik'] w-full"
                          >
                            Your Cart
                          </li>
                        </Link>
                        <li
                          onClick={logout}
                          className="cursor-pointer hover:bg-brown hover:text-white font-['Rubik'] w-full"
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
