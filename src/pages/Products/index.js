/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import ListProduct from "../../components/ListProduct";
import Navbar from "../../components/Navbar";
import Promo from "../../components/Promos";
import axios from "../../utils/axios";

import { useLocation } from "react-router-dom";
import queryString from "query-string";

function Products() {
  const [reqType, setReqType] = useState("Foods");
  const [menus, setMenus] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [sorting, setSorting] = useState("descending");
  const location = useLocation();
  const parsedQuery = queryString.parse(location.search);

  const handleInputSorting = (e) => {
    setSorting(e.target.value);
  };

  const handleInputForm = (e) => {
    setKeyword({ ...keyword, [e.target.name]: e.target.value });
  };

  const getDataMenus = async () => {
    try {
      const result = await axios.get(
        `/menus?keyword=${
          keyword.keyword || ""
        }&column=&sort=${sorting}&limit=&category=${reqType}&page=${page}`
      );

      setMenus(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataMenus();
  }, []);

  useEffect(() => {
    getDataMenus();
  }, [reqType, page, keyword, sorting]);

  useEffect(() => {
    const query = queryString.stringify({
      ...parsedQuery,
      keyword: keyword.keyword || "",
      category: reqType,
      sort: sorting,
      page: page,
    });

    history.pushState({}, "", `/products?${query}`);
  }, [reqType, page, keyword, sorting]);

  return (
    <>
      <Navbar handleInputForm={handleInputForm} />
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
        <div className="border-l-[1px] border-neutral-400 md:col-span-3 h-full flex flex-col justify-between">
          <div>
            <div className="grid md:grid-cols-6 md:gap-2 mt-3">
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
                buttonText="Non Coffee"
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
              <div>
                <select
                  onChange={handleInputSorting}
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="descending">Higher</option>
                  <option value="ascending">Lower</option>
                </select>
              </div>
            </div>
            <div className="w-[90%] my-6 mx-auto">
              <ListProduct menus={menus} />
            </div>
          </div>
          <div className="h-20 w-full flex justify-center gap-2 pb-4">
            <button
              type="button"
              onClick={() => {
                setPage(page - 1);
              }}
              className={
                menus.page - 1 == 0
                  ? "hidden "
                  : "h-12 w-12 bg-yellow rounded-md text-brown font-['Rubik'] font-semibold"
              }
            >
              {menus.page - 1}
            </button>
            <button
              className="h-12 w-12 cursor-pointer font-['Rubik'] font-semibold"
              disabled
            >
              {menus.page}
            </button>
            <button
              type="button"
              onClick={() => {
                setPage(page + 1);
              }}
              className={
                menus.page + 1 > menus.totalpage
                  ? "hidden"
                  : "h-12 w-12 bg-yellow rounded-md text-brown font-['Rubik'] font-semibold"
              }
            >
              {menus.page + 1}
            </button>
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
