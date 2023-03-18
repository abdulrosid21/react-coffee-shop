import React from "react";
// import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar";
import Favorite from "../components/Favorite";
import Footer from "../components/Footer";
import globalMaps from "../assets/img/HugeGlobal.svg";

function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-[url('/src/assets/img/banner.jpeg')] min-h-screen min-w-screen bg-cover bg-center bg-no-repeat flex">
        <div className="w-4/5 h-screen justify-center mx-auto flex relative">
          <div className="w-full h-[80%] justify-center my-auto">
            <div className="w-full h-[80%] flex flex-col justify-evenly">
              <h1 className="font-['Rubik'] text-white text-3xl lg:text-6xl w-full lg:w-[60%]">
                Start Your Day with Coffee and Good Meals
              </h1>
              <p className="font-['Rubik'] text-white text-xl w-full lg:w-[50%] text-justify">
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </p>
              <button
                type="button"
                className="w-full lg:w-[20%] p-2 bg-[#FFBA33] rounded-xl font-['Rubik'] font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="hidden w-full h-[25%] lg:absolute lg:-bottom-[12%] rounded-xl p-3 lg:flex bg-white shadow-md">
            <div className="w-1/3 h-full p-2 flex">
              <div className="justify-center m-auto flex w-full">
                <div className="flex justify-between">
                  <img
                    className="mx-2"
                    src={require("../assets/img/user.png")}
                    alt=""
                  />
                  <div>
                    <h1 className="font-['Poppins'] font-bold">90+</h1>
                    <h2 className="font-['Rubik'] text-[#4F5665]">Staff</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-full p-2 flex">
              <div className="justify-center m-auto flex w-full">
                <div className="flex justify-between">
                  <img
                    className="mx-2"
                    src={require("../assets/img/location.png")}
                    alt=""
                  />
                  <div>
                    <h1 className="font-['Poppins'] font-bold">30+</h1>
                    <h2 className="font-['Rubik'] text-[#4F5665]">Stores</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-full p-2 flex">
              <div className="justify-center m-auto flex w-full">
                <div className="flex justify-between">
                  <div className="w-[55px] h-[55px] rounded-full bg-[#FFBA33] flex mx-2">
                    <img
                      className="justify-center m-auto h-5"
                      src={require("../assets/img/love.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="font-['Poppins'] font-bold">800+</h1>
                    <h2 className="font-['Rubik'] text-[#4F5665]">Customers</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full lg:h-screen w-screen flex">
        <div className="w-4/5 h-full lg:h-screen justify-center mx-auto">
          <div className="h-1/5 w-full" />
          <div className="h-full lg:h-4/5 w-full flex">
            <div className="h-full lg:h-4/5 w-full justify-center my-auto flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 h-full">
                <img
                  src={require("../assets/img/teamworks.jpeg")}
                  alt="team works"
                />
              </div>
              <div className="w-full lg:w-1/2 h-full p-2 flex">
                <div className="h-full lg:h-[80%] w-full justify-center my-auto">
                  <h1 className="font-['Rubik'] font-semibold text-4xl w-4/5">
                    We Provide Good Coffee and Healthy Meals
                  </h1>
                  <p className="w-3/4 my-4 font-['Rubik']">
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>
                  <div className="flex my-3 font-['Rubik']">
                    <img
                      className="h-7"
                      src={require("../assets/img/checklist.png")}
                      alt=""
                    />
                    <p className="mx-3">High quality beans</p>
                  </div>
                  <div className="flex my-3 font-['Rubik']">
                    <img
                      className="h-7"
                      src={require("../assets/img/checklist.png")}
                      alt=""
                    />
                    <p className="mx-3">
                      Healthy meals, you can request the ingredients
                    </p>
                  </div>
                  <div className="flex my-3 font-['Rubik']">
                    <img
                      className="h-7"
                      src={require("../assets/img/checklist.png")}
                      alt=""
                    />
                    <p className="mx-3">
                      Chat with our staff to get better experience for ordering
                    </p>
                  </div>
                  <div className="flex my-3 font-['Rubik']">
                    <img
                      className="h-7"
                      src={require("../assets/img/checklist.png")}
                      alt=""
                    />
                    <p className="mx-3">
                      Free member card with a minimum purchase of IDR 200.000.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-40 flex flex-col justify-evenly">
        <h1 className="text-center font-['Rubik'] font-semibold text-2xl">
          Here is People’s Favorite
        </h1>
        <p className="text-center font-['Rubik']">
          Let’s choose and have a bit taste of poeple’s favorite. It might be
          yours too!
        </p>
      </section>
      <section className="w-screen lg:h-screen flex p-10">
        <div className="w-full h-full grid sm:grid-cols-3 gap-4 justify-items-center">
          <Favorite />
        </div>
      </section>
      <section className="w-full h-40 flex flex-col justify-evenly my-10">
        <h1 className="text-center font-['Rubik'] font-semibold text-2xl">
          Visit Our Store in the Spot on the Map Below
        </h1>
        <p className="text-center font-['Rubik']">
          See our store in every city on the spot and spen your good day there.
          See you soon!
        </p>
      </section>
      <section className="w-screen h-screen flex">
        <div className="w-4/5 h-full justify-center mx-auto flex">
          <img className="" src={globalMaps} alt="" />
        </div>
      </section>
      <section className="w-full h-40 flex flex-col justify-evenly">
        <h1 className="text-center font-['Rubik'] font-semibold text-2xl">
          Our Partner
        </h1>
      </section>
      <section className="w-full min-h-40 mb-16">
        <div className="w-4/5 h-full grid md:grid-cols-5 place-items-center mx-auto">
          <img
            className="h-16 mx-2 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer"
            src={require("../assets/img/net.png")}
            alt=""
          />
          <img
            className="h-16 mx-2 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer"
            src={require("../assets/img/redit.png")}
            alt=""
          />
          <img
            className="h-16 mx-2 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer"
            src={require("../assets/img/amazon.png")}
            alt=""
          />
          <img
            className="h-16 mx-2 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer"
            src={require("../assets/img/discord.png")}
            alt=""
          />
          <img
            className="h-16 mx-2 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer"
            src={require("../assets/img/spotify.png")}
            alt=""
          />
        </div>
      </section>
      <section className="w-full h-40 flex flex-col justify-evenly mt-9 mb-16">
        <h1 className="text-center font-['Rubik'] font-semibold text-2xl">
          Loved by Thousands of Happy Customer
        </h1>
        <p className="text-center font-['Rubik']">
          These are the stories of our customers who have visited us with great
          pleasure.
        </p>
        <div className="w-screen h-full flex gap-4 justify-between px-10">
          <div className="h-full w-[30%] mt-10 rounded-3xl border-[1px] border-yellow">
            <div className="flex justify-start px-8">
              <img
                className="h-10 rounded-full my-2"
                src={require("../assets/img/profileuser.png")}
                alt=""
              />
            </div>
            <p className="px-8 font-semibold font-['Poppins'] text-justify">
              Wow... I am very happy to spend my whole day here. the Wi-fi is
              good, and the coffee and meals tho. I like it here!! Very
              recommended!
            </p>
          </div>
          <div className="h-full w-[30%] mt-10 rounded-3xl border-[1px] border-yellow">
            <div className="flex justify-start px-8">
              <img
                className="h-10 rounded-full my-2"
                src={require("../assets/img/profileuser.png")}
                alt=""
              />
            </div>
            <p className="px-8 font-semibold font-['Poppins'] text-justify">
              Wow... I am very happy to spend my whole day here. the Wi-fi is
              good, and the coffee and meals tho. I like it here!! Very
              recommended!
            </p>
          </div>
          <div className="h-full w-[30%] mt-10 rounded-3xl border-[1px] border-yellow">
            <div className="flex justify-start px-8">
              <img
                className="h-10 rounded-full my-2"
                src={require("../assets/img/profileuser.png")}
                alt=""
              />
            </div>
            <p className="px-8 font-semibold font-['Poppins'] text-justify">
              Wow... I am very happy to spend my whole day here. the Wi-fi is
              good, and the coffee and meals tho. I like it here!! Very
              recommended!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
