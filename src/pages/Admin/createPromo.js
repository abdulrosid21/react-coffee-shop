import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function CreatePromo() {
  return (
    <>
      <Navbar />
      <main className="w-screen h-full">
        <div className="px-[5%] py-4 font-[Rubik] text-sm flex">
          <h1>Favorite & Promo &gt;</h1>
          <h1 className="text-brown font-semibold font-['Rubik']">
            Add new promo
          </h1>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-2 gap-3 pb-5">
          <section className="w-4/5 flex flex-col justify-between">
            <div>
              <div className="w-36 h-36 bg-black opacity-40 rounded-full flex mx-auto mb-3">
                <img
                  className="w-16 h-16 justify-center m-auto"
                  src={require("../../assets/img/camera.png")}
                  alt=""
                />
              </div>
              <div className="grid gap-4">
                <button
                  type="button"
                  className="h-14 w-full bg-[#0B132A] rounded-lg text-white font-['Rubik']"
                >
                  Take a picture
                </button>
                <button
                  type="button"
                  className="h-14 w-full bg-yellow rounded-lg font-['Rubik']"
                >
                  Choose from galery
                </button>
              </div>
            </div>
            <div className="grid gap-2">
              <label
                className="font-['Rubik'] text-brown font-semibold text-sm"
                htmlFor=""
              >
                Enter discount:
              </label>
              <div className="border-2 rounded-xl">
                <input
                  value=""
                  className="w-full bg-transparent border-transparent focus:border-transparent focus:ring-0 placeholder:text-sm"
                  type="text"
                  placeholder="discount"
                />
              </div>
              <div id="error-password" />
            </div>
            <div className="my-4">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Expires date:
              </label>
              <div className="grid gap-2">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select start data</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select end date</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label
                  className="font-['Rubik'] text-brown font-semibold text-sm"
                  htmlFor=""
                >
                  Input Coupon code:
                </label>
                <div className="border-2 rounded-xl">
                  <input
                    value=""
                    className="w-full bg-transparent border-transparent focus:border-transparent focus:ring-0 placeholder:text-sm"
                    type="text"
                    placeholder="code"
                  />
                </div>
                <div id="error-password" />
              </div>
            </div>
          </section>
          <section>
            <form
              id="signupForm"
              className="flex flex-col justify-center mx-auto gap-2 p-3 w-full sm:w-[80%] md:w-[70%]"
            >
              <div className="grid gap-2">
                <label className="font-['Rubik'] text-brown font-semibold text-sm">
                  Name:
                </label>
                <div className="border-2 rounded-xl">
                  <input
                    value=""
                    className="w-full bg-transparent border-transparent focus:border-transparent focus:ring-0 placeholder:text-sm"
                    type="text"
                    placeholder="Enter your email address"
                  />
                </div>
                <div id="error-email" />
              </div>
              <div className="grid gap-2">
                <label
                  className="font-['Rubik'] text-brown font-semibold text-sm"
                  htmlFor=""
                >
                  Price:
                </label>
                <div className="border-2 rounded-xl">
                  <input
                    value=""
                    className="w-full bg-transparent border-transparent focus:border-transparent focus:ring-0 placeholder:text-sm"
                    type="text"
                    placeholder="Enter your password"
                  />
                </div>
                <div id="error-password" />
              </div>
              <div className="grid gap-2">
                <label
                  className="font-['Rubik'] text-brown font-semibold text-sm"
                  htmlFor=""
                >
                  Description:
                </label>
                <div className="border-2 rounded-xl">
                  <input
                    value=""
                    className="w-full bg-transparent border-transparent focus:border-transparent focus:ring-0 placeholder:text-sm"
                    type="text"
                    placeholder="Enter your password"
                  />
                </div>
                <div id="error-password" />
              </div>
            </form>
            <div className="grid gap-4 sm:w-[80%] md:w-[70%] mx-auto">
              <button
                type="button"
                className="h-14 w-full bg-[#0B132A] rounded-lg text-white font-['Rubik']"
              >
                Save
              </button>
              <button
                type="button"
                className="h-14 w-full bg-yellow rounded-lg font-['Rubik']"
              >
                Cancel
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CreatePromo;
