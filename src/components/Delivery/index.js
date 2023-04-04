import React, { useState } from "react";
import { addAddress } from "../../utils/redux/action/cartAddress";
import { useDispatch, useSelector } from "react-redux";

function Delivery({ showModal, setShowModal, voucher }) {
  const dispatch = useDispatch();
  const [dineIn, setDineIn] = useState(false);
  const [doorDelivery, setdoorDelivery] = useState(false);
  const [pickUp, setpickUp] = useState(false);
  const [form, setForm] = useState({});

  const handleDelivery = (deliv) => {
    switch (deliv) {
      case "Dine In":
        setDineIn(true);
        setForm({
          delivery_option: deliv,
          delivery_address: "",
          eating_time: new Date().toJSON(),
          code_promo: voucher.code_promo,
        });
        break;
      case "Door Delivery":
        setdoorDelivery(true);
        setForm({
          delivery_option: deliv,
          delivery_address: "",
          eating_time: new Date().toJSON(),
          code_promo: voucher.code_promo,
        });
        break;
      case "Pick Up":
        setpickUp(true);
        setForm({
          delivery_option: deliv,
          delivery_address: "-",
          eating_time: "",
          code_promo: voucher.code_promo,
        });
        break;
      default:
        break;
    }
  };
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
  const handleInputAddress = () => {
    dispatch(addAddress(form));
    setShowModal(false);
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-center">
                Delivery Addres
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6">
              <div className="flex gap-3">
                <button
                  value="Dine In"
                  onClick={() => {
                    setdoorDelivery(false);
                    setpickUp(false);
                    handleDelivery("Dine In");
                  }}
                  className="w-20 h-7  bg-brown text-white font-['Poppins']"
                >
                  Dine in
                </button>
                <button
                  value="Door Delivery"
                  onClick={() => {
                    setDineIn(false);
                    setpickUp(false);
                    handleDelivery("Door Delivery");
                  }}
                  className="w-20 h-7  bg-brown text-white font-['Poppins']"
                >
                  Door Delivery
                </button>
                <button
                  value="Pick Up"
                  onClick={() => {
                    setdoorDelivery(false);
                    setDineIn(false);
                    handleDelivery("Pick Up");
                  }}
                  className="w-20 h-7  bg-brown text-white font-['Poppins']"
                >
                  Pickup
                </button>
              </div>
              <div className={`${dineIn ? "" : "hidden"} mt-3`}>
                <form className="flex gap-3" action="">
                  <label htmlFor="">Input Table</label>
                  <input
                    className="h-7 border-neutral-400 rounded-xl"
                    type="text"
                    name="delivery_address"
                    onChange={handleChangeForm}
                  />
                </form>
              </div>
              <div className={`${doorDelivery ? "" : "hidden"} mt-3`}>
                <form className="flex flex-col gap-3" action="">
                  <label htmlFor="">Name</label>
                  <input
                    className="h-7 border-neutral-400 rounded-xl"
                    type="text"
                    name="name"
                    onChange={handleChangeForm}
                  />
                  <label htmlFor="">Adress</label>
                  <input
                    className="h-7 border-neutral-400 rounded-xl"
                    type="text"
                    name="delivery_address"
                    onChange={handleChangeForm}
                  />
                  <label htmlFor="">Phone Number</label>
                  <input
                    className="h-7 border-neutral-400 rounded-xl"
                    type="text"
                    name="phone_number"
                    onChange={handleChangeForm}
                  />
                </form>
              </div>
              <div className={`${pickUp ? "" : "hidden"} mt-3`}>
                <form className="flex gap-3">
                  <label htmlFor="">time pickup</label>
                  <input
                    className="h-7 border-neutral-400 rounded-xl"
                    type="datetime-local"
                    name="eating_time"
                    onChange={handleChangeForm}
                  />
                </form>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleInputAddress}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Delivery;
