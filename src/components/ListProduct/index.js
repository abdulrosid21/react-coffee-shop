/* eslint-disable react/jsx-key */
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getDetailMenu } from "../../utils/redux/action/menus";

function ListProduct({ menus }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5">
      {menus.data ? (
        menus.data.map((item) => (
          <div
            onClick={async () => {
              await dispatch(getDetailMenu(item.id));
              navigate(`/products/${item.id}`);
            }}
            key={item.id}
            className="w-[130px] h-[220px] rounded-lg m-4 flex flex-col cursor-pointer"
          >
            <div className="h-28 w-28 bg-no-repeat  rounded-full  justify-center mx-auto -mb-10 z-10 shadow-lg">
              <img
                className="h-28 w-28 rounded-full object-cover object-center bg-no-repeat "
                src={process.env.REACT_APP_URL_CLOUDINARY + item.image}
                alt=""
              />
            </div>
            <div className="bg-white h-[70%] rounded-3xl shadow-2xl flex flex-col justify-end">
              <h1 className="text-center font-['Rubik'] font-semibold text-xl">
                {item.menu_name}
              </h1>
              <h1 className="text-center font-['Rubik'] text-[#6A4029] mb-4 font-semibold text-sm">
                IDR {item.price}
              </h1>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full h-full ">
          <h1 className="flex justify-center m-auto">Belum Tersedia Menu</h1>
        </div>
      )}
    </div>
  );
}

export default ListProduct;
