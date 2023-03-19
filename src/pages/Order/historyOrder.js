import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function HistoryOrder() {
  return (
    <>
      <Navbar />
      <main className="bg-image-lamp min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col">
        <h1 className="text-center mt-20 font-secondary font-semibold text-4xl text-primary">
          Let’s see what you have bought !
        </h1>
        <p className="text-center my-3 font-secondary text-primary">
          Long press to delete item
        </p>
        <div className="w-4/5 h-min justify-center mx-auto my-32">
          <div className="grid grid-cols-3 gap-9" id="card">
            <div className="bg-primary h-24 rounded-xl cursor-pointer hover:opacity-85 flex gap-3 relative">
              <img
                className="h-20 w-20 object-cover object-center rounded-full my-auto"
                src={require("../../assets/img/foodi.png")}
                alt=""
              />
              <div className="my-auto">
                <h1 className="font-secondary text-lg font-semibold">
                  Veggie tomato mix
                </h1>
                <h1 className="text-brown">IDR 34.000</h1>
                <h1>Delivered</h1>
              </div>
              <div className="opacity-0 hover:opacity-100 flex gap-4 absolute right-0 -top-6">
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
                    />
                  </svg>
                </div>
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-primary h-24 rounded-xl cursor-pointer hover:opacity-85 flex gap-3 relative">
              <img
                className="h-20 w-20 object-cover object-center rounded-full my-auto"
                src={require("../../assets/img/foodi.png")}
                alt=""
              />
              <div className="my-auto">
                <h1 className="font-secondary text-lg font-semibold">
                  Veggie tomato mix
                </h1>
                <h1 className="text-brown">IDR 34.000</h1>
                <h1>Delivered</h1>
              </div>
              <div className="opacity-0 hover:opacity-100 flex gap-4 absolute right-0 -top-6">
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
                    />
                  </svg>
                </div>
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-primary h-24 rounded-xl cursor-pointer hover:opacity-85 flex gap-3 relative">
              <img
                className="h-20 w-20 object-cover object-center rounded-full my-auto"
                src={require("../../assets/img/foodi.png")}
                alt=""
              />
              <div className="my-auto">
                <h1 className="font-secondary text-lg font-semibold">
                  Veggie tomato mix
                </h1>
                <h1 className="text-brown">IDR 34.000</h1>
                <h1>Delivered</h1>
              </div>
              <div className="opacity-0 hover:opacity-100 flex gap-4 absolute right-0 -top-6">
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
                    />
                  </svg>
                </div>
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-primary h-24 rounded-xl cursor-pointer hover:opacity-85 flex gap-3 relative">
              <img
                className="h-20 w-20 object-cover object-center rounded-full my-auto"
                src={require("../../assets/img/foodi.png")}
                alt=""
              />
              <div className="my-auto">
                <h1 className="font-secondary text-lg font-semibold">
                  Veggie tomato mix
                </h1>
                <h1 className="text-brown">IDR 34.000</h1>
                <h1>Delivered</h1>
              </div>
              <div className="opacity-0 hover:opacity-100 flex gap-4 absolute right-0 -top-6">
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
                    />
                  </svg>
                </div>
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-primary h-24 rounded-xl cursor-pointer hover:opacity-85 flex gap-3 relative">
              <img
                className="h-20 w-20 object-cover object-center rounded-full my-auto"
                src={require("../../assets/img/foodi.png")}
                alt=""
              />
              <div className="my-auto">
                <h1 className="font-secondary text-lg font-semibold">
                  Veggie tomato mix
                </h1>
                <h1 className="text-brown">IDR 34.000</h1>
                <h1>Delivered</h1>
              </div>
              <div className="opacity-0 hover:opacity-100 flex gap-4 absolute right-0 -top-6">
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
                    />
                  </svg>
                </div>
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-primary h-24 rounded-xl cursor-pointer hover:opacity-85 flex gap-3 relative">
              <img
                className="h-20 w-20 object-cover object-center rounded-full my-auto"
                src={require("../../assets/img/foodi.png")}
                alt=""
              />
              <div className="my-auto">
                <h1 className="font-secondary text-lg font-semibold">
                  Veggie tomato mix
                </h1>
                <h1 className="text-brown">IDR 34.000</h1>
                <h1>Delivered</h1>
              </div>
              <div className="opacity-0 hover:opacity-100 flex gap-4 absolute right-0 -top-6">
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
                    />
                  </svg>
                </div>
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-primary h-24 rounded-xl cursor-pointer hover:opacity-85 flex gap-3 relative">
              <img
                className="h-20 w-20 object-cover object-center rounded-full my-auto"
                src={require("../../assets/img/foodi.png")}
                alt=""
              />
              <div className="my-auto">
                <h1 className="font-secondary text-lg font-semibold">
                  Veggie tomato mix
                </h1>
                <h1 className="text-brown">IDR 34.000</h1>
                <h1>Delivered</h1>
              </div>
              <div className="opacity-0 hover:opacity-100 flex gap-4 absolute right-0 -top-6">
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
                    />
                  </svg>
                </div>
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-primary h-24 rounded-xl cursor-pointer hover:opacity-85 flex gap-3 relative">
              <img
                className="h-20 w-20 object-cover object-center rounded-full my-auto"
                src={require("../../assets/img/foodi.png")}
                alt=""
              />
              <div className="my-auto">
                <h1 className="font-secondary text-lg font-semibold">
                  Veggie tomato mix
                </h1>
                <h1 className="text-brown">IDR 34.000</h1>
                <h1>Delivered</h1>
              </div>
              <div className="opacity-0 hover:opacity-100 flex gap-4 absolute right-0 -top-6">
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
                    />
                  </svg>
                </div>
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-primary h-24 rounded-xl cursor-pointer hover:opacity-85 flex gap-3 relative">
              <img
                className="h-20 w-20 object-cover object-center rounded-full my-auto"
                src={require("../../assets/img/foodi.png")}
                alt=""
              />
              <div className="my-auto">
                <h1 className="font-secondary text-lg font-semibold">
                  Veggie tomato mix
                </h1>
                <h1 className="text-brown">IDR 34.000</h1>
                <h1>Delivered</h1>
              </div>
              <div className="opacity-0 hover:opacity-100 flex gap-4 absolute right-0 -top-6">
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
                    />
                  </svg>
                </div>
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-primary h-24 rounded-xl cursor-pointer hover:opacity-85 flex gap-3 relative">
              <img
                className="h-20 w-20 object-cover object-center rounded-full my-auto"
                src={require("../../assets/img/foodi.png")}
                alt=""
              />
              <div className="my-auto">
                <h1 className="font-secondary text-lg font-semibold">
                  Veggie tomato mix
                </h1>
                <h1 className="text-brown">IDR 34.000</h1>
                <h1>Delivered</h1>
              </div>
              <div className="opacity-0 hover:opacity-100 flex gap-4 absolute right-0 -top-6">
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
                    />
                  </svg>
                </div>
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-primary h-24 rounded-xl cursor-pointer hover:opacity-85 flex gap-3 relative">
              <img
                className="h-20 w-20 object-cover object-center rounded-full my-auto"
                src={require("../../assets/img/foodi.png")}
                alt=""
              />
              <div className="my-auto">
                <h1 className="font-secondary text-lg font-semibold">
                  Veggie tomato mix
                </h1>
                <h1 className="text-brown">IDR 34.000</h1>
                <h1>Delivered</h1>
              </div>
              <div className="opacity-0 hover:opacity-100 flex gap-4 absolute right-0 -top-6">
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
                    />
                  </svg>
                </div>
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-primary h-24 rounded-xl cursor-pointer hover:opacity-85 flex gap-3 relative">
              <img
                className="h-20 w-20 object-cover object-center rounded-full my-auto"
                src={require("../../assets/img/foodi.png")}
                alt=""
              />
              <div className="my-auto">
                <h1 className="font-secondary text-lg font-semibold">
                  Veggie tomato mix
                </h1>
                <h1 className="text-brown">IDR 34.000</h1>
                <h1>Delivered</h1>
              </div>
              <div className="opacity-0 hover:opacity-100 flex gap-4 absolute right-0 -top-6">
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
                    />
                  </svg>
                </div>
                <div className="h-7 w-7 rounded-full bg-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HistoryOrder;
