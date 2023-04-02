import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";

function Order() {
  const cart = useSelector((state) => state.cart.cart);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <>
      <Navbar />
      <main className="min-h-screen md:h-full w-screen bg-order bg-cover bg-center bg-no-repeat">
        <div className="w-[90%] py-10 grid md:grid-cols-2 gap-10 mx-auto">
          <div className="rounded-xl h-full flex flex-col">
            <div className="h-20 w-full md:w-2/3">
              <h1 className="font-['Rubik'] text-white font-semibold text-4xl">
                Checkout your item now!
              </h1>
            </div>
            <div className="w-4/5 h-full bg-white rounded-lg mt-5">
              <div className="w-full h-20 flex">
                <h1 className="justify-center m-auto text-2xl font-semibold font-['Rubik']">
                  Order Summary
                </h1>
              </div>
              {cart.length < 1 ? (
                <div className="w-full">
                  <h1 className="text-center font-semibold my-auto">
                    Is Empty dude.... just breath and order some menu
                  </h1>
                </div>
              ) : (
                cart.map((item) => (
                  <div className="grid grid-cols-4 mb-7">
                    <img
                      className="h-14 w-14 rounded-lg m-auto"
                      src={process.env.REACT_APP_URL_CLOUDINARY + item.image}
                      alt=""
                    />
                    <div className="col-span-2">
                      <h1 className="text-sm">{item.menu_name}</h1>
                      <h1 className="text-sm">X{" " + item.qty}</h1>
                      <h1 className="text-sm">{item.size}</h1>
                    </div>
                    <h1 className="text-sm font-semibold my-auto">
                      IDR {item.price}
                    </h1>
                  </div>
                ))
              )}
              <div className="w-4/5 my-3 mx-auto border-b-2 border-dashed border-neutral-500" />
              <div className="grid grid-cols-2 w-4/5 mx-auto">
                <div className="">
                  <h1 className="font-['Rubik'] uppercase">Sub Total</h1>
                  <h1 className="font-['Rubik'] uppercase">Tax & Fees</h1>
                  <h1 className="font-['Rubik'] uppercase">Shipping</h1>
                </div>
                <div className="text-end">
                  <h1 className="font-['Rubik'] uppercase">{total}</h1>
                  <h1 className="font-['Rubik'] uppercase">20000</h1>
                  <h1 className="font-['Rubik'] uppercase">10000</h1>
                </div>
              </div>
              <div className="w-4/5 my-3 mx-auto border-b-2 border-dashed border-neutral-500" />
              <div className="w-4/5 h-20 mx-auto">
                <div className="flex justify-between">
                  <h1 className="my-auto text-2xl font-semibold font-['Rubik']">
                    Total
                  </h1>
                  <h1 className="my-auto text-2xl font-semibold font-['Rubik']">
                    150000
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl w-4/5 h-full mx-auto">
            <div className="h-20 w-1/2" />
            <div className="mt-5 w-full">
              <div className="flex justify-between">
                <h1 className="font-['Poppins'] text-lg text-white font-semibold">
                  Address Details
                </h1>
                <h2 className="font-['Poppins'] text-white font-medium underline text-xs">
                  Edit
                </h2>
              </div>
              <div className="w-full bg-white rounded-lg ">
                <div className="w-4/5 mx-auto grid gap-3 py-3">
                  <h1 className="font-['Poppins'] text-sm">
                    <strong>Delivery </strong>
                    to iskandar street
                  </h1>
                  <div className="border-b-[1px] border-neutral-500 border-dashed" />
                  <h1 className="font-['Poppins'] text-sm text-justify">
                    Km 5 refinery road oppsite re public road, effurun, Jakarta
                  </h1>
                  <div className="border-b-[1px] border-neutral-500 border-dashed" />
                  <h1 className="font-['Poppins'] text-sm">+62 81348287878</h1>
                </div>
              </div>
            </div>
            <div className="w-full my-5">
              <h1 className="font-['Poppins'] font-semibold text-white text-lg">
                Payment Method
              </h1>
              <div className="bg-white rounded-lg w-full">
                <div className="w-4/5 mx-auto py-5 grid gap-4">
                  <div className="flex h-10 items-stretch gap-2">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio self-center"
                    />
                    <div className="h-10 w-10 bg-yellow rounded-lg flex">
                      <img
                        className="justify-center m-auto"
                        src={require("../../assets/img/card.png")}
                        alt=""
                      />
                    </div>
                    <h1 className="my-auto font-['Rubik'] font-semibold">
                      Card
                    </h1>
                  </div>
                  <div className="border-b-[1px] border-neutral-700" />
                  <div className="flex h-10 items-stretch gap-2">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio self-center"
                    />
                    <div className="h-10 w-10 bg-brown rounded-lg flex">
                      <img
                        className="justify-center m-auto"
                        src={require("../../assets/img/bank.png")}
                        alt=""
                      />
                    </div>
                    <h1 className="my-auto font-['Rubik'] font-semibold">
                      Bank account
                    </h1>
                  </div>
                  <div className="border-b-[1px] border-neutral-700" />
                  <div className="flex h-10 items-stretch gap-2">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio self-center"
                    />
                    <div className="h-10 w-10 bg-soft-yellow rounded-lg flex">
                      <img
                        className="justify-center m-auto"
                        src={require("../../assets/img/delivery.png")}
                        alt=""
                      />
                    </div>
                    <h1 className="my-auto font-['Rubik'] font-semibold">
                      Cash on delivery
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-14 rounded-lg bg-brown flex">
              <h1 className="font-['Rubik'] font-semibold text-white justify-center m-auto">
                Confirm and Pay
              </h1>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Order;
