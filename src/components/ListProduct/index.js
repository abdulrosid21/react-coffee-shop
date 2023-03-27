/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function ListProduct({ menus }) {
  console.log(process.env.REACT_APP_URL_CLOUDINARY);
  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5">
      {menus.map((item) => (
        <Link to={`/products/${item.id}`}>
          <div
            key={item.id}
            className="w-[130px] h-[220px] rounded-lg m-4 flex flex-col cursor-pointer"
          >
            <div
              className="h-28 w-28 bg-no-repeat bg-cover rounded-full bg-center justify-center mx-auto -mb-10 z-10"
              style={{
                backgroundImage: `url(${`${process.env.REACT_APP_URL_CLOUDINARY}${item.image}`})`,
              }}
            />
            <div className="bg-white h-[70%] rounded-3xl shadow-xl flex flex-col justify-end">
              <h1 className="text-center font-['Rubik'] font-semibold text-xl">
                {item.menu_name}
              </h1>
              <h1 className="text-center font-['Rubik'] text-[#6A4029] mb-4 font-semibold text-sm">
                IDR {item.price}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListProduct;
