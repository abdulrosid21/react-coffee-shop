/* eslint-disable no-console */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../utils/redux/action/signin";
import { getDataUser } from "../../utils/redux/action/userId";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleInputForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      const result = await dispatch(signin(form));
      localStorage.setItem("token", result.value.data.token);
      await dispatch(getDataUser());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="flex">
      <section className="hidden sm:flex flex-1 bg-image-primary min-h-screen bg-cover bg-center" />
      <section className="flex-1 bg-image-primary bg-cover sm:bg-none grid w-full">
        <div className="bg-white opacity-95 sm:rounded-xl p-2 grid gap-3">
          <div className="p-3">
            <header className="flex justify-between">
              <div className="text-brown font-['Rubik'] font-semibold flex gap-2">
                <img
                  className="h-7"
                  src={require("../../assets/img/coffee.png")}
                  alt=""
                />
                <h1 className="content-center my-auto text-lg">Coffee Shop</h1>
              </div>
              <h1 className="text-brown font-['Rubik'] text-xl font-semibold content-center my-auto">
                Login
              </h1>
            </header>
          </div>
          <form className="form flex flex-col justify-center mx-auto gap-2 p-3 w-full sm:w-[80%] md:w-[70%]">
            <div>
              <label className="font-['Rubik'] text-brown font-semibold text-sm">
                Email:
              </label>
              <div className="border-2 rounded-xl">
                <input
                  className="w-full bg-transparent border-transparent focus:border-transparent focus:ring-0 placeholder:text-sm"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleInputForm}
                />
              </div>
            </div>
            <div>
              <label
                className="font-['Rubik'] text-brown font-semibold text-sm"
                htmlFor=""
              >
                Password:
              </label>
              <div className="border-2 rounded-xl">
                <input
                  className="w-full bg-transparent border-transparent focus:border-transparent focus:ring-0 placeholder:text-sm"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleInputForm}
                />
              </div>
            </div>
            <Link to="/forgotpassword">
              <h1 className="font-['Rubik'] cursor-pointer text-brown font-semibold underline text-xs">
                Forgot Password?
              </h1>
            </Link>
            <button
              type="button"
              onClick={handleSignIn}
              className="h-12 rounded-xl bg-yellow font-['Rubik'] text-brown"
            >
              Login
            </button>
          </form>
          <div className="flex flex-col justify-center mx-auto gap-2 p-3 w-full sm:w-[80%] md:w-[70%]">
            <div className="grid gap-9">
              <button
                type="button"
                className="shadow-lg h-12 rounded-xl bg-primary flex hover:bg-white"
              >
                <div className="flex justify-center m-auto gap-2">
                  <img
                    className="h-6"
                    src={require("../../assets/img/google.png")}
                    alt=""
                  />
                  <h1 className="font-['Rubik'] bg-transparent text-black my-auto">
                    Sign up with Google
                  </h1>
                </div>
              </button>
              <div className="flex justify-between gap-3">
                <hr className="w-full flex-1 content-center my-auto bor" />
                <h1>Already have an account?</h1>
                <hr className="w-full flex-1 content-center my-auto" />
              </div>
              <a href="/signup">
                <button
                  type="button"
                  className="h-12 w-full rounded-xl bg-brown font-['Rubik'] text-primary"
                >
                  Register here
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full p-5 flex flex-col sm:flex-row bg-secondary gap-5">
          <section className="w-full justify-center my-auto">
            <div className="text-brown font-['Rubik'] font-semibold flex gap-2 my-2">
              <img
                className="h-7"
                src={require("../../assets/img/coffee.png")}
                alt=""
              />
              <h1 className="content-center my-auto text-lg">Coffee Shop</h1>
            </div>
            <p className="my-2 font-['Poppins'] text-sm text-justify">
              Coffee Shop is a store that sells some good meals, and especially
              coffee. We provide high quality beans
            </p>
            <div className="flex gap-2 my-3">
              <div className="w-8 h-8 rounded-full bg-yellow flex">
                <div className="content-center m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-yellow flex">
                <div className="content-center m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="currentColor"
                      d="M14.977 1.467a.5.5 0 0 0-.87-.301a2.559 2.559 0 0 1-1.226.763A3.441 3.441 0 0 0 10.526 1a3.539 3.539 0 0 0-3.537 3.541v.44C3.998 4.75 2.4 2.477 1.967 1.325a.5.5 0 0 0-.916-.048C.004 3.373-.157 5.407.604 7.139C1.27 8.656 2.61 9.864 4.51 10.665C3.647 11.276 2.194 12 .5 12a.5.5 0 0 0-.278.916C1.847 14 3.55 14 5.132 14h.048c4.861 0 8.8-3.946 8.8-8.812v-.479c.363-.37.646-.747.82-1.236c.193-.546.232-1.178.177-2.006Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-yellow flex">
                <div className="content-center m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18 3H6C4.3 3 3 4.3 3 6v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm-6 6c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3zm3.8-2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2s-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2zM18 19H6c-.6 0-1-.4-1-1v-6h2c0 2.8 2.2 5 5 5s5-2.2 5-5h2v6c0 .6-.4 1-1 1z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="my-3 font-['Rubik']">©2022 Coffee Store</h1>
          </section>
          <section className="grid w-full py-0 sm:py-12">
            <div className="my-3">
              <h1 className="font-['Rubik'] font-semibold my-3">Product</h1>
              <div className="grid sm:grid-cols-2 gap-3">
                <h2 className="font-['Poppins'] font-medium text-sm">
                  Download
                </h2>
                <h2 className="font-['Poppins'] font-medium text-sm">
                  Locations
                </h2>
                <h2 className="font-['Poppins'] font-medium text-sm">
                  Pricing
                </h2>
                <h2 className="font-['Poppins'] font-medium text-sm">Blog</h2>
                <h2 className="font-['Poppins'] font-medium text-sm">
                  Countries
                </h2>
              </div>
            </div>
            <div className="my-3">
              <h1 className="font-['Rubik'] font-semibold my-3">Engage</h1>
              <div className="grid sm:grid-cols-2 gap-3">
                <h2 className="font-['Poppins'] font-medium text-sm">
                  Coffee Shop ?
                </h2>
                <h2 className="font-['Poppins'] font-medium text-sm">FAQ</h2>
                <h2 className="font-['Poppins'] font-medium text-sm">
                  Terms of Servise
                </h2>
                <h2 className="font-['Poppins'] font-medium text-sm">
                  About Us
                </h2>
                <h2 className="font-['Poppins'] font-medium text-sm">
                  Privacy Policy
                </h2>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Signin;
