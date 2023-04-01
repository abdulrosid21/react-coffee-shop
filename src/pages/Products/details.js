import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  addMenusToCart,
  removeFromCart,
  addQty,
  minusQty,
} from "../../utils/redux/action/cart";

function ProductsDetails() {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menus.data[0]);
  const menu = useSelector((state) => state.cart.cart);
  const [qty, setQty] = useState(
    menu.some((c) => c.id === menus.id) ? menu[0].qty : 1
  );
  const [size, setSize] = useState(
    menu.some((c) => c.id === menus.id) ? menu[0].size : ""
  );

  return (
    <>
      <Navbar />
      <main className="w-screen h-full lg:flex lg:relative lg:bg-[#BCBABA] pb-4 lg:pb-0 mb-16">
        <section className="lg:w-2/4 h-full flex">
          <div className="h-full w-screen lg:h-4/5 lg:w-3/5 justify-center mx-auto my-[10%]">
            <div className="">
              <h1 className="font-['Poppins'] text-center">
                Menu :{" "}
                <span className="font-semibold text-[#6A4029]">
                  {menus.menu_name}
                </span>
              </h1>
            </div>
            <div className="flex flex-col">
              <img
                className="lg:justify-center mx-auto object-center object-cover w-72 h-72 rounded-full my-5"
                src={process.env.REACT_APP_URL_CLOUDINARY + menus.image}
                alt=""
              />
              <h1 className="uppercase font-['Poppins'] text-5xl font-semibold text-center">
                {menus.menu_name}
              </h1>
              <p className="uppercase font-['Poppins'] text-3xl text-center">
                idr {menus.price}
              </p>
            </div>
            <div className="flex flex-col my-2">
              {menu.some((c) => c.id === menus.id) ? (
                <button
                  onClick={() => {
                    setSize("");
                    setQty(1);
                    dispatch(removeFromCart(menus));
                  }}
                  type="button"
                  className="w-4/5 h-16 justify-center mx-auto my-2 font-['Poppins'] font-semibold rounded-xl text-white bg-red-600"
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(
                      addMenusToCart({ ...menus, qty: qty, size: size })
                    );
                  }}
                  type="button"
                  className="w-4/5 h-16 justify-center mx-auto my-2 font-['Poppins'] font-semibold rounded-xl text-white bg-[#6A4029]"
                  disabled={size === "" ? true : false}
                >
                  Add to Cart
                </button>
              )}

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
                  <p className="text-justify my-3 font-['Poppins']">
                    {menus.description.slice(0, 200) +
                      (menus.description.length > 200 ? "..." : "")}
                  </p>
                  <h1 className="text-center font-['Poppins'] font-semibold my-4">
                    Choose Size
                  </h1>
                </div>
                <div className="w-full flex justify-around">
                  <button
                    type="button"
                    className={
                      size === "R"
                        ? "w-14 h-14 rounded-full bg-brown text-white font-['Poppins'] font-semibold"
                        : "w-14 h-14 rounded-full bg-[#FFBA33] font-['Poppins'] font-semibold"
                    }
                    name="R"
                    onClick={(e) => {
                      setSize(e.target.name);
                    }}
                  >
                    R
                  </button>
                  <button
                    type="button"
                    className={
                      size === "L"
                        ? "w-14 h-14 rounded-full bg-brown text-white font-['Poppins'] font-semibold"
                        : "w-14 h-14 rounded-full bg-[#FFBA33] font-['Poppins'] font-semibold"
                    }
                    name="L"
                    onClick={(e) => {
                      setSize(e.target.name);
                    }}
                  >
                    L
                  </button>
                  <button
                    type="button"
                    className={
                      size === "XL"
                        ? "w-14 h-14 rounded-full bg-brown text-white font-['Poppins'] font-semibold"
                        : "w-14 h-14 rounded-full bg-[#FFBA33] font-['Poppins'] font-semibold"
                    }
                    name="XL"
                    onClick={(e) => {
                      setSize(e.target.name);
                    }}
                  >
                    XL
                  </button>
                </div>
              </div>
              <div
                className={
                  menu.some((c) => c.id === menus.id)
                    ? "flex h-1/4 w-full"
                    : "hidden"
                }
              >
                <div className="w-full max-h-36 lg:w-[69%] lg:rounded-xl bg-white flex shadow-md">
                  <div className="w-2/4 h-full p-2 flex justify-between">
                    <div className="justify-center my-auto">
                      <img
                        className="h-20 w-20 object-center object-cover rounded-full"
                        src={
                          menu.some((c) => c.id === menus.id)
                            ? process.env.REACT_APP_URL_CLOUDINARY +
                              menu[0].image
                            : ""
                        }
                        alt=""
                      />
                    </div>
                    <div className="justify-center my-auto">
                      <h1 className="font-['Poppins'] text-sm font-semibold uppercase">
                        {menu.some((c) => c.id === menus.id)
                          ? menu[0].menu_name
                          : null}
                      </h1>
                      <p className="font-['Poppins'] text-sm">
                        {menu.some((c) => c.id === menus.id)
                          ? menu[0].size
                          : null}
                      </p>
                    </div>
                  </div>
                  <div className="w-2/4 h-full flex">
                    <div className="custom-number-input h-10 w-32 text-center flex flex-col justify-center m-auto">
                      <label
                        htmlFor="custom-input-number"
                        className="w-full text-gray-700 text-sm font-semibold"
                      >
                        Total
                      </label>
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent ">
                        <button
                          type="button"
                          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                          onClick={() => {
                            dispatch(
                              minusQty({
                                ...menus,
                                qty: menu.some((c) => c.id === menus.id)
                                  ? menu[0].qty
                                  : qty,
                              })
                            );
                            setQty(qty - 1);
                          }}
                          disabled={qty === 1 ? true : false}
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="text"
                          className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 border-transparent"
                          name="custom-input-number"
                          value={
                            menu.some((c) => c.id === menus.id)
                              ? menu[0].qty
                              : qty
                          }
                        />
                        <button
                          type="button"
                          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                          onClick={() => {
                            dispatch(
                              addQty({
                                ...menus,
                                qty: menu.some((c) => c.id === menus.id)
                                  ? menu[0].qty
                                  : qty,
                              })
                            );
                            setQty(qty + 1);
                          }}
                          disabled={qty === menus.stock ? true : false}
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[80%] lg:w-[29%] max-h-36 rounded-xl bg-[#FFBA33] flex shadow-md justify-center mx-auto my-3 lg:my-0">
                  <h1 className="justify-center m-auto font-['Poppins'] font-semibold text-2xl">
                    Checkout
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ProductsDetails;
