import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="w-full h-full grid lg:grid-cols-2 gap-3 p-8">
      <div>
        <div className="flex items-stretch py-5">
          <img
            className="h-7"
            src={require("../../assets/img/logo.png")}
            alt="Logo Coffee Shop"
          />
          <h1 className="font-['Rubik'] self-center mx-2 font-semibold">
            Coffee Shop
          </h1>
        </div>
        <p className="text-justify font-['Rubik'] font-medium">
          Coffee Shop is a store that sells some good meals, and especially
          coffee. We provide high quality beans
        </p>
        <div className="mt-4 flex gap-4">
          <Icon icon="uil:facebook" fontSize={30} color="#FFBA33" />
          <Icon
            icon="ant-design:twitter-square-filled"
            fontSize={30}
            color="#FFBA33"
          />
          <Icon icon="uil:instagram-alt" fontSize={30} color="#FFBA33" />
        </div>
        <div>
          <h3 className="text-[#AFB5C0] text-lg font-['Rubik'] mt-3">
            ©2020 Coffee Store
          </h3>
        </div>
      </div>
      <div className="w-full h-full grid lg:grid-cols-2 gap-3 lg:px-10">
        <div className="mb-6">
          <h1 className="font-['Rubik'] font-semibold text-lg mb-2">Product</h1>
          <ul className="font-['Rubik'] text-sm font-medium">
            <li>Download</li>
            <li>Pricing</li>
            <li>Location</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="mb-6">
          <h1 className="font-['Rubik'] font-semibold text-lg mb-2">Engage</h1>
          <ul className="font-['Rubik'] text-sm font-medium">
            <li>Coffee Shop</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
