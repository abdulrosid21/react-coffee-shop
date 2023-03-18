import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function ProductsDetails() {
  return (
    <>
      <Navbar />
      <main className="w-screen h-full lg:flex lg:relative lg:bg-[#BCBABA] pb-4 lg:pb-0 mb-16">
        <section className="lg:w-2/4 h-full flex">
          <div className="h-full w-screen lg:h-4/5 lg:w-3/5 justify-center mx-auto my-[10%]">
            <div className="">
              <h1 className="font-['Poppins'] text-center">
                Favorite & Promo
                <span className="font-semibold text-[#6A4029]"> Cold Brew</span>
              </h1>
            </div>
            <div className="flex flex-col">
              <img
                className="lg:justify-center mx-auto object-center object-cover w-72 h-72 rounded-full my-5"
                src={require("../../assets/img/coldcoffee.png")}
                alt=""
              />
              <h1 className="uppercase font-['Poppins'] text-5xl font-semibold text-center">
                cold brew
              </h1>
              <p className="uppercase font-['Poppins'] text-3xl text-center">
                idr 30.000
              </p>
            </div>
            <div className="flex flex-col my-2">
              <button
                type="button"
                className="w-4/5 h-16 justify-center mx-auto my-2 font-['Poppins'] font-semibold rounded-xl text-white bg-[#6A4029]"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="w-4/5 h-16 justify-center mx-auto my-2 font-['Poppins'] font-semibold rounded-xl text-[#6A4029] bg-[#FFBA33]"
              >
                Ask a Staff
              </button>
            </div>
          </div>
        </section>
        <section className="w-full lg:w-2/4 h-full lg:min-h-screen flex">
          <div className="h-full lg:h-screen w-4/5 flex justify-center mx-auto">
            <div className="flex flex-col justify-evenly">
              <div className="h-auto w-full flex flex-col bg-white rounded-xl p-8 shadow-md">
                <div className="justify-center mx-auto w-full">
                  <p className="font-['Poppins']">
                    Delivery only on
                    <span className="font-semibold text-[#6A4029]">
                      Monday to friday at 1 - 7 pm
                    </span>
                  </p>
                  <p className="text-justify my-3">
                    Cold brewing is a method of brewing that combines ground
                    coffee and cool water and uses time instead of heat to
                    extract the flavor. It is brewed in small batches and
                    steeped for as long as 48 hours.
                  </p>
                  <h1 className="text-center font-['Poppins'] font-semibold my-4">
                    Choose Size
                  </h1>
                </div>
                <div className="w-full flex justify-around">
                  <button
                    type="button"
                    className="w-14 h-14 rounded-full bg-[#FFBA33] font-['Poppins'] font-semibold"
                  >
                    R
                  </button>
                  <button
                    type="button"
                    className="w-14 h-14 rounded-full bg-[#FFBA33] font-['Poppins'] font-semibold"
                  >
                    L
                  </button>
                  <button
                    type="button"
                    className="w-14 h-14 rounded-full bg-[#FFBA33] font-['Poppins'] font-semibold"
                  >
                    XL
                  </button>
                </div>
              </div>
              <div className="h-1/4 w-full">
                <h1 className="text-center font-semibold font-['Poppins'] my-2">
                  Choose Delivery Methods
                </h1>
                <div className="text-center my-2 flex justify-center mx-auto gap-3">
                  <button
                    type="button"
                    className="font-['Poppins'] py-2 px-3 bg-[#6A4029] text-white rounded-lg"
                  >
                    Dine
                  </button>
                  <button
                    type="button"
                    className="font-['Poppins'] py-2 px-3 bg-[#F4F4F8] text-[#9F9F9F] rounded-lg"
                  >
                    Door Delivery
                  </button>
                  <button
                    type="button"
                    className="font-['Poppins'] py-2 px-3 bg-[#F4F4F8] text-[#9F9F9F] rounded-lg"
                  >
                    Pick Up
                  </button>
                </div>
                <div className="flex justify-center mx-auto items-stretch my-5">
                  <h2 className="font-['Poppins'] self-center">
                    Set Time : &nbsp;
                  </h2>
                  <input
                    className="bg-transparent border-0 border-b-2 h-6 focus:ring-0 focus:border-0 focus:border-b-2 focus:border-[#9F9F9F] placeholder:text-sm placeholder:text-[#9F9F9F]"
                    type="text"
                    placeholder="Enter the time you’ll arrived"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:absolute lg:-bottom-[10%] lg:left-[15%] lg:w-[70%] h-full lg:h-32 block lg:flex justify-between">
          <div className="w-full lg:w-[69%] lg:rounded-xl bg-white flex shadow-md">
            <div className="w-2/4 h-full p-2 flex justify-between">
              <div className="justify-center my-auto">
                <img
                  className="h-20 w-20 object-center object-cover rounded-full"
                  src={require("../../assets/img/coldcoffee.png")}
                  alt=""
                />
              </div>
              <div className="justify-center my-auto">
                <h1 className="font-['Poppins'] text-sm font-semibold uppercase">
                  cold brew
                </h1>
                <p className="font-['Poppins'] text-sm">xl(large)</p>
                <p className="font-['Poppins'] text-sm">xl(reguler)</p>
              </div>
            </div>
            <div className="w-2/4 h-full p-2 flex">
              <div className="custom-number-input h-10 w-32 text-center justify-center mx-auto my-2">
                <label
                  htmlFor="custom-input-number"
                  className="w-full text-gray-700 text-sm font-semibold"
                >
                  Counter Input
                </label>
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <button
                    type="button"
                    data-action="decrement"
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span className="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    type="number"
                    className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700"
                    name="custom-input-number"
                    value="0"
                  />
                  <button
                    type="button"
                    data-action="increment"
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80%] lg:w-[29%] h-14 lg:h-full rounded-xl bg-[#FFBA33] flex shadow-md justify-center mx-auto my-3 lg:my-0">
            <h1 className="justify-center m-auto font-['Poppins'] font-semibold text-2xl">
              Checkout
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ProductsDetails;
