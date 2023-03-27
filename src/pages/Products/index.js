/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import ListProduct from "../../components/ListProduct";
import Navbar from "../../components/Navbar";
import Promo from "../../components/Promos";
import axios from "../../utils/axios";

function Products(props) {
  const [reqType, setReqType] = useState("Foods");
  const [menus, setMenus] = useState([]);

  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const getDataMenus = async () => {
    try {
      const result = await axios.get(
        "menus?keyword=&column=&sort=&limit=&category=&page="
      );
      setMenus(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataMenus();
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-screen border-t-[1px] border-neutral-400 grid md:grid-cols-4">
        <div className="w-4/5 h-full mx-auto">
          <h1 className="text-center font-['Rubik'] font-semibold text-brown pt-8 text-xl">
            Promo For You
          </h1>
          <p className="text-center font-['Rubik'] text-sm py-4">
            Coupons will be updated every weeks. Check them out!
          </p>
          <Promo />
          <div className="h-10 w-full bg-brown rounded-xl flex">
            <h1 className="font-['Poppins'] text-white justify-center m-auto">
              Aplly Now
            </h1>
          </div>
          <div className="w-full my-10">
            <h1 className="font-['Rubik']">Term and Conditions</h1>
            <ul className="font-['Rubik'] text-xs">
              <li>1. You can only apply 1 coupon per day</li>
              <li>2. It only for dine in</li>
              <li>3. Buy 1 get 1 only for new user</li>
              <li>4. Should make member card to apply coupon</li>
            </ul>
          </div>
        </div>
        <div className="border-l-[1px] border-neutral-400 md:col-span-3">
          <div className="grid md:grid-cols-5 md:gap-2 mt-3">
            <Button
              buttonText="Foods"
              reqType={reqType}
              setReqType={setReqType}
            />
            <Button
              buttonText="Coffee"
              reqType={reqType}
              setReqType={setReqType}
            />
            <Button
              buttonText="None Coffee"
              reqType={reqType}
              setReqType={setReqType}
            />
            <Button
              buttonText="Snack"
              reqType={reqType}
              setReqType={setReqType}
            />
            <Button
              buttonText="Add Ons"
              reqType={reqType}
              setReqType={setReqType}
            />
          </div>
          <div className="w-[90%] my-6 mx-auto">
            <ListProduct menus={menus} />
          </div>
        </div>
      </main>
      <div className="border-t-[1px] border-neutral-400">
        <Footer />
      </div>
    </>
  );
}

export default Products;
