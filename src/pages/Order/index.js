import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Delivery from "../../components/Delivery";
import { useSelector } from "react-redux";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const address = useSelector((state) => state.address.data);
  const user = useSelector((state) => state.user.data);
  // const shipping = 5000;
  const [total, setTotal] = useState(0);
  const [voucher, setvoucher] = useState({
    code_promo: "",
  });
  const [data, setData] = useState();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [payment, setTotalPayment] = useState(0);
  const onOptionChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  useEffect(() => {
    setTax(0.1 * total);
    setTotalDiscount((discount / 100) * total);
  }, [total, discount]);

  useEffect(() => {
    setTotalPayment(total + tax - totalDiscount);
  }, [total, tax, totalDiscount]);
  const handleSetVoucher = (e) => {
    setvoucher({ ...voucher, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setData({
      ...address[0],
      ...voucher,
      menu: [...cart],
      totalPayment: payment,
      discount: totalDiscount,
      tax: tax,
      paymentMethod: paymentMethod,
    });
  }, [
    address[0],
    tax,
    cart,
    totalDiscount,
    total,
    payment,
    paymentMethod,
    voucher.code_promo,
  ]);

  const handleVoucher = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post("promos/voucher", voucher);
      setDiscount(result.data.data[0].discount);
    } catch (error) {
      console.log(error);
    }
  };
  const handleConfirmPayment = async () => {
    try {
      const result = await axios.post("order/add", data);
      const payment = await axios.post("payment/orders", {
        order_id: result.data.data.order_id,
        gross_amount: result.data.data.total_payment,
      });
      console.log(payment);
      window.open(payment.data.data.redirect_url, "_blank");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      {showModal ? (
        <Delivery
          showModal={showModal}
          setShowModal={setShowModal}
          voucher={voucher}
        />
      ) : null}
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
                <form className=" my-auto flex" onSubmit={handleVoucher}>
                  <input
                    className="max-h-10 bg-transparent border-transparent border-2 border-b-neutral-100 focus:border-transparent focus:ring-0 placeholder:text-sm"
                    type="text"
                    name="code_promo"
                    onChange={handleSetVoucher}
                    placeholder="Enter voucher here"
                  />
                  <button type="submit"></button>
                </form>
              </div>
              {cart.length < 1 ? (
                <div className="w-full">
                  <h1 className="text-center font-semibold my-auto">
                    Is Empty dude.... just breath and order some menu
                  </h1>
                  <input type="submit" value="" />
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
                  <h1 className="font-['Rubik'] uppercase">Discount</h1>
                  {/* <h1 className="font-['Rubik'] uppercase">Shipping</h1> */}
                </div>
                <div className="text-end">
                  <h1 className="font-['Rubik'] uppercase">{total}</h1>
                  <h1 className="font-['Rubik'] uppercase">{tax}</h1>
                  <h1 className="font-['Rubik'] uppercase">{totalDiscount}</h1>
                  {/* <h1 className="font-['Rubik'] uppercase">{shipping}</h1> */}
                </div>
              </div>
              <div className="w-4/5 my-3 mx-auto border-b-2 border-dashed border-neutral-500" />
              <div className="w-4/5 h-20 mx-auto">
                <div className="flex justify-between">
                  <h1 className="my-auto text-xl font-semibold font-['Rubik']">
                    Total
                  </h1>
                  <h1 className="my-auto text-xl font-semibold font-['Rubik']">
                    {payment}
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
                <h2
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className="font-['Poppins'] text-white font-medium underline text-xs cursor-pointer"
                >
                  Edit
                </h2>
              </div>
              <div className="w-full bg-white rounded-lg ">
                <div className="w-4/5 mx-auto grid gap-3 py-3">
                  {address.length > 0 ? (
                    address[0].delivery_option == "Dine In" ? (
                      <>
                        <h1 className="font-['Poppins'] text-sm">
                          <strong>Delivery </strong>
                          to table {address[0].delivery_address}
                        </h1>
                        <div className="border-b-[1px] border-neutral-500 border-dashed" />
                        <h1 className="font-['Poppins'] text-sm text-justify">
                          i will waiting until menu serve
                        </h1>
                        <div className="border-b-[1px] border-neutral-500 border-dashed" />
                        <h1 className="font-['Poppins'] text-sm">
                          +62 {user.phone}
                        </h1>
                      </>
                    ) : address[0].delivery_option == "Door Delivery" ? (
                      <>
                        <h1 className="font-['Poppins'] text-sm">
                          <strong>Delivery Door </strong>
                          to {address[0].name}
                        </h1>
                        <div className="border-b-[1px] border-neutral-500 border-dashed" />
                        <h1 className="font-['Poppins'] text-sm text-justify">
                          {address[0].delivery_address}
                        </h1>
                        <div className="border-b-[1px] border-neutral-500 border-dashed" />
                        <h1 className="font-['Poppins'] text-sm">
                          +62 {address[0].phone_number}
                        </h1>
                      </>
                    ) : address[0].delivery_option == "Pick Up" ? (
                      <>
                        <h1 className="font-['Poppins'] text-sm">
                          <strong>will Picking Up </strong>
                          by {user.display_name}
                        </h1>
                        <div className="border-b-[1px] border-neutral-500 border-dashed" />
                        <h1 className="font-['Poppins'] text-sm text-justify">
                          time : {address[0].eating_time}
                        </h1>
                        <div className="border-b-[1px] border-neutral-500 border-dashed" />
                        <h1 className="font-['Poppins'] text-sm">
                          +62 {user.phone}
                        </h1>
                      </>
                    ) : (
                      <>
                        <h1 className="font-['Poppins'] text-sm">
                          <strong>Delivery </strong>
                          to {user.display_name}
                        </h1>
                        <div className="border-b-[1px] border-neutral-500 border-dashed" />
                        <h1 className="font-['Poppins'] text-sm text-justify">
                          {user.address}
                        </h1>
                        <div className="border-b-[1px] border-neutral-500 border-dashed" />
                        <h1 className="font-['Poppins'] text-sm">
                          +62 {user.phone}
                        </h1>
                      </>
                    )
                  ) : (
                    <>
                      <h1 className="font-['Poppins'] text-sm">
                        <strong>Delivery </strong>
                        to {user.display_name}
                      </h1>
                      <div className="border-b-[1px] border-neutral-500 border-dashed" />
                      <h1 className="font-['Poppins'] text-sm text-justify">
                        {user.address}
                      </h1>
                      <div className="border-b-[1px] border-neutral-500 border-dashed" />
                      <h1 className="font-['Poppins'] text-sm">
                        +62 {user.phone}
                      </h1>
                    </>
                  )}
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
                      name="paymentMethod"
                      value="card"
                      onChange={onOptionChange}
                      checked={paymentMethod === "card"}
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
                      name="paymentMethod"
                      value="bank account"
                      onChange={onOptionChange}
                      checked={paymentMethod === "bank account"}
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
                      name="paymentMethod"
                      value="cash on delivery"
                      onChange={onOptionChange}
                      checked={paymentMethod === "cash on delivery"}
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
            <div
              onClick={handleConfirmPayment}
              className="w-full h-14 rounded-lg bg-brown flex cursor-pointer"
            >
              <button
                type="button"
                className="font-['Rubik'] font-semibold text-white justify-center m-auto"
              >
                Confirm and Pay
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Order;
