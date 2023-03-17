import React from "react";

function Favorite() {
  return (
    <>
      <div className="w-full lg:w-[80%] min-h-screen">
        <div className="w-full h-1/4 relative">
          <div className="w-3/5 h-full bg-transparent absolute -bottom-[60%] right-[20%] rounded-xl flex flex-col">
            <img
              className="h-32 w-32 justify-center mx-auto my-2 rounded-full object-cover object-center"
              src={require("../../assets/img/hezelnut.png")}
              alt=""
            />
            <h1 className="justify-center m-auto font-['Rubik'] font-semibold">
              Hezelnut
            </h1>
          </div>
        </div>
        <div className="border-2 border-[#6A4029] h-3/4 w-full rounded-xl p-2">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-full h-[20%]" />
            <div className="w-full h-[40%] ml-[10%]">
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">Hazelnut Syrup</h1>
              </div>
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">
                  Wanilla Whipped Cream
                </h1>
              </div>
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">Ice / Hot</h1>
              </div>
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">Sliced Banana on Top</h1>
              </div>
            </div>
            <div className="w-full h-[30%] flex flex-col">
              <h1 className="uppercase font-['Rubik'] font-semibold text-3xl text-center">
                idr 25.000
              </h1>
              <button
                type="button"
                className="bg-[#FFBA33] h-10 w-1/2 rounded-xl justify-center mx-auto my-2"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[80%] min-h-screen">
        <div className="w-full h-1/4 relative">
          <div className="w-3/5 h-full bg-transparent absolute -bottom-[60%] right-[20%] rounded-xl flex flex-col">
            <img
              className="h-32 w-32 justify-center mx-auto my-2 rounded-full object-cover object-center"
              src={require("../../assets/img/pinky.png")}
              alt=""
            />
            <h1 className="justify-center m-auto font-['Rubik'] font-semibold">
              Pinky Promise
            </h1>
          </div>
        </div>
        <div className="border-2 border-[#6A4029] h-3/4 w-full rounded-xl p-2">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-full h-[20%]" />
            <div className="w-full h-[40%] ml-[10%]">
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">1 Shot of Coffee</h1>
              </div>
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">
                  Vanilla Whipped Cream
                </h1>
              </div>
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">Chocolate Biscuits</h1>
              </div>
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">Strawberry Syrup</h1>
              </div>
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">
                  Sliced strawberry on Top
                </h1>
              </div>
            </div>
            <div className="w-full h-[30%] flex flex-col">
              <h1 className="uppercase font-['Rubik'] font-semibold text-3xl text-center">
                idr 30.000
              </h1>
              <button
                type="button"
                className="bg-[#FFBA33] h-10 w-1/2 rounded-xl justify-center mx-auto my-2"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[80%] min-h-screen">
        <div className="w-full h-1/4 relative">
          <div className="w-3/5 h-full bg-transparent absolute -bottom-[60%] right-[20%] rounded-xl flex flex-col">
            <img
              className="h-32 w-32 justify-center mx-auto my-2 rounded-full object-cover object-center"
              src={require("../../assets/img/chikenwings.png")}
              alt=""
            />
            <h1 className="justify-center m-auto font-['Rubik'] font-semibold">
              Chicken Wings
            </h1>
          </div>
        </div>
        <div className="border-2 border-[#6A4029] h-3/4 w-full rounded-xl p-2">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-full h-[20%]" />
            <div className="w-full h-[40%] ml-[10%]">
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">Wings</h1>
              </div>
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">Drum Sticks</h1>
              </div>
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">Mayonaise and Lemon</h1>
              </div>
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">Hot Fried</h1>
              </div>
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">Secret Recipe</h1>
              </div>
              <div className="flex items-stretch my-2">
                <img
                  className="h-[9.07px] self-center mx-3"
                  src={require("../../assets/img/cecklist.png")}
                  alt=""
                />
                <h1 className="font-['Rubik'] text-sm">
                  Buy 1 Get 1 only for Dine in
                </h1>
              </div>
            </div>
            <div className="w-full h-[30%] flex flex-col">
              <h1 className="uppercase font-['Rubik'] font-semibold text-3xl text-center">
                idr 40.000
              </h1>
              <button
                type="button"
                className="bg-[#FFBA33] h-10 w-1/2 rounded-xl justify-center mx-auto my-2"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorite;
